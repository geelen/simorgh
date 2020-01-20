import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { devanagariAndGurmukhi } from '@bbc/gel-foundations/scripts';
import { gujarati as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Kolkata';
import '@bbc/psammead-locales/moment/gu';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `gu`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'અપડેટેડ',
    atiAnalyticsAppName: 'news-gujarati',
    atiAnalyticsProducerId: '50',
    brandName: 'BBC News ગુજરાતી',
    product: 'BBC News',
    serviceLocalizedName: 'ગુજરાતી',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/gujarati.png',
    defaultImageAltText: 'BBC News ગુજરાતી',
    dir: `ltr`,
    externalLinkText: ', બહારની સામગ્રી ',
    imageCaptionOffscreenText: 'ઇમેજ કૅપ્શન, ',
    videoCaptionOffscreenText: 'વીડિયો કૅપ્શન, ',
    audioCaptionOffscreenText: 'ઓડિયો કૅપ્શન, ',
    defaultCaptionOffscreenText: 'કૅપ્શન, ',
    imageCopyrightOffscreenText: 'ઇમેજ સ્રોત, ',
    locale: `gu-IN`,
    datetimeLocale: `gu`,
    service: 'gujarati',
    serviceName: 'Gujarati',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcnewsgujarati',
    twitterSite: '@bbcnewsgujarati',
    noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
    isTrustProjectParticipant: true,
    script: devanagariAndGurmukhi,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'સમાચાર',
    hasRadioSchedule: false,
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
    },
    translations: {
      seeAll: 'વધુ વાંચો ',
      home: 'સમાચાર',
      currentPage: 'વર્તમાન પેજ',
      skipLinkText: 'સામગ્રી પર જાઓ',
      relatedContent: 'સંબંધિત સમાચાર',
      mediaAssetPage: {
        mediaPlayer: 'મીડિયા પ્લેયર',
        audioPlayer: 'ઓડિયો પ્લેયર',
        videoPlayer: 'વીડિયો પ્લેયર',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'પેજ મળ્યું નહીં',
          message:
            'માફ કરશો, તમે જે શોધી રહ્યા છો તે પેજ દેખાડી રહ્યું નથી, કૃપા કરીને ફરી કોશિશ કરો.',
          solutions: [
            'URLની  ફરી તપાસ કરો',
            'બ્રાઉઝરનું રિફ્રેશ બટન ફરી દબાવો',
            'આ પેજને બીબીસી સર્ચ બાર ખોલીને શોધવાની કોશિશ કરો',
          ],
          callToActionFirst: 'વિકલ્પના રૂપે અમારા હોમપેજ ',
          callToActionLinkText: 'BBC News ગુજરાતી',
          callToActionLast: ' પર જાઓ',
          callToActionLinkUrl: 'https://www.bbc.com/gujarati',
        },
        500: {
          statusCode: '500',
          title: 'ઇન્ટરનલ સર્વર એરર',
          message:
            'માફ કરશો, તમે શોધી રહ્યા છો એ પેજ દર્શાવાઈ રહ્યું નથી. કૃપા કરી ફરી કોશિશ કરો',
          solutions: [
            'બ્રાઉઝરનું રિફ્રેશ બટન દબાવો',
            'કેટલાક સમય બાદ કોશિશ કરો',
          ],
          callToActionFirst: 'વિકલ્પના રૂપે અમારા હોમપેજ ',
          callToActionLinkText: 'BBC News ગુજરાતી',
          callToActionLast: ' પર જાઓ',
          callToActionLinkUrl: 'https://www.bbc.com/gujarati',
        },
      },
      consentBanner: {
        privacy: {
          title: 'અમે અમારી ગોપનીયતા અને કુકીઝની નીતિને અપડેટ કરી છે',
          description: {
            uk: {
              first:
                'અમે અમારી કુકીઝ અને ગોપનીયતાની નીતિમાં મહત્ત્વના ફેરફારો કર્યા છે, તમારે એ જાણવું જોઈએ કે તેનાથી તમારા પર અને તમારા ડેટા પર શું અસર પડશે.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'અમે અમારી કુકીઝ અને ગોપનીયતાની નીતિમાં મહત્ત્વના ફેરફારો કર્યા છે, તમારે એ જાણવું જોઈએ કે તેનાથી તમારા પર અને તમારા ડેટા પર શું અસર પડશે.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'ઓકે',
          reject: 'જાણો, શું ફેરફારો થયા છે',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'અમને જણાવો કે તમે કુકીઝને લઈને સહમત છો',
          description: {
            uk: {
              first: 'તમને સારી ઑનલાઇન સેવાઓ આપવા માટે અમે ',
              linkText: 'કુકીઝ',
              last:
                'નો ઉપયોગ કરીએ છીએ. અમને જણાવો કે તમે આ તમામ કુકીઝથી સહમત છો.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first:
                'અમે અને અમારા પાર્ટનર આ પ્રકારની કેટલીક ટેકનિકનો ઉપયોગ કરીએ છીએ ',
              linkText: 'કુકીઝ',
              last:
                ' નો ઉપયોગ કરીને અમે બ્રાઉઝિંગ ડેટા દ્વારા તમને સારી અને ખાસ પ્રકારની સેવાઓ આપીએ છીએ. જેનાથી અમને તમારા માટે ખાસ કન્ટેન્ટ અને યોગ્ય જાહેરાત દર્શાવવામાં મદદ મળે છે. અમને જણાવો કે તમે આ અંગે સહમત છો.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'હાં, હું સહમત છું',
          reject: 'ના, મને સેટિંગ્સમાં લઈ જાવ',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        audio: 'ઓડિયો',
        photogallery: 'ફોટો ગૅલરી',
        video: 'વીડિયો',
        bbc_gujarati_tv: {
          title: 'સમાચાર',
          subtitle:
            'આંતરરાષ્ટ્રીય, પ્રાદેશિક ખબર અને વિશ્લેષણ માટે જુઓ બીબીસી ગુજરાતી સમાચાર.',
        },
        listen: 'સાંભળો',
        watch: 'જુઓ',
        liveLabel: 'પેરેંટલ માર્ગદર્શન લૉક ચાલુ કરો',
        previousRadioShow: 'Previous radio show',
        nextRadioShow: 'Next radio show',
        duration: 'Duration',
      },
    },
    brandSVG,
    mostRead: {
      header: 'સૌથી વધારે વંચાયેલા સમાચાર',
      lastUpdated: 'લાસ્ટ અપડેટ: ',
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/gujarati/institutional-50409883',
        text: 'તમે બીબીસી પર ભરોસો કેમ કરી શકો',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'બહારની વેબસાઇટ્સની લિંક આપવા અંગેની અમારી નીતિ વિશે વાંચો.',
      },
      links: [
        {
          href: 'https://www.bbc.com/terms',
          text: 'ઉપયોગની શરતો',
        },
        {
          href: 'https://www.bbc.com/aboutthebbc',
          text: 'બીબીસી વિશે',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/privacy/',
          text: 'પ્રાઇવસી પૉલિસી',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'કુકીઝ',
        },
        {
          href: 'https://www.bbc.com/gujarati/institutional-42224948',
          text: 'બીબીસીનો સંપર્ક કરો',
        },
      ],
      copyrightText: 'BBC. બહારની વેબસાઇટ્સની સામગ્રી માટે બીબીસી જવાબદાર નથી.',
    },
    fonts: [],
    timezone: 'Asia/Kolkata',
    navigation: [
      {
        title: 'સમાચાર',
        url: '/gujarati',
      },
      {
        title: 'વીડિયો',
        url: '/gujarati/media/video',
      },
      {
        title: 'લોકપ્રિય',
        url: '/gujarati/popular/read',
      },
      {
        title: 'ભારત',
        url: '/gujarati/topics/5a08f030-710f-4168-acee-67294a90fc75',
      },
      {
        title: 'આંતરરાષ્ટ્રીય',
        url: '/gujarati/international',
      },
    ],
    navigationSection: 'વિભાગો',
  },
};

export default withContext(service);
