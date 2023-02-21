import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {iSimpleVideoItem, SimpleVideoItem} from "./social-video-item";

export default{
  title : "Recipes/TikTok Item",
  component : SimpleVideoItem,
  argTypes : {

  }
} as Meta;

const Template : Story<iSimpleVideoItem> = (args)=><div style={{padding : "1rem"}}><SimpleVideoItem {...args} /></div>

export const SimpleVideoTikTokStyle = Template.bind({});

SimpleVideoTikTokStyle.args={
  videoPath : "/video/TikTok-demo/biscoff-iced.mp4",
  previewImagePath : "/video/TikTok-demo/biscoff-iced.jpg"
}
