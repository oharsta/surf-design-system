import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import MenuButton from './MenuButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/MenuButton',
    component: MenuButton,
} as ComponentMeta<typeof MenuButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuButton> = (args) => <MenuButton {...args} />;

export const MenuButtonTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MenuButtonTemplate.args = {
    txt: "Click me",
    isOpen: false,
    toggle: () => true,
};

export const MenuButtonActiveTemplate = Template.bind({});
MenuButtonActiveTemplate.args = {
    txt: "Click me",
    isOpen: true,
    toggle: () => true,
    children: <>
        <ul>
            <li>
                <a href="#">Mijn contacthistorie</a>
            </li>
            <li>
                <a href="#">Mijn gegevens</a>
            </li>
        </ul>
    </>
};

