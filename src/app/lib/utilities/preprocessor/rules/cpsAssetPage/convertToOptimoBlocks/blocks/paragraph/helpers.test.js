import { processBlock } from './helpers';

describe('processBlock', () => {
  it('should make the introduction paragraph bold', () => {
    const input = {
      text: 'paragraph one',
      role: 'introduction',
      markupType: 'plain_text',
      type: 'paragraph',
    };

    const expected = {
      text: '<bold>paragraph one</bold>',
      role: 'introduction',
      markupType: 'candy_xml',
      type: 'paragraph',
    };

    expect(processBlock(input)).toEqual(expected);
  });

  it('should make the introduction paragraph bold even if its already candy xml', () => {
    const input = {
      text: '<italic>paragraph one</italic>',
      role: 'introduction',
      markupType: 'candy_xml',
      type: 'paragraph',
    };

    const expected = {
      text: '<bold><italic>paragraph one</italic></bold>',
      role: 'introduction',
      markupType: 'candy_xml',
      type: 'paragraph',
    };

    expect(processBlock(input)).toEqual(expected);
  });

  it('should handle special characters for plain_text', () => {
    const input = {
      text: 'Paragraph containing special characters: &quot; &amp; &lt; &gt;',
      markupType: 'plain_text',
      type: 'paragraph',
    };

    const expected = {
      text: 'Paragraph containing special characters: " & < >',
      markupType: 'plain_text',
      type: 'paragraph',
    };

    expect(processBlock(input)).toEqual(expected);
  });

  it('should not handle special characters for candy_xml', () => {
    const input = {
      text: 'Paragraph containing special characters: &quot; &amp; &lt; &gt;',
      markupType: 'candy_xml',
      type: 'paragraph',
    };

    const expected = {
      text: 'Paragraph containing special characters: &quot; &amp; &lt; &gt;',
      markupType: 'candy_xml',
      type: 'paragraph',
    };

    expect(processBlock(input)).toEqual(expected);
  });
});
