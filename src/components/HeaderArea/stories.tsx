import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {HeaderArea, iHeaderArea} from "./HeaderArea";


export default {
  title :"Atoms/Header Area",
  component : HeaderArea,
  argTypes:{
    headerLabel : {control : "text"},
    headerStyle : {control : "radio", options : ["line-through", "large-light", "bold-small"]},
    hierarchyLevel : {control : "number"},
    colorScheme : {control : "radio", options : ["medium-roast", "dark-roast"]}
  }

} as Meta;

const Template: Story<iHeaderArea>=(args)=> <HeaderArea {...args} />;

export const HeaderLines = Template.bind({});

HeaderLines.args ={
  headerLabel : "Brew Possibilities",
  headerStyle : "line-through",
  hierarchyLevel : 3,
  colorScheme : "medium-roast"
}
