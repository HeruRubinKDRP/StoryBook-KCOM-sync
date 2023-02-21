import {Story, Meta} from "@storybook/react/types-6-0";
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

const Template: Story<iLearnMore> =(args) =><LearnMore {...args} />

export const LearnMoreExample = ()=>{

}


// mode : "pop-up" | "inline";
// actionFunc : Function;
// learnMore :{
//   label? : string;
// }
