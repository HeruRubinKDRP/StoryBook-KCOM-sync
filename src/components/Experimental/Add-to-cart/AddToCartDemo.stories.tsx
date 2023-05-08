import { Story, Meta } from "@storybook/react/types-6-0";
import React, { ReactElement } from "react";

import AddToCartDemo, {iDemoProps} from "./AddToCartDemo";
import {podItemT, podLibrary} from "../../../pages/myBrews";


export default {
    title: "Tests / Add to cart demo",
    component : AddToCartDemo,
    argTypes: {
        currentCartValue: { control: "number" },
        freeShippingTarget: { title : "How much you need", control: "number" },
        numberOfSuggestions: { control: "number" },
        loadingShippingMessage : { title : "Message shown while retrieving free shipping", control : "text"},
    }
} as Meta;


const Template: Story<iDemoProps> = (args) => (
    <AddToCartDemo {...args} />
);

export const SmallDemo = Template.bind({});
const customPodLibrary: podItemT[] = [
    {
        brand: "Keurig®",
        podName : "K-Iced™ Single Serve Coffee Maker",
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

SmallDemo.args = {
    selectedComponent : "small-after-add",
    products : customPodLibrary,
    currentCartValue : 14.95,
    numberOfSuggestions : 3,
    freeShippingTarget : 35
}

export const LargeDemo = Template.bind({});
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
