import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import MemberPriceCard, {iMemberPricingCardProps} from "./card-member-pricing";
import {podLibrary} from "../../../data/beverage-library";
import {flagInStock, getRandomNum} from "../ProductList/utils";

export default {
    title: 'CLP/Member Price Card',
    component: MemberPriceCard,
    argTypes:{
        isLoggedIn: {control: "boolean"},
        product: {control: "object"}
    }
} as Meta;

const Template: Story<iMemberPricingCardProps> = (args) => <MemberPriceCard {...args} />;

export const MemberPriceCardExample = Template.bind({ });

MemberPriceCardExample.args = {
    isLoggedIn: true,
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
        name: "sss",
        brand: podLibrary[0].brand,
        image: podLibrary[0].productImagePrimaryPath ?? "",
        rating :{
            totalNumberOfStars: 5,
            totalNumberOfReviews: getRandomNum(400, 1623, "integer"),
            ratingNumber: getRandomNum(3.8, 4.9, "float")
        },
        onClick: () => console.log(`Add to Cart clicked for ${podLibrary[0].podName}`)
    }
}