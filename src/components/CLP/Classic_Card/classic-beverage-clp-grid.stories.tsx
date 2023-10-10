import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import {transformPodItemsToProductInfoCardProps} from "../../_utilities/PodDataConverter/PodDataConverter";
import {podLibrary} from "../../../data/beverage-library";
import {customPodLibrary} from "../../Experimental/Add-to-cart/AddToCartDemo.stories";
import ClassicProductGrid, {ClassicProductGridProps} from './classic-beverage-clp-grid';
import { getRandomNum } from '../ProductList/utils';

export default {
    title: 'CLP/Classic Grid',
    component: ClassicProductGrid,
    argTypes: {
        pricingStyle: {
            control: "radio",
            options: [
                "classic", "member-pricing-simple", "member-price-no-icon"
            ]
        }
    }
} as Meta;

const Template: StoryFn<ClassicProductGridProps> = (args) => <ClassicProductGrid {...args} />;

export const ClassicGridCardExample = Template.bind({});
ClassicGridCardExample.args = {
    suggestedProducts: customPodLibrary,
    numberOfSuggestions: 3,
    currentCartValue: 0.00,
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
            flagLabel: "New",
            flagColor: "forest-green",
            flagClasses: "",
            font: {
                fontSize: "Small",
                fontWeight: "regular-weight"
            },
            flagStyle: "curved-rect"
        }
    ),
    isLoggedIn: true,
    priceLabel: 'Member Pricing',
    rating :{
        totalNumberOfStars: 5,
        totalNumberOfReviews: getRandomNum(400, 1623, "integer"),
        ratingNumber: getRandomNum(3.8, 4.9, "float")
    },
    pricingStyle:"classic"
};
