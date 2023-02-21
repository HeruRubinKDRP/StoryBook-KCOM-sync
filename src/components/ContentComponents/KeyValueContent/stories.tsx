import {Story, Meta} from "@storybook/react/types-6-0"
import React from "react";
import {colorNamesList} from "../../_utilities/color-name-to-value/colorNameToValue";
import {iKeyValueContent, KeyValueContent} from "./KeyValueContent";

let KeyValueSettings = {
  title:"Atoms / Key Value Content",
  component : KeyValueContent,
  argTypes : {
    layoutType : {control : "radio", options :["stacked", "inline"]},
    primaryMessage : {control : 'object'},
    secondaryMessage: {control : 'object'},
    colorSchemes : {control : "select", options : colorNamesList}
  }
};


const Template: Story<iKeyValueContent> =(args )=><div style={{padding: "3rem"}}><KeyValueContent {...args} /></div>

export const SmallContentExample = Template.bind({});

SmallContentExample.args = {
  layoutType : "inline",
  primaryMessage : {
    label : "Height:"
  },
  secondaryMessage: {
    label : `12.7"`
  },
  colorSchemes : "dark-roast"
}

export const WithIconExample = Template.bind({});

WithIconExample.args={
  layoutType : "inline",
  primaryMessage : {
    label : "3 minutes",
    icon : "frother-icon",
    color : "secondaryGold",
    iconPosition : "before"
  }
}

export default KeyValueSettings;
