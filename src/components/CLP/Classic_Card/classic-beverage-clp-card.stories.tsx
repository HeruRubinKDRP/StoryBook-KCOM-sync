import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {podLibrary} from "../../../data/beverage-library";
import {flagInStock, getRandomNum} from "../ProductList/utils";
import ClassicClpCard, {iClassicClpCardProps} from "./classic-beverage-clp-card";

export default {
    title: 'CLP/Classic Grid',
    component: ClassicClpCard,
    argTypes:{
        isLoggedIn: {control: "boolean"},
        product: {control: "object"},
        formFactor: {control: "radio", options: ["mobile", "desktop"]},
        calculateCardWidth: {control: "boolean"},
        pricingStyle: {
            control: "radio",
            options: [
                "classic", "member-pricing-simple", "member-price-no-icon"
            ]
        }
    }
} as Meta;

const Template: StoryFn<iClassicClpCardProps> = (args) => <ClassicClpCard {...args} />;

export const ClassicCardExample = Template.bind({ });

ClassicCardExample.args = {
    isLoggedIn: true,
    formFactor: "mobile",
    priceLabel: "Member Price",
    calculateCardWidth: true,
    product: {
        productType: podLibrary[0].productType ?? "pod",
        ratingVisible: true,
        flag: flagInStock,
        prices: podLibrary[0].productPrices!.map((price, index) => {
            return {
                price: price,
                inStock: true,
                variant: {
                    quantity: podLibrary[0].boxSizes![index] ?? 0,
                    variantName: "ct"
                }
            }
        }),
        name: podLibrary[0].podName,
        brand: podLibrary[0].brand,
        image: podLibrary[0].productImagePrimaryPath ?? "",
        rating :{
            totalNumberOfStars: 5,
            totalNumberOfReviews: getRandomNum(400, 1623, "integer"),
            ratingNumber: getRandomNum(3.8, 4.9, "float")
        },

        onClick: () => console.log(`Add to Cart clicked for ${podLibrary[0].podName}`)
    },
    rating :{
        totalNumberOfStars: 5,
        totalNumberOfReviews: getRandomNum(400, 1623, "integer"),
        ratingNumber: getRandomNum(3.8, 4.9, "float")
    },
    pricingStyle:"classic"
}