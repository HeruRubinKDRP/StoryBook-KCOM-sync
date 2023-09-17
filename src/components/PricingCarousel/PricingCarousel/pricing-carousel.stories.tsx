import {StoryFn, Meta} from "@storybook/react";
import {iPricingCarousel, PricingCarousel} from "./PricingCarousel";

export default {
  title : "Organisms/Pricing Item",
  component : PricingCarousel,
  argTypes : {

  }
}as Meta;

const Template: StoryFn<iPricingCarousel>=(args)=><PricingCarousel {...args} />
export const ExamplePricingItem = Template.bind({});

ExamplePricingItem.args={

}
