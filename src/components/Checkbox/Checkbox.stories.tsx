import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Checkbox from './Checkbox';
import {GhostLight} from "../Button/Button.stories";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checked.args = {
    name: "Checked",
    info: "Checked",
    onChange: () => true,
    value: true,
    readOnly: false,
    tooltip: "Lorum Ipsum"

};

export const NotChecked = Template.bind({});
NotChecked.args = {
    name: "Not checked",
    info: "Not checked",
    onChange: () => true,
    value: false,
    readOnly: false
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
    name: "Checked disabled",
    info: "Checked disabled",
    onChange: () => true,
    value: true,
    readOnly: true
};
CheckedDisabled.parameters = {backgrounds: { default: 'white' }}

export const NotCheckedDisabled = Template.bind({});
NotCheckedDisabled.args = {
    name: "Not checked disabled",
    info: "Not checked disabled",
    onChange: () => true,
    value: false,
    readOnly: true
};
NotCheckedDisabled.parameters = {backgrounds: { default: 'white' }}

export const Hidden = Template.bind({});
Hidden.args = {
    name: "Not checked disabled",
    info: "Not checked disabled",
    onChange: () => true,
    value: false,
    hide: true,
    readOnly: true
};
