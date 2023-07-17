import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react"
import {iMultikeyvalueArea, MultikeyValueArea} from "./MultiKeyValueArea";

let multiKeyValueSettings = {
  title: "Atoms/Multi Key Values Area",
  component : MultikeyValueArea,
  argTypes : {
    items : {control : "object"},
    layoutMode : {control : "radio", options : ["stacked", "inline"]}
  }
}

const Template: Story<iMultikeyvalueArea>=(args)=><MultikeyValueArea {...args}/>;

export const LongFormStackedExample = Template.bind({});
LongFormStackedExample.args={
  layoutMode : "stacked",
  items : [
    {
      layoutType : "stacked",
      primaryMessage : {
        label : "Phone Compatability"
      },
      secondaryMessage: {
        label : `The K-Café® SMART brewer is compatible with iOS 13 and higher and Android 8 or higher.`
      },
      colorSchemes : "dark-roast"
    },
    {
      layoutType : "stacked",
      primaryMessage : {
        label: "Wi-Fi® Requirements"
      },
      secondaryMessage: {
        label: `The K-Café® SMART is optimized for home 2.4 GHz Wi-Fi® networks, using WPA2-PSK security. It is not compatible with networks that require an additional username and/or password, a webpage click through to establish a connection or 5 GHz Wi-Fi® networks."`
      },
      colorSchemes : "dark-roast"
    },
    {
      layoutType : "stacked",
      primaryMessage : {
        label: "Compatible with the My K-Cup® Universal Reusable Coffee Filter"
      },
      secondaryMessage: {
        label: `Brew your own ground coffee (sold separately)`
      },
      colorSchemes : "dark-roast"
    }
  ]
}

export const AreaExample = Template.bind({});

AreaExample.args={
  layoutMode : "inline",
  items : [
    {
      layoutType : "inline",
      primaryMessage : {
        label : "Height:"
      },
      secondaryMessage: {
        label : `12.7"`
      },
      colorSchemes : "dark-roast"
    },
    {
      layoutType : "inline",
      primaryMessage : {
        label: "Height when open:"
      },
      secondaryMessage: {
        label : `17.2"`
      },
      colorSchemes : "dark-roast"
    },
    {
      layoutType : "inline",
      primaryMessage : {
        label : "Width:"
      },
      secondaryMessage: {
        label : `17.2"`
      },
      colorSchemes : "dark-roast"
    },
    {
      layoutType : "inline",
      primaryMessage : {
        label : "Weight:"
      },
      secondaryMessage: {
        label : `8.1lbs"`
      },
      colorSchemes : "dark-roast"
    }
  ]
}

export default multiKeyValueSettings;
