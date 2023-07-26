import { StoryFn, Meta } from "@storybook/react"
import {ProductInfoItem, IproductItem} from "./ProductInfoItem";

export default {
  title : "Molecules/ CardBack Data",
  component : ProductInfoItem,
  argTypes:{
    currency : {control : "text"}
  }
}as Meta;

const Template: StoryFn<IproductItem> = (args)=> <ProductInfoItem  {...args} />

export const Primary = Template.bind({});

Primary.args = {
currency : "$"
}
