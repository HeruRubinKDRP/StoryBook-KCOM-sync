import { StoryFn, Meta } from "@storybook/react";
import React, { ReactElement } from "react";
import {ProductCard} from "../../ContentComponents/ProductCard/ProductCard";
import {iMultiItemSlide, MultiItemSlide} from "./MultiItemSlide";
import {getProductCardsForStory} from "./exampleMultiData";

export default {
  title : "Organisms/Multi-Item Slide",
  component : MultiItemSlide,
  argTypes :{
    itemsPerSlide : {control : "number"}
  }
}as Meta;



const Template: StoryFn<iMultiItemSlide>=(args)=><MultiItemSlide items={getProductCardsForStory(args.itemsPerSlide)} itemsPerSlide={args.itemsPerSlide} />

export const ExampleMultiItems = Template.bind({});

ExampleMultiItems.args = {
  itemsPerSlide : 2
}
