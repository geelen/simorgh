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
import { mundo as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/GMT';
import '@bbc/psammead-locales/moment/es';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `es`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'Actualización',
    atiAnalyticsAppName: 'news-mundo',
    atiAnalyticsProducerId: '62',
    brandName: 'BBC News Mundo',
    product: 'BBC News',
    serviceLocalizedName: 'Mundo',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/mundo.png',
    defaultImageAltText: 'BBC News Mundo',
    dir: `ltr`,
    externalLinkText: ', externo',
    imageCaptionOffscreenText: 'Pie de foto, ',
    videoCaptionOffscreenText: 'Título del video, ',
    audioCaptionOffscreenText: 'Título del audio',
    defaultCaptionOffscreenText: 'Título, ',
    imageCopyrightOffscreenText: 'Fuente de la imagen, ',
    locale: `es-005`,
    datetimeLocale: `es`,
    service: 'mundo',
    serviceName: 'News Mundo',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcmundo',
    twitterSite: '@bbcmundo',
    noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
    isTrustProjectParticipant: true,
    script: latinDiacritics,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Noticias',
    hasRadioSchedule: false,
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
    },
    translations: {
      seeAll: 'Ver todo',
      home: 'Página de inicio',
      currentPage: 'Página actual',
      skipLinkText: 'Ir al contenido',
      relatedContent: 'Contenido relacionado',
      mediaAssetPage: {
        mediaPlayer: 'Reproductor multimedia',
        audioPlayer: 'Reproductor de audio',
        videoPlayer: 'Reproductor de video',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'Página no encontrada',
          message:
            'Lo sentimos, no podemos llevarte a la página que buscas. Por favor, intenta lo siguiente:',
          solutions: [
            'Revisa la dirección URL',
            'Presiona el botón de actualizar en tu navegador',
            'Buscando esta página a través de la barra de búsqueda de la BBC',
          ],
          callToActionFirst: 'Como alternativa, por favor visita la ',
          callToActionLinkText: 'portada de BBC News Mundo',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/mundo',
        },
        500: {
          statusCode: '500',
          title: 'Error interno del servidor',
          message:
            'Lo sentimos, actualmente no somos capaces de llevarte a la página que buscas. Por favor, intenta:',
          solutions: [
            'Presiona el botón de actualizar en tu navegador',
            'Inténtalo más tarde',
          ],
          callToActionFirst: 'Como alternativa, por favor visita la ',
          callToActionLinkText: 'portada de BBC News Mundo',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/mundo',
        },
      },
      consentBanner: {
        privacy: {
          title: 'Hemos actualizado nuestra Política de Privacidad y Cookies',
          description: {
            uk: {
              first:
                'Hemos realizado cambios importantes en nuestra Política de Privacidad y Cookies y queremos que sepas lo que esto significa para ti y tus datos.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'Hemos realizado cambios importantes en nuestra Política de Privacidad y Cookies y queremos que sepas lo que esto significa para ti y tus datos.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'Ok',
          reject: 'Descubre lo que ha cambiado',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Déjanos saber si aceptas las cookies',
          description: {
            uk: {
              first: 'Usamos ',
              linkText: 'cookies',
              last:
                ' para ofrecerte la mejor experiencia online. Déjanos saber si aceptas todas estas cookies.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'Nosotros y nuestros socios usamos tecnologías, como las ',
              linkText: 'cookies',
              last:
                ', y recogemos datos de búsqueda para ofrecerte la mejor experiencia online y personalizar el contenido y la publicidad que se te muestra. Por favor, déjanos saber si estás de acuerdo.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Sí, estoy de acuerdo',
          reject: 'No, llévame a los ajustes',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        audio: 'Audio',
        photogallery: 'Galería de fotos',
        video: 'Video',
        listen: 'Listen',
        watch: 'Vea',
        liveLabel: 'EN VIVO',
        previousRadioShow: 'Previous radio show',
        nextRadioShow: 'Next radio show',
        duration: 'Duration',
      },
    },
    brandSVG,
    mostRead: {
      header: 'Más leídas',
      lastUpdated: 'Última actualización: ',
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/news/help-41670342',
        text: 'Por qué puedes confiar en la BBC',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Lee sobre nuestra postura acerca de enlaces externos.',
      },
      links: [
        {
          href: 'https://www.bbc.com/mundo/institucional-36400005',
          text: 'Términos de uso',
        },
        {
          href: 'https://www.bbc.com/mundo/institucional-36400007',
          text: 'Sobre la BBC',
        },
        {
          href: 'https://www.bbc.com/mundo/institucional-36400009',
          text: 'Política de privacidad',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Cookies',
        },
        {
          href: 'https://www.bbc.com/mundo/institucional-36400011',
          text: 'Contacta a la BBC',
        },
      ],
      copyrightText:
        'BBC. La BBC no se hace responsable del contenido de sitios externos.',
    },
    fonts: [
      F_REITH_SANS_BOLD,
      F_REITH_SANS_BOLD_ITALIC,
      F_REITH_SANS_ITALIC,
      F_REITH_SANS_REGULAR,
      F_REITH_SERIF_MEDIUM,
      F_REITH_SERIF_MEDIUM_ITALIC,
    ],
    timezone: 'GMT',
    navigation: [
      {
        title: 'Noticias',
        url: '/mundo',
      },
      {
        title: 'Hay Festival',
        url: '/mundo/noticias-36795069',
      },
      {
        title: 'América Latina',
        url: '/mundo/america_latina',
      },
      {
        title: 'Internacional',
        url: '/mundo/internacional',
      },
      {
        title: 'Economía',
        url: '/mundo/topics/ca170ae3-99c1-48db-9b67-2866f85e7342',
      },
      {
        title: 'Tecnología',
        url: '/mundo/topics/31684f19-84d6-41f6-b033-7ae08098572a',
      },
      {
        title: 'Ciencia',
        url: '/mundo/topics/0f469e6a-d4a6-46f2-b727-2bd039cb6b53',
      },
      {
        title: 'Salud',
        url: '/mundo/topics/c4794229-7f87-43ce-ac0a-6cfcd6d3cef2',
      },
      {
        title: 'Cultura',
        url: '/mundo/topics/6a73afa3-ea6b-45c1-80bb-49060b99f864',
      },
      {
        title: 'Deportes',
        url: '/mundo/topics/4063f80f-cccc-44c8-9449-5ca44e4c8592',
      },
      {
        title: 'Video',
        url: '/mundo/media/video',
      },
      {
        title: 'Centroamérica Cuenta',
        url: '/mundo/noticias-43826245',
      },
    ],
    navigationSection: 'Secciones',
  },
};

export default withContext(service);
