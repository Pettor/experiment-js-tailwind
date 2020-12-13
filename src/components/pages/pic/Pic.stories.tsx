import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Pic } from './Pic';

export default {
  title: 'Pages/Pic',
  component: Pic,
} as Meta;

export const Default = () => (
    <Pic />
  );
  