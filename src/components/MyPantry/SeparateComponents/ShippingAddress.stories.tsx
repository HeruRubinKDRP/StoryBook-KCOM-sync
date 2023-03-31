import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {iShippingAddress, ShippingAddress} from "./ShippingAddress";

export default {
    title: "WIP /MyPantry Shipping Address",
    component: ShippingAddress,
    argTypes: {}
} as Meta;

const Template: Story<iShippingAddress> = (args) => (
    <ShippingAddress {...args}/>
);
export const ShippingAddressExample = Template.bind({});

ShippingAddressExample.args={
    ShippingNameField : 'Name',
    ShippingAddressField : '53 South Ave, Burlington, MA 01803, United States',
    KButtonList: [
        {
            label: "Edit this shipping",
            buttonType: "secondary",
            iconPlacement:"no-icon",
            /*  iconStandard:"",*/
            buttonWidth:"fit-width",
            transitionType:"expand-bg"
        },
    ]
}
