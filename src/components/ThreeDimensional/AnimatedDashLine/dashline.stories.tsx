import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import AnimatedDashedLine, { AnimatedDashedLineProps } from './DashLine';

export default {
    title: 'Components/AnimatedDashedLine',
    component: AnimatedDashedLine,
} as Meta;

const Template: StoryFn<AnimatedDashedLineProps> = (args) => <AnimatedDashedLine {...args} />;

export const Default = Template.bind({});
Default.args = {
    numDots: 5,
    distanceBetween: 2,
};
