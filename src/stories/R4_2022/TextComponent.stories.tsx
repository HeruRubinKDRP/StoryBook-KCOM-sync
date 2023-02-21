import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {ContentItem, iContentItem} from "../../components/ContentComponents/ContentComponent";
import {contentArgs} from "../stories-data";


export default{
  title : "Hold/Text Component",
  component : ContentItem,
  argTypes :contentArgs
}as Meta;

const Template: Story<iContentItem> = (args) =><ContentItem {...args} />;


export const TextExample = Template.bind({});

TextExample.args={
  backGroundType:"solid-color",
  backgroundColor:"sepia",
  backgroundUrlPath:"",
  ctaLabel:"Build Your Kit",
  ctaLinkTo:"",
  ctaMode:"button",
  hasCTA:true,
  hasTermsConditions:true,
  heightMethod:"one-viewport",
  mainMessage:"Get your SMART Brewer for up to 55% off",
  mainMessageColor:"#473036",
  mainTextHasShadow:false,
  messageTextAlignment:"text-center",
  mainMessageSize:"Large",
  secondaryMessage:"Our Keurig® Starter Kit includes SMART Delivery with up to 96 FREE Pods, 25% Off Beverages & Free Shipping.",
  secondaryMessageWeight:"heavy-weight",
  secondaryMessageSize:"Medium",
  sectionType:"content-left",
  component:"content",
  contrastBackground:"none",
  hasFocalImage:false,
  sectionName:"",
  flag:{
    useFlag : false,
    flagLabel :"Keurig.com Exclusive Pricing",
    flagStyle : "square",
    flagBackgroundColor : "medium-roast",
    flagTextColor : "white"
  },
  termsAndConditionsMode : "pop-up-mode",
  termsAndConditionsCTA:{
    termsAndConditionsLabelDetail : "Restrictions apply",
    termsAndConditionsCtaLabel : "See Details",
  },
  termsAndConditionsFullText : {
    header : "Lorem ipsum tolem set",
    termsAndConditionsDetailCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in commodo nulla, vitae aliquam ex. Nam rutrum consequat mauris, a ullamcorper dolor dignissim eu. Quisque a libero eget est convallis sodales. Integer accumsan quam vitae quam tempor lacinia. Aliquam ultricies dolor vitae nunc venenatis, ac convallis mauris elementum. Vivamus ante orci, luctus quis convallis a, suscipit vitae libero. Proin a elit dictum, aliquet ipsum in, iaculis felis. Phasellus viverra viverra imperdiet. Curabitur posuere vestibulum turpis, nec convallis diam aliquet ut. Cras faucibus, arcu nec mollis mattis, lectus dolor pretium nunc, sed condimentum enim diam ut orci."
  }
}

export const SolidColorDeal = Template.bind({});

SolidColorDeal.args={
  backGroundType:"solid-color",
  backgroundColor:"dark-roast",
  backgroundUrlPath:"",
  ctaLabel:"Build Your Kit",
  ctaLinkTo:"",
  ctaMode:"button",
  hasCTA:true,
  hasTermsConditions:true,
  heightMethod:"one-viewport",
  mainMessage:"Get your SMART Brewer for up to 55% off",
  mainMessageColor:"white",
  mainTextHasShadow:true,
  messageTextAlignment:"text-center",
  mainMessageSize:"Large",
  secondaryMessage:"Our Keurig® Starter Kit includes SMART Delivery with up to 96 FREE Pods, 25% Off Beverages & Free Shipping.",
  secondaryMessageWeight:"heavy-weight",
  secondaryMessageSize:"Medium",
  sectionType:"content-front-and-center",
  component:"content",
  contrastBackground:"none",
  hasFocalImage:false,
  sectionName:"",
  flag:{
    useFlag : true,
    flagLabel :"Keurig.com Exclusive Pricing",
    flagStyle : "square",
    flagBackgroundColor : "medium-roast",
    flagTextColor : "white"
  },
  termsAndConditionsMode : "pop-up-mode",
  termsAndConditionsCTA:{
    termsAndConditionsLabelDetail : "Restrictions apply",
    termsAndConditionsCtaLabel : "See Details",
  },
  termsAndConditionsFullText : {
    header : "Lorem ipsum tolem set",
    termsAndConditionsDetailCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in commodo nulla, vitae aliquam ex. Nam rutrum consequat mauris, a ullamcorper dolor dignissim eu. Quisque a libero eget est convallis sodales. Integer accumsan quam vitae quam tempor lacinia. Aliquam ultricies dolor vitae nunc venenatis, ac convallis mauris elementum. Vivamus ante orci, luctus quis convallis a, suscipit vitae libero. Proin a elit dictum, aliquet ipsum in, iaculis felis. Phasellus viverra viverra imperdiet. Curabitur posuere vestibulum turpis, nec convallis diam aliquet ut. Cras faucibus, arcu nec mollis mattis, lectus dolor pretium nunc, sed condimentum enim diam ut orci."
  }
}


