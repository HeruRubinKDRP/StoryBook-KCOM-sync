import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {FeaturesList, iFeaturesList} from "./FeaturesList";

export default{
  title: "Atoms/Features List",
  argTypes :{
    features :{control : "object"}
  }
}as Meta;

const Template:Story<iFeaturesList> = (args)=><FeaturesList {...args} />

export const FeaturesListExample = Template.bind({});

FeaturesListExample.args ={
  features : [
    {
      label : "Feature one",
      icon : "icon-brand-mug"
    },
    {
      label : "Feature two",
      icon : "delivery-truck"
    },
    {
      label : "Feature three",
      icon : "icon-checkmark"
    }
  ]
}
