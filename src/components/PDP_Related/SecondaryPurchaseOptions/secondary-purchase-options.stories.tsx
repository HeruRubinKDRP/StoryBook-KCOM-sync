import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {iSecondaryPurchaseOptions, SecondaryPurchaseOptions} from "./SecondaryPurchaseOptions";

export default {
  title:"Organisms/Purchase Options",
  argTypes : {
    mainActionLabel : {control : "text"},
    mainPrice : {control : "number"},
    couponDetails : {control : "text"},
    mainAddToCartLabel : {control : "text"},
    productImagePath : {control:"string"},
    coupons:{control : "object"}
  }
} as Meta;

const Template: StoryFn<iSecondaryPurchaseOptions> = (args)=><SecondaryPurchaseOptions {...args} />;

export const BrewerPurchaseOptionsExample = Template.bind({});
BrewerPurchaseOptionsExample.args={
  mainActionLabel : "Brewer Only",
  basePrice : 199.99,
  couponDetails : "Coupon: 20% Off Select Brewers",
  productImagePath : "/images/silos/KCS_AltImages_KCOM-small.png",
  mainAddToCartLabel : " Add to Cart",
  mainPurchaseOptionSettings : {
    mainLabel : "Just Brewer",
    productName : "K-Café® SMART",
    basePrice : 199.99,
    finalPrice : 199.99,
    showStrikeThrough : false,
    learnMoreSettings :{
      mode: "pop-up",
      labelActive : "Learn More",
      labelStandard : "Learn More"
    }
  },
  upsellOptions :{
    upsellSectionName : "Better Together",
    comboFinalPrice : 239.99,
    comboBasePrice : 219.99,
    showStrikethrough : true,
    products : [
      {
        brand : "Keurig®",
        productName : "K-Cafe SMART Coffee Maker",
        productImagePath : "/images/silos/KCS_AltImages_KCOM-small.png",
        finalPrice : 19.99,
        basePrice : 39.99,
        showStrikeThrough : false
      },
      {
        brand : "HyperChiller®",
        productName : "HyperChiller",
        productImagePath : "/product-images/HyperChiller.webp",
        finalPrice : 19.99,
        basePrice : 39.99,
        showStrikeThrough : false
      }
    ]
  },
  coupons : [
    {
      couponLabel : "Apply Coupon",
      couponActive : false,
      couponDetails : "20% Off Select Brewers. "
    }
  ]
}
