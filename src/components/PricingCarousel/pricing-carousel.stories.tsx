import {Story, Meta} from "@storybook/react/types-6-0";
import {iPricingCarousel, PricingCarousel} from "./PricingCarousel";

export default {
  title : "Organisms/Pricing Item",
  component : PricingCarousel,
  argTypes : {

  }
}as Meta;

const Template: Story<iPricingCarousel>=(args)=><PricingCarousel {...args} />
export const ExamplePricingItem = Template.bind({});

ExamplePricingItem.args={

}
