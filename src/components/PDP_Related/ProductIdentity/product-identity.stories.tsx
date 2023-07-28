import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {iProductIdentity, ProductIdentity} from "./ProductIdentityArea";

export default{
  title : "Molecules/CardBack Identity",
  argTypes : {

  }
} as Meta;

const Template: Story<iProductIdentity> =(args)=><div className="demo-box"><ProductIdentity {...args} /></div>

export const ProductIdentityBasicView = Template.bind({});

ProductIdentityBasicView.args={
  productName : "K-Café® SMART",
  productNameExtended : "K-Café® SMART Single-Serve Coffee, Cappuccino and Latte Maker",
  tagline : "With BrewID™ and a built in milk frother, it's easy to create indulgent Café Creations",
  rating :{
    totalNumberOfStars : 5,
    ratingNumber : 4.2,
    totalNumberOfReviews : 1431,
    scrollToTargetID : "Ratings"
  }
}
