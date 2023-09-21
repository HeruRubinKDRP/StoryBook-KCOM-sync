import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import AnimatedDashedLine, { iAnimatedDashedLineProps } from './DashLine';

export default {
    title: 'Components/AnimatedDashedLine',
    component: AnimatedDashedLine,
} as Meta;

const Template: StoryFn<iAnimatedDashedLineProps> = (args) => <AnimatedDashedLine {...args} />;

export const Default = Template.bind({});
Default.args = {
    numDots: 5,
    distanceBetween: 2,
};
