import { Story, Meta } from "@storybook/react/types-6-0"
import React, { ReactElement } from "react"

import { KDropDown, IdropDown, btnSizeType, dropDownItem } from "./drop-down"


export default {
  title: "Molecules/K-Drop Down",
  component: KDropDown,
  argTypes: {
    dropDownType : {control : "select", options : [ "small" , "medium" , "large" , "thumb-sized"]},
    defaultLabel : {control : "text"},
    backgroundColor: { control: "color" },
    selectionOptions : {control : "object"}
  },
} as Meta;

const Template: Story<IdropDown> = (args) => <KDropDown {...args} />

export const Primary = Template.bind({});
Primary.args = {
  dropDownType : "thumb-sized",
  defaultLabel : "Drop down",
  label : "Drop down",
  selected : "",
  selectionOptions : [
    {
      label : "item 1",
      value : ""
    },
    {
      label : "item 2",
      value : ""
    },
    {
      label : "item 3",
      value : ""
    }
  ]



}

