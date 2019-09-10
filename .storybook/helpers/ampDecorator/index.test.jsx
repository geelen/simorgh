import React from 'react';
import AmpDecorator from './index';

jest.unmock('react-helmet');

describe('AmpDecorator', () => {
  it('should render correctly', () => {
    const component = AmpDecorator(() => <div>Foobar</div>);
    expect(component).toMatchSnapshot();
  });
});
