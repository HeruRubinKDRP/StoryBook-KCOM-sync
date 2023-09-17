import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {FreeShipping, iFreeShipping} from "./FreeShipping";


export default {
  title : "Atoms/Free Shipping",
  argTypes: {
    showFreeShipping : {control : "boolean"},
    sizeOverride : {control:"text"},
    messageText : { control:"text"}
  }
}as Meta;

const Template: StoryFn<iFreeShipping> = (args)=><FreeShipping {...args} />;

export const FreeShippingExample = Template.bind({});
FreeShippingExample.args = {
  showFreeShipping : true,
  messageText : "This item ships FREE"
}

