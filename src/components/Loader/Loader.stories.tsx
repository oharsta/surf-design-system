import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Loader from './Loader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const LoaderTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoaderTemplate.args = {};
