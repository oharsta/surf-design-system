import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ReactComponent as AlarmBellIcon} from "../../icons/functional-icons/alarm-bell.svg";

import Chip from './Chip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Chip',
    component: Chip,
} as ComponentMeta<typeof Chip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const ChipIconTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChipIconTemplate.args = {
    label: "Chip text",
    children: <AlarmBellIcon/>
};

export const ChipTemplate = Template.bind({});
ChipTemplate.args = {
    label: "Chip text"
};

export const ChipActiveTemplate = Template.bind({});
ChipActiveTemplate.args = {
    label: "Active chip",
    isActive: true
};
