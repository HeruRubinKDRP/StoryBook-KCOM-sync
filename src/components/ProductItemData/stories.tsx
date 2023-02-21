import { Story, Meta } from "@storybook/react/types-6-0"
import {ProductInfoItem, IproductItem} from "./ProductInfoItem";

export default {
  title : "Molecules/ Product Data",
  component : ProductInfoItem,
  argTypes:{
    currency : {control : "text"}
  }
}as Meta;

const Template: Story<IproductItem> = (args)=> <ProductInfoItem  {...args} />

export const Primary = Template.bind({});

Primary.args = {
currency : "$"
}
