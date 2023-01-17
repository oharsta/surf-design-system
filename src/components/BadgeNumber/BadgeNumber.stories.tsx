import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ReactComponent as AlarmBellIcon} from "../../icons/functional-icons/alarm-bell.svg";

import BadgeNumber from './BadgeNumber';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/BadgeNumber',
    component: BadgeNumber,
} as ComponentMeta<typeof BadgeNumber>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BadgeNumber> = (args) => <BadgeNumber {...args} />;

export const BadgeNumberTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeNumberTemplate.args = {
    value: 99,
};

export const SmallBadgeNumberTemplate = Template.bind({});
SmallBadgeNumberTemplate.args = {
    value: 99,
    small: true
};

export const ColoredBadgeNumberTemplate = Template.bind({});
ColoredBadgeNumberTemplate.args = {
    value: 99,
    colored: true
};
