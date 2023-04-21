import React from 'react';
import {Story, Meta} from '@storybook/react';
import {iMyPantryOverall, MyPantryOverall} from './MyPantryOverallPage';

export default {
    title: 'WIP-MYPANTRY /Overall Page',
    component: MyPantryOverall,
} as Meta;

const Template: Story<iMyPantryOverall> = (args) => <MyPantryOverall {...args} />;

export const Default = Template.bind({});
Default.args = {
    test: 'Test props',
    deliveryGroups: [
        {
            subscriptiontype: "Smart Delivery",
            subscriptions: [
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/Veranda-Blend-Coffee-Starbucks_en_general?fmt=png-alpha",
                    countLeft: "48",
                    shipDate: "30+ Days From Now",
                    brandName: "Starbucks®",
                    productName: "Veranda Blend® Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/Major-Dickasons-Blend-Coffee-Peets-K-Cup_en_general?fmt=png-alpha",
                    countLeft: "33",
                    shipDate: "30+ Days From Now",
                    brandName: "Peet's Coffee®",
                    productName: "Major Dickason's Blend® Coffee",
                },
                {
                    mode: "one-time",
                    status: "one-time",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/descaling-solution_5000367641?fmt=png-alpha",
                    brandName: "Keurig®",
                    productName: "Descaling Solution",
                    onetimeNumber: "1",
                },
                {
                    mode: "Canceled",
                    status: "Canceled",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/nantucket-blend-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
                    brandName: "Green Mountain Coffee",
                    productName: "Nantucket Blend® Coffee",
                },
                {
                    mode: "add-item-smart",
                    status: "Add-item-smart",
                },
            ]
        },
        {
            subscriptiontype: "Scheduled Auto-Delivery",
            subscriptions: [
                {
                    mode: "AD",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "AD",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
            ]
        },
        {
            subscriptiontype: "Smart Delivery",
            subscriptions: [
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
            ]
        },
        {
            subscriptiontype: "Smart Delivery",
            subscriptions: [
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
            ]
        },
        {
            subscriptiontype: "Scheduled Auto-Delivery",
            subscriptions: [
                {
                    mode: "AD",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "AD",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "AD",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "AD",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "AD",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode: "AD",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
            ]
        }
    ]
};

export const scenario1 = Template.bind({});
scenario1.args = {
    test: 'Test props',
    deliveryGroups: [
        {
            subscriptiontype: "Scheduled Auto-Delivery",
            subscriptions: [
                {
                    mode:"SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode:"SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode:"SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
            ]
        },
        {
            subscriptiontype: "Scheduled Auto-Delivery",
            subscriptions: [
                {
                    mode:"SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
                {
                    mode:"SMART",
                    status: "Active",
                    productImage:
                        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
                    countLeft: "12",
                    shipDate: "May2, 2023",
                    brandName: "Dunkin' Donuts®",
                    productName: "Original Blend Coffee",
                },
            ]
        }
    ]
};