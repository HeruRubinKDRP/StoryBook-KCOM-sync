import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {simpleCardPresenterExample} from "../../../data/product-data";
import {iMultiCardPresenter, MultiCardPresenter} from "./MultiCardPresenter";

export default{
  title:"Molecules/Multi Card Presenter",
  component : MultiCardPresenter,
  argTypes:{
      cards : {control : "object"}
  }
} as Meta;

const Template: Story<iMultiCardPresenter>=(args:iMultiCardPresenter)=><MultiCardPresenter {...args} />;

export const SimpleHighlightCardExample = Template.bind({});

SimpleHighlightCardExample.args={
  cards : simpleCardPresenterExample
}
