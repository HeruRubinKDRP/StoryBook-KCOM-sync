import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {iSimpleVideoItem, SimpleVideoItem} from "./SocialVideoItem";

export default{
  title : "Recipes/TikTok Item",
  component : SimpleVideoItem,
  argTypes : {

  }
} as Meta;

const Template : StoryFn<iSimpleVideoItem> = (args)=><div style={{padding : "1rem"}}><SimpleVideoItem {...args} /></div>

export const SimpleVideoTikTokStyle = Template.bind({});

SimpleVideoTikTokStyle.args={
  videoPath : "/video/TikTok-demo/biscoff-iced.mp4",
  previewImagePath : "/video/TikTok-demo/biscoff-iced.jpg"
}
