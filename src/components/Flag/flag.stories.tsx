import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {colorNamesList} from "../_utilities/color-name-to-value/colorNameToValue";
import {Flag, flagStyles, iFlag} from "./Flag";

export default {
  title : "Atoms/Flag",
  argTypes : {
    flagLabel : {control : "text"},
    flagColor : {control : "select", options : colorNamesList.sort()},
    flagStyle : {control : "select", options :flagStyles.sort()},
    font : {control : "object"}
  }
} as Meta;

const Template: Story <iFlag> = (args)=><div style={{padding : "4rem"}}><Flag {...args} /></div>;

export const FlagGeneralView = Template.bind({});

FlagGeneralView.args = {
  flagColor : "KSK",
  flagStyle : "squared-curved",
  flagLabel : "Our Best Deal",
  flagTextColorOverride : "white",
  font :{
    fontSize : "Large",
    fontWeight : "heavy-weight"
  }

}
