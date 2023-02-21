import {Story, Meta} from "@storybook/react/types-6-0"
import React from "react"
import {iSimpleHighlightCard, SimpleHighlightCard} from "./SimpleHighlightCard";

export default{
  title : "Molecules/Simple Highlight Card",
  component : SimpleHighlightCard,
  argTypes : {
    title : {control : "text"},
    mainFocalImage : { control : "object"},
    imageSizeMethod :{control : "select", options:["bg-image" , "from-image-size"]},
    alignment : {control : "radio", options : ["left", "right", "center"]},
    mainCTA : {
      control : "object"
    },
    secondaryCTA:{ control : "object"}
  }
} as Meta;

const Template: Story<iSimpleHighlightCard> =(args : iSimpleHighlightCard)=> <SimpleHighlightCard {...args} />;

export const SimpleHighlightCardExample = Template.bind({});

SimpleHighlightCardExample.args={
  title : "Hot",
  titlePosition : "after-image",
  alignment : "center",
  mainFocalImage : {
    imagePath : "editorial/hot.png",
    cropStyle : "circle"
  }
}

export const RecipeCardExample = Template.bind({});

RecipeCardExample.args={
  title : "Oak Milk Latte",
  titlePosition : "after-image",
  mainImageSize : "default-size",
  maxSize : "20%",
  secondaryMessage : {
    label : "HOT COFFEE",
    color : "medium-roast",
    size : "Small"
  },
  mainMessageSize : "Large",
  mainFocalImage : {
    imagePath : "recipes/recipe-oak-milk-latte.webp",
    cropStyle : "rounded-rectangle"
  },
  featuresList : [
    {
      layoutType :"inline",
      primaryMessage :{
        label : "3 minutes",
        icon :"clock-icon",
        iconPosition : "before",
        color : "secondaryGold"
      }
    },
    {
      layoutType :"inline",
      primaryMessage :{
        label : "Frother Required",
        icon :"frother-icon",
        iconPosition : "before",
        color : "secondaryGold"
      }
    }
  ]
}
