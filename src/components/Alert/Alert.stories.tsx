import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Alert, {AlertType} from './Alert';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AlertDefault = Template.bind({});
AlertDefault.args = {
    message: 'Alert default',
    alertType: AlertType.Default,
    asChild: true
};

export const AlertWithButton = Template.bind({});
AlertWithButton.args = {
    message: 'Alert success with action',
    alertType: AlertType.Success,
    action: () => true,
    actionLabel: "Action"
};

export const AlertInfo = Template.bind({});
AlertInfo.args = {
    message: 'Alert info',
    alertType: AlertType.Info
};

export const AlertWarning = Template.bind({});
AlertWarning.args = {
    message: 'Alert warning',
    alertType: AlertType.Warning
};

export const AlertError = Template.bind({});
AlertError.args = {
    message: 'Alert error',
    alertType: AlertType.Error
};
