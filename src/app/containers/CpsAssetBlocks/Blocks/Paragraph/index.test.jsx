import React from 'react';
import { shouldMatchSnapshot, isNull } from '@bbc/psammead-test-helpers';
import { ServiceContextProvider } from '../../../../contexts/ServiceContext';
import { suppressPropWarnings } from '../../../../../testHelpers';
import Paragraph from '.';

describe('CpsAssetBlocks Paragraph', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <ServiceContextProvider service="news">
      <Paragraph uuid="uuid" idAttr="idAttr" text="Example text" />
    </ServiceContextProvider>,
  );

  describe('when text isnt provided', () => {
    suppressPropWarnings(['text', 'undefined']);

    isNull(
      'should render null',
      <ServiceContextProvider service="news">
        <Paragraph uuid="uuid" idAttr="idAttr" />
      </ServiceContextProvider>,
    );
  });
});
