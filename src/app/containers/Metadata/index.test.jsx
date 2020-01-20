import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import MetadataContainer from './index';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import {
  articleDataNews,
  articleDataPersian,
} from '../../pages/Article/fixtureData';
import services from '#server/utilities/serviceConfigs';
import { RequestContextProvider } from '#contexts/RequestContext';
import frontPageData from '#data/igbo/frontpage/index.json';
import liveRadioPageData from '#data/korean/bbc_korean_radio/liveradio.json';

const dotComOrigin = 'https://www.bbc.com';
const dotCoDotUKOrigin = 'https://www.bbc.co.uk';

const getArticleMetadataProps = data => ({
  title: data.promo.headlines.seoHeadline,
  lang: data.metadata.passport.language,
  description: data.promo.summary,
  openGraphType: 'article',
});

const newsArticleMetadataProps = getArticleMetadataProps(articleDataNews);
const persianArticleMetadataProps = getArticleMetadataProps(articleDataPersian);

const MetadataWithContext = ({
  /* eslint-disable react/prop-types */
  service,
  bbcOrigin,
  platform,
  id,
  pageType,
  pathname,
  title,
  lang,
  description,
  openGraphType,
  /* eslint-enable react/prop-types */
}) => {
  const serviceConfig = services[service].default;

  return (
    <ServiceContextProvider {...serviceConfig}>
      <RequestContextProvider
        bbcOrigin={bbcOrigin}
        id={id}
        isAmp={platform === 'amp'}
        pageType={pageType}
        pathname={pathname}
        service={service}
        statusCode={200}
      >
        <MetadataContainer
          title={title}
          lang={lang}
          description={description}
          openGraphType={openGraphType}
        />
      </RequestContextProvider>
    </ServiceContextProvider>
  );
};

const CanonicalNewsInternationalOrigin = () => (
  <MetadataWithContext
    service="news"
    bbcOrigin={dotComOrigin}
    platform="canonical"
    id="c0000000001o"
    pageType="article"
    pathname="/news/articles/c0000000001o"
    {...newsArticleMetadataProps}
  />
);

const renderMetadataToDocument = async () => {
  render(<CanonicalNewsInternationalOrigin />);

  await waitForDomChange({
    container: document.querySelector('head'),
  });
};

it('should render the dir and lang attribute', async () => {
  await renderMetadataToDocument();
  const htmlEl = document.querySelector('html');

  expect(htmlEl.getAttribute('dir')).toEqual('ltr');
  expect(htmlEl.getAttribute('lang')).toEqual('en-gb');
});

it('should render the document title', async () => {
  await renderMetadataToDocument();
  const actual = document.querySelector('head > title').innerHTML;
  const expected = 'Article Headline for SEO - BBC News';

  expect(actual).toEqual(expected);
});

it('should render the canonical link', async () => {
  await renderMetadataToDocument();

  const actual = document
    .querySelector('head > link[rel="canonical"]')
    .getAttribute('href');
  const expected = 'https://www.bbc.com/news/articles/c0000000001o';

  expect(actual).toEqual(expected);
});

it('should render the alternate links', async () => {
  await renderMetadataToDocument();
  const actual = Array.from(
    document.querySelectorAll('head > link[rel="alternate"]'),
  ).map(tag => ({
    href: tag.getAttribute('href'),
    hreflang: tag.getAttribute('hreflang'),
  }));
  const expected = [
    {
      href: 'https://www.bbc.com/news/articles/c0000000001o',
      hreflang: 'x-default',
    },
    {
      href: 'https://www.bbc.com/news/articles/c0000000001o',
      hreflang: 'en',
    },
    {
      href: 'https://www.bbc.co.uk/news/articles/c0000000001o',
      hreflang: 'en-gb',
    },
  ];

  expect(actual).toEqual(expected);
});

it('should render the apple touch icons', async () => {
  await renderMetadataToDocument();
  const actual = Array.from(
    document.querySelectorAll('head > link[rel="apple-touch-icon"]'),
  ).map(tag => ({
    href: tag.getAttribute('href'),
    sizes: tag.getAttribute('sizes'),
  }));
  const expected = [
    {
      href: 'http://localhost:7080/news/images/icons/icon-192x192.png',
      sizes: null,
    },
    {
      href:
        'https://news.files.bbci.co.uk/include/articles/public/news/images/icons/icon-72x72.png',
      sizes: '72x72',
    },
    {
      href:
        'https://news.files.bbci.co.uk/include/articles/public/news/images/icons/icon-96x96.png',
      sizes: '96x96',
    },
    {
      href:
        'https://news.files.bbci.co.uk/include/articles/public/news/images/icons/icon-128x128.png',
      sizes: '128x128',
    },
    {
      href:
        'https://news.files.bbci.co.uk/include/articles/public/news/images/icons/icon-144x144.png',
      sizes: '144x144',
    },
    {
      href:
        'https://news.files.bbci.co.uk/include/articles/public/news/images/icons/icon-152x152.png',
      sizes: '152x152',
    },
    {
      href:
        'https://news.files.bbci.co.uk/include/articles/public/news/images/icons/icon-192x192.png',
      sizes: '192x192',
    },
    {
      href:
        'https://news.files.bbci.co.uk/include/articles/public/news/images/icons/icon-384x384.png',
      sizes: '384x384',
    },
    {
      href:
        'https://news.files.bbci.co.uk/include/articles/public/news/images/icons/icon-512x512.png',
      sizes: '512x512',
    },
  ];

  expect(actual).toEqual(expected);
});

it('should render the icons', async () => {
  await renderMetadataToDocument();
  const actual = Array.from(
    document.querySelectorAll('head > link[rel="icon"]'),
  ).map(tag => ({
    href: tag.getAttribute('href'),
    type: tag.getAttribute('type'),
    sizes: tag.getAttribute('sizes'),
  }));
  const expected = [
    {
      href:
        'https://news.files.bbci.co.uk/include/articles/public/news/images/icons/icon-72x72.png',
      sizes: '72x72',
      type: 'image/png',
    },
    {
      href:
        'https://news.files.bbci.co.uk/include/articles/public/news/images/icons/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png',
    },
    {
      href:
        'https://news.files.bbci.co.uk/include/articles/public/news/images/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
  ];

  expect(actual).toEqual(expected);
});

it('should render the favicon', async () => {
  await renderMetadataToDocument();
  const favicon = document.querySelector('head > link[rel="shortcut icon"]');

  expect(favicon.getAttribute('href')).toEqual('/favicon.ico');
  expect(favicon.getAttribute('rel')).toEqual('shortcut icon');
  expect(favicon.getAttribute('type')).toEqual('image/x-icon');
});

it('should render the IE X-UA-Compatible meta tag', async () => {
  await renderMetadataToDocument();

  const actual = document
    .querySelector('head > meta[http-equiv="X-UA-Compatible"]')
    .getAttribute('content');
  const expected = 'IE=edge';

  expect(actual).toEqual(expected);
});

it('should render the char set metadata', async () => {
  await renderMetadataToDocument();

  expect(document.querySelector('head > meta[charset="utf-8"]')).toBeTruthy();
});

it('should render the robots meta tag', async () => {
  await renderMetadataToDocument();

  const actual = document
    .querySelector('head > meta[name="robots"]')
    .getAttribute('content');
  const expected = 'noodp,noydir';

  expect(actual).toEqual(expected);
});

it('should render the theme-colour meta tag', async () => {
  await renderMetadataToDocument();

  const actual = document
    .querySelector('head > meta[name="theme-color"]')
    .getAttribute('content');
  const expected = '#B80000';

  expect(actual).toEqual(expected);
});

it('should render the apple-mobile-web-app-title', async () => {
  await renderMetadataToDocument();

  const actual = document
    .querySelector('head > meta[name="apple-mobile-web-app-title"]')
    .getAttribute('content');
  const expected = 'BBC News';

  expect(actual).toEqual(expected);
});

it('should render the application name meta tag', async () => {
  await renderMetadataToDocument();

  const actual = document
    .querySelector('head > meta[name="application-name"]')
    .getAttribute('content');
  const expected = 'BBC News';

  expect(actual).toEqual(expected);
});

it('should render the description meta tag', async () => {
  await renderMetadataToDocument();

  const actual = document
    .querySelector('head > meta[name="description"]')
    .getAttribute('content');
  const expected = 'Article summary.';

  expect(actual).toEqual(expected);
});

it('should render the facebook metatags', async () => {
  await renderMetadataToDocument();

  const fbAdminId = document
    .querySelector('head > meta[name="fb:admins"]')
    .getAttribute('content');
  const fbAppId = document
    .querySelector('head > meta[name="fb:app_id"]')
    .getAttribute('content');

  expect(fbAdminId).toEqual('100004154058350');
  expect(fbAppId).toEqual('1609039196070050');
});

it('should render the mobile-web-app-capable meta tag', async () => {
  await renderMetadataToDocument();

  const actual = document
    .querySelector('head > meta[name="mobile-web-app-capable"]')
    .getAttribute('content');
  const expected = 'yes';

  expect(actual).toEqual(expected);
});

it('should render the msapplication meta tags', async () => {
  await renderMetadataToDocument();

  const tileColour = document
    .querySelector('head > meta[name=msapplication-TileColor]')
    .getAttribute('content');
  const tileImage = document
    .querySelector('head > meta[name=msapplication-TileImage]')
    .getAttribute('content');

  expect(tileColour).toEqual('#B80000');
  expect(tileImage).toEqual(
    'https://news.files.bbci.co.uk/include/articles/public/news/images/icons/icon-144x144.png',
  );
});

it('should render the OG metatags', async () => {
  await renderMetadataToDocument();

  const actual = Array.from(
    document.querySelectorAll('head > meta[name^="og:"]'),
  ).map(tag => ({
    name: tag.getAttribute('name'),
    content: tag.getAttribute('content'),
  }));
  const expected = [
    { content: 'Article summary.', name: 'og:description' },
    {
      content:
        'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png',
      name: 'og:image',
    },
    { content: 'BBC News', name: 'og:image:alt' },
    { content: 'en_GB', name: 'og:locale' },
    { content: 'BBC News', name: 'og:site_name' },
    { content: 'Article Headline for SEO - BBC News', name: 'og:title' },
    { content: 'article', name: 'og:type' },
    {
      content: 'https://www.bbc.com/news/articles/c0000000001o',
      name: 'og:url',
    },
  ];

  expect(actual).toEqual(expected);
});

it('should render the twitter metatags', async () => {
  await renderMetadataToDocument();

  const actual = Array.from(
    document.querySelectorAll('head > meta[name^="twitter"]'),
  ).map(tag => ({
    name: tag.getAttribute('name'),
    content: tag.getAttribute('content'),
  }));
  const expected = [
    { content: 'summary_large_image', name: 'twitter:card' },
    { content: '@BBCNews', name: 'twitter:creator' },
    { content: 'Article summary.', name: 'twitter:description' },
    { content: 'BBC News', name: 'twitter:image:alt' },
    {
      content:
        'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png',
      name: 'twitter:image:src',
    },
    { content: '@BBCNews', name: 'twitter:site' },
    { content: 'Article Headline for SEO - BBC News', name: 'twitter:title' },
  ];

  expect(actual).toEqual(expected);
});

shouldMatchSnapshot(
  'should match for Canonical News & international origin',
  <CanonicalNewsInternationalOrigin />,
);

shouldMatchSnapshot(
  'should match for AMP News & UK origin',
  <MetadataWithContext
    service="news"
    bbcOrigin={dotCoDotUKOrigin}
    platform="amp"
    id="c0000000001o"
    pageType="article"
    pathname="/news/articles/c0000000001o.amp"
    {...newsArticleMetadataProps}
  />,
);

shouldMatchSnapshot(
  'should match for Persian News & international origin',
  <MetadataWithContext
    service="persian"
    bbcOrigin={dotComOrigin}
    platform="canonical"
    id="c4vlle3q337o"
    pageType="article"
    pathname="/persian/articles/c4vlle3q337o"
    {...persianArticleMetadataProps}
  />,
);

shouldMatchSnapshot(
  'should match for Persian News & UK origin',
  <MetadataWithContext
    service="persian"
    bbcOrigin={dotCoDotUKOrigin}
    platform="amp"
    id="c4vlle3q337o"
    pageType="article"
    pathname="/persian/articles/c4vlle3q337o.amp"
    {...persianArticleMetadataProps}
  />,
);

shouldMatchSnapshot(
  'should match for WS Frontpages',
  <MetadataWithContext
    service="igbo"
    bbcOrigin={dotComOrigin}
    platform="canonical"
    id={null}
    pageType="frontPage"
    pathname="/igbo"
    title="Ogbako"
    lang={frontPageData.metadata.language}
    description={frontPageData.metadata.summary}
    openGraphType="website"
  />,
);

shouldMatchSnapshot(
  'should match for WS Media liveradio',
  <MetadataWithContext
    service="korean"
    bbcOrigin={dotComOrigin}
    platform="canonical"
    id={null}
    pageType="media"
    pathname="/korean/bbc_korean_radio/liveradio"
    title={liveRadioPageData.promo.name}
    lang={liveRadioPageData.metadata.language}
    description={liveRadioPageData.promo.summary}
    openGraphType="website"
  />,
);
