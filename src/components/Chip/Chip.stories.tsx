import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ReactComponent as AlarmBellIcon} from "../../icons/functional-icons/alarm-bell.svg";

import Chip from './Chip';
import ChipType from "./ChipType";

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

export const ChipMain100 = Template.bind({});
ChipMain100.args = {
    label: "Main-100 chip",
    type: ChipType.Main_100
};

export const ChipMain200 = Template.bind({});
ChipMain200.args = {
    label: "Main-200 chip",
    type: ChipType.Main_200
};

export const ChipMain300 = Template.bind({});
ChipMain300.args = {
    label: "Main-300 chip",
    type: ChipType.Main_300
};

export const ChipMain400 = Template.bind({});
ChipMain400.args = {
    label: "Main-400 chip",
    type: ChipType.Main_400
};

export const ChipMain500 = Template.bind({});
ChipMain500.args = {
    label: "Main-500 chip",
    type: ChipType.Main_500
};

export const ChipSupport100 = Template.bind({});
ChipSupport100.args = {
    label: "Support-100 chip",
    type: ChipType.Support_100
};

export const ChipSupport400 = Template.bind({});
ChipSupport400.args = {
    label: "Support-400 chip",
    type: ChipType.Support_400
};

export const ChipSupport500 = Template.bind({});
ChipSupport500.args = {
    label: "Support-500 chip",
    type: ChipType.Support_500
};

export const ChipStatus_default = Template.bind({});
ChipStatus_default.args = {
    label: "Status-default chip",
    type: ChipType.Status_default
};

export const ChipStatus_success = Template.bind({});
ChipStatus_success.args = {
    label: "Status-success chip",
    type: ChipType.Status_success
};

export const ChipStatus_warning = Template.bind({});
ChipStatus_warning.args = {
    label: "Status-warning chip",
    type: ChipType.Status_warning
};

export const ChipStatus_error = Template.bind({});
ChipStatus_error.args = {
    label: "Status-error chip",
    type: ChipType.Status_error
};

export const ChipStatus_info = Template.bind({});
ChipStatus_info.args = {
    label: "Status-info chip",
    type: ChipType.Status_info
};
