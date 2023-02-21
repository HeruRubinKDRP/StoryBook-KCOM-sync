import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {KSS_OutOfStock, KSS_Variants} from "../../data/product-data";
import {ColorPicker, iColorPicker} from "./colorPicker";

export default{
  title : "Atoms/Color Picker",
  argTypes: {
    colorVariants : {control : "object"},
    showProductColors : {control : "boolean"}
  }
} as Meta;

const Template: Story<iColorPicker> = (args)=><div style={{padding : "6rem"}}><ColorPicker {...args}/></div>;

export const ColorPickerExample = Template.bind({});

ColorPickerExample.args={
  colorVariants : KSS_Variants,
  showProductColors : true
}

export const OutOfStock = Template.bind({});

OutOfStock.args={
  colorVariants : KSS_OutOfStock,
  showProductColors : true
}
