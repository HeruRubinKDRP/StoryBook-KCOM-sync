import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {iEditOrder, EditADorderInfo} from "./EditADorderInfo";

export default {
    title: "WIP /MyPantry Edit AD Order Info",
    component: EditADorderInfo,
    argTypes: {
        DeliveryName:{control:"text"},
        Frequency:{control:"text"},
        ProcessDate:{control:"text"},
    }
} as Meta;

const Template: Story<iEditOrder> = (args) => (
    <EditADorderInfo {...args}/>
);
export const EditAdOrderInfoExample = Template.bind({});

EditAdOrderInfoExample.args={
    DeliveryName : "Delivery Name",
    Frequency : "Every 4 weeks",
    ProcessDate : "May2, 2023"
}
