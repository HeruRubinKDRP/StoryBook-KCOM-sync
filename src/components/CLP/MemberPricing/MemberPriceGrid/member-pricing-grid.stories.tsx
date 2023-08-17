import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ProductGrid, { ProductGridProps } from './MemberCardGrid';
import {transformPodItemsToProductInfoCardProps} from "../../../_utilities/PodDataConverter/PodDataConverter";
import {podLibrary} from "../../../../data/beverage-library";
import {customPodLibrary} from "../../../Experimental/Add-to-cart/AddToCartDemo.stories";

export default {
    title: 'Example/Member Pricing ProductGrid',
    component: ProductGrid,
    argTypes: {
        suggestedProducts: {
            table: {
                disable: true
            }
        },
        currentCartValue: {
            table: {
                disable: true
            }
        },
        products: {
            table: {
                disable: true
            }
        },
        numberOfSuggestions: {
            table: {
                disable: true
            }
        },
        freeShippingTarget: {
            table: {
                disable: true
            }
        },
        showRatings: {
            table: {
                category: "General Experience"
            },
            control: "boolean"
        },
        pricingStyle: {
            table: {
                category: "Pricing Discussion"
            },
            control: { type: 'radio' },
            options: ['control', 'one-price']
        },
        pricingMode: {
            table: {
                category: "Pricing Discussion"
            },
            control: { type: 'radio' },
            options: ["member", "non-member"]},
        },
    cardVisualStyle : {
        control: { type: 'radio' },
        options: ["control", "minimal", "minimalist"],
    },

        communicationsMode : {
            control: "radio", options: ["animated-intro", "banner"],
        },

} as Meta;

const Template: StoryFn<ProductGridProps> = (args) => <ProductGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
    suggestedProducts: customPodLibrary,
    numberOfSuggestions: 3,
    currentCartValue: 0.00 ,
    freeShippingTarget: 35.00,
    pricingMode : "member",
    pricingStyle : "one-price",
    showRatings : true,
    products: transformPodItemsToProductInfoCardProps(
        podLibrary,
        "pod",
        true,
        () => console.log("onclick"),
        "",
        () => console.log("flip"),
        false,

        {
            flagLabel : "New",
            flagColor : "forest-green",
            flagClasses : "",
            font :{
                fontSize : "Small",
                fontWeight : "regular-weight"
            },
            flagStyle : "curved-rect"
        }
    ),
    isLoggedIn: true,
    priceLabel: 'Member Pricing',
};
