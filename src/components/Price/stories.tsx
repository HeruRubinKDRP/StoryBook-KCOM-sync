import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {currencies, currencyType} from "../../pages/myBrews";
import {Iprice, Price} from "./Price";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
  title : "Atoms/Price",
  argTypes : {
    basePrice : {control : "number"},
    currency : {control : "select", options :["$", "£" ]},
    showStrikeThrough : {control : "boolean"},
    discountPercentAsNumber : {control : "number"},
    calculateDiscountForMe : {control : "boolean"},
    finalPrice : {control : "number"},
    colorOverride :{control :"color"}
  }
}

const Template: Story<Iprice> = (args) => <Price {...args} />;

export const PriceCommon = Template.bind({});

PriceCommon.args = {
  basePrice:16.99,
  calculateDiscountForMe : true,
  currency:"$",
  discountPercentAsNumber:24,
  finalPrice:12.99,
  showStrikeThrough : true,
}

export const JustPrice = Template.bind({});

JustPrice.args={
  basePrice:16.99,
  currency:"$",
  discountPercentAsNumber:24,
  finalPrice:12.99
}
