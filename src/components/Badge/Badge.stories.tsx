import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ReactComponent as AlarmBellIcon} from "../../icons/functional-icons/allowance-no-talking.svg";

import Badge from './Badge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Badge',
    component: Badge,
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const BadgeIconTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeIconTemplate.args = {
    label: "Badge    text",
    children: <AlarmBellIcon/>
};

export const BadgeTemplate = Template.bind({});
BadgeTemplate.args = {
    label: "Badge text"
};

