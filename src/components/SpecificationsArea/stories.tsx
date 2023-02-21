import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {simpleCardPresenterExample} from "../../data/product-data";
import {iSpecificationsArea, SpecificationsArea} from "./SpecificationsArea";


const specAreaSettings = {
  title: "Molecules/Specifications Area",
  component : SpecificationsArea,
  argTypes : {
    contentStack : {control : "object"},
    mediaType : { control : "radio", options : ["movie", "image"]},
    mediaElementPath : {control : "text"}
    }

} as Meta;


const Template: Story<iSpecificationsArea> =(args)=><SpecificationsArea {...args} />

export const CommonExample = Template.bind({});

CommonExample.args = {
contentStack : [
  {
    cardType : "header-area",
    cardData : {
      headerAlignment : "center",
      colorScheme:"dark-roast",
      headerLabel:"Brew Possibilities",
      headerStyle:"line-through",
      hierarchyLevel:3
    }
  },
  {
    cardType : "multi-card-presenter",
    cardData : {
      cards : simpleCardPresenterExample
    }
  },
  {
    cardType : "header-area",
    cardData : {
      colorScheme:"dark-roast",
      headerLabel:"Specifications",
      headerStyle:"line-through",
      hierarchyLevel:3,
      headerAlignment: "center"
    }
  },{
    cardType : "header-area",
    cardData : {
      headerAlignment: "left",
      colorScheme:"dark-roast",
      headerLabel:"Dimensions",
      headerStyle:"medium-light",
      hierarchyLevel:3
    }
  },
  {
    cardType : "multi-key-value-area",
    cardData : {
      layoutMode : "inline",
      items :[
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
            label : "Height when open:"
          },
          secondaryMessage: {
            label : `17.2"`
          },
          colorSchemes : "dark-roast"
        },
        {
          layoutType : "inline",
          primaryMessage : {
            label: "Width:"
          },
          secondaryMessage: {
            label: `17.2"`
          },
          colorSchemes : "dark-roast"
        },
        {
          layoutType : "inline",
          primaryMessage : {
            label: "Weight:"
          },
          secondaryMessage: {
            label: `8.1lbs"`
          },
          colorSchemes : "dark-roast"
        }
      ]
    }
  },
  {
    cardType : "multi-card-presenter",
    cardData: {
      cards: [
        {
          cardType : "simple",
          simpleCardData : {
            title : "",
            titlePosition : "after-image",
            mainImageSize : "default-size",
            alignment : "center",
            mainFocalImage : {
              imagePath : "/product-images/kcs/kcs-dimensions.png",
              cropStyle : "no-crop"
            }
          }
        }
      ]

    }
  },
  {
    cardType : "multi-key-value-area",
    cardData : {
      layoutMode : "inline",
      items :[
        {
          layoutType : "stacked",
          primaryMessage : {
            label: "Phone Compatability"
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
  },
],
  mediaType : "movie",
  mediaElementPath : "/video/kcs_pdp.webm"
}


export default specAreaSettings;
