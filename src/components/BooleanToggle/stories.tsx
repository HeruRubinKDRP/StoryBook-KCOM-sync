import { Story, Meta } from "@storybook/react/types-6-0"
import React from "react";
import {BooleanToggle, iBooleanToggle} from "./BooleanToggle";

export default {
  title : "Atoms/Boolean Toggle",
  component : BooleanToggle,
  argTypes : {
    label : {control : "text"},
    isActive : {control : "boolean"},
    customClasses : {control : "text"},
    toggleType : {control : "radio", options :["checkbox"]},
    toggleShape : {control: "radio", options: ["round-rect", "pill"]},
    colorScheme : {control : "radio", options:["white", "no-bg", "dark-bg"]}
  }
} as Meta;

const Template: Story<iBooleanToggle> = (args) => <BooleanToggle {...args} />

export const Primary = Template.bind({});

Primary.args = {
  label : "test",
  isActive : true,
  toggleShape : "round-rect",
  colorScheme : "white"
}
