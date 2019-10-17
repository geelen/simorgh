/*
 * © Jordan Tart https://github.com/jtart
 * https://github.com/jtart/react-universal-app
 */
import React from 'react';
import reactRouterConfig from 'react-router-config';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { App } from './App';

jest.mock('react-router-config');

describe('App', () => {
  let wrapper;
  const initialData = { pageData: 'Some initial data' };
  const error = 'Error!';
  const match = { params: { service: 'news', amp: false, variant: '/simp' } };
  const history = { action: 'POP' };

  const route = {
    getInitialData: jest.fn(),
    pageType: 'article',
  };

  reactRouterConfig.matchRoutes.mockReturnValue([{ route, match }]);

  reactRouterConfig.renderRoutes.mockReturnValue(
    <h1>{initialData.pageData}</h1>,
  );

  beforeAll(() => {
    wrapper = mount(
      <App
        location={{ pathname: 'pathnameOne' }}
        routes={[]}
        initialData={initialData}
        bbcOrigin="https://www.bbc.co.uk"
        history={history}
      />,
    );
  });

  it('should return rendered routes', () => {
    expect.assertions(4);
    expect(route.getInitialData).not.toHaveBeenCalled();
    expect(reactRouterConfig.renderRoutes).toHaveBeenCalledTimes(1);
    expect(reactRouterConfig.renderRoutes).toHaveBeenCalledWith([], {
      bbcOrigin: 'https://www.bbc.co.uk',
      pageData: initialData.pageData,
      error: undefined,
      isAmp: false,
      loading: false,
      pageType: 'article',
      service: 'news',
      pathname: 'pathnameOne',
      previousPath: null,
      variant: 'simp',
    });
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentDidUpdate', () => {
    describe('same location', () => {
      it('should not call set state with new data', () => {
        reactRouterConfig.renderRoutes.mockClear();

        act(() => {
          wrapper.setProps({
            location: { pathname: 'pathnameOne' },
            history: { action: 'PUSH' },
          });

          expect.assertions(2);
          expect(route.getInitialData).not.toHaveBeenCalled();
          expect(reactRouterConfig.renderRoutes).not.toHaveBeenCalled();
        });
      });
    });

    describe('different location', () => {
      beforeEach(() => {
        // clear `route.getInitialData` and `reactRouterConfig.renderRoutes` mocks
        jest.clearAllMocks();
      });
      describe('rejected loadInitialData', () => {
        it('should set state to the error', async () => {
          route.getInitialData.mockImplementation(() =>
            Promise.resolve({ pageData: null, status: null, error }),
          );

          await act(async () => {
            wrapper.setProps({ location: { pathname: 'pathnameTwo' } });
          });

          await route.getInitialData;

          expect.assertions(2);

          expect(reactRouterConfig.renderRoutes).toHaveBeenNthCalledWith(
            2,
            [],
            {
              bbcOrigin: 'https://www.bbc.co.uk',
              pageData: null,
              status: null,
              error: null,
              id: undefined,
              isAmp: false,
              loading: true,
              pageType: 'article',
              service: 'news',
              pathname: 'pathnameTwo',
              previousPath: 'pathnameOne',
              variant: 'simp',
            },
          );

          // data fetch promise rejected, set data to null, loading to false and set error
          expect(reactRouterConfig.renderRoutes).toHaveBeenNthCalledWith(
            3,
            [],
            {
              bbcOrigin: 'https://www.bbc.co.uk',
              pageData: null,
              status: null,
              error,
              isAmp: false,
              loading: false,
              pageType: 'article',
              service: 'news',
              pathname: 'pathnameTwo',
              previousPath: 'pathnameOne',
              variant: 'simp',
            },
          );
        });
      });

      describe('successful fetch of route, match, and initial props', () => {
        it('should call set state with new data', async () => {
          const pathname = 'pathnameThree';
          const data = { pageData: 'Really cool data', status: 200 };

          route.getInitialData.mockImplementation(() => Promise.resolve(data));

          await act(async () => {
            wrapper.setProps({ location: { pathname } });
          });

          await route.getInitialData();

          expect.assertions(3);

          expect(route.getInitialData).toHaveBeenCalledWith(match.params);

          // start data fetch and set loading to true
          expect(reactRouterConfig.renderRoutes).toHaveBeenNthCalledWith(
            2,
            [],
            {
              bbcOrigin: 'https://www.bbc.co.uk',
              pageData: null,
              status: null,
              error: null,
              id: undefined,
              isAmp: false,
              loading: true,
              pageType: 'article',
              service: 'news',
              pathname: 'pathnameThree',
              previousPath: 'pathnameTwo',
              variant: 'simp',
            },
          );

          // data fetch promise resolved, set data to fetched data and loading to false
          expect(reactRouterConfig.renderRoutes).toHaveBeenNthCalledWith(
            3,
            [],
            {
              bbcOrigin: 'https://www.bbc.co.uk',
              pageData: data.pageData,
              status: data.status,
              error: undefined,
              id: undefined,
              isAmp: false,
              loading: false,
              pageType: 'article',
              service: 'news',
              pathname: 'pathnameThree',
              previousPath: 'pathnameTwo',
              variant: 'simp',
            },
          );
        });
      });
    });
  });
});
