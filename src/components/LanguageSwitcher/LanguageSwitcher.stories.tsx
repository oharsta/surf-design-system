import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LanguageSwitcher from './LanguageSwitcher';
import {stopEvent} from "../../common/utils";

export default {
  title: 'ReactComponentLibrary/LanguageSwitcher',
  component: LanguageSwitcher,
} as ComponentMeta<typeof LanguageSwitcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LanguageSwitcher> = (args) => <LanguageSwitcher {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  languages: ['nl','en' ],
  currentLanguage: 'nl',
  onLanguageSwitch: (e:any) => stopEvent(e),
};
