import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Toaster from '../Toaster/Toaster';
import ToasterContainer from "./ToasterContainer";
import ToasterType from "../Toaster/ToasterType";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/ToasterContainer',
    component: ToasterContainer,
} as ComponentMeta<typeof ToasterContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToasterContainer> = (args) => <ToasterContainer {...args} />;

export const ToasterContainerDefault = Template.bind({});
ToasterContainerDefault.args = {
    children: <Toaster message={"Hello world!"} toasterType={ToasterType.Info}/>
};
