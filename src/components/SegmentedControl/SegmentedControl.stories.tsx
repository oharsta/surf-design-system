import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import SegmentedControl from './SegmentedControl';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/SegmentedControl',
    component: SegmentedControl,
} as ComponentMeta<typeof SegmentedControl>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SegmentedControl> = (args) => <SegmentedControl {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    onClick: () => true,
    option: "second",
    options: ["first", "second", "third", "fourth"]
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
    onClick: () => true,
    option: "second",
    disabled: true,
    options: ["first", "second", "third"]
};

export const OptionLabelResolver = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OptionLabelResolver.args = {
    onClick: () => true,
    option: "second",
    optionLabelResolver: (option : string) =>  `${option}_txt`,
    options: ["first", "second", "third", "fourth"]
};
