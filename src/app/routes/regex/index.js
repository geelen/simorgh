import services from '../../lib/config/services/loadableConfig';
import servicesWithRadioOrTv from '../config';
import buildMediaRoutes, { buildMediaDataRoutes } from '../buildMediaRoutes';

const serviceRegex = Object.keys(services).join('|');
const idRegex = 'c[a-zA-Z0-9]{10}o';
const ampRegex = '.amp';
const assetUriRegex = '[a-z-_]{0,}[0-9]{8,}';

const variantRegex = '/simp|/trad|/cyr|/lat';

export const articleRegexPath = `/:service(${serviceRegex})/articles/:id(${idRegex}):variant(${variantRegex})?:amp(${ampRegex})?`;

export const articleDataRegexPath = `${articleRegexPath}.json`;

export const articleSwRegexPath = `/:service(${serviceRegex})/articles/sw.js`;

export const articleManifestRegexPath = `/:service(${serviceRegex})/articles/manifest.json`;

export const frontpageRegexPath = `/:service(${serviceRegex}):variant(${variantRegex})?:amp(${ampRegex})?`;

export const frontpageDataRegexPath = `${frontpageRegexPath}.json`;

export const frontpageManifestRegexPath = `/:service(${serviceRegex})/manifest.json`;

export const frontpageSwRegexPath = `/:service(${serviceRegex})/sw.js`;

export const mediaRadioAndTvRegexPathsArray = buildMediaRoutes(
  servicesWithRadioOrTv,
);

export const mediaDataRegexPath = buildMediaDataRoutes(servicesWithRadioOrTv);

export const cpsAssetPageRegexPath = `/:service(${serviceRegex})/:assetUri(${assetUriRegex}):amp(${ampRegex})?`;
export const cpsAssetPageDataRegexPath = `${cpsAssetPageRegexPath}.json`;
