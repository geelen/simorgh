import csp from 'helmet-csp';
import getRouteProps from '#app/routes/getInitialData/utils/getRouteProps';
import routes from '#app/routes';
import getOriginContext from '#contexts/RequestContext/getOriginContext';

export const generateCspContext = (isAmp, isUK, isLive) => ({
  isAmp,
  isUK,
  isLive,
});

export const generateScriptSrc = context => {
  if (context.isAmp) {
    return [
      'https://cdn.ampproject.org',
      'https://*.chartbeat.com',
      'https://*.go-mpulse.net',
      "'unsafe-inline'",
    ];
  }

  const scriptSrc = [
    'https://news.files.bbci.co.uk',
    'https://*.chartbeat.com',
    'https://*.go-mpulse.net',
    'https://mybbc-analytics.files.bbci.co.uk',
    'https://emp.bbci.co.uk',
    'https://static.bbci.co.uk',
    "'self'",
    "'unsafe-inline'",
  ];

  if (!context.isLive) {
    scriptSrc.push('https://news.test.files.bbci.co.uk');
  }

  return scriptSrc;
};

export const generateImgSrc = context => {
  let imgSrc = [
    'https://ichef.bbci.co.uk',
    'https://ping.chartbeat.net',
    'https://a1.api.bbc.co.uk/hit.xiti',
    'https://news.files.bbci.co.uk',
    'https://*.akstat.io',
    'https://r.bbci.co.uk',
  ];

  if (!context.isLive) {
    const testSrc = [
      'https://ichef.test.bbci.co.uk',
      'https://news.test.files.bbci.co.uk',
      'https://logws1363.ati-host.net',
    ];
    imgSrc = imgSrc.concat(testSrc);
  }
  // Duplicated to maintain proper order
  imgSrc.push("data: 'self'");
  return imgSrc;
};

const cookieOvenTld = context => {
  if (!context.isUK) {
    return '.com';
  }
  return '.co.uk';
};

const generateCookieOvenUrls = context => {
  const cookieUrl = [`https://cookie-oven.api.bbc${cookieOvenTld(context)}`];
  if (!context.isLive) {
    cookieUrl.push(`https://cookie-oven.test.api.bbc${cookieOvenTld(context)}`);
  }

  return cookieUrl;
};

export const generateConnectSrc = context => {
  const connectSrc = [
    'https://*.akstat.io',
    'https://*.akamaihd.net',
    'https://c.go-mpulse.net',
  ];

  if (!context.isLive) {
    connectSrc.push('https://logws1363.ati-host.net');
  } else {
    connectSrc.push('https://a1.api.bbc.co.uk/hit.xiti');
  }

  if (context.isAmp) {
    return connectSrc;
  }

  connectSrc.push("'self'");

  return connectSrc.concat(generateCookieOvenUrls(context));
};

const constructCspHeader = context => ({
  directives: {
    'default-src': ["'self'"],
    'font-src': [
      'https://gel.files.bbci.co.uk',
      'https://ws-downloads.files.bbci.co.uk',
    ],
    'style-src': ["'unsafe-inline'"],
    'img-src': generateImgSrc(context),
    'script-src': generateScriptSrc(context, context),
    'connect-src': generateConnectSrc(context, context, context),
    'frame-src': [
      "'self'",
      'https://emp.bbc.com',
      'https://emp.bbc.co.uk',
      'https://chartbeat.com',
      'https://*.chartbeat.com',
    ],
  },
});

export const localInjectHostCspHeader = (_req, _res, next) => {
  next();
};

const injectCspHeader = (req, res, next) => {
  const { isAmp } = getRouteProps(routes, req.url);
  const originHeader = req.headers['bbc-origin'];
  const { origin, isUK } = getOriginContext(originHeader);

  const isLive = origin === 'https://bbc.co.uk' || origin === 'https://bbc.com';

  const context = generateCspContext(isAmp, isUK, isLive);

  const middleware = csp(constructCspHeader(context));
  middleware(req, res, next);
};

export default injectCspHeader;
