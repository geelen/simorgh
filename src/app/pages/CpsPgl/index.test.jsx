import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import CpsAssetPage from '.';
import pidginPageData from '#data/pidgin/cpsAssets/sport-23252855';

const cpsAssetScaffoldProps = {
  isAmp: false,
  pageType: 'PGL',
  service: 'pidgin',
  pathname: '/pidgin/sport-23252855',
  match: {
    params: {
      assetUri: 'sport-23252855',
      pageData: pidginPageData,
    },
  },
  status: 200,
};

jest.mock('../../Containers/PageHandlers/withPageWrapper', () => Component => {
  const PageWrapperContainer = props => (
    <div id="PageWrapperContainer">
      <Component {...props} />
    </div>
  );

  return PageWrapperContainer;
});

jest.mock('../../Containers/PageHandlers/withLoading', () => Component => {
  const LoadingContainer = props => (
    <div id="LoadingContainer">
      <Component {...props} />
    </div>
  );

  return LoadingContainer;
});

jest.mock('../../Containers/PageHandlers/withError', () => Component => {
  const ErrorContainer = props => (
    <div id="ErrorContainer">
      <Component {...props} />
    </div>
  );

  return ErrorContainer;
});

jest.mock('../../Containers/PageHandlers/withData', () => Component => {
  const DataContainer = props => (
    <div id="DataContainer">
      <Component {...props} />
    </div>
  );

  return DataContainer;
});

jest.mock('../../Containers/CpsAssetPageMain', () => {
  const CpsAssetPageMain = () => <div>CpsAssetPageMain</div>;

  return CpsAssetPageMain;
});

describe('CpsAssetPage', () => {
  describe('snapshots', () => {
    shouldMatchSnapshot(
      'should match scaffold snapshot',
      <CpsAssetPage {...cpsAssetScaffoldProps} />,
    );
  });
});
