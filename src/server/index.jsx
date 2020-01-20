import express from 'express';
import compression from 'compression';
import expressStaticGzip from 'express-static-gzip';
import path from 'path';
// not part of react-helmet
import helmet from 'helmet';
import gnuTP from 'gnu-terry-pratchett';
import routes from '#app/routes';
import {
  articleDataPath,
  articleManifestPath,
  articleSwPath,
  frontPageDataPath,
  frontPageManifestPath,
  frontPageSwPath,
  cpsAssetPageDataPath,
  radioAndTvDataPath,
  mostReadDataRegexPath,
} from '../app/routes/regex';
import nodeLogger from '#lib/logger.node';
import renderDocument from './Document';
import getRouteProps from '#app/routes/getInitialData/utils/getRouteProps';
import logResponseTime from './utilities/logResponseTime';
import injectCspHeader, {
  localInjectHostCspHeader,
} from './utilities/constructCspHeader';

const fs = require('fs');

const morgan = require('morgan');

const logger = nodeLogger(__filename);

const publicDirectory = 'build/public';

const cspInjectFun =
  process.env.APP_ENV === 'local' ? localInjectHostCspHeader : injectCspHeader;

logger.debug(
  `Application outputting logs to directory "${process.env.LOG_DIR}"`,
);

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["write"] }] */
class LoggerStream {
  write(message) {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  }
}

const constructDataFilePath = ({ pageType, service, id, variant = '' }) => {
  const pageTypes = ['frontpage', 'mostRead'];
  const dataPath = pageTypes.includes(pageType)
    ? `${variant || 'index'}.json`
    : `${id}${variant}.json`;

  return path.join(process.cwd(), 'data', service, pageType, dataPath);
};

const server = express();

/*
 * Default headers, compression, logging, status route
 */

const getBuildMetadata = () => {
  const { buildMetadata } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  return buildMetadata;
};

server
  .disable('x-powered-by')
  .use(
    morgan('tiny', {
      skip: (req, res) => res.statusCode === 200,
      stream: new LoggerStream(),
    }),
  )
  .use(compression())
  .use(helmet({ frameguard: { action: 'deny' } }))
  .use(gnuTP())
  .get('/status', (req, res) => {
    res.status(200).send(getBuildMetadata());
  });

/*
 * Prod only logging - response time
 */
if (process.env.APP_ENV !== 'local') {
  server.use(logResponseTime);
}

/*
 * Local env routes - fixture data
 */
const sendDataFile = (res, dataFilePath, next) => {
  res.sendFile(dataFilePath, {}, sendErr => {
    if (sendErr) {
      logger.error(sendErr);
      next(sendErr);
    }
  });
};

if (process.env.APP_ENV === 'local') {
  server
    .use((req, res, next) => {
      if (req.url.substr(-1) === '/' && req.url.length > 1)
        res.redirect(301, req.url.slice(0, -1));
      else next();
    })
    .use(
      expressStaticGzip(publicDirectory, {
        enableBrotli: true,
        orderPreference: ['br'],
        redirect: false,
      }),
    )
    .get(articleDataPath, async ({ params }, res, next) => {
      const { service, id, variant } = params;

      const dataFilePath = constructDataFilePath({
        pageType: 'articles',
        service,
        id,
        variant,
      });

      sendDataFile(res, dataFilePath, next);
    })
    .get(frontPageDataPath, async ({ params }, res, next) => {
      const { service, variant } = params;

      const dataFilePath = constructDataFilePath({
        pageType: 'frontpage',
        service,
        variant,
      });

      sendDataFile(res, dataFilePath, next);
    })
    .get(mostReadDataRegexPath, async ({ params }, res, next) => {
      const { service, variant } = params;
      const dataFilePath = constructDataFilePath({
        pageType: 'mostRead',
        service,
        variant,
      });

      sendDataFile(res, dataFilePath, next);
    })
    .get(radioAndTvDataPath, async ({ params }, res, next) => {
      const { service, serviceId, mediaId } = params;

      const dataFilePath = path.join(
        process.cwd(),
        'data',
        service,
        serviceId,
        mediaId,
      );

      sendDataFile(res, `${dataFilePath}.json`, next);
    })
    .get(cpsAssetPageDataPath, async ({ params }, res, next) => {
      const { service, assetUri: id, variant } = params;

      const dataFilePath = constructDataFilePath({
        pageType: 'cpsAssets',
        service,
        id,
        variant,
      });

      sendDataFile(res, dataFilePath, next);
    })
    .get('/ckns_policy/*', (req, res) => {
      // Route to allow the cookie banner to make the cookie oven request
      // without throwing an error due to not being on a bbc domain.
      res.sendStatus(200);
    });
}

/*
 * Application env routes
 */

server
  .get([articleSwPath, frontPageSwPath], (req, res) => {
    const swPath = `${__dirname}/public/sw.js`;
    res.sendFile(swPath, {}, error => {
      if (error) {
        logger.error(error);
        res.status(500).send('Unable to find service worker.');
      }
    });
  })
  .get(
    [articleManifestPath, frontPageManifestPath],
    async ({ params }, res) => {
      const { service } = params;
      const manifestPath = `${__dirname}/public/${service}/manifest.json`;
      res.sendFile(manifestPath, {}, error => {
        if (error) {
          console.log(error); // eslint-disable-line no-console
          res.status(500).send('Unable to find manifest.');
        }
      });
    },
  )
  .get('/*', cspInjectFun, async ({ url, headers, path: urlPath }, res) => {
    logger.info(`Path: [${urlPath}] URL: [${url}]`);

    try {
      const { service, isAmp, route, variant } = getRouteProps(routes, urlPath);
      const data = await route.getInitialData(url);
      const { status } = data;
      const bbcOrigin = headers['bbc-origin'];

      // Temp log to test upstream change
      logger.info(`Headers: ${JSON.stringify(headers, null, 2)}`);

      data.path = urlPath;

      const result = await renderDocument({
        bbcOrigin,
        data,
        isAmp,
        routes,
        service,
        url,
        variant,
      });

      if (result.redirectUrl) {
        res.redirect(301, result.redirectUrl);
      } else if (result.html) {
        res.status(status).send(result.html);
      } else {
        throw new Error('unknown result');
      }
    } catch ({ message, status }) {
      // Return an internal server error for any uncaught errors
      logger.error(`status: ${status || 500} - ${message}`);
      res.status(500).send(message);
    }
  });

export default server;
