import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {multiBoxExampleData} from "../../data/product-data";
import {iIngredients} from "../RecipeDetails/Ingredients/ingredients";
import {iMultiBlock, MultiBlock} from "./MultiBlock";

export default{
  title : "Molecules/MultiBox",
  component : MultiBlock,
  argTypes : {
    cards : {control : "object"}
  }
}as Meta;

const Template: Story<iMultiBlock>=(args)=><MultiBlock {...args} />

export const MultiBoxExample = Template.bind({});

MultiBoxExample.args={
  cards : multiBoxExampleData,
  groupHeaderText : {
    headerLabel : "",
    headerAlignment : "left",
    hierarchyLevel : 2,
    colorScheme : "dark-roast",
    headerStyle : "large-light"
  }
}
