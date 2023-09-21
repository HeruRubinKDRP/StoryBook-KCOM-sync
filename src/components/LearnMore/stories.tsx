import {StoryFn, Meta} from "@storybook/react";
import React from "react"
import {iLearnMore, LearnMore} from "./LearnMore";

const learnMoreStory = {
  title : "Molecules / Learn More",
  component : LearnMore,
  argTypes : {
    mode : {
      control : "radio",
      options : ["pop-up", "inline"]
    },
    learnMore :{ control: "object" }
  }
} as Meta;

const Template: StoryFn<iLearnMore> =(args) =><LearnMore {...args} />

export const LearnMoreExample = ()=>{

}

