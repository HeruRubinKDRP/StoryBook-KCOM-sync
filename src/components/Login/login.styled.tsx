import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {LoginFlyout} from "./Login";


export default {
    title: 'Components/LoginFlyout',
    component: LoginFlyout,
} as Meta;

const Template: StoryFn = (args) => <LoginFlyout {...args} />;

export const Default = Template.bind({});
Default.args = {};
