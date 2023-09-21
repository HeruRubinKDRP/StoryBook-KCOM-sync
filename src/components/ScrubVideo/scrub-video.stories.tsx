import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {iScrubVideo, ScrubVideo} from "./ScrubVideo";

export default{
  title : "Molecules/Scrub Video",
  component : ScrubVideo,
  argTypes : {
    mediaPath : {control : "text"},
    duration :{control : "number"},
    videoHeight : {control : "text"},
    headingText : {control : "text"},
    subHeadingText : {control : "text"}
  }
} as Meta;

const Template: StoryFn<iScrubVideo> =(args)=><ScrubVideo {...args} />;

export const ExampleKCS_ScrubMP4 = Template.bind({});

ExampleKCS_ScrubMP4.args={
  mediaPath : "/360s/kcs.mp4",
  duration : 8.5,
  scrollDuration : 450,
  videoHeight : "100vh",
  headingText : "K-Café® SMART",
  subHeadingText : "Fast & Easy Coffeehouse Drinks, Built-In Milk Frother"
}

export const ExampleScrubWebM = Template.bind({})

ExampleScrubWebM.args={
  mediaPath : "/360s/kcs7.webm",
  duration : 8.5,
  scrollDuration : 450,
  videoHeight : "100vh",
  headingText : "K-Café® SMART",
  subHeadingText : "Fast & Easy Coffeehouse Drinks, Built-In Milk Frother"
}

export const ExampleKSPS_MP4 = Template.bind({})

ExampleKSPS_MP4.args={
  mediaPath : "/360s/360-ksps_2.mp4",
  duration : 8.5,
  scrollDuration : 450,
  videoHeight : "100vh",
  headingText : "K-Supreme Plus® SMART",
  subHeadingText : "Stainless Steel Metal Wrap, 5 Brew Sizes"
}

export const ExampleKSS_MP4 = Template.bind({})

ExampleKSS_MP4.args={
  mediaPath : "/360s/360-KSS-2.mp4",
  duration : 10,
  scrollDuration : 450,
  videoHeight : "100vh",
  headingText : "K-Supreme® SMART",
  subHeadingText : "3 Sleek Colors, 4 Brew Sizes"
}
