import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {colorNamesList} from "../_utilities/color-name-to-value/colorNameToValue";
import {AddKSK, iAddKSK} from "./AddKSK";

export default{
  title: "Organisms/Add KSK",
  argTypes : {
    themeColor : {
      control : "select",
      options : colorNamesList
    },
    numberOfRequiredPods : {
      control : "number"
    }
  }
} as Meta;

const Template: Story<iAddKSK> = (args)=><div className="demo-box"><AddKSK {...args} /></div>

export const AddKSKBasicView = Template.bind({});
AddKSKBasicView.args = {
  themeColor : "KSK",
  flag : {
    flagLabel : "Our Best Deal",
    flagColor : "KSK"
  },
  price:{
    basePrice : 199.99,
    finalPrice : 99.99
  },
  message:{
    primaryMessage :"You're saving $100 ",
    secondaryMessage : "with Keurig Starter Kit"
  },
  learnMore: {
    label : "Learn More",
    mode : "pop-up",
    articleTitle : "Benefits of Keurig® Starter Kit",
    articleContent : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat ante vitae commodo mollis. Cras dui nunc, mollis venenatis nunc vel, condimentum dapibus ipsum. Quisque auctor lacus quam, quis dignissim nisl rutrum vel. Ut tristique ante sit amet diam placerat ultrices et hendrerit sem.",
  },
  brewerImagePath : "/product-images/kcs/kcs-0.png",
  finePrint :"1 year, 16 box Auto-Delivery commitment"

}
