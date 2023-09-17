import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {iIngredients, Ingredients} from "./ingredients";

export default {
  title : "Molecules/Ingredients",
  argTypes :{
    ingredients : { control : "object"}
  }
}as Meta;

const Template: StoryFn<iIngredients>=(args)=><Ingredients {...args}/>

export const IngredientsExample = Template.bind({});

IngredientsExample.args = {
  ingredients : [
    {
      key : "1/2 Cup",
      value : "Dairy or Dairy Substitute"
    },
    {
      key : "1 Pod",
      value : "K-cup®"
    },
    {
      key : "2 Tbsp.",
      value : "Caramel Syrup"
    }
  ]
}
