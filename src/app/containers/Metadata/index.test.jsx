import React from 'react';
import { mount } from 'enzyme';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import MetadataContainer from './index';
import LinkedData from '../../components/LinkedData';
import Metadata from '../../components/Metadata';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { articleDataNews, articleDataPersian } from '../Article/fixtureData';
import services from '#lib/config/services/index';
import { RequestContextProvider } from '#contexts/RequestContext';
import frontPageData from '#data/igbo/frontpage/index.json';
import liveRadioPageData from '#data/korean/bbc_korean_radio/liveradio.json';

const dotComOrigin = 'https://www.bbc.com';
const dotCoDotUKOrigin = 'https://www.bbc.co.uk';

process.env.SIMORGH_PUBLIC_STATIC_ASSETS_ORIGIN = 'https://foo.com';
process.env.SIMORGH_PUBLIC_STATIC_ASSETS_PATH = '/static';

const getContainer = ({
  /* eslint-disable react/prop-types */
  service,
  bbcOrigin,
  platform,
  data,
  id,
  pageType,
  pathname,
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
        <MetadataContainer {...articleDataNews} {...data} />
      </RequestContextProvider>
    </ServiceContextProvider>
  );
};

const metadataProps = ({
  isAmp,
  alternateLinks,
  ampLink,
  canonicalLink,
  description,
  dir,
  lang,
  title,
  serviceConfig,
  type,
  service,
}) => ({
  isAmp,
  alternateLinks,
  ampLink,
  appleTouchIcon: `https://foo.com/static/${serviceConfig.service}/images/icons/icon-192x192.png`,
  articleAuthor: serviceConfig.articleAuthor || null,
  articleSection: null,
  brandName: serviceConfig.brandName,
  canonicalLink,
  defaultImage: serviceConfig.defaultImage,
  defaultImageAltText: serviceConfig.defaultImageAltText,
  description,
  dir,
  facebookAdmin: 100004154058350,
  facebookAppID: 1609039196070050,
  lang,
  locale: serviceConfig.locale,
  themeColor: serviceConfig.themeColor,
  title,
  twitterCreator: serviceConfig.twitterCreator,
  twitterSite: serviceConfig.twitterSite,
  type,
  service,
  iconSizes: {
    'apple-touch-icon': [
      '72x72',
      '96x96',
      '128x128',
      '144x144',
      '152x152',
      '192x192',
      '384x384',
      '512x512',
    ],
    icon: ['72x72', '96x96', '192x192'],
  },
});

const linkedDataProps = ({
  brandName,
  canonicalLink,
  firstPublished,
  lastUpdated,
  logoUrl,
  seoHeadline,
  type,
  about = undefined,
  pageSpecific = {},
}) => ({
  brandName,
  canonicalLink,
  firstPublished,
  lastUpdated,
  logoUrl,
  noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
  publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
  seoHeadline,
  type,
  about,
  pageSpecific,
});

describe('Metadata Container', () => {
  describe('LinkedData and Metadata components called with correct props', () => {
    it('should be correct for Canonical News & international origin', () => {
      const Wrapper = mount(
        getContainer({
          service: 'news',
          bbcOrigin: dotComOrigin,
          platform: 'canonical',
          data: articleDataNews,
          id: 'c0000000001o',
          pageType: 'article',
          pathname: '/news/articles/c0000000001o',
        }),
      );

      expect(
        Wrapper.containsMatchingElement(
          <MetadataContainer {...articleDataNews} />,
        ),
      ).toEqual(true);
      expect(Wrapper.find(Metadata).props()).toEqual(
        metadataProps({
          isAmp: false,
          alternateLinks: [
            {
              href: 'https://www.bbc.com/news/articles/c0000000001o',
              hrefLang: 'x-default',
            },
            {
              href: 'https://www.bbc.com/news/articles/c0000000001o',
              hrefLang: 'en',
            },
            {
              href: 'https://www.bbc.co.uk/news/articles/c0000000001o',
              hrefLang: 'en-gb',
            },
          ],
          ampLink: 'https://www.bbc.com/news/articles/c0000000001o.amp',
          canonicalLink: 'https://www.bbc.com/news/articles/c0000000001o',
          description: 'Article summary.',
          dir: 'ltr',
          lang: 'en-gb',
          title: 'Article Headline for SEO',
          serviceConfig: services.news.default,
          type: 'article',
          service: 'news',
        }),
      );
      expect(Wrapper.find(LinkedData).props()).toEqual(
        linkedDataProps({
          brandName: 'BBC News',
          canonicalLink: 'https://www.bbc.com/news/articles/c0000000001o',
          createdBy: 'News',
          logoUrl:
            'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png',
          seoHeadline: 'Article Headline for SEO',
          type: 'Article',
          about: [
            {
              '@type': 'Thing',
              name: 'Royal Wedding 2018',
              sameAs: ['http://dbpedia.org/resource/Queen_Victoria'],
            },
            {
              '@type': 'Person',
              name: 'Duchess of Sussex',
            },
          ],
        }),
      );
    });

    shouldMatchSnapshot(
      'should match snapshot for Canonical News & international origin',
      getContainer({
        service: 'news',
        bbcOrigin: dotComOrigin,
        platform: 'canonical',
        data: articleDataNews,
        id: 'c0000000001o',
        pageType: 'article',
        pathname: '/news/articles/c0000000001o',
      }),
    );

    it('should be correct for AMP News & UK origin', () => {
      const Wrapper = mount(
        getContainer({
          service: 'news',
          bbcOrigin: dotCoDotUKOrigin,
          platform: 'amp',
          data: articleDataNews,
          id: 'c0000000001o',
          pageType: 'article',
          pathname: '/news/articles/c0000000001o.amp',
        }),
      );

      expect(
        Wrapper.containsMatchingElement(
          <MetadataContainer {...articleDataNews} />,
        ),
      ).toEqual(true);
      expect(Wrapper.find(Metadata).props()).toEqual(
        metadataProps({
          isAmp: true,
          alternateLinks: [
            {
              href: 'https://www.bbc.com/news/articles/c0000000001o.amp',
              hrefLang: 'x-default',
            },
            {
              href: 'https://www.bbc.com/news/articles/c0000000001o.amp',
              hrefLang: 'en',
            },
            {
              href: 'https://www.bbc.co.uk/news/articles/c0000000001o.amp',
              hrefLang: 'en-gb',
            },
          ],
          ampLink: 'https://www.bbc.co.uk/news/articles/c0000000001o.amp',
          canonicalLink: 'https://www.bbc.com/news/articles/c0000000001o',
          description: 'Article summary.',
          dir: 'ltr',
          lang: 'en-gb',
          title: 'Article Headline for SEO',
          serviceConfig: services.news.default,
          type: 'article',
          service: 'news',
        }),
      );
      expect(Wrapper.find(LinkedData).props()).toEqual(
        linkedDataProps({
          brandName: 'BBC News',
          canonicalLink: 'https://www.bbc.com/news/articles/c0000000001o',
          createdBy: 'News',
          logoUrl:
            'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png',
          seoHeadline: 'Article Headline for SEO',
          type: 'Article',
          about: [
            {
              '@type': 'Thing',
              name: 'Royal Wedding 2018',
              sameAs: ['http://dbpedia.org/resource/Queen_Victoria'],
            },
            {
              '@type': 'Person',
              name: 'Duchess of Sussex',
            },
          ],
        }),
      );
    });

    shouldMatchSnapshot(
      'should match snapshot for AMP News & UK origin',
      getContainer({
        service: 'news',
        bbcOrigin: dotCoDotUKOrigin,
        platform: 'amp',
        data: articleDataNews,
        id: 'c0000000001o',
        pageType: 'article',
        pathname: '/news/articles/c0000000001o.amp',
      }),
    );

    it('should be correct for Persian News & international origin', () => {
      const Wrapper = mount(
        getContainer({
          service: 'persian',
          bbcOrigin: dotComOrigin,
          platform: 'canonical',
          data: articleDataPersian,
          id: 'c4vlle3q337o',
          pageType: 'article',
          pathname: '/persian/articles/c4vlle3q337o',
        }),
      );

      expect(
        Wrapper.containsMatchingElement(
          <MetadataContainer {...articleDataPersian} />,
        ),
      ).toEqual(true);
      expect(Wrapper.find(Metadata).props()).toEqual(
        metadataProps({
          isAmp: false,
          alternateLinks: [],
          ampLink: 'https://www.bbc.com/persian/articles/c4vlle3q337o.amp',
          canonicalLink: 'https://www.bbc.com/persian/articles/c4vlle3q337o',
          description: 'خلاصه مقاله',
          dir: 'rtl',
          lang: 'fa',
          title: 'سرصفحه مقاله',
          serviceConfig: services.persian.default,
          type: 'article',
          service: 'persian',
        }),
      );
      expect(Wrapper.find(LinkedData).props()).toEqual(
        linkedDataProps({
          brandName: 'BBC News فارسی',
          canonicalLink: 'https://www.bbc.com/persian/articles/c4vlle3q337o',
          createdBy: 'Persian',
          logoUrl: 'https://news.files.bbci.co.uk/ws/img/logos/og/persian.png',
          seoHeadline: 'سرصفحه مقاله',
          type: 'Article',
        }),
      );
    });

    shouldMatchSnapshot(
      'should match snapshot for Persian News & international origin',
      getContainer({
        service: 'persian',
        bbcOrigin: dotComOrigin,
        platform: 'canonical',
        data: articleDataPersian,
        id: 'c4vlle3q337o',
        pageType: 'article',
        pathname: '/persian/articles/c4vlle3q337o',
      }),
    );

    it('should be correct for Persian News & UK origin', () => {
      const Wrapper = mount(
        getContainer({
          service: 'persian',
          bbcOrigin: dotCoDotUKOrigin,
          platform: 'amp',
          data: articleDataPersian,
          id: 'c4vlle3q337o',
          pageType: 'article',
          pathname: '/persian/articles/c4vlle3q337o.amp',
        }),
      );

      expect(
        Wrapper.containsMatchingElement(
          <MetadataContainer {...articleDataPersian} />,
        ),
      ).toEqual(true);
      expect(Wrapper.find(Metadata).props()).toEqual(
        metadataProps({
          isAmp: true,
          alternateLinks: [],
          ampLink: 'https://www.bbc.co.uk/persian/articles/c4vlle3q337o.amp',
          canonicalLink: 'https://www.bbc.com/persian/articles/c4vlle3q337o',
          description: 'خلاصه مقاله',
          dir: 'rtl',
          lang: 'fa',
          title: 'سرصفحه مقاله',
          serviceConfig: services.persian.default,
          type: 'article',
          service: 'persian',
        }),
      );
      expect(Wrapper.find(LinkedData).props()).toEqual(
        linkedDataProps({
          brandName: 'BBC News فارسی',
          canonicalLink: 'https://www.bbc.com/persian/articles/c4vlle3q337o',
          createdBy: 'Persian',
          logoUrl: 'https://news.files.bbci.co.uk/ws/img/logos/og/persian.png',
          seoHeadline: 'سرصفحه مقاله',
          type: 'Article',
        }),
      );
    });

    shouldMatchSnapshot(
      'should match snapshot for Persian News & UK origin',
      getContainer({
        service: 'persian',
        bbcOrigin: dotCoDotUKOrigin,
        platform: 'amp',
        data: articleDataPersian,
        id: 'c4vlle3q337o',
        pageType: 'article',
        pathname: '/persian/articles/c4vlle3q337o.amp',
      }),
    );

    it('should be correct for WS Frontpages', () => {
      const Wrapper = mount(
        getContainer({
          service: 'igbo',
          bbcOrigin: dotComOrigin,
          platform: 'canonical',
          data: frontPageData,
          id: null,
          pageType: 'frontPage',
          pathname: '/igbo',
        }),
      );

      expect(
        Wrapper.containsMatchingElement(
          <MetadataContainer {...frontPageData} />,
        ),
      ).toEqual(true);
      expect(Wrapper.find(Metadata).props()).toEqual(
        metadataProps({
          isAmp: false,
          alternateLinks: [
            {
              href: 'https://www.bbc.com/igbo',
              hrefLang: 'ig',
            },
          ],
          ampLink: 'https://www.bbc.com/igbo.amp',
          canonicalLink: 'https://www.bbc.com/igbo',
          description:
            'BBC News Igbo na-agbasa akụkọ sị Naịjirịa, Afịrịka na mba ụwa niile... Ihe na-eme ugbua gbasara akụkọ, egwuregwu, ihe nkiri na ihe na-ewu ewu... BBC Nkeji.',
          dir: 'ltr',
          lang: 'ig',
          title: 'Ogbako',
          serviceConfig: services.igbo.default,
          type: 'website',
          service: 'igbo',
        }),
      );
      expect(Wrapper.find(LinkedData).props()).toEqual(
        linkedDataProps({
          brandName: 'BBC News Ìgbò',
          canonicalLink: 'https://www.bbc.com/igbo',
          createdBy: 'Igbo',
          logoUrl: 'https://news.files.bbci.co.uk/ws/img/logos/og/igbo.png',
          seoHeadline: 'Ogbako',
          type: 'WebPage',
        }),
      );
    });

    shouldMatchSnapshot(
      'should match snapshot for WS Frontpages',
      getContainer({
        service: 'igbo',
        bbcOrigin: dotComOrigin,
        platform: 'canonical',
        data: frontPageData,
        id: null,
        pageType: 'frontPage',
        pathname: '/igbo',
      }),
    );
  });

  it('should be correct for WS Media liveradio', () => {
    const Wrapper = mount(
      getContainer({
        service: 'korean',
        bbcOrigin: dotComOrigin,
        platform: 'canonical',
        data: liveRadioPageData,
        id: null,
        pageType: 'media',
        pathname: '/korean/bbc_korean_radio/liveradio',
      }),
    );

    expect(
      Wrapper.containsMatchingElement(
        <MetadataContainer {...liveRadioPageData} />,
      ),
    ).toEqual(true);
    expect(Wrapper.find(Metadata).props()).toEqual(
      metadataProps({
        isAmp: false,
        alternateLinks: [],
        ampLink: 'https://www.bbc.com/korean/bbc_korean_radio/liveradio.amp',
        canonicalLink: 'https://www.bbc.com/korean/bbc_korean_radio/liveradio',
        description: '세계와 한반도 뉴스를 공정하고 객관적으로 전달해 드립니다',
        dir: 'ltr',
        lang: 'ko',
        title: 'BBC News 코리아 라디오',
        serviceConfig: services.korean.default,
        type: 'website',
        service: 'korean',
      }),
    );
    expect(Wrapper.find(LinkedData).props()).toEqual(
      linkedDataProps({
        brandName: 'BBC News 코리아',
        canonicalLink: 'https://www.bbc.com/korean/bbc_korean_radio/liveradio',
        createdBy: 'Korean',
        logoUrl: 'https://news.files.bbci.co.uk/ws/img/logos/og/korean.png',
        seoHeadline: 'BBC News 코리아 라디오',
        type: 'RadioChannel',
      }),
    );
  });

  shouldMatchSnapshot(
    'should match snapshot for WS Media liveradio',
    getContainer({
      service: 'korean',
      bbcOrigin: dotComOrigin,
      platform: 'canonical',
      data: liveRadioPageData,
      id: null,
      pageType: 'media',
      pathname: '/korean/bbc_korean_radio/liveradio',
    }),
  );
});
