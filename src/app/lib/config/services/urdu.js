import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { arabic } from '@bbc/gel-foundations/scripts';
import { urdu as brandSVG } from '@bbc/psammead-assets/svgs';
import {
  F_NASSIM_URDU_REGULAR,
  F_NASSIM_URDU_BOLD,
} from '@bbc/psammead-styles/fonts';
import '@bbc/moment-timezone-include/tz/Asia/Karachi';
import '@bbc/psammead-locales/moment/ur';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: 'ur',
    product: 'BBC News',
    articleAuthor: 'https://www.facebook.com/bbcnews',
    articleTimestampPrefix: 'اپ ڈیٹ کی گئی',
    atiAnalyticsAppName: 'news-urdu',
    atiAnalyticsProducerId: '95',
    brandName: 'BBC News اردو',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/urdu.png',
    defaultImageAltText: 'BBC News اردو',
    dir: 'rtl',
    externalLinkText: '، بیرونی مواد',
    imageCaptionOffscreenText: '،تصویر کا کیپشن',
    videoCaptionOffscreenText: '،ویڈیو کیپشن',
    audioCaptionOffscreenText: '،آڈیو کیپشن',
    defaultCaptionOffscreenText: '،کیپشن',
    imageCopyrightOffscreenText: '،تصویر کا ذریعہ',
    locale: 'ur',
    datetimeLocale: 'ur',
    service: 'urdu',
    serviceName: 'Urdu',
    serviceLocalizedName: 'اردو',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcurdu',
    twitterSite: '@bbcurdu',
    noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
    isTrustProjectParticipant: true,
    script: arabic,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle:
      'خبریں، تازہ خبریں، بریکنگ نیو | News, latest news, breaking news',
    hasRadioSchedule: true,
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
    },
    translations: {
      seeAll: 'See all',
      home: 'صفحۂ اول',
      currentPage: 'موجودہ صفحہ',
      skipLinkText: 'مواد پر جائیں',
      relatedContent: 'اسی بارے میں',
      mediaAssetPage: {
        mediaPlayer: 'Media player',
        audioPlayer: 'Audio player',
        videoPlayer: 'Video player',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'صفحہ دستیاب نہیں',
          message:
            'ہم معذرت خواہ ہیں کہ آپ جو صفحہ تلاش کر رہے ہیں وہ دستیاب نہیں۔ یہ کوشش کر کے دیکھیں:',
          solutions: [
            'یو آر ایل دوبارہ چیک کریں',
            'اپنے براؤزر کو ریفریش کریں',
            'بی بی سی کی سرچ بار کی مدد سے اس صفحے کی تلاش جاری',
          ],
          callToActionFirst: 'متبادل کے طور پر بی بی سی نیوز ',
          callToActionLinkText: 'اردو',
          callToActionLast: ' کے ہوم پیچ پر جائیں.',
          callToActionLinkUrl: 'https://www.bbc.com/urdu',
        },
        500: {
          statusCode: '500',
          title: 'اندرونی سرور کی خرابی',
          message:
            'ہم معذرت خواہ ہیں کہ آپ جو صفحہ تلاش کر رہے ہیں وہ دستیاب نہیں۔ یہ کوشش کر کے دیکھیں:',
          solutions: ['اپنے براؤزر کو ریفریش کریں', 'کچھ دیر بعد کوشش کیجیے'],
          callToActionFirst: 'متبادل کے طور پر بی بی سی نیوز ',
          callToActionLinkText: 'اردو',
          callToActionLast: ' کے ہوم پیچ پر جائیں.',
          callToActionLinkUrl: 'https://www.bbc.com/urdu',
        },
      },
      consentBanner: {
        privacy: {
          title: 'ہم نے اپنی پرائیویسی اور کوکیز پالیسی اپ ڈیٹ کر دی ہے',
          description: {
            uk: {
              first:
                '.ہم نے اپنی پرائیویسی اور کوکیز پالیسیوں میں کچھ اہم تبدیلیاں کی ہیں اور ہم چاہتے ہیں کہ ان کا آپ اور آپ کے ڈیٹا کے لیے کیا مطلب ہے',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                '.ہم نے اپنی پرائیویسی اور کوکیز پالیسیوں میں کچھ اہم تبدیلیاں کی ہیں اور ہم چاہتے ہیں کہ ان کا آپ اور آپ کے ڈیٹا کے لیے کیا مطلب ہے',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'اوکے',
          reject: 'جانیے کہ تبدیلیاں کیا ہیں',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'بتائیے کہ آپ کوکیز کے بارے میں متفق ہیں',
          description: {
            uk: {
              first: 'ہم آپ کو بہترین آن لائن تجربہ دینے کے لیے ',
              linkText: 'کوکیز',
              last:
                ' استعمال کرتے ہیں۔ برائے مہربانی ہمیں بتائیں کہ آپ ان تمام کوکیز کے استعمال سے متفق ہیں',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'ہم اور ہمارے پارٹنر ٹیکنالوجی جیسے کہ ',
              linkText: 'کوکیز',
              last:
                ' استعمال کرتے ہوئے براؤزنگ ڈیٹا جمع کرتے ہیں تاکہ آپ کو بہترین آن لائن تجربہ دے سکیں اور مواد اور اشتہارات کو آپ کے لیے مخصوص بنا سکیں۔ ہمیں بتائیے کہ آپ کو اس پر کوئی اعتراض تو نہیں۔',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'میں متفق ہوں',
          reject: 'نہیں، مجھے سیٹنگز میں لے جائیں',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        audio: 'آڈیو',
        photogallery: 'تصاویری گیلری',
        video: 'ویڈیو',
        listen: 'Listen',
        watch: 'Watch',
        liveLabel: 'لائیو',
        previousRadioShow: 'Previous radio show',
        nextRadioShow: 'Next radio show',
        duration: 'Duration',
      },
    },
    brandSVG,
    mostRead: {
      header: 'سب سے زیادہ پڑھی جانے والی',
      lastUpdated: 'آخری اپ ڈیٹ ',
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/news/help-41670342',
        text: 'جانیے کہ آپ بی بی سی نیوز پر کیوں اعتماد کر سکتے ہیں',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'بیرونی لنکس کے بارے میں ہماری پالیسی.',
      },
      links: [
        {
          href: 'https://www.bbc.com/urdu/institutional-37588278',
          text: 'استعمال کے ضوابط',
        },
        {
          href: 'https://www.bbc.com/urdu/institutional-37588280',
          text: 'بی بی سی کے بارے میں',
        },
        {
          href: 'https://www.bbc.com/urdu/institutional-37588282',
          text: 'پرائیویسی پالیسی',
        },
        {
          href:
            'https://www.bbc.co.uk/privacy/cookies/managing/cookie-settings.html',
          text: 'Cookies',
        },
        {
          href: 'https://www.bbc.com/urdu/institutional-37588285',
          text: 'بی بی سی سے رابطہ کریں',
        },
      ],
      copyrightText:
        'بی بی سی. بی بی سی بیرونی ویب سائٹس کے مواد کا ذمہ دار نہیں',
    },
    fonts: [F_NASSIM_URDU_REGULAR, F_NASSIM_URDU_BOLD],
    timezone: 'Asia/Karachi',
    navigation: [
      {
        title: 'صفحۂ اول',
        url: '/urdu',
      },
      {
        title: 'پاکستان',
        url: '/urdu/pakistan',
      },
      {
        title: 'آس پاس',
        url: '/urdu/regional',
      },
      {
        title: 'ورلڈ',
        url: '/urdu/world',
      },
      {
        title: 'کھیل',
        url: '/urdu/sport',
      },
      {
        title: 'فن فنکار',
        url: '/urdu/entertainment',
      },
      {
        title: 'سائنس',
        url: '/urdu/science',
      },
      {
        title: 'آڈیو',
        url: '/urdu/media/audio',
      },
      {
        title: 'ویڈیو',
        url: '/urdu/media/video',
      },
      {
        title: 'پنجابی ويڈیو',
        url: '/urdu/punjabi_video',
      },
      {
        title: 'تصاویر',
        url: '/urdu/media/photogalleries',
      },
    ],
    navigationSection: 'سیکشن',
  },
};

export default withContext(service);
