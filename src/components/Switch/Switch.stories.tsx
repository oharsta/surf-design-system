import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Switch from './Switch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Switch',
    component: Switch,
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const EnabledTrue = Template.bind({});
EnabledTrue.args = {
    name: "EnabledTrue",
    value: true,
    onChange: () => true,
    disabled: false,
    tooltip: "Lorum Ipsum"
};

export const EnabledFalse = Template.bind({});
EnabledFalse.args = {
    name: "EnabledFalse",
    value: false,
    onChange: () => true,
    disabled: false
};

export const DisabledTrue = Template.bind({});
DisabledTrue.args = {
    name: "DisabledTrue",
    value: true,
    onChange: () => true,
    disabled: true,
    tooltip: "Lorum Ipsum"
};
