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
                options: [    "Active"
                , "Inactive"
                , "one-time"
                , "Canceled"
                , "Add-item-smart"],
            },
        },
    },
} as Meta;

const Template: Story<iSubscriptionCard> = (args) => <SubscriptionCard {...args} />;

export const SmartActive = Template.bind({});
SmartActive.args = {
    mode: "SMART",
    status: "Active",
    productImage:
        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
    countLeft: "12",
    shipDate: "30+ Days From Now",
    brandName: "Dunkin' Donuts®",
    productName: "Original Blend Coffee",
};

export const AdActive = Template.bind({});
AdActive.args = {
    mode: "AD",
    status: "Active",
    productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
    countBox: "1",
    brandName: "Dunkin' Donuts®",
    productName: "Original Blend Coffee",
};

export const OneTime = Template.bind({});
OneTime.args = {
    mode: "one-time",
    status: "one-time",
    productImage:
        "https://images.keurig.com/is/image/keurig/descaling-solution_5000367641?fmt=png-alpha",
    brandName: "Keurig®",
    productName: "Descaling Solution",
    onetimeNumber: "1",
};

export const Canceled = Template.bind({});
Canceled.args = {
    mode: "Canceled",
    status: "Canceled",
    productImage:
        "https://images.keurig.com/is/image/keurig/nantucket-blend-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
    brandName: "Green Mountain Coffee",
    productName: "Nantucket Blend® Coffee",
};

export const AddItemSmart = Template.bind({});
AddItemSmart.args = {
    mode: "add-item-smart",
    status: "Add-item-smart",
};
