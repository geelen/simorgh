import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { devanagariAndGurmukhi } from '@bbc/gel-foundations/scripts';
import { marathi as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Kolkata';
import '@bbc/psammead-locales/moment/mr';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `mr`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'अपडेटेड',
    atiAnalyticsAppName: 'news-marathi',
    atiAnalyticsProducerId: '59',
    brandName: 'BBC News मराठी',
    product: 'BBC News',
    serviceLocalizedName: 'मराठी',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/marathi.png',
    defaultImageAltText: 'BBC News मराठी',
    dir: `ltr`,
    externalLinkText: ', बाहेरचा मजकूर',
    imageCaptionOffscreenText: 'फोटो कॅप्शन, ',
    videoCaptionOffscreenText: 'व्हीडिओ कॅप्शन, ',
    audioCaptionOffscreenText: 'ऑडिओ कॅप्शन, ',
    defaultCaptionOffscreenText: 'कॅप्शन, ',
    imageCopyrightOffscreenText: 'फफोटो स्रोत, ',
    locale: `mr-IN`,
    datetimeLocale: `mr`,
    service: 'marathi',
    serviceName: 'Marathi',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcnewsmarathi',
    twitterSite: '@bbcnewsmarathi',
    noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
    isTrustProjectParticipant: true,
    script: devanagariAndGurmukhi,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'बातम्या',
    hasRadioSchedule: false,
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
    },
    translations: {
      seeAll: 'सर्व पाहा',
      home: 'बातम्या',
      currentPage: 'सध्याचे पान',
      skipLinkText: 'थेट मजकुरावर जा',
      relatedContent: 'संबंधित मजकूर',
      mediaAssetPage: {
        mediaPlayer: 'मीडिया प्लेयर',
        audioPlayer: 'ऑडिओ प्लेयर',
        videoPlayer: 'व्हीडिओ प्लेयर',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'हे पृष्ठ सापडले नाही',
          message:
            'माफ करा, तुम्ही शोधत असलेले पृष्ठ आम्हाला सापडले नाही. कृपया प्रयत्न करा:',
          solutions: [
            'तुमचं URL पुन्हा एकदा तपासा',
            'तुमच्या ब्राऊझरमध्ये रिफ्रेश बटण दाबा',
            'बीबीसीचं सर्च बार वापरून हे पृष्ठ शोधा',
          ],
          callToActionFirst: 'किंवा, ',
          callToActionLinkText: 'बीबीसी न्यूज मराठी]च्या',
          callToActionLast: ' होमपेजला भेट द्या.',
          callToActionLinkUrl: 'https://www.bbc.com/marathi',
        },
        500: {
          statusCode: '500',
          title: 'अंतर्गत सर्व्हरमध्ये बिघाड',
          message:
            'माफ करा, तुम्ही शोधत असलेलं पृष्ठ आम्हाला सापडले नाही. कृपया प्रयत्न करा:',
          solutions: [
            'तुमच्या ब्राऊझरमध्ये रिफ्रेश बटण दाबा',
            'थोड्या वेळाने परत या',
          ],
          callToActionFirst: 'किंवा, ',
          callToActionLinkText: 'बीबीसी न्यूज मराठी]च्या',
          callToActionLast: ' होमपेजला भेट द्या.',
          callToActionLinkUrl: 'https://www.bbc.com/marathi',
        },
      },
      consentBanner: {
        privacy: {
          title:
            'आम्ही आमचं गोपनीयतेचं आणि कुकीजच्या बाबतीतलं धोरण अपडेट केलं आहे',
          description: {
            uk: {
              first:
                'आम्ही आमच्या गोपनीयतेच्या आणि कुकीजच्या बाबतीतल्या धोरणांमध्ये काही महत्त्वपूर्ण बदल केले आहेत आणि आम्हाला वाटतं तुम्ही हे जाणून घ्यायला हवं की त्याचा तुमच्यावर काय परिणाम होऊ शकतो.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'आम्ही आमच्या गोपनीयतेच्या आणि कुकीजच्या बाबतीतल्या धोरणांमध्ये काही महत्त्वपूर्ण बदल केले आहेत आणि आम्हाला वाटतं तुम्ही हे जाणून घ्यायला हवं की त्याचा तुमच्यावर काय परिणाम होऊ शकतो.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'ओके',
          reject: 'पाहा नेमकं काय बदललंय',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'तुम्ही कुकीजच्या बाबतीत सहमत असल्याचं आम्हाला सांगा',
          description: {
            uk: {
              first: 'आम्ही ',
              linkText: 'कुकीज',
              last:
                ' वापरून तुमचा ऑनलाईन अनुभव सर्वोत्तम करण्याचा प्रयत्न करतो. सर्व कुकीजच्या बाबतीत तुमची सहमती असल्याचं आम्हाला कळवा.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'आम्ही आणि आमचे सहयोगी ',
              linkText: 'कुकीज',
              last:
                'सारखं तंत्रज्ञान वापरून तुमचा ब्राऊझिंग डेटा गोळा करत असतो, जेणेकरून तुमचा ऑनलाईन अनुभव सर्वोत्तम व्हावा आणि तुम्हाला खास तुमच्यासाठीचा मजकूर आणि अ‍ॅड दाखवता याव्यात. तुमची याला सहमती असल्याचं आम्हाला कळवा.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'हो, माझी सहमती आहे',
          reject: 'नाही, मला सेटिंग्स दाखवा',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        audio: 'ऑडिओ',
        photogallery: 'फोटो गॅलरी',
        video: 'व्हीडिओ',
        bbc_marathi_tv: {
          title: 'BBC विश्व',
          subtitle:
            'मराठीतल्या पहिल्या डिजिटल बुलेटिनमध्ये पाहा देश-विदेशातल्या ताज्या बातम्या.',
        },
        listen: 'ऐका',
        watch: 'पाहा',
        liveLabel: 'थेट',
        previousRadioShow: 'यापूर्वीचा रेडिओ शो',
        nextRadioShow: 'पुढचा रेडिओ शो',
        duration: 'वेळ',
      },
    },
    brandSVG,
    mostRead: {
      header: 'सर्वाधिक वाचलेले',
      lastUpdated: 'शेवटचा अपडेट: ',
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/marathi/institutional-50418391',
        text: 'तुम्ही बीबीसीवर विश्वास का ठेवू शकता',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'बाह्य लिंक्सबद्दल आम्हाल काय वाटतं? इथे वाचा.',
      },
      links: [
        {
          href: 'https://www.bbc.com/terms',
          text: 'वापराच्या अटी',
        },
        {
          href: 'https://www.bbc.com/privacy/',
          text: 'गोपनीयता धोरण',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'कुकीज',
        },
        {
          href: 'https://www.bbc.com/marathi/institutional-42227676',
          text: 'बीबीसीला संपर्क करा',
        },
      ],
      copyrightText:
        'बीबीसी बाह्य इंटरनेट साइट्सच्या सामग्रीसाठी बीबीसी जबाबदार नाही',
    },
    fonts: [],
    timezone: 'Asia/Kolkata',
    navigation: [
      {
        title: 'बातम्या',
        url: '/marathi',
      },
      {
        title: 'महाराष्ट्र',
        url: '/marathi/topics/c5qvpxvv7y3t',
      },
      {
        title: 'भारत',
        url: '/marathi/topics/cxnyk3y49x6t',
      },
      {
        title: 'आंतरराष्ट्रीय',
        url: '/marathi/international',
      },
      {
        title: 'व्हीडिओ',
        url: '/marathi/media/video',
      },
      {
        title: 'लोकप्रिय',
        url: '/marathi/popular/read',
      },
    ],
    navigationSection: 'विभाग',
  },
};

export default withContext(service);
