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
// Update this line to include the products you want to add using the "podItemT" type
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
