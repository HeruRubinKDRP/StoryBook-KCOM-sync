// MasonTiles.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MasonTiles, { MasonTilesProps } from './MasonTiles';
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export default {
    title: 'Components/MasonTiles',
    component: MasonTiles,
} as Meta;

const Template: StoryFn<MasonTilesProps> = (args) => <MasonTiles {...args} />;

export const Layout1 = Template.bind({});
Layout1.args = {
    cellItems: [
        {
            cellType : 'basic',
            title: 'Save 40% on your first order',
            secondaryTitle: 'When you include Green Mountain Coffee Roasters® coffee with your order of beverages',
            backgroundImage: '/editorial/home/homepage-bev-bg.jpg',
            highlightImage: '/editorial/home/bev-hero-foreground.png',
            backgroundColor: '#f1f1f1',
            CTA: 'Click Me'
        },
        {
            cellType : 'basic',
            title: 'Recipes',
            backgroundImage: '/editorial/home/bev-clp-bg.jpg',
            highlightImage: '/editorial/home/starter-kit.jpg',
            backgroundColor: '#f1f1f1',
            CTA: 'Click Me'
        },{
            cellType : 'hero',
            title: 'Cuddle up with a Fall beverage',
            backgroundImage: '/editorial/home/recipes/recipes-example-1.jpg',
            backgroundColor: '#5B3427',
            CTA: 'Get the recipe'
        },{
            cellType : 'banner',
            title: 'Beverages',
            fontColor: 'white',
            backgroundColor: colorNameToValue("dark-roast"),
        },{
            cellType : 'hero',
            title: 'Item C',
            backgroundImage: '/editorial/home/bev-clp-bg.jpg',
            backgroundColor: '#f1f1f1',
            CTA: 'Click Me'
        }

        // Add more items
    ],
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
