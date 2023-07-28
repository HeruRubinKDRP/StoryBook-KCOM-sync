import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {iSocialVideoSection, SocialVideoSection} from "./tik-tok-section";

export default {
  title : "Social/Social Video Section",
  component : SocialVideoSection,
  argTypes :{}
}as Meta;

const Template : StoryFn<iSocialVideoSection> = (args)=><SocialVideoSection {...args}/>;

export const SimpleVideoSectionExample = Template.bind({});

SimpleVideoSectionExample.args={
title:""
}
