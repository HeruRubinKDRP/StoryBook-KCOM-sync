import {Story, Meta} from "@storybook/react/types-6-0"
import React from "react"

import {iconsList} from "../Graphic/iconData";
import {KButton, iButton} from "./KButton";


export default {
  title: "Atoms/K-Button",
  component: KButton,
  argTypes: {
    backgroundColorOverride: {control: "color"},
    transitionType: {control: "select", options: ["rise", "scale-up", "none"]},
    buttonWidthOverride: {control: "text"},
    buttonWidth: {
      control: "select",
      options: [
        "fit-width", "fit-to-content"
      ]
    },
    buttonType: {
      control: "select",
      description: 'sdsdsd',
      options:
        [
          "primary" ,
          "primary-light" ,
          "primary-cart-action" ,
          "secondary" ,
          "action" ,
          "text-icon-noBG" ,
          "link-internal" ,
          "link-external" ,
          "round-no-label" ,
          "ecommerce-primary" ,
          "ecommerce-secondary" ,
          "ecommerce-secondary-2-lines"
        ]
    },
    iconPlacement: {
      control: "select",
      options: [
        "before-label", "after-label", "no-icon", "right-edge", "left-edge"
      ]
    },
    iconStandard: {
      control: "select",
      options: iconsList
    },
    fontColorOverride: {control: "color"},
    showPrice : {
      control : "boolean"
    },
    basePrice : {control : "number"},
    finalPrice :{control : "number"},
    calcPrice :{control:"boolean"}
  },
} as Meta

const Template: Story<iButton> = (args) => <div style={{padding: "4rem"}}><KButton {...args} /></div>

export const SandBoxButton = Template.bind({});
SandBoxButton.args ={
  buttonType:"primary",
  buttonWidth:"fit-to-content",
  iconPlacement:"after-label",
  iconStandard:"icon-add",
  label:"Button Label CTA",
  transitionType:"rise"
}

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args ={
  buttonType:"primary",
  buttonWidth:"fit-to-content",
  classes:"",
  iconPlacement:"right-edge",
  iconStandard:"icon-favorite",
  label:"Button Label CTA"
}


export const Primary = Template.bind({});
Primary.args = {
  label: "K-Button",
  buttonType: "primary",
  iconStandard: "none",
  iconPlacement: "no-icon",
}

export const PriceOnButton = Template.bind({});
PriceOnButton.args={
  buttonType:"secondary",
  buttonWidth:"fit-to-content",
  carat:"none",
  discount:25,
  iconPlacement:"after-label",
  label:"K-Button",
  price:12.99,
  finalPrice :8.99,
  calcPrice : false,
  showPrice : true,
}

export const SecondaryCTA = Template.bind({});
SecondaryCTA.args={
  buttonType:"secondary",
  buttonWidth:"fit-to-content",
  iconPlacement:"no-icon",
  iconStandard:"none",
  label:"K-Button"
}
