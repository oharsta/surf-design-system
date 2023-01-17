import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Tooltip from './Tooltip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Tooltip',
    component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const TooltipTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TooltipTemplate.args = {
    tip: "<strong>Strong</strong> long tip with html in it. <a href='https://google.com' target='_blank'>Click me</a> please",
    clickable: true,
    anchorId: "1"
};

export const TooltipLong = Template.bind({});
TooltipLong.args = {
    tip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    anchorId: "2"
};