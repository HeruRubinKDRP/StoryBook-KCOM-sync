import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {iconsList} from "../../Graphic/iconData";
import {colorByNameType} from "../../_utilities/color-name-to-value/colorNameToValue";
import {FreeShipping, iFreeShipping} from "./FreeShipping";


export default {
  title : "Atoms/Free Shipping",
  argTypes: {
    showFreeShipping : {control : "boolean"},
    sizeOverride : {control:"text"},
    messageText : { control:"text"}
  }
}as Meta;

const Template: Story<iFreeShipping> = (args)=><FreeShipping {...args} />;

export const FreeShippingExample = Template.bind({});
FreeShippingExample.args = {
  showFreeShipping : true,
  messageText : "This item ships FREE"
}

