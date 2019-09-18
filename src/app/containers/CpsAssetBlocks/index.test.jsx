import React from 'react';
import path from 'ramda/src/path';
import { latin } from '@bbc/gel-foundations/scripts';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { ServiceContext } from '../../contexts/ServiceContext';
import { RequestContext } from '../../contexts/RequestContext';
import CpsAssetBlocks from '.';
import amharicPageData from '../../../../data/amharic/bbc_amharic_radio/liveradio';
import addIdsToBlocks from '../../routes/getInitialData/mediapage/addIdsToBlocks';

const pageData = addIdsToBlocks(amharicPageData);
const blocks = path(['content', 'blocks'], pageData);

describe('Cps Asset Blocks', () => {
  shouldMatchSnapshot(
    'should match snapshot',
    <ServiceContext.Provider value={{ service: 'news', script: latin }}>
      <RequestContext.Provider
        value={{ platform: 'canonical', pageType: 'media' }}
      >
        <CpsAssetBlocks blocks={blocks} />
      </RequestContext.Provider>
    </ServiceContext.Provider>,
  );
});
