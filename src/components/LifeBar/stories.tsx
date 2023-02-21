import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {LifeBar, IlifeBar} from "./LifeBar";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
  title : "Atoms/Life Bar",
  component : LifeBar,
  argTypes : {
    barCurrentAmount : {control : "number"},
    barFullAmount : {control : "number"},
    barColor : { control : "color"},
    barBackgroundColor : {control : "color"},
    barHeight : {control : "text"},
    barWidth : {control : "text"},
    borderColor : {control : "color"},
    stylePreset : {control : "select", options : ["KCOM", "none"]}
  }
}

const Template: Story<IlifeBar> = (args) => <LifeBar {...args} />

export const Primary = Template.bind({});

Primary.args = {
  barWidth : "12rem",
  barHeight : "1rem",
  barCurrentAmount : 12,
  barFullAmount :32,
  stylePreset : "KCOM"
}



