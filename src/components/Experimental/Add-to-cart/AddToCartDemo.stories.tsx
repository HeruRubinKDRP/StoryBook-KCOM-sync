import { Story, Meta } from "@storybook/react/types-6-0";
import React, { ReactElement } from "react";

import AddToCartDemo, {iDemoProps} from "./AddToCartDemo";
import {podLibrary} from "../../../pages/myBrews";


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

SmallDemo.args = {
    selectedComponent : "small-after-add",
    products : podLibrary,
    currentCartValue : 14.95,
    numberOfSuggestions : 3,
    freeShippingTarget : 35
}
