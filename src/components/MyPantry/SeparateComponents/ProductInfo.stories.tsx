import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {iProductInfo, ProductInfo} from "./ProductInfo";

export default {
    title: "WIP /MyPantry ProductInfo",
    component: ProductInfo,
    argTypes: {}
} as Meta;

const Template: Story<iProductInfo> = (args) => (
    <ProductInfo {...args}/>
);
export const ProductInfoExample = Template.bind({});

ProductInfoExample.args={
    productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
    brandName: "Dunkin' Donuts®",
    productName : 'Original Blend Coffee',
    productCountSize:"K-Cup® Box 22 ct.",
    productQuantity:"Qty: 1",
    productSalePrice:"$14.99",
    productPrice:"$19.99",
}
