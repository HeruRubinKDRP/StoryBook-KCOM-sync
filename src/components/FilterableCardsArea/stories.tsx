import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {recipeCards} from "../../data/product-data";
import {FilterableCardsArea, iFilterableCardsArea} from "./FilterableCardsArea";

export default{
  title: "Organisms/Filterable Area",
  argTypes:{

  }
}as Meta;

const Template: Story<iFilterableCardsArea> = (args )=><FilterableCardsArea {...args} />;

export const RecipesExample = Template.bind({});

RecipesExample.args={
  headerArea : {
    mainTitle : "Café Creations, the coffeehouse experience",
    secondaryTitle : "Simple and delicious coffee recipes to make at home."
  },
  menuColorScheme : "medium-roast",
  filterTerms : ["hot", "iced", "frother", "no frother"],
  cards : recipeCards
}
