import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LanguageSwitcher from './LanguageSwitcher';

export default {
  title: 'ReactComponentLibrary/LanguageSwitcher',
  component: LanguageSwitcher,
} as ComponentMeta<typeof LanguageSwitcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LanguageSwitcher> = (args) => <LanguageSwitcher {...args} />;

export const NlEn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NlEn.args = {
  languages: ['nl','en' ],
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  languages: ['nl','en' ],

};