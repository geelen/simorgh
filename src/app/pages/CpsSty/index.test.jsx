import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import CpsAssetPage from '.';
import pidginPageData from '#data/pidgin/cpsAssets/world-23252817';

const cpsAssetScaffoldProps = {
  isAmp: false,
  pageType: 'STY',
  service: 'pidgin',
  pathname: '/pidgin/world-23252817',
  match: {
    params: {
      assetUri: 'world-23252817',
      pageData: pidginPageData,
    },
  },
  status: 200,
};

jest.mock('../../containers/PageHandlers/withPageWrapper', () => Component => {
  const PageWrapperContainer = props => (
    <div id="PageWrapperContainer">
      <Component {...props} />
    </div>
  );

  return PageWrapperContainer;
});

jest.mock('../../containers/PageHandlers/withLoading', () => Component => {
  const LoadingContainer = props => (
    <div id="LoadingContainer">
      <Component {...props} />
    </div>
  );

  return LoadingContainer;
});

jest.mock('../../containers/PageHandlers/withError', () => Component => {
  const ErrorContainer = props => (
    <div id="ErrorContainer">
      <Component {...props} />
    </div>
  );

  return ErrorContainer;
});

jest.mock('../../containers/PageHandlers/withData', () => Component => {
  const DataContainer = props => (
    <div id="DataContainer">
      <Component {...props} />
    </div>
  );

  return DataContainer;
});

jest.mock('../../containers/CpsAssetPageMain', () => {
  const CpsAssetPageMain = () => <div>CpsAssetPageMain</div>;

  return CpsAssetPageMain;
});

describe('CPS STY Page', () => {
  describe('snapshots', () => {
    shouldMatchSnapshot(
      'should match scaffold snapshot',
      <CpsAssetPage {...cpsAssetScaffoldProps} />,
    );
  });
});
