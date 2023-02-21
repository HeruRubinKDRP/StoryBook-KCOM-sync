import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {iMultiBlock, MultiBlock} from "../../components/MultiBlock/MultiBlock";
import {WFlayout, iWF} from "../../components/WF_layout_component/wfLayout";
import {contentTestWF, multiBoxExampleData} from "../../data/product-data";


export default{
  title : "Hold/Wayfair Style",
  component : WFlayout,
  argTypes : {
    cards : {control : "object"}
  }
}as Meta;

const Template: Story<iWF>=(args)=><WFlayout {...args} />

export const WF_Example = Template.bind({});

WF_Example.args={
  contentItems : contentTestWF,
  elementsMode : "rounded"
}
