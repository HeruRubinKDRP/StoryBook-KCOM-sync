// SubscriptionGrid.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SubscriptionGrid, iSubscriptionGrid } from './SubscriptionGrid';
import { CardStatus } from '../SubscriptionCard/SubscriptionCard';

export default {
    title: 'WIP-MYPANTRY /SubscriptionGrid',
    component: SubscriptionGrid,
} as Meta;

const Template: Story<iSubscriptionGrid> = (args) => <SubscriptionGrid {...args} />;

export const EmptyGrid = Template.bind({});
EmptyGrid.args = {
    subscriptions: [],
};

export const MultipleSmartActiveCards = Template.bind({});
MultipleSmartActiveCards.args = {
    subscriptions: [
        {
            status: "SMART-active",
            productImage:
                "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countLeft: "12",
            shipDate: "May2, 2023",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
        {
            status: "SMART-active",
            productImage:
                "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countLeft: "12",
            shipDate: "May2, 2023",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
        {
            status: "SMART-active",
            productImage:
                "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countLeft: "12",
            shipDate: "May2, 2023",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
        {
            status: "SMART-active",
            productImage:
                "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countLeft: "12",
            shipDate: "May2, 2023",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
        {
            status: "SMART-active",
            productImage:
                "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countLeft: "12",
            shipDate: "May2, 2023",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
        {
            status: "SMART-active",
            productImage:
                "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countLeft: "12",
            shipDate: "May2, 2023",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
    ],
};

export const MultipleAdActiveCards = Template.bind({});
MultipleAdActiveCards.args = {
    subscriptions: [
        {
            status: "AD-active",
            productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countBox: "1",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
        {
            status: "AD-active",
            productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countBox: "1",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
        {
            status: "AD-active",
            productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countBox: "1",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
        {
            status: "AD-active",
            productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countBox: "1",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
        {
            status: "AD-active",
            productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countBox: "1",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
        {
            status: "AD-active",
            productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countBox: "1",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
        {
            status: "AD-active",
            productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countBox: "1",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
        {
            status: "AD-active",
            productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
            countBox: "1",
            brandName: "Dunkin' Donuts®",
            productName: "Original Blend Coffee",
        },
    ],
};
