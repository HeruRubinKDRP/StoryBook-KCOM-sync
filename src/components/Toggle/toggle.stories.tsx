import {Story, Meta} from "@storybook/react/types-6-0"
import React from "react"
import {Itoggle, KToggle, toggleStyleList} from "./Toggle";

export default{
  title: "Atoms/K-Toggle",
  component : KToggle,
  argTypes:{
    toggleType : {control : "select", options : toggleStyleList},
    toggleOptions : {control : "object"}
  }
}

const Template: Story<Itoggle> = (args) => <KToggle {...args} />

export const Primary = Template.bind({});

Primary.args = {
  selectedCaratPosition : "top",
  toggleOptions : [
    {label : "one", action : ()=>{}},
    {label : "two", action : ()=>{}},
    {label : "three", action : ()=>{}}
  ]
}

export const ToggleWithImages = Template.bind({});

ToggleWithImages.args={
  selectedCaratPosition : "top",
  toggleOptions : [
    {
      label : "K-Supreme® SMART",
      imagePath : "/product-selection/kss-thumb.webp"
    },
    {
      label : "K-Supreme® Plus SMART",
      imagePath : "/product-selection/ksps-thumb.webp"
    },
  ]
}

export const TogglePillShaped = Template.bind({});

TogglePillShaped.args={
  selectedCaratPosition : "bottom",
  toggleStyle:"one-pill",
  toggleOptions : [
    {
      label : "K-Supreme® SMART"
    },
    {
      label : "K-Supreme® Plus SMART"
    },
  ]
}


