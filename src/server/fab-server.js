//import renderDocument from './Document';
import getRouteProps from '#app/routes/getInitialData/utils/getRouteProps';

export const runtime = (args, metadata) => {
  // They return an async function that can intervene on any request
  return async ({ request, settings, url }) => {
    const { service, isAmp, route, variant } = getRouteProps(routes, urlPath);
    const data = await route.getInitialData(url);
    const { status } = data;
    const bbcOrigin = headers['bbc-origin'];

    // Temp log to test upstream change
    console.info(`Headers: ${JSON.stringify(headers, null, 2)}`);

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
      //res.redirect(301, result.redirectUrl);
    } else if (result.html) {
      return new Reponse(result.html, {
        status,
      });
      //res.status(status).send(result.html);
    } else {
      throw new Error('unknown result');
    }
  };
};
