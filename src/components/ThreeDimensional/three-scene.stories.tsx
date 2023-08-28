import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ThreeScene from './ThreeScene';

export default {
    title: 'ThreeScene',
    component: ThreeScene,
    argTypes: {
        cameraPositionX: { control: 'range', min: 0, max: 360, step: 0.1 },
        cameraPositionY: { control: 'range', min: 0, max: 360, step: 0.1 },
        cameraPositionZ: { control: 'range', min: 0, max: 360, step: 0.1 },
        FOV: { control: 'range', min: 0, max: 100, step: 0.1 },
    },
} as Meta;

const Template: StoryFn = (args) => <ThreeScene {...args} />;

export const Default = Template.bind({});
Default.args = {
    cameraPositionX: 0,
    cameraPositionY: 25,
    cameraPositionZ: 22,
    FOV: 55,
};
