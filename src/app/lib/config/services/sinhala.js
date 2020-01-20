import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { sinhalese } from '@bbc/gel-foundations/scripts';
import { sinhala as brandSVG } from '@bbc/psammead-assets/svgs';
import {
  F_ISKOOLA_POTA_BBC_BOLD,
  F_ISKOOLA_POTA_BBC_REGULAR,
} from '@bbc/psammead-styles/fonts';
import '@bbc/moment-timezone-include/tz/GMT';
import '@bbc/psammead-locales/moment/si';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `si`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'යාවත්කාලීනවී ඇත',
    atiAnalyticsAppName: 'news-sinhala',
    atiAnalyticsProducerId: '82',
    brandName: 'BBC News සිංහල',
    product: 'BBC News',
    serviceLocalizedName: 'සිංහල',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/sinhala.png',
    defaultImageAltText: 'BBC News සිංහල',
    dir: `ltr`,
    externalLinkText: ', බාහිර',
    imageCaptionOffscreenText: 'ඡායාරූප ශීර්ෂ වැකිය, ',
    videoCaptionOffscreenText: 'වීඩියෝ ශීර්ෂ වැකිය, ',
    audioCaptionOffscreenText: 'හඬ ශීර්ෂ වැකිය, ',
    defaultCaptionOffscreenText: 'ශීර්ෂ වැකිය, ',
    imageCopyrightOffscreenText: 'ඡායාරූප මූලාශ්‍රය, ',
    locale: `si-LK`,
    datetimeLocale: `si`,
    service: 'sinhala',
    serviceName: 'Sinhala',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcsinhala',
    twitterSite: '@bbcsinhala',
    noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
    isTrustProjectParticipant: true,
    script: sinhalese,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'මුල් පිටුව',
    hasRadioSchedule: false,
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
    },
    translations: {
      seeAll: 'සියල්ල දැකගන්න',
      home: 'මුල් පිටුව',
      currentPage: 'දැන් සිටින පිටුව',
      skipLinkText: 'අන්තර්ගතයට පිවිසෙන්න',
      relatedContent: 'මේ පුවතට සම්බන්ධ තවත් විස්තර',
      mediaAssetPage: {
        mediaPlayer: 'මීඩියා ධාවකය',
        audioPlayer: 'හඬ වාදකය',
        videoPlayer: 'වීඩියෝ ධාවකය',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'පිටුව සොයාගත නොහැක',
          message:
            'කණගාටුයි, ඔබ සොයන පිටුව ගෙන ඒමට අපට නොහැක. කරුණාකර උත්සාහ කරන්න:',
          solutions: [
            'url නැවත පරීක්ෂා කෙරෙමින් පවතී',
            'ඔබේ බ්‍රවුසරයේ යළි පණගැන්වීම් බොත්තම තද කෙරෙමින් පවතී',
            'බීබීසී සෙවුම් තුළින් මේ පිටුව සොයමින් පවතී',
          ],
          callToActionFirst: 'නොඑසේනම්, කරුණාකර මුල් පිටුවට පිවිසෙන්න ',
          callToActionLinkText: 'BBC News සිංහල',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/sinhala',
        },
        500: {
          statusCode: '500',
          title: 'අභ්‍යන්තර සර්වරයේ දෝෂයකි',
          message:
            'කණගාටුයි, ඔබ සොයන පිටුව ගෙන ඒමට දැනට අපට හැකියාවක් නැත. කරුණාකර උත්සාහ කරන්න:',
          solutions: [
            'ඔබේ බ්‍රවුසරයේ යළි පණගැන්වීම් බොත්තම තද කෙරෙමින් පවතී',
            'යළි පසුව පැමිණෙනු ඇත',
          ],
          callToActionFirst: 'නොඑසේනම්, කරුණාකර මුල් පිටුවට පිවිසෙන්න ',
          callToActionLinkText: 'BBC News සිංහල',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/sinhala',
        },
      },
      consentBanner: {
        privacy: {
          title:
            'පෞද්ගලිකත්වය (Privacy) හා කුකීස් (Cookies) පිළිබඳ අපගේ ප්‍රතිපත්තිය යාවත්කාලීන කර ඇත.',
          description: {
            uk: {
              first:
                'පෞද්ගලිකත්වය (Privacy) හා කුකීස් (Cookies) පිළිබඳ අපගේ ප්‍රතිපත්තියට එක්කර ඇති වැදගත් වෙනස්කම් ඔබට සහ ඔබගේ දත්තවලට අදාළවන්නේ කෙසේදැයි ඔබ දැනුවත්වීම අවශ්‍යය.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'පෞද්ගලිකත්වය (Privacy) හා කුකීස් (Cookies) පිළිබඳ අපගේ ප්‍රතිපත්තියට එක්කර ඇති වැදගත් වෙනස්කම් ඔබට සහ ඔබගේ දත්තවලට අදාළවන්නේ කෙසේදැයි ඔබ දැනුවත්වීම අවශ්‍යය.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'හරි',
          reject: 'වෙනස් කර ඇත්තේ මොනවාදැයි දැනගන්න',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'කුකීස් සමග එකඟවන්නේදැයි අපට දන්වන්න',
          description: {
            uk: {
              first: 'අප කුකීස් ',
              linkText: 'භාවිත කරන්නේ',
              last:
                ' හොඳම ඔන්ලයින් අත්දැකීම ඔබට ගෙන දීම සඳහාය. මේ කුකීස් සියල්ල සමග ඔබ එකඟදැයි කරුණාකර අපට දන්වන්න.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'අප සහ අපේ හවුල්කරුවන් කුකීස් ',
              linkText: 'වැනි තාක්ෂණය',
              last:
                ' භාවිත කරමින් බ්‍රවුසිං දත්ත රැස්කරන්නේ ඔබට හොඳම ඔන්ලයින් අත්දැකීම ලබාදීම සහ ඔබට පෙනෙන අන්තර්ගතය හා වෙළෙඳ ප්‍රචාරණ ඔබටම සමීප කිරීම සඳහාය. මීට ඔබ එකඟ නම් කරුණාකර ඒ බව අපට දන්වන්න.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'ඔව්, මම එකඟයි',
          reject: 'නැහැ, සැකසුම වෙත මා ගෙනයන්න',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        audio: 'හඬ',
        photogallery: 'ඡායාරූප ගැලරිය ',
        video: 'වීඩියෝ',
        bbc_sinhala_tv: {
          title: 'බීබීසී සිංහල සංදේශය',
          subtitle:
            'බීබීසී සිංහල ඔස්සේ ශ්‍රී ලාංකීය, දකුණු ආසියාතික සහ ජාත්‍යන්තර පුවත්, විශ්ලේෂණ සහ ක්‍රීඩා පුවත්',
        },
        listen: 'Listen',
        watch: 'Watch',
        liveLabel: 'සජීවී.',
        previousRadioShow: 'Previous radio show',
        nextRadioShow: 'Next radio show',
        duration: 'Duration',
      },
    },
    brandSVG,
    mostRead: {
      header: 'වැඩිපුරම කියැවූ',
      lastUpdated: 'අවසන් යාවත්කාලීනවීම: ',
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/news/help-41670342',
        text: 'ඔබට බීබීසී විශ්වාස කළ හැක්කේ ඇයි',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'බාහිර යොමු කෙරෙහි අපගේ ප්‍රවේශය ගැන කියවන්න.',
      },
      links: [
        {
          href: 'https://www.bbc.com/terms',
          text: 'භාවිතයේ කොන්දේසි',
        },
        {
          href: 'https://www.bbc.com/privacy/',
          text: 'පෞද්ගලිකත්ව ප්‍රතිපත්තිය',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'කුකීස්',
        },
        {
          href: 'https://www.bbc.com/contact/',
          text: 'බීබීසී අමතන්න',
        },
      ],
      copyrightText: 'BBC. බාහිර වෙබ් අඩවිවල අන්තර්ගතයට බීබීසී වගකියනු නොලැබේ.',
    },
    fonts: [F_ISKOOLA_POTA_BBC_BOLD, F_ISKOOLA_POTA_BBC_REGULAR],
    timezone: 'GMT',
    navigation: [
      {
        title: 'මුල් පිටුව',
        url: '/sinhala',
      },
      {
        title: 'ශ්‍රී ලංකා',
        url: '/sinhala/sri_lanka',
      },
      {
        title: 'ලෝකය',
        url: '/sinhala/world',
      },
      {
        title: 'ක්‍රීඩා',
        url: '/sinhala/sport',
      },
      {
        title: 'ලලනා',
        url: '/sinhala/topics/e45cb5f8-3c87-4ebd-ac1c-058e9be22862',
      },
      {
        title: 'යෞවන',
        url: '/sinhala/topics/f6ec89fd-3823-498e-a888-572e96f791b2',
      },
      {
        title: 'විද්‍යාව',
        url: '/sinhala/topics/0f469e6a-d4a6-46f2-b727-2bd039cb6b53',
      },
      {
        title: 'වීඩියෝ',
        url: '/sinhala/media/video',
      },
    ],
    navigationSection: 'අංශ',
  },
};

export default withContext(service);
