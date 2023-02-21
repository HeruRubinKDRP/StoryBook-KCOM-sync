import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {FocalImageContent, iFocalImage} from "./FocalImage";


export default {
  title : "Molecules/Focal Image Content",
  component : FocalImageContent
} as Meta;

const Template: Story<iFocalImage> = (args)=> <FocalImageContent {...args} />;

export const FocalImageAppExample = Template.bind({});

FocalImageAppExample.args={
  mainBG_Color : "latte70",
  mainBG_imageCover : "/app/app-bg.svg",
  focalImagePath : "/app/app-RecipeScreenshot.png",
  primaryMessageHeading : "Get Connected to Amazing Coffee",
  primaryMessageParagraph : "Connect your brewer to the Keurig® app to unlock exciting SMART features, including simple recipes for your favorite coffeehouse indulgences. ",
  useCallOut : true,
  calloutLabel : "Barista Mode™",
  calloutHeader : "Step-By-Step Guided Recipes",
  calloutParagraph : "Explore a curated menu of Café Creations for your pod. See one you like?  Barista Mode™ will walk you through it. Before you know it, you'll be sipping on an iced vanilla latte. ",

  hasCTA : true,
  calloutBG_Color : "latte",
  useAppStoreCTA : true

}
