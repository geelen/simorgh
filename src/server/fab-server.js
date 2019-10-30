import routes from '../app/routes';
import {
  articleDataRegexPath,
  articleManifestRegexPath,
  articleSwRegexPath,
  frontpageDataRegexPath,
  frontpageManifestRegexPath,
  frontpageSwRegexPath,
  cpsAssetPageDataRegexPath,
  radioAndTvDataRegexPath,
} from '../app/routes/regex';
import getRouteProps from '../app/routes/getInitialData/utils/getRouteProps';
console.log({routes})

export async function route(settings, path, request) {
  // must return something, by default returns the path unchanged
  console.log({path})
  return path
}
