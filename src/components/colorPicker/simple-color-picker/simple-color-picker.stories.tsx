import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ColorVariantSelector from "./color-picker-simple";
import {ColorVariantProps} from "./simple-color-picker.interface";


export default {
    title: 'ColorVariantSelector',
    component: ColorVariantSelector,
} as Meta;

const Template: StoryFn<ColorVariantProps> = (args) => <ColorVariantSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    variants: [
        { inStock: true, colorValue: '#FF0000', colorName: 'Red' },
        { inStock: false, colorValue: '#00FF00', colorName: 'Green' },
        { inStock: true, colorValue: '#0000FF', colorName: 'Blue' },
    ]

};
