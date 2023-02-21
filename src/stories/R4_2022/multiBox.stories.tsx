import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {iMultiBlock, MultiBlock} from "../../components/MultiBlock/MultiBlock";
import {multiBoxExampleData} from "../../data/product-data";


export default{
  title : "Hold/Better Two-Box",
  argTypes : {
    cards : {control : "object"}
  }
}as Meta;

const Template: Story<iMultiBlock>=(args)=><MultiBlock {...args} />

export const MultiBoxExample = Template.bind({});

MultiBoxExample.args={
  cards : multiBoxExampleData,
  groupHeaderText : {
    headerLabel : "",
    headerAlignment : "left",
    hierarchyLevel : 2,
    colorScheme : "dark-roast",
    headerStyle : "large-light"
  }
}
