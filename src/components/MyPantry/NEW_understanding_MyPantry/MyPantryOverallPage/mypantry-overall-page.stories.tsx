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
            subscriptiontype: "SMART",
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
            ]
        },
        {
            subscriptiontype: "AD",
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
            ]
        },
        {
            subscriptiontype: "SMART",
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
            ]
        },
        {
            subscriptiontype: "SMART",
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
            ]
        }
        ,
        {
            subscriptiontype: "AD",
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
            ]
        }
    ]
};

export const scenario1 = Template.bind({});
scenario1.args = {
    test: 'Test props',
    deliveryGroups: [
        {
            subscriptiontype: "AD",
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
            ]
        },
        {
            subscriptiontype: "AD",
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
            ]
        }
    ]
};