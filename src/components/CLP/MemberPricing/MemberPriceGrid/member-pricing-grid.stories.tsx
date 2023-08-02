import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ProductGrid, { ProductGridProps } from './MemberCardGrid';
import {transformPodItemsToProductInfoCardProps} from "../../../_utilities/PodDataConverter/PodDataConverter";
import {podLibrary} from "../../../../data/beverage-library";
import {customPodLibrary} from "../../../Experimental/Add-to-cart/AddToCartDemo.stories";

export default {
    title: 'Example/ProductGrid',
    component: ProductGrid,
} as Meta;

const Template: StoryFn<ProductGridProps> = (args) => <ProductGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
    suggestedProducts: customPodLibrary,
    numberOfSuggestions: 3,
    currentCartValue: 0.00 ,
    freeShippingTarget: 35.00,
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
