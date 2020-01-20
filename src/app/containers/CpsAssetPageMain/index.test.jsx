/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { StaticRouter } from 'react-router-dom';
import { matchSnapshotAsync } from '@bbc/psammead-test-helpers';
import assocPath from 'ramda/src/assocPath';
import path from 'ramda/src/path';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { RequestContextProvider } from '#contexts/RequestContext';
import { ToggleContext } from '#contexts/ToggleContext';
import CpsAssetPageMain from '.';
import preprocessor from '#lib/utilities/preprocessor';
import styPageData from '#data/igbo/cpsAssets/afirika-23252735';
import mapPageData from '#data/pidgin/cpsAssets/23248703';
import pglPageData from '#data/pidgin/cpsAssets/sport-23252855';
import uzbekPageData from '#data/uzbek/cpsAssets/sport-23248721';
import { cpsAssetPreprocessorRules } from '#app/routes/getInitialData/utils/preprocessorRulesConfig';

const toggleState = {
  local: {
    mediaPlayer: {
      enabled: true,
    },
  },
  test: {
    mediaPlayer: {
      enabled: true,
    },
  },
  live: {
    mediaPlayer: {
      enabled: false,
    },
  },
};

const createAssetPage = ({ pageData }, service) => (
  <StaticRouter>
    <ToggleContext.Provider value={{ toggleState, toggleDispatch: jest.fn() }}>
      <ServiceContextProvider service={service}>
        <RequestContextProvider
          bbcOrigin="https://www.test.bbc.co.uk"
          isAmp={false}
          pageType={pageData.metadata.type}
          pathname={pageData.metadata.locators.assetUri}
          service={service}
          statusCode={200}
        >
          <CpsAssetPageMain service={service} pageData={pageData} />
        </RequestContextProvider>
      </ServiceContextProvider>
    </ToggleContext.Provider>
  </StaticRouter>
);

const escapedText = text => {
  const textReplacements = {
    '&quot;': '"',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
  };

  const replacementsRegex = new RegExp(
    Object.keys(textReplacements).join('|'),
    'gi',
  );

  return text.replace(replacementsRegex, match => textReplacements[match]);
};

const getBlockTextAtIndex = (index, originalPageData) => {
  return path(['content', 'blocks', index, 'text'], originalPageData);
};

describe('CpsAssetPageMain', () => {
  it('should match snapshot for STY', async () => {
    const pageData = await preprocessor(styPageData, cpsAssetPreprocessorRules);

    const page = createAssetPage({ pageData }, 'igbo');
    await matchSnapshotAsync(page);
  });

  it('should match snapshot for PGL', async () => {
    const pageData = await preprocessor(pglPageData, cpsAssetPreprocessorRules);

    const page = createAssetPage({ pageData }, 'igbo');
    await matchSnapshotAsync(page);
  });

  describe('MAP', () => {
    let pageData;
    let asFragment;
    let getByText;

    beforeEach(async () => {
      pageData = await preprocessor(mapPageData, cpsAssetPreprocessorRules);

      ({ asFragment, getByText } = render(
        createAssetPage({ pageData }, 'pidgin'),
      ));
    });

    it('should match snapshot', async () => {
      await matchSnapshotAsync(createAssetPage({ pageData }, 'pidgin'));
    });

    it('should render component', () => {
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render paragraph', () => {
      const paragraphText = getBlockTextAtIndex(1, mapPageData);

      expect(getByText(escapedText(paragraphText))).toBeInTheDocument();
    });

    it('should render image', () => {
      const imageCaption = path(
        ['content', 'blocks', 25, 'caption'],
        mapPageData,
      );

      // Images not rendered properly due to lazyload, therefore can only check caption text
      expect(getByText(escapedText(imageCaption))).toBeInTheDocument();
    });

    describe('AV player', () => {
      let liveStreamSource;

      const getLiveStreamBlock = processedPageData => {
        return path(['content', 'model', 'blocks', 1], processedPageData);
      };

      const getLiveStreamSource = liveStreamBlock => {
        return path(
          [
            'model',
            'blocks',
            '0',
            'model',
            'blocks',
            0,
            'model',
            'versions',
            0,
            'versionId',
          ],
          liveStreamBlock,
        );
      };

      it('should render version (live audio stream)', async () => {
        pageData = await preprocessor(uzbekPageData, cpsAssetPreprocessorRules);
        const liveStreamBlock = getLiveStreamBlock(pageData);
        liveStreamSource = getLiveStreamSource(liveStreamBlock);
        expect(liveStreamBlock.type).toBe('version');

        ({ asFragment } = render(createAssetPage({ pageData }, 'uzbek')));

        expect(
          document.querySelector(`iframe[src*=${liveStreamSource}]`),
        ).not.toBeNull();
        expect(asFragment()).toMatchSnapshot();
      });

      it('should render video', () => {
        const liveStreamBlock = getLiveStreamBlock(pageData);
        liveStreamSource = getLiveStreamSource(liveStreamBlock);
        expect(liveStreamBlock.type).toBe('video');

        expect(
          document.querySelector(`iframe[src*=${liveStreamSource}]`),
        ).not.toBeNull();
      });
    });

    describe('heading', () => {
      let headingText;

      const getBlockAtIndex = (index, processedPageData) => {
        return path(['content', 'model', 'blocks', index], processedPageData);
      };

      beforeAll(() => {
        headingText = getBlockTextAtIndex(2, mapPageData);
      });

      it('should render faux headline', () => {
        const fauxHeadlineBlock = getBlockAtIndex(2, pageData);

        expect(fauxHeadlineBlock.type).toBe('fauxHeadline');
        expect(getByText(escapedText(headingText))).toBeInTheDocument();
      });

      it('should render visually hidden headline', () => {
        const hiddenHeadline = getBlockAtIndex(0, pageData);

        expect(hiddenHeadline.type).toBe('visuallyHiddenHeadline');
        expect(getByText(escapedText(headingText))).toBeInTheDocument();
      });
    });

    it('should render sub heading', () => {
      const subHeadingText = getBlockTextAtIndex(3, mapPageData);

      expect(getByText(escapedText(subHeadingText))).toBeInTheDocument();
    });

    it('should render crosshead', () => {
      const crossHeadText = getBlockTextAtIndex(4, mapPageData);

      expect(getByText(escapedText(crossHeadText))).toBeInTheDocument();
    });

    it('should render firstPublished timestamp for Pidgin', () => {
      expect(getByText('13 September 2019')).toBeInTheDocument();
    });

    it('should render lastPublished timestamp for Pidgin', () => {
      expect(getByText('New Informate 20 November 2019')).toBeInTheDocument();
    });
  });

  it('should only render firstPublished timestamp for Igbo when lastPublished is less than 1 min later', async () => {
    const pageData = await preprocessor(styPageData, cpsAssetPreprocessorRules);

    const { getByText } = render(createAssetPage({ pageData }, 'igbo'));

    expect(getByText('23 Ọktọba 2019')).toBeInTheDocument();
  });

  it('should not show the pop-out timestamp when allowDateStamp is false', async () => {
    const pageDataWithHiddenTimestamp = assocPath(
      ['metadata', 'options', 'allowDateStamp'],
      false,
      await preprocessor(mapPageData, cpsAssetPreprocessorRules),
    );

    const { asFragment } = render(
      createAssetPage({ pageData: pageDataWithHiddenTimestamp }, 'pidgin'),
    );

    expect(document.querySelector('main time')).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  it('has a single "main" element, and a single "complementary" element (a11y)', async () => {
    const pageData = await preprocessor(mapPageData, cpsAssetPreprocessorRules);

    render(createAssetPage({ pageData }, 'pidgin'));
    expect(document.querySelectorAll(`[role='main']`).length).toBe(1);
    expect(document.querySelectorAll(`[role='complementary']`).length).toBe(1);
  });
});
