import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {KSS_OutOfStock, KSS_Variants} from "../../data/product-data";
import {ColorPicker, iColorPicker} from "./colorPicker";
import {K_CAFE_SMART_COFFEE_LATTE_CAPPUCCINO_MAKER_5000365485} from "../../data/brewer-quickshop-images";

export default{
  title : "Atoms/Color Picker",
  argTypes: {
    colorVariants : {control : "object"},
    showProductColors : {control : "boolean"}
  }
} as Meta;

const Template: StoryFn<iColorPicker> = (args)=><div style={{padding : "6rem"}}><ColorPicker {...args}/></div>;

export const ColorPickerExample = Template.bind({});

ColorPickerExample.args={
  colorVariants : [K_CAFE_SMART_COFFEE_LATTE_CAPPUCCINO_MAKER_5000365485],
  showProductColors : true
}

export const OutOfStock = Template.bind({});

let OOS = K_CAFE_SMART_COFFEE_LATTE_CAPPUCCINO_MAKER_5000365485;
OOS.inStock= false;
OutOfStock.args={
  colorVariants : [OOS],
  showProductColors : true
}
