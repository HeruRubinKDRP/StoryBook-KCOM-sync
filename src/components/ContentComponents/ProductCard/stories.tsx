import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {iconsList} from "../../Graphic/iconData";
import {iProductCard, ProductCard} from "./ProductCard";

export default {
  title: "Organisms/CardBack CardFlip",
  argTypes:{
    productImagePath : { control : "text"},
    productName : {control : "text"},
    showProductColors : {control : "boolean"},
    productColorValues : {control : "object"},
    colorNames : {control : "object"},
    hasCTA : {control : "boolean"},
    ctaColorOverride : {control : "text"},
    primaryCtaLabel :{control : "text"},
    primaryCtaIcon : {control:"select", options : iconsList},
    showPrice : {control : "boolean"},
    pricingMessage: {control : "text"},
    priceOriginal : {control : "number"},
    priceFinal : {control : "number"},
    showStrikeThrough : {control : "boolean"},
    hasLearnMoreLink : {control:"boolean"},
    learnMoreLabel : {control:"text"},
    learnMoreLinkTo : {control:"text"}
  }
} as Meta;

const Template: Story<iProductCard> = (args)=><div style={{padding:"3rem", display: "flex", justifyContent:"center"}}><ProductCard {...args} /></div>
export const ProductCardExample = Template.bind({});

ProductCardExample.args ={
  primarySlogan: "Coffeehouse beverages at home",
  secondarySlogan: "Fast & easy coffeehouse drinks, built-in milk frother",
  productImagePath: "/images/silos/KCS_AltImages_KCOM-small.png",
  productName: "K-Cafe® SMART",
  showProductColors: true,
  showPrice : true,
  priceFinal : 99.99,
  productColorValues: ["black",  "gray", "white"],
  pricingMessage : "List Price $199.99",
  colorVariants: [
    {
      variantName : "Black Stainless Steel",
      inStock : true
    },
    {
      variantName : "Stainless Steel",
      inStock : true
    },
    {
      variantName : "White",
      inStock : false
    }
    ],
  hasCTA: true,
  primaryCtaButtonType: "primary",
  hasLearMoreLink : true,
  learnMoreLabel : "Learn More",
  learnMoreLinkTo : "#"
}

export const CompletelyOutOfStock = Template.bind({});
CompletelyOutOfStock.args={
  colorVariants:[
      {
        inStock: false,
        variantName: 'Black Stainless Steel'
      },
{
  inStock: false,
    variantName: 'Stainless Steel'
},
{
  inStock: false,
    variantName: 'White'
}
],
  primaryCtaButtonType: "primary",
  pricingMessage : "List Price $199.99",
  hasCTA: true,
  hasLearMoreLink: true,
  learnMoreLabel: "Learn More",
  learnMoreLinkTo: "#",
  primarySlogan: "Out Of Stock",
  productColorValues: [
    'black',
    'gray',
    'white'
  ],
  productImagePath: "/images/silos/KCS_AltImages_KCOM-small.png",
  productName: "K-Cafe® SMART",
  secondarySlogan: "Fast & easy coffeehouse drinks, built-in milk frother",
  showProductColors: true,
  priceOriginal: 199.99,

  showStrikeThrough: false,
  priceFinal : 199.99,
}


export const SMART_Style = Template.bind({});

SMART_Style.args ={
  primarySlogan: "When you build a Starter Kit",
  secondarySlogan: "Fast & easy coffeehouse drinks, built-in milk frother",
  productImagePath: "/images/silos/KSPS/ksps.png",
  productName: "K-Supreme® SMART Plus",
  showProductColors: true,
  productColorValues: ["black"],
  colorVariants: [
    {
      variantName : "Black Stainless Steel",
      inStock : true
    }
  ],
  hasCTA: true,
  primaryCtaLabel : "Build your kit",
  primaryCtaButtonType: "primary",
  hasLearMoreLink : true,
  learnMoreLabel : "Learn More",
  learnMoreLinkTo : "#",
  priceFinal : 99.99,
  priceOriginal : 199.99,
  showStrikeThrough : false
}
