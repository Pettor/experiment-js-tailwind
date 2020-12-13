import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Page, PageProps } from './Page';
import * as HeaderStories from '../../modules/header/Header.stories';

export default {
  title: 'Pages/Page',
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
