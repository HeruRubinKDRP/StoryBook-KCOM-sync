import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {iconsList} from "../../Graphic/iconData";
import {FeatureBullet, iFeatureBullet} from "./FeatureBullet";

export default{
  title : "Molecules/Feature Bullet",
  argTypes:{
    featureIcon : {control : "select", options : iconsList},
    featureLabel : {control : "text"},
    showChevron : {control : "boolean"}
  }
}as Meta;

const Template: Story<iFeatureBullet> =(args) =><div className="demo-box-no-pad"><FeatureBullet {...args}/></div>

export const BasicView = Template.bind({});

BasicView.args={
  featureIcon : "brew-id",
  featureLabel : "BrewID",
  showChevron : true
}
