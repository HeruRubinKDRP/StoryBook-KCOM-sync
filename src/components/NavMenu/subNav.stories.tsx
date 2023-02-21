import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {iSubNavGroup, SubNavGroups, subNavList} from "./subNavGroups";

export default {
  title : "Organisms/SubNav Items",
  component : SubNavGroups,
  argTypes : {
    navSectionName : subNavList
  }

} as Meta;

const Template : Story<iSubNavGroup> =(args)=><SubNavGroups {...args} />

export const SubNavExample = Template.bind({});

SubNavExample.args={
  navSectionName : "beverages"
}
