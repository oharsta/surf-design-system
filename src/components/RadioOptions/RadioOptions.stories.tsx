import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import RadioOptions from './RadioOptions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/RadioOptions',
    component: RadioOptions,
    args: {
        trueLabel: "Yes",
        falseLabel: "No"
    }
} as ComponentMeta<typeof RadioOptions>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioOptions> = (args) => <RadioOptions {...args} />;

export const YesEnabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
YesEnabled.args = {
    label: "SURF Organisation",
    name: "Checked",
    value: true,
    onChange: () => true,
    disabled: false,
    tooltip: "Lorum Ipsum"
};

export const NoEnabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoEnabled.args = {
    label: "SURF Organisation",
    name: "Checked",
    value: false,
    onChange: () => true,
    disabled: false,
    tooltip: "Lorum Ipsum"
};

export const EmptyState = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyState.args = {
    label: "SURF Organisation",
    name: "Checked",
    value: null,
    onChange: () => true,
    disabled: false,
    tooltip: "Lorum Ipsum"
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Disabled",
    name: "Disabled",
    value: false,
    onChange: () => true,
    disabled: true,
    tooltip: "Lorum Ipsum"
};
