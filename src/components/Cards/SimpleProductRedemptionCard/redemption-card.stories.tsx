import { Story, Meta } from "@storybook/react/types-6-0";
import {brands} from "../../../pages/myBrews";
import {iRedemptionCard, RedemptionCard} from "./RedemptionCard";

export default {
  title : "Loyalty/Simple Loyalty Redemption CardFlip",
  component :RedemptionCard,
  argTypes : {
    desiredWidth : {
      title : "Width of card, can be set from parent and calculated",
      control : {type : "range", min : 200, max: 500, step:1}
    }
  }
} as Meta;

const Template: Story<iRedemptionCard> = (args) => <RedemptionCard {...args} />;

export const RedemptionCardExample = Template.bind({})

RedemptionCardExample.args ={
  brand : brands.gmcr,
  productName : "Dark Magic® Coffee",
  defaultVariant : 0,
  desiredWidth : 300,
  variants : [
    {
      variantName : "K-Cup® Box 24 ct.",
      variantImage : "https://images.keurig.com/is/image/keurig/dark-magic-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
      variantNameShortened : "24 ct.",
      rewardGet : "Get it FREE"
    },
    {
      variantName : "K-Cup® Box 72 ct.",
      variantImage : "https://images.keurig.com/is/image/keurig/dark-magic-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
      variantNameShortened : "72 ct.",
      rewardGet : "Get it 25% Off"
    },
    {
      variantName : "K-Cup® Box 96 ct.",
      variantImage : "https://images.keurig.com/is/image/keurig/dark-magic-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
      variantNameShortened : "96 ct.",
      rewardGet : "Get it 10% Off"
    }
  ]
}
