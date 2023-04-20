// SubscriptionCard.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SubscriptionCard, iSubscriptionCard, CardStatus } from './SubscriptionCard';

export default {
    title: 'WIP-MYPANTRY /SubscriptionCard',
    component: SubscriptionCard,
    argTypes: {
        status: {
            control: {
                type: 'select',
                options: ['SMART-active', 'AD-active'],
            },
        },
    },
} as Meta;

const Template: Story<iSubscriptionCard> = (args) => <SubscriptionCard {...args} />;

export const SmartActive = Template.bind({});
SmartActive.args = {
    status: "SMART-active",
    productImage:
        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
    countLeft: "12",
    shipDate: "May2, 2023",
    brandName: "Dunkin' Donuts®",
    productName: "Original Blend Coffee",
};

export const AdActive = Template.bind({});
AdActive.args = {
    status: "AD-active",
    productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
    countBox: "1",
    brandName: "Dunkin' Donuts®",
    productName: "Original Blend Coffee",
};
