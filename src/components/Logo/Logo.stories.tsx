import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Logo from './Logo';
import LogoType from "./LogoType";
import LogoColor from "./LogoColor";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Logo',
    component: Logo,
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

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

export const WhiteLogo = Template.bind({});
WhiteLogo.args = {
    label: 'Research Access Management',
    position: LogoType.Up,
    color: LogoColor.White
};
WhiteLogo.parameters = {backgrounds: {default: 'blue'}}