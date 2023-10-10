import { StoryFn, Meta } from "@storybook/react";
import React, { ReactElement } from "react";

import AddToCartDemo, {iDemoProps} from "./AddToCartDemo";
import {podItemT} from "../../../pages/myBrews";
import {CustomPodLibrary} from "../../../data/demo-product-libraries";


export default {
    title: "Tests / Add to cart demo",
    component : AddToCartDemo,
    argTypes: {
        currentCartValue: { control: "number" },
        freeShippingTarget: { title : "How much you need", control: "number" },
        numberOfSuggestions: { control: "number" },
        loadingShippingMessage : { title : "Message shown while retrieving free shipping", control : "text"},
        suggestedCrossSell: {control : "radio", options:[
                "Cross-Sell Products" , "CTA Beverages + Accessories", "CTA Brewers + Accessories", "CTA Shop Deals + Accessories", "Simple Version"
            ]}
    }
} as Meta;


const Template: StoryFn<iDemoProps> = (args) => (
    <AddToCartDemo {...args} />
);

export const SmallDemo = Template.bind({});


SmallDemo.args = {
    selectedComponent : "small-after-add",
    products : CustomPodLibrary,
    currentCartValue : 14.95,
    numberOfSuggestions : 3,
    freeShippingTarget : 35,
    suggestedCrossSell: "Simple Version",
}

export const LargeDemo = Template.bind({});

const customPodLibrary: podItemT[] = [
    {
        brand: "Keurig®",
        podName : "K-Iced™ Single Serve Coffee Maker K-Iced™ Single Serve Coffee Maker",
        boxImagePath : "https://images.keurig.com/is/image/keurig/k-iced-single-serve-coffee-maker_5000371871_swatch?fmt=png-alpha",
    },
    {
        brand: "Dunkin' Donuts®",
        podName : "COLD Caramel",
        boxImagePath : "https://images.keurig.com/is/image/keurig/Cold-Caramel-coffee-k-cup-dd_en_general?fmt=png-alpha",
    },
    {
        brand: "McCAFÉ®",
        podName : "ICED Hazelnut Latte",
        boxImagePath : "https://images.keurig.com/is/image/keurig/Iced-Hazelnut-Latte-Coffee-K-Cup-McCafe_en_general?fmt=png-alpha"},
    {
        brand: "Keurig®",
        podName : "K-Cup® Pod Carousel",
        boxImagePath : "https://images.keurig.com/is/image/keurig/36-Count-K-Cup-Carousel_5000199363?fmt=png-alpha",
    },
];
const customPodLibraryL: podItemT[] = [
    {
        brand: "Keurig®",
        podName : "K-Café® Special Edition Single Serve Coffee Latte & Cappuccino Maker",
        boxImagePath : "https://images.keurig.com/is/image/keurig/K-Cafe-Special-Edition-Coffee-Latte-Cappuccino-Maker_5000341465_swatch?fmt=png-alpha",
    },
    {
        brand: "Green Mountain Coffee Roasters®",
        podName : "Dark Magic® Coffee",
        boxImagePath : "https://images.keurig.com/is/image/keurig/dark-magic-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
    },
    {
        brand: "Caribou® Coffee",
        podName : "Caribou® Blend Coffee",
        boxImagePath : "https://images.keurig.com/is/image/keurig/Caribou-Blend-Coffee-K-Cup-Caribou_en_general?fmt=png-alpha"},
    {
        brand: "Keurig®",
        podName : "Keurig® Signature Mug",
        boxImagePath : "https://images.keurig.com/is/image/keurig/Keurig-Signature-Mug_5000368222_swatch?fmt=png-alpha",
    },
];
LargeDemo.args = {
    selectedComponent : "large-after-add",
    products : customPodLibraryL,
    currentCartValue : 14.95,
    numberOfSuggestions : 3,
    freeShippingTarget : 35
}
