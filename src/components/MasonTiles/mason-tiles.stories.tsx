// MasonTiles.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MasonTiles, { MasonTilesProps } from './MasonTiles';
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";
import {BeverageGridData} from "../../data/demo-product-libraries";

export default {
    title: 'Components/MasonTiles',
    component: MasonTiles,
} as Meta;

const Template: StoryFn<MasonTilesProps> = (args) => <MasonTiles {...args} />;

export const Layout1 = Template.bind({});
Layout1.args = {
    cellItems: BeverageGridData,
    layout: 'layout1',
};

export const Layout2 = Template.bind({});
Layout2.args = {
    cellItems: [
        { cellType : 'basic',title: 'Item 1', highlightImage: 'image1.jpg', backgroundColor: '#f1f1f1', CTA: 'Click Me' },
        { cellType : 'basic',title: 'Item 2', highlightImage: 'image1.jpg', backgroundColor: '#f1f1f1', CTA: 'Click Me' },
        { cellType : 'hero',title: 'Item 3', highlightImage: 'image1.jpg', backgroundColor: '#f1f1f1', CTA: 'Click Me' },
        // Add more items
    ],
    layout: 'layout2',
};
