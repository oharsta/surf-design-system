import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Button, {defaultButtonProps} from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Button',
    component: Button,
    args: {
        ...defaultButtonProps
    }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    txt: 'Default'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    txt: 'Primary disabled',
    disabled: true
};

export const Secondary = Template.bind({});
Secondary.args = {
    txt: 'Secondary',
    cancelButton: true
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
    txt: 'Secondary disabled',
    cancelButton: true,
    disabled: true
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    txt: 'Tertiary',
    className: ' sds--btn--tertiary',
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
    txt: 'Tertiary disabled',
    className: ' sds--btn--tertiary',
    disabled: true
};

export const DeleteButton = Template.bind({});
DeleteButton.args = {
    warningButton: true,
};
