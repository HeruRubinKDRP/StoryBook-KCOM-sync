import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {iPopUp, PopUp} from "./PopUp";


export default {
  title : "Molecules/Pop Up",
  argTypes:{
    isOpen : {control : "boolean"},
    hasHeader : {control : "boolean"},
    hasVeil : {control : "boolean"},
    windowTitle : {control : "text"}
  }
} as Meta;

const Template: StoryFn<iPopUp> = (args)=><PopUp {...args} />
export const ExamplePopUp = Template.bind({});

ExamplePopUp.args={
isOpen : true
}
