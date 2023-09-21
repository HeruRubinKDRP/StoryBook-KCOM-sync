import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {simpleCardPresenterExample} from "../../../data/product-data";
import {iMultiCardPresenter, MultiCardPresenter} from "./MultiCardPresenter";

export default{
  title:"Molecules/Multi CardFlip Presenter",
  component : MultiCardPresenter,
  argTypes:{
      cards : {control : "object"}
  }
} as Meta;

const Template: StoryFn<iMultiCardPresenter>=(args:iMultiCardPresenter)=><MultiCardPresenter {...args} />;

export const SimpleHighlightCardExample = Template.bind({});

SimpleHighlightCardExample.args={
  cards : simpleCardPresenterExample
}
