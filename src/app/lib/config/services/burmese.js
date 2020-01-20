import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { burmese } from '@bbc/gel-foundations/scripts';
import { burmese as brandSVG } from '@bbc/psammead-assets/svgs';
import { F_PADAUK_BOLD, F_PADAUK_REGULAR } from '@bbc/psammead-styles/fonts';
import '@bbc/moment-timezone-include/tz/GMT';
import withContext from '../../../contexts/utils/withContext';
import 'moment/locale/my';

export const service = {
  default: {
    lang: `my`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'အသစ်တင်ချိန်',
    atiAnalyticsAppName: 'news-burmese',
    atiAnalyticsProducerId: '35',
    brandName: 'BBC News မြန်မာ',
    product: 'BBC News',
    serviceLocalizedName: 'မြန်မာ',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/burmese.png',
    defaultImageAltText: 'BBC News မြန်မာ',
    dir: `ltr`,
    externalLinkText: ', ပြင်ပစာမျက်နှာ',
    imageCaptionOffscreenText: 'ဓာတ်ပုံ ပုံစာ, ',
    videoCaptionOffscreenText: 'ဗီဒီယို ပုံစာ, ',
    audioCaptionOffscreenText: 'အသံဖိုင် ပုံစာ, ',
    defaultCaptionOffscreenText: 'ပုံစာ, ',
    imageCopyrightOffscreenText: 'ဓာတ်ပုံ ရင်းမြစ်, ',
    locale: `my-MM`,
    datetimeLocale: `my`,
    service: 'burmese',
    serviceName: 'Burmese',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcburmese',
    twitterSite: '@bbcburmese',
    noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
    isTrustProjectParticipant: true,
    script: burmese,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle:
      'ဘီဘီစီ မြန်မာ | အထူးသတင်း | နောက်ဆုံးရ သတင်း | နောက်ဆုံးရခေါင်းစဉ် သတင်း |မြန်မာသတင်း',
    hasRadioSchedule: false,
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
    },
    translations: {
      seeAll: 'အားလုံးကြည့်ရန်',
      home: 'ပင်မစာမျက်နှာ',
      currentPage: 'လက်ရှိကြည့်နေသော စာမျက်နှာ',
      skipLinkText: 'အကြောင်းအရာများဆီ ကျော်သွားရန်',
      relatedContent: 'ဒီသတင်းနဲ့ ပတ်သက်သမျှ',
      mediaAssetPage: {
        mediaPlayer: 'မီဒီယာ ပလေယာ',
        audioPlayer: 'အသံဖိုင်ပလေယာ',
        videoPlayer: 'ဗီဒီယို ပလေယာ',
      },
      error: {
        404: {
          statusCode: '၄၀၄',
          title: 'စာမျက်နှာကို မတွေ့ပါ။',
          message: 'သင်ရှာနေသော စာမျက်နှာကို မတွေ့ရပါ။ ဒီမှာ ကြိုးစားကြည့်ပါ။',
          solutions: [
            'စာမျျက်နှာ လင့် လိပ်စာကို ထပ်စစ်ကြည့်နေပါသည်။',
            'အသစ်ဖွင့်ရန် ဘရောင်ဆာမှ refresh ခလုတ်ကို နှိပ်ပါ။',
            'ဘီဘီစီမှ ရှာဖွေသော ဘားကို သုံးပြီး ယင်းစာမျက်နှာကို ရှာရန်။',
          ],
          callToActionFirst: 'သို့မဟုတ်ပါက ',
          callToActionLinkText: 'BBC News မြန်မာ',
          callToActionLast: ' ပင်မစာမျက်နှာသို့ သွားပါ။',
          callToActionLinkUrl: 'https://www.bbc.com/burmese',
        },
        500: {
          statusCode: '၅၀၀',
          title: 'ဘီီဘီစီဆာဗာ၏ အမှား',
          message:
            'သင်ရှာနေသော စာမျက်နှာကို လောလောဆယ် ရှာမတွေ့ပါ။ ဒီမှာ ကြိုးစားကြည့်ပါ။',
          solutions: [
            'အသစ်ဖွင့်ရန် ဘရောင်ဆာမှ refresh ခလုတ်ကို နှိပ်ပါ။',
            'ခဏနေလျင် ပြန်လာကြည့်ပါ။',
          ],
          callToActionFirst: 'သို့မဟုတ်ပါက ',
          callToActionLinkText: 'BBC News မြန်မာ',
          callToActionLast: ' ပင်မစာမျက်နှာသို့ သွားပါ။',
          callToActionLinkUrl: 'https://www.bbc.com/burmese',
        },
      },
      consentBanner: {
        privacy: {
          title:
            'ကိုယ်ရေးအချက်အလက်လုံခြုံမှုနှင့် ကွတ်ကီးအသုံးပြုမှု မူဝါဒများ အသစ်ပြင်ဆင်ထားပါသည်။',
          description: {
            uk: {
              first:
                'ကိုယ်ရေးအချက်အလက်လုံခြုံမှုနှင့် ကွတ်ကီးအသုံးပြုမှု မူဝါဒများတွင် အရေးကြီးသော အပြောင်းအလဲအချို့ပြုလုပ်ထားသဖြင့် သုံးစွဲသူများအပေါ် သက်ရောက်မှုကို အသိပေးလိုပါသည်။',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'ကိုယ်ရေးအချက်အလက်လုံခြုံမှုနှင့် ကွတ်ကီးအသုံးပြုမှု မူဝါဒများတွင် အရေးကြီးသော အပြောင်းအလဲအချို့ပြုလုပ်ထားသဖြင့် သုံးစွဲသူများအပေါ် သက်ရောက်မှုကို အသိပေးလိုပါသည်။',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'ကောင်းပါပြီ။',
          reject: 'ဘာတွေပြောင်းလဲသွားသလဲ ကြည့်ရန်',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'ကွတ်ကီးများအသုံးပြုမှုကို သဘောတူမတူ ပြောပါ။',
          description: {
            uk: {
              first:
                'ပရိသတ်များ အွန်လိုင်းတွင် အကောင်းဆုံးသုံးနိုင်ရန် မိမိတို့ ',
              linkText: 'နှင့် ကွတ်ကီးများ',
              last:
                ' ကို အသုံးပြုပါသည်။ ယင်းကွတ်ကီးများ အားလုံးကို သဘောတူမတူ ပြောပြပါ။',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'ဘီဘီစီနှင့် ပါတနာများသည် ',
              linkText: ' နှင့် ကွတ်ကီးများ ',
              last:
                ' သုံးသော နည်းပညာများဖြင့် ပရိသတ်များ အွန်လိုင်းတွင် အကောင်းဆုံးကြည့်နိုင်ရန်၊ မိမိတို့ ကြည့်လိုသည့် အကြောင်းအရာများကြည့်နိုင်ရန်၊ မိမိတို့နှင့် ကိုက်ညီမည့် ကြော်ငြာများကိုသာ ရရှိရန် အသုံးပြုသူ၏ သုံးစွဲပုံဒေတာများကို ကောက်ယူပါသည်။ ယင်းသို့ အသုံးပြုမှုကို သဘောတူမတူ ပြောပြပါ။',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'သဘောတူပါသည်။',
          reject: 'သဘောမတူပါ၊ ဆက်တင်ကို သွားကြည့်လိုပါသည်။',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        audio: 'အသံ',
        photogallery: 'ဓာတ်ပုံများ',
        video: 'ဗီဒီယို',
        bbc_burmese_radio: {
          title: 'ဘီဘီစီ မြန်မာပိုင်း ရေဒီယို',
          subtitle:
            'နေ့စဉ် ပြည်တွင်း ပြည်ပ သတင်းနဲ့ သုံးသပ်ချက်များ၊ ပညာရေး၊ ကျန်းမာရေး၊ အားကစား၊ နည်းပညာ အစီအစဉ်များ နဲ့ မျက်မှောက်ရေးရာ ဆွေးနွေးခန်းမျာ',
        },
        bbc_burmese_tv: {
          title: 'ဘီဘီစီ မြန်မာတီဗီ အစီအစဉ်',
          subtitle:
            'မြန်မာတီဗီ အစီအစဉ်မှာ နောက်ဆုံးရ ထိပ်တန်းရောက် ကမ္ဘာ့သတင်း နဲ့ အားကစား သတင်းတွေကို ကြည့်ရှုနိုင်ပါတယ်။',
        },
        listen: 'Listen',
        watch: 'Watch',
        liveLabel: 'တိုကျရိုကျထုတျလှှငျ့မှု',
        previousRadioShow: 'Previous radio show',
        nextRadioShow: 'Next radio show',
        duration: 'Duration',
      },
    },
    brandSVG,
    mostRead: {
      header: 'အဖတ်အများဆုံး',
      lastUpdated: 'နောက်ဆုံးအသစ်တင်ချိန်: ',
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/news/help-41670342',
        text: 'ဘီဘီစီကို ဘာကြောင့် ယုံကြည်နိုင်သလဲ။',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text:
          'ပြင်ပဝက်ဆိုက်များကို လင့် ထည့်ပေးခြင်းနှင့် ပတ်သက်သော ဘီဘီစီလုပ်ထုံးလုပ်နည်းကို ဖတ်ရန်။',
      },
      links: [
        {
          href: 'https://www.bbc.com/burmese/institutional-37574842',
          text: 'အသုံးပြုရန်စည်းမျဉ်း',
        },
        {
          href: 'https://www.bbc.com/burmese/institutional-37577521',
          text: 'ကိုယ်ရေးအချက်အလက်လုံခြုံမှု မူဝါဒ',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'ကွတ်ကီး',
        },
        {
          href: 'https://www.bbc.com/burmese/institutional-37577525',
          text: 'ဘီီဘီစီကို ဆက်သွယ်ရန်',
        },
      ],
      copyrightText:
        'BBC. ပြင်ပဝက်ဆိုက်များတွင် ပါဝင်သော အကြောင်းအရာများအတွက် ဘီဘီစီက တာဝန်မယူပါ။',
    },
    fonts: [F_PADAUK_BOLD, F_PADAUK_REGULAR],
    timezone: 'GMT',
    navigation: [
      {
        title: 'ပင်မစာမျက်နှာ',
        url: '/burmese',
      },
      {
        title: 'မြန်မာ့ရေးရာ',
        url: '/burmese/burma',
      },
      {
        title: 'နိုင်ငံတကာ',
        url: '/burmese/world',
      },
      {
        title: 'ဆောင်းပါး',
        url: '/burmese/in_depth',
      },
      {
        title: 'အားကစား',
        url: '/burmese/sport',
      },
      {
        title: 'ကုန်သွယ်စီးပွား',
        url: '/burmese/economy',
      },
      {
        title: 'အသံဖိုင်များ',
        url: '/burmese/media/audio',
      },
      {
        title: 'ဗီဒီယိုများ',
        url: '/burmese/media/video',
      },
      {
        title: 'ဓာတ်ပုံများ',
        url: '/burmese/media/photogalleries',
      },
    ],
    navigationSection: 'ကဏ္ဍများ',
  },
};

export default withContext(service);
