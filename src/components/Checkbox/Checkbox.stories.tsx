import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Checkbox from './Checkbox';

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
    onChange: () => true,
    value: true,
    readOnly: false
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    txt: 'Primary disabled',
    disabled: true
};

export const Secondary = Template.bind({});
Secondary.args = {
    txt: 'Secondary',
    cancelButton: true
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
    txt: 'Secondary disabled',
    cancelButton: true,
    disabled: true
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    txt: 'Tertiary',
    className: 'tertiary',
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
    txt: 'Tertiary disabled',
    className: 'tertiary',
    disabled: true
};

export const DeleteButton = Template.bind({});
DeleteButton.args = {
    warningButton: true,
};
