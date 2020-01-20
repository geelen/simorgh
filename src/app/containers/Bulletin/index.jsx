import React, { useContext } from 'react';
import pathOr from 'ramda/src/pathOr';
import { shape, bool, oneOfType } from 'prop-types';
import Bulletin from '@bbc/psammead-bulletin';
import ImagePlaceholder from '@bbc/psammead-image-placeholder';
import ImageWithPlaceholder from '../ImageWithPlaceholder';
import { createSrcset } from '#lib/utilities/srcSet';
import getOriginCode from '#lib/utilities/imageSrcHelpers/originCode';
import getLocator from '#lib/utilities/imageSrcHelpers/locator';
import { tvBulletinItem, radioBulletinItem } from '#models/propTypes/bulletin';
import { ServiceContext } from '#contexts/ServiceContext';

const BulletinImage = ({ imageValues, lazyLoad }) => {
  if (!imageValues) {
    const landscapeRatio = (9 / 16) * 100;
    return <ImagePlaceholder ratio={landscapeRatio} />;
  }

  const { path, height, width, altText, copyrightHolder } = imageValues;

  const ratio = (height / width) * 100;
  const originCode = getOriginCode(path);
  const locator = getLocator(path);
  const imageResolutions = [70, 95, 144, 183, 240, 320, 480, 624];
  const srcset = createSrcset(originCode, locator, width, imageResolutions);
  const sizes = '(max-width: 1008px) 33vw, 237px';
  const DEFAULT_IMAGE_RES = 660;
  const src = `https://ichef.bbci.co.uk/news/${DEFAULT_IMAGE_RES}${path}`;

  return (
    <ImageWithPlaceholder
      alt={altText}
      ratio={ratio}
      src={src}
      fallback={false}
      {...imageValues}
      lazyLoad={lazyLoad}
      copyright={copyrightHolder}
      srcset={srcset}
      sizes={sizes}
    />
  );
};

BulletinImage.propTypes = {
  lazyLoad: bool,
  imageValues: oneOfType([
    tvBulletinItem.indexImage,
    radioBulletinItem.indexImage,
  ]),
};

BulletinImage.defaultProps = {
  lazyLoad: false,
  imageValues: shape({
    path: '',
    height: '',
    width: '',
    altText: '',
    copyrightHolder: '',
  }),
};

const BulletinContainer = ({ item, lazyLoadImage }) => {
  const { script, service, dir, translations } = useContext(ServiceContext);

  const headline = pathOr(null, ['name'], item);
  const ctaLink = pathOr(null, ['uri'], item);

  if (!headline || !ctaLink) {
    return null;
  }

  const summary = pathOr(null, ['summary'], item);

  const imageValues = pathOr(null, ['indexImage'], item);
  const Image = (
    <BulletinImage lazyLoad={lazyLoadImage} imageValues={imageValues} />
  );

  const contentType = pathOr(null, ['contentType'], item);
  const mediaType = contentType === 'TVBulletin' ? 'video' : 'audio';

  const watchText = pathOr('Watch', ['media', 'watch'], translations);
  const listenText = pathOr('Listen', ['media', 'listen'], translations);
  const ctaText = contentType === 'TVBulletin' ? watchText : listenText;

  const isLive = pathOr(null, ['isLive'], item);
  const offScreenText = isLive ? `${ctaText} Live` : ctaText;

  return (
    <Bulletin
      image={Image}
      mediaType={mediaType}
      isLive={isLive}
      script={script}
      service={service}
      headlineText={headline}
      summaryText={summary}
      ctaLink={ctaLink}
      ctaText={ctaText}
      offScreenText={offScreenText}
      dir={dir}
    />
  );
};

BulletinContainer.propTypes = {
  item: oneOfType([shape(tvBulletinItem), shape(radioBulletinItem)]).isRequired,
  lazyLoadImage: bool,
};

BulletinContainer.defaultProps = {
  lazyLoadImage: true,
};

export default BulletinContainer;
