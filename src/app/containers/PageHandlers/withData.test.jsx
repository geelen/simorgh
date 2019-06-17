import React from 'react';
import { shouldShallowMatchSnapshot } from '../../../testHelpers';
import { articleDataNews, articleDataPersian } from '../Article/fixtureData';
import WithData from './withData';

describe('withData HOC', () => {
  const Component = () => <h1>Hola</h1>;
  const WithDataHOC = WithData(Component);

  const noDataProps = {
    data: null,
  };

  const noAssetData = {
    data: {
      status: 200,
    },
  };

  const non200StatusProps = {
    data: {
      pageData: articleDataNews,
      status: 157,
    },
  };

  const validNewsProps = {
    data: {
      pageData: articleDataNews,
      status: 200,
    },
    service: 'news',
  };

  const validPersianProps = {
    data: {
      pageData: articleDataPersian,
      status: 200,
    },
    service: 'news',
  };

  describe('with no data', () => {
    shouldShallowMatchSnapshot(
      `should return the errorMain component and 500 status`,
      <WithDataHOC {...noDataProps} />,
    );
  });

  describe('with missing articleData', () => {
    shouldShallowMatchSnapshot(
      `should return the errorMain component`,
      <WithDataHOC {...noAssetData} />,
    );
  });

  describe('with valid props', () => {
    shouldShallowMatchSnapshot(
      `should return the passed in component`,
      <WithDataHOC {...validNewsProps} />,
    );

    describe('but different home service other than locale service', () => {
      shouldShallowMatchSnapshot(
        `should return the errorMain component`,
        <WithDataHOC {...validPersianProps} />,
      );
    });
  });

  describe('with non 200 status', () => {
    shouldShallowMatchSnapshot(
      `should return the errorMain component`,
      <WithDataHOC {...non200StatusProps} />,
    );
  });
});
