import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {FeatureBulletsArea, iFeatureBulletsArea} from "./FeatureBulletsArea";

export default{
  title : "Molecules/Feature Bullets Area",
  argTypes :{
    features : {control : "object"},
    height:{control :"text"}
  }
} as Meta;

const Template: Story<iFeatureBulletsArea> =(args)=><div className="demo-box"><FeatureBulletsArea {...args}/></div>;

  export const BasicView = Template.bind({});

  BasicView.args={
    featuresAreaName : "SMART Features",
    height :"60%",
    features : [
      {
        showChevron :true,
        featureLabel : "BrewId™",
        featureIcon : "brew-id",
        featureDetails : "Recognizes your K-Cup® pod and recommends a curated menu of café creations to explore on your Keurig® app"
      },
      {
        showChevron :true,
        featureLabel : "Connected Convenience",
        featureIcon : "icon-wifi",
        featureDetails : "Brew from anywhere, get personalized recommendations, manage your favorites"
      },
      {
        showChevron :true,
        featureLabel : "Barista Mode™",
        featureIcon : "barista-mode",
        featureDetails : "Get easy step-by-step directions in the Keurig® app to make lattes, cappuccinos, or your favorite Café Creations"
      },
      {
        showChevron :true,
        featureLabel : "Smart Auto-Delivery",
        featureIcon : "icon-shipping-truck",
        featureDetails : "Get just enough pods, just when you need them"
      }
    ]
  }
