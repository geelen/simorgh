import React from 'react';
import { render } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import HeaderContainer from './index';
import { RequestContextProvider } from '#contexts/RequestContext';
import { ServiceContext } from '#contexts/ServiceContext';
import { ToggleContext } from '#contexts/ToggleContext';
import { service as pidginServiceConfig } from '#lib/config/services/pidgin';

const defaultToggleState = {
  test: {
    navOnArticles: {
      enabled: true,
    },
  },
  live: {
    navOnArticles: {
      enabled: false,
    },
  },
};

const mockToggleDispatch = jest.fn();

/* eslint-disable react/prop-types */
const HeaderContainerWithContext = ({
  pageType,
  service = 'pidgin',
  serviceContext = pidginServiceConfig.default,
  bbcOrigin = 'https://www.test.bbc.com',
}) => (
  <ToggleContext.Provider
    value={{
      toggleState: defaultToggleState,
      toggleDispatch: mockToggleDispatch,
    }}
  >
    <ServiceContext.Provider value={serviceContext}>
      <RequestContextProvider
        isAmp={false}
        pageType={pageType}
        service={service}
        statusCode={200}
        bbcOrigin={bbcOrigin}
        pathname="/pathname"
      >
        <HeaderContainer />
      </RequestContextProvider>
    </ServiceContext.Provider>
  </ToggleContext.Provider>
);

describe(`Header`, () => {
  shouldMatchSnapshot(
    'should render correctly for news article',
    HeaderContainerWithContext({
      pageType: 'article',
      service: 'news',
    }),
  );

  shouldMatchSnapshot(
    'should render correctly for WS frontPage',
    HeaderContainerWithContext({
      pageType: 'frontPage',
    }),
  );

  shouldMatchSnapshot(
    'should render correctly for WS radio page',
    HeaderContainerWithContext({
      pageType: 'media',
    }),
  );

  it('should output a nav bar for media asset pages', () => {
    render(HeaderContainerWithContext({ pageType: 'MAP' }));
    expect(document.querySelector(`header nav`)).not.toBeNull();
  });

  it('should output a nav bar for articles', () => {
    render(HeaderContainerWithContext({ pageType: 'article' }));
    expect(document.querySelector(`header nav`)).not.toBeNull();
  });

  it('should NOT output a nav bar for articles on live', () => {
    render(
      HeaderContainerWithContext({
        pageType: 'article',
        bbcOrigin: 'https://www.bbc.com',
      }),
    );
    expect(document.querySelector(`header nav`)).toBeNull();
  });
});
