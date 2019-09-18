import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { latinDiacritics } from '@bbc/gel-foundations/scripts';
import { portuguese as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/America/Sao_Paulo';

const service = {
  default: {
    lang: `pt-BR`,
    articleAuthor: `https://www.facebook.com/bbcbrasil`,
    articleTimestampPrefix: 'Updated',
    atiAnalyticsAppName: 'news-portuguese',
    atiAnalyticsProducerId: '33',
    brandName: 'BBC News Brasil',
    product: 'BBC News Brasil',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/brasil.png',
    defaultImageAltText: 'BBC News Brasil',
    dir: `ltr`,
    externalLinkText: ', external',
    imageCaptionOffscreenText: 'Image caption, ',
    videoCaptionOffscreenText: 'Video caption, ',
    audioCaptionOffscreenText: 'Audio caption',
    defaultCaptionOffscreenText: 'Caption, ',
    imageCopyrightOffscreenText: 'Image source, ',
    locale: `pt-BR`,
    datetimeLocale: `pt-br`,
    service: 'portuguese',
    serviceName: 'News Brasil',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcbrasil',
    twitterSite: '@bbcbrasil',
    noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
    script: latinDiacritics,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Notícias, vídeos, análise e contexto em português',
    translations: {
      seeAll: 'See all',
      home: 'Notícias',
      currentPage: 'Current page',
      skipLinkText: 'Ir para o conteúdo',
      relatedContent: 'Related content',
      error: {
        404: {
          statusCode: '404',
          title: '404- Página não encontrada',
          message:
            'Isto pode ter acontecido por que você digitou o endereço errado. Por favor cheque o endereço.',
          solutions: [
            'Double checking the url',
            'Hitting the refresh button in your browser',
            'Searching for this page using the BBC search bar',
          ],
          callToActionFirst: 'Alternatively, please visit the ',
          callToActionLinkText: 'Home Page da BBC Brasil',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/portuguese',
        },
        500: {
          statusCode: '500',
          title: '505 - Erro',
          message: 'Houve um erro. Por favor recarregue a página.',
          solutions: [
            'Hitting the refresh button in your browser',
            'Coming back again later',
          ],
          callToActionFirst: 'Alternatively, please visit the ',
          callToActionLinkText: 'Home Page da BBC Brasil',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/portuguese',
        },
      },
      consentBanner: {
        privacy: {
          title: "We've updated our Privacy and Cookies Policy",
          description: {
            uk: {
              first:
                "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'OK',
          reject: "Find out what's changed",
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Let us know you agree to cookies',
          description: {
            uk: {
              first: 'We use ',
              linkText: 'cookies',
              last:
                ' to give you the best online experience. Please let us know if you agree to all of these cookies.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'We and our partners use technologies, such as ',
              linkText: 'cookies',
              last:
                ', and collect browsing data to give you the best online experience and to personalise the content and advertising shown to you. Please let us know if you agree.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Yes, I agree',
          reject: 'No, take me to settings',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        audio: 'Audio',
        photogallery: 'Galeria de Fotos',
        video: 'Vídeo',
      },
    },
    brandSVG,
    mostRead: {
      header: 'Most read',
      lastUpdated: 'Last updated: ',
    },
    footer: {
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Read about our approach to external linking.',
      },
      links: [
        {
          href: 'https://www.bbc.com/news/help-41670342',
          text: 'Why you can trust the BBC',
        },
        {
          href: 'https://www.bbc.com/terms',
          text: 'Terms of Use',
        },
        {
          href: 'https://www.bbc.com/privacy/',
          text: 'Privacy Policy',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Cookies',
        },
        {
          href: 'https://www.bbc.com/contact/',
          text: 'Contact the BBC',
        },
      ],
      copyrightText:
        'BBC. A BBC não se responsabiliza pelo conteúdo de sites externos de internet',
    },
    fonts: [],
    timezone: 'America/Sao_Paulo',
    navigation: [
      {
        title: 'Notícias',
        url: '/portuguese',
      },
      {
        title: 'Brasil',
        url: '/portuguese/brasil',
      },
      {
        title: 'Internacional',
        url: '/portuguese/internacional',
      },
      {
        title: 'Economia',
        url: '/portuguese/topics/ca170ae3-99c1-48db-9b67-2866f85e7342',
      },
      {
        title: 'Saúde',
        url: '/portuguese/topics/c4794229-7f87-43ce-ac0a-6cfcd6d3cef2',
      },
      {
        title: 'Ciência',
        url: '/portuguese/topics/0f469e6a-d4a6-46f2-b727-2bd039cb6b53',
      },
      {
        title: 'Tecnologia',
        url: '/portuguese/topics/31684f19-84d6-41f6-b033-7ae08098572a',
      },
      {
        title: 'Aprenda Inglês',
        url: '/portuguese/aprenda_ingles',
      },
      {
        title: '#SalaSocial',
        url: '/portuguese/salasocial',
      },
      {
        title: 'Galeria de Fotos',
        url: '/portuguese/media/photogalleries',
      },
      {
        title: 'Vídeos',
        url: '/portuguese/media/video',
      },
    ],
  },
};

export default service;
