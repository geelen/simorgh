import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { latinDiacritics } from '@bbc/gel-foundations/scripts';
import {
  F_REITH_SANS_BOLD,
  F_REITH_SANS_BOLD_ITALIC,
  F_REITH_SANS_ITALIC,
  F_REITH_SANS_REGULAR,
  F_REITH_SERIF_MEDIUM,
  F_REITH_SERIF_MEDIUM_ITALIC,
} from '@bbc/psammead-styles/fonts';
import { turkce as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Istanbul';
import withContext from '../../../contexts/utils/withContext';
import 'moment/locale/tr';

export const service = {
  default: {
    lang: `tr`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'Güncelleme',
    atiAnalyticsAppName: 'news-turkce',
    atiAnalyticsProducerId: '92',
    brandName: 'BBC News Türkçe',
    product: 'BBC News',
    serviceLocalizedName: 'Türkçe',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/turkce.png',
    defaultImageAltText: 'BBC News Türkçe',
    dir: `ltr`,
    externalLinkText: ', Dış Link',
    imageCaptionOffscreenText: 'Fotoğraf altı yazısı, ',
    videoCaptionOffscreenText: 'Video altyazısı, ',
    audioCaptionOffscreenText: 'Ses dosyası altyazısı, ',
    defaultCaptionOffscreenText: 'Altyazı, ',
    imageCopyrightOffscreenText: 'Kaynak, ',
    locale: `tr-TR`,
    datetimeLocale: `tr-tr`,
    service: 'turkce',
    serviceName: 'News Türkçe',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcturkce',
    twitterSite: '@bbcturkce',
    noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
    isTrustProjectParticipant: true,
    script: latinDiacritics,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Haberler',
    hasRadioSchedule: false,
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
    },
    translations: {
      seeAll: 'Hepsini görüntüle',
      home: 'Ana sayfa',
      currentPage: 'Bulunduğunuz sayfa',
      skipLinkText: 'İçeriğe götür',
      relatedContent: 'İlgili haberler',
      mediaAssetPage: {
        mediaPlayer: 'Media player',
        audioPlayer: 'Audio player',
        videoPlayer: 'Video player',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'Sayfa bulunamadı',
          message:
            'Üzgünüz aradığınız sayfayı görüntüleyemiyoruz. Lütfen şunları deneyin:',
          solutions: [
            'URL uzantısına çift tıklayın',
            'Tarayıcınızın yenile butonuna basın',
            'BBC arama çubuğunu kullanarak bu sayfayı arayın',
          ],
          callToActionFirst: 'Alternatif olarak ana sayfaya dönün ',
          callToActionLinkText: 'BBC News Türkçe',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/turkce',
        },
        500: {
          statusCode: '500',
          title: 'İç sunucu hatası',
          message:
            'Üzgünüz aradığınız sayfayı görüntüleyemiyoruz. Lütfen şunları deneyin:',
          solutions: [
            'Tarayıcınızın yenile butonuna basın',
            'Daha sonra tekrar deneyin',
          ],
          callToActionFirst: 'Alternatif olarak ana sayfaya dönün ',
          callToActionLinkText: 'BBC News Türkçe',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/turkce',
        },
      },
      consentBanner: {
        privacy: {
          title: 'Gizlilik ve çerez politikamızı güncelledik',
          description: {
            uk: {
              first:
                'Gizlilik ve çerez politikalarımız konusunda bazı önemli değişiklikler yaptık. Bu değişikliklerin ne olduğunu ve sizin için ne anlama geldiğini bilmenizi istiyoruz.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'Gizlilik ve çerez politikalarımız konusunda bazı önemli değişiklikler yaptık. Bu değişikliklerin ne olduğunu ve sizin için ne anlama geldiğini bilmenizi istiyoruz.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'Tamam',
          reject: 'Neler değişti?',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Çerez politikasını onayladığınızı bize iletin',
          description: {
            uk: {
              first: 'Size en iyi çevrimiçi deneyimi sunabilmek için ',
              linkText: 'çerezler',
              last:
                ' ullanıyoruz. Çerezleri kabul ediyorsanız lütfen bizi bilgilendirin.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'Biz ve ortaklarımız ',
              linkText: 'çerezleri gibi',
              last:
                ' teknolojiler kullanıyoruz ve size en iyi çevrimiçi hizmeti sunabilmek adına internet tarama verilerini topluyoruz. Bu yolla içerik ve reklamları kişiselleştiriyoruz. Eğer kabul ediyorsanız lütfen bizi bilgilendirin.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Evet, kabul ediyorum',
          reject: 'Hayır, beni ayarlara götür',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        audio: 'Ses dosyası',
        photogallery: 'Fotoğraf galerisi',
        video: 'Video',
        listen: 'Listen',
        watch: 'İzle',
        liveLabel: 'CANLI',
        previousRadioShow: 'Previous radio show',
        nextRadioShow: 'Next radio show',
        duration: 'Duration',
      },
    },
    brandSVG,
    mostRead: {
      header: 'En çok okunanlar',
      lastUpdated: 'Son güncelleme: ',
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/news/help-41670342',
        text: "Neden BBC'ye güvenebilirsiniz",
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Link verilen internet sitelerine yaklaşımımız.',
      },
      links: [
        {
          href: 'https://www.bbc.com/turkce/kurumsal-36765772',
          text: 'Kullanım koşulları',
        },
        {
          href: 'https://www.bbc.com/turkce/kurumsal-36765774',
          text: 'Gizlilik politikası',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Çerezler',
        },
        {
          href: 'https://www.bbc.com/turkce/kurumsal-36767474',
          text: "BBC'yle temas kurun",
        },
      ],
      copyrightText:
        'BBC. BBC, link verilen internet sitelerinin içeriğinden sorumlu değildir.',
    },
    fonts: [
      F_REITH_SANS_BOLD,
      F_REITH_SANS_BOLD_ITALIC,
      F_REITH_SANS_ITALIC,
      F_REITH_SANS_REGULAR,
      F_REITH_SERIF_MEDIUM,
      F_REITH_SERIF_MEDIUM_ITALIC,
    ],
    timezone: 'Asia/Istanbul',
    navigation: [
      {
        title: 'Haberler',
        url: '/turkce',
      },
      {
        title: 'Video',
        url: '/turkce/media/video',
      },
      {
        title: 'Fotoğraf',
        url: '/turkce/media/photogalleries',
      },
      {
        title: 'Dergi',
        url: '/turkce/dergi',
      },
      {
        title: 'Spor',
        url: '/turkce/spor',
      },
      {
        title: 'Ekonomi',
        url: '/turkce/topics/ca170ae3-99c1-48db-9b67-2866f85e7342',
      },
      {
        title: 'Bilim',
        url: '/turkce/topics/0f469e6a-d4a6-46f2-b727-2bd039cb6b53',
      },
      {
        title: 'Teknoloji',
        url: '/turkce/topics/31684f19-84d6-41f6-b033-7ae08098572a',
      },
      {
        title: 'Sağlık',
        url: '/turkce/topics/c4794229-7f87-43ce-ac0a-6cfcd6d3cef2',
      },
    ],
    navigationSection: 'Kategoriler',
  },
};

export default withContext(service);
