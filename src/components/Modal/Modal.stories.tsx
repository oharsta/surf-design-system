import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Modal, {LogoType} from './Logo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Logo',
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const UpperLogo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UpperLogo.args = {
  label: 'Research Access Management',
  position: LogoType.Up
};

export const BottomLogo = Template.bind({});
BottomLogo.args = {
  label: 'Research Access Management',
  position: LogoType.Bottom
};
