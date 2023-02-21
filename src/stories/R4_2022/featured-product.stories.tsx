import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {FeaturedProduct, iFeaturedProduct} from "../../components/FeaturedProduct/FeaturedProduct";
import {flagStyles} from "../../components/Flag/Flag";
import {colorNamesList} from "../../components/_utilities/color-name-to-value/colorNameToValue";


export default{
  title: "Hold/Featured Product",
  component: FeaturedProduct,
  argTypes:{
    hasFlag :{
      name : "Does it have a Flag/Banner?",
      control : "boolean"
    },
    featureLabel : {control : "text"},
    productName:{control : "text"},
    productNameExtended:{control : "text"},
    tagline:{control : "text"},
    featuresList :{control :"object"},
    hasCTA : {control:"boolean"},
    flagLabel : {control : "text"},
    flagStyle :{control : "select", options : flagStyles},
    flagColor : {control : "select", options : colorNamesList}
  }
} as Meta;

const Template:Story<iFeaturedProduct>=(args)=><FeaturedProduct {...args} />;

export const BasicExample = Template.bind({});

BasicExample.args={
  hasFlag : true,
  flagLabel : "BEST DEAL",
  productName : "Featured Bundle",
  productNameExtended : "K-Mini® Essentials Bundle",
  tagline : "Quick start your coffee routine",
  description : "Everything you need to start brewing your favorite coffee, including some of our most popular accessories and our incredibly slim and easy to use coffee maker, the K-Mini®",
  hasCTA : true,
  ctaLabel : "Buy Now",
  ctaType : "primary",
  flagStyle : "alternating-sharp-round",
  flagColor : "Bold-CTA",
  featuresList :[
    {
      label : "K-Mini® Coffee Maker",
      icon : "star-full"
    },
    {
      label : "24 count Green Mountain Coffee Roasters® Breakfast Blend K-Cup® Pods",
      icon : "icon-checkmark"
    },
    {
      label : "24 count Green Mountain Coffee Roasters® Nantucket Blend K-Cup® Pods",
      icon : "icon-checkmark"
    },
    {
      label : "Keurig® K-Cup® Pod Carousel - keep your beverages organized and conveniently displayed; holds up to 36 K-Cup® pods",
      icon : "icon-checkmark"
    },
    {
      label : "Keurig® Signature Mug, Red",
      icon : "icon-checkmark"
    },
    {
      label : "14-oz. bottle of Descaling Solution: helps extend the life of your brewer (when used regularly)",
      icon : "icon-checkmark"
    }
  ]
}
