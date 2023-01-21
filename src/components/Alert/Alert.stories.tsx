import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Alert from './Alert';
import AlertType from "./AlertType";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Alert',
    component: Alert,
    args: {}
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AlertDefault = Template.bind({});
AlertDefault.args = {
    message: 'Alert default',
    alertType: AlertType.Default,
    close: () => true
};

export const AlertWithButton = Template.bind({});
AlertWithButton.args = {
    message: 'Alert success with action',
    alertType: AlertType.Success,
    action: () => true,
    actionLabel: "Action",
    close: () => true
};

export const AlertInfo = Template.bind({});
AlertInfo.args = {
    message: 'Alert info',
    alertType: AlertType.Info,
    close: () => true
};

export const AlertInfoNoClose = Template.bind({});
AlertInfoNoClose.args = {
    message: 'Alert no close',
    alertType: AlertType.Info,
    asChild: true
};

export const AlertWarning = Template.bind({});
AlertWarning.args = {
    message: 'Alert warning',
    alertType: AlertType.Warning,
    close: () => true
};

export const AlertError = Template.bind({});
AlertError.args = {
    message: 'Alert error',
    alertType: AlertType.Error,
    close: () => true
};
