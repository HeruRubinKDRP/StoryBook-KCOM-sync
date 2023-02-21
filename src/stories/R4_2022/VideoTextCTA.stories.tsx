import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {ContentItem, iContentItem} from "../../components/ContentComponents/ContentComponent";
import {contentArgs} from "../stories-data";


export default{
  title : "Hold/Video With Text & CTA",
  component : ContentItem,
  argTypes :contentArgs
}as Meta;

const Template: Story<iContentItem> = (args) =><ContentItem {...args} />;

export const FullWidthBorderImage = Template.bind({});
export const FullWidthExample = Template.bind({});

FullWidthBorderImage.args={
  backGroundType:"movie",
  backgroundColor:"latte",
  backgroundUrlPath:"/video/kcs_pdp.webm",
  contrastBackground:"dark",
  sectionAppearance:"inset-beveled",
  ctaLabel:"Call to action",
  ctaLinkTo:"www.google.com",
  hasCTA:true,
  heightMethod:"fit-content",
  mainMessage:"Expert results without having to be an expert",
  mainMessageColor:"#3B2B2F",
  mainMessageSize:"Small",
  mainMessageWeight:"heavy-weight",
  messageTextAlignment:"text-left",
  secondaryMessage:"BrewID™ recognizes your K-Cup® pod and gives you the optimum settings and a curated menu of recipes for your favorite brews. Enjoy rich, full-bodied flavor for a delicious coffeehouse experience every time — no specialized knowledge required. ",
  secondaryMessageWeight:"regular-weight",
  secondaryMessageSize:"Small",
  sectionType:"content-right",
  component:"content",
  hasFocalImage:false,
  mainTextHasShadow:false,
  sectionName:"",

  hasTermsConditions : true,
  termsAndConditionsMode : "pop-up-mode",
  termsAndConditionsCTA:{
    termsAndConditionsLabelDetail : "Restrictions apply",
    termsAndConditionsCtaLabel : "See Details",
  },
  termsAndConditionsFullText : {
    header : "Lorem ipsum tolem set",
    termsAndConditionsDetailCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet."
  }
}

FullWidthExample.args={
  backGroundType:"movie",
  backgroundColor:"dark-roast",
  backgroundUrlPath:"/video/kcs_pdp.webm",
  contrastBackground:"dark",
  ctaLabel:"Call to action",
  ctaLinkTo:"www.google.com",
  hasCTA : true,
  heightMethod:"fit-content",
  mainMessage:"This is an example here with video",
  mainMessageColor : "white",
  mainMessageSize:"Medium",
  mainMessageWeight:"regular-weight",
  messageTextAlignment:"text-left",
  secondaryMessage:"test test test",
  secondaryMessageWeight:"regular-weight",
  sectionType:"content-right",
  hasTermsConditions : true,
  sectionAppearance : "inset-beveled",
  termsAndConditionsMode : "pop-up-mode",
  termsAndConditionsCTA:{
    termsAndConditionsLabelDetail : "Restrictions apply",
    termsAndConditionsCtaLabel : "See Details",
  },
  termsAndConditionsFullText : {
    header : "Lorem ipsum tolem set",
    termsAndConditionsDetailCopy : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum imperdiet."
  }
}
