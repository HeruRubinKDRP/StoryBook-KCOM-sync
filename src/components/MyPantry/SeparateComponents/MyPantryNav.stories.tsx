import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {iMyPantryNav,MyPantryNav} from "./MyPantryNav";

export default {
    title: "WIP /MyPantry Navigation",
    component: MyPantryNav,
    argTypes: {
      KButtonList: {
          control:"object",
          iconPlacement:"right-edge",
          iconStandard:"icon-favorite",
      }
    }
} as Meta;

const Template: Story<iMyPantryNav> = (args) => (
    <MyPantryNav {...args}/>
);
export const MyPantryNavExample = Template.bind({});

MyPantryNavExample.args={
    FunctionList:[],
    KButtonList: [
        {
            label: "Button 1",
            buttonType: "primary",
            iconPlacement:"right-edge",
            iconStandard:"icon-favorite",
            buttonWidth:"fit-width",
            transitionType:"expand-bg"
        },
        {
            buttonType:"primary",
            buttonWidth:"fit-width",
            classes:"",
            iconPlacement:"right-edge",
            iconStandard:"icon-star",
            label:"Button Label CTA",
            transitionType:"scale-up"
        },
        {
            label: "Button 3",
            buttonType: "secondary",
            iconPlacement:"right-edge",
            iconStandard:"icon-favorite"
        },
        {
            label: "Button 4",
            buttonType: "link-internal",
            iconPlacement:"right-edge",
            iconStandard:"icon-favorite"
        },
        {
            label: "Button 5",
            buttonType: "action",
            iconPlacement:"right-edge",
            iconStandard:"icon-favorite"
        },
        {
            label: "Button 6",
            buttonType: "ecommerce-primary",
            iconPlacement:"right-edge",
            iconStandard:"none"
        },
    ],
}
