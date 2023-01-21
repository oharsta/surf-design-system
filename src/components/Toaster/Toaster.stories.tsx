import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Toaster from './Toaster';
import ToasterType from "./ToasterType";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Toaster',
    component: Toaster,
} as ComponentMeta<typeof Toaster>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toaster> = (args) => <Toaster {...args} />;

export const ToasterDefault = Template.bind({});
ToasterDefault.args = {
    message: 'Toaster default',
    toasterType: ToasterType.Default
};

export const ToasterWithButton = Template.bind({});
ToasterWithButton.args = {
    message: 'Toaster success with action',
    toasterType: ToasterType.Success,
    action: () => true,
    actionLabel: "Action"
};

export const ToasterInfo = Template.bind({});
ToasterInfo.args = {
    message: 'Toaster info',
    toasterType: ToasterType.Info
};

export const ToasterWarning = Template.bind({});
ToasterWarning.args = {
    message: 'Toaster warning',
    toasterType: ToasterType.Warning
};

export const ToasterError = Template.bind({});
ToasterError.args = {
    message: 'Toaster error',
    toasterType: ToasterType.Error
};
