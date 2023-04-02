import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {iEditSubscription, EditADitemInfo} from "./EditADitemInfo";

export default {
    title: "WIP /MyPantry Edit AD item Info",
    component: EditADitemInfo,
    argTypes: {
        Size:{control:"text"},
        Quantity:{control:"text"},
        Frequency:{control:"text"},
        ProcessDate:{control:"text"},
    }
} as Meta;

const Template: Story<iEditSubscription> = (args) => (
    <EditADitemInfo {...args}/>
);
export const EditSubscriptionInfoExample = Template.bind({});

EditSubscriptionInfoExample.args={
    Size : "K-Cup® Box 22 ct.",
    Quantity : "1",
    Frequency : "Every 4 weeks",
    ProcessDate : "May2, 2023"
}
