import React from 'react';
import { shape } from 'prop-types';
import compose from 'ramda/src/compose';
import frontPagePropTypes from '#models/propTypes/frontPage';
import FrontPageMain from '../../containers/FrontPageMain';

import withVariant from '../../containers/PageHandlers/withVariant';
import withContexts from '../../containers/PageHandlers/withContexts';
import withPageWrapper from '../../containers/PageHandlers/withPageWrapper';
import withLoading from '../../containers/PageHandlers/withLoading';
import withError from '../../containers/PageHandlers/withError';
import withData from '../../containers/PageHandlers/withData';

const FrontPageContainer = ({ pageData }) => (
  <FrontPageMain frontPageData={pageData} />
);

FrontPageContainer.propTypes = {
  pageData: shape(frontPagePropTypes),
};

FrontPageContainer.defaultProps = {
  pageData: null,
};

const EnhancedFrontPageContainer = compose(
  withVariant,
  withContexts,
  withPageWrapper,
  withLoading,
  withError,
  withData,
)(FrontPageContainer);

export default EnhancedFrontPageContainer;
