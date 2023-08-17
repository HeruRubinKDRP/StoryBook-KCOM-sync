import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import StepComponent from './CoffeeKits';

export default {
    title: 'Components/StepComponent',
    component: StepComponent,
} as Meta;

const Template: StoryFn = (args) => <StepComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};
