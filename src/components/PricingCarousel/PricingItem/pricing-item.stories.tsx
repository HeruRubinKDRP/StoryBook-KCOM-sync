import {StoryFn, Meta} from "@storybook/react";
import {iPricingItem, PricingItem} from "./PricingItem";


export default {
  title : "Molecules/Pricing Item",
  component : PricingItem,
  argTypes : {
    description :{control : "text"}
  }
}as Meta;

const Template: StoryFn<iPricingItem>=(args)=><PricingItem {...args} />
export const ExamplePricingItem = Template.bind({});

ExamplePricingItem.args={
  cardStyle : "square",
  layout : "side-by-side",
  productImagePath : "https://s7d4.scene7.com/is/image/keurig/Desktop_Carousel%202%20-%20Brewer%20Intender%20-%20card4",
  description : "Enjoy creamy, velvety frothed milk with all of your favorite beverages",
  basePrice : 79.99,
  finalPrice : 39.99,
  discountPercentage : 50,
  hasFlag : true,
  flagLabel : "Coffee House Beverages",
  flagColor : "secondaryGold",
  flagStyle : "alternating-sharp-round",
  backgroundColor : "sepia",
  itemBackgroundColor : "dark-roast",
  cardTitle : "50% off Milk Frother with Brewer Purchase"
}
