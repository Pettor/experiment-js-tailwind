import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Documentation } from '../decorators/Documentation';

export default {
  title: 'Foundation/Typography',
  decorators: [Documentation],
} as Meta;

export const Default = () => (
  <>
    <h2>Font sizes</h2>
    <div>
      <p className="sb-font-size-xl">The quick brown fox jumps over the lazy dog <code>$font-size-xl</code></p>
      <p className="sb-font-size-l">The quick brown fox jumps over the lazy dog <code>$font-size-l</code></p>
      <p className="sb-font-size-m">The quick brown fox jumps over the lazy dog <code>$font-size-m</code></p>
      <p className="sb-font-size-base">The quick brown fox jumps over the lazy dog <code>$font-size-base</code></p>
      <p className="sb-font-size-s">The quick brown fox jumps over the lazy dog <code>$font-size-s</code></p>
      <p className="sb-font-size-xs">The quick brown fox jumps over the lazy dog <code>$font-size-xs</code></p>
      <p className="sb-font-size-xxs">The quick brown fox jumps over the lazy dog <code>$font-size-xxs</code></p>
    </div>
    <br/>
    <h2>Font weights</h2>
    <div>
      <p className="sb-font-weight-light">The quick brown fox jumps over the lazy dog <code>$font-weight-light</code></p>
      <p className="sb-font-weight-regular">The quick brown fox jumps over the lazy dog <code>$font-weight-regular</code></p>
      <p className="sb-font-weight-bold">The quick brown fox jumps over the lazy dog <code>$font-weight-bold</code></p>
    </div>
  </>
);
