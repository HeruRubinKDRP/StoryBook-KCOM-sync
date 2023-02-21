import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {iRecipeHero, RecipeHero} from "./RecipeHero";

export default{
  title : "Molecules/Recipe Hero",
  component : RecipeHero,
  argTypes : {
    title : {control : "text"},
    details : {control : "text"},
    heroImagePath : {control : "text"}
  }
}as Meta;

const Template: Story<iRecipeHero>=(args)=><RecipeHero {...args}/>

export const RecipeHeroExample = Template.bind({})

RecipeHeroExample.args={
  title : "Caramel Frozen Blended Coffee",
  details :"Caramel sauce adds a hint of sweetness to this luscious coffee treat. The perfect refreshment for your next virtual watch party.",
  heroImagePath : "/recipes/hero-iced-caramel-latte.webp",
  features :[
    {
      layoutType:"stacked",
      primaryMessage : {
        label : "5",
        color : "medium-roast"
      },
      secondaryMessage:{
        label : "Minutes",
        color : "text"
      }
    },
    {
      layoutType:"stacked",
      primaryMessage : {
        label : "3",
        color : "medium-roast"
      },
      secondaryMessage:{
        label : "Ingredients",
        color : "text"
      }
    },
    {
      layoutType:"stacked",
      primaryMessage : {
        label : "5",
        color : "medium-roast"
      },
      secondaryMessage:{
        label : "Steps",
        color : "text"
      }
    }
  ]
}
