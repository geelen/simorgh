import React from 'react';
import { string, shape, object, arrayOf } from 'prop-types';
import path from 'ramda/src/path';
import ATIAnalytics from '../ATIAnalytics';
import MetadataContainer from '../Metadata';
import { Grid, GridItemConstrainedMedium } from '../../lib/styledGrid';
import CpsAssetBlocks from '../CpsAssetBlocks';

const CpsAssetMain = ({ pageData }) => {
  const blocks = path(['content', 'blocks'], pageData);
  const promo = path(['promo'], pageData);
  const metadata = path(['metadata'], pageData);

  return (
    <>
      <ATIAnalytics data={pageData} />
      <MetadataContainer metadata={metadata} promo={promo} />
      <Grid as="main" role="main">
        <GridItemConstrainedMedium>
          <CpsAssetBlocks blocks={blocks} />
        </GridItemConstrainedMedium>
      </Grid>
    </>
  );
};

CpsAssetMain.propTypes = {
  pageData: shape({
    metadata: shape({
      id: string,
      tags: object,
    }),
    promo: shape({
      subtype: string,
      name: string,
    }),
    content: shape({
      blocks: arrayOf(
        shape({
          uuid: string,
          id: string,
          externalId: string,
          text: string,
          type: string,
        }),
      ),
    }),
  }).isRequired,
};

export default CpsAssetMain;
