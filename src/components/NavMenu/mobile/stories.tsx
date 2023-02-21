import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {iNavExperiment, iNavigation, MobileNavExperiments} from "./MobileMenu";

export default{
  title : "Experimental/Mobile Navigation",
  component : MobileNavExperiments,
  argTypes : {
    navData : {control : "object"},
    navMode : {control : "select", options :["typography-based", "accordion-images"]}
  }
}

const Template: Story<iNavExperiment> =(args)=><MobileNavExperiments {...args}/>

export const MobileTypographyBasedExample = Template.bind({});
const menuData : iNavigation = {
  navItems : [
    {
      label: "Keurig Starter Kit",
      linktTo: "",
      thumbnail: "",
      children: []
    },
    {
      label: "Start Auto-Delivery",
      linktTo: "",
      thumbnail: "",
      children: []
    },
    {
      label: "Beverages",
      linktTo: "",
      thumbnail: "",
      children: [
        {
          label : "All Beverages",
          linktTo : "",
          thumbnail : "",
          children :[
            {
              label : "Just Arrived",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Seasonals",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Best Sellers",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Flavored",
              linktTo : "",
              thumbnail : "",
              children :[]
            }
          ]
        },
        {
          label : "Coffee",
          linktTo : "",
          thumbnail : "",
          children :[
            {
              label : "Dark Roast & Expresso Roast",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Medium Roast",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Light Roast",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Decaf Coffee",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Iced Coffee",
              linktTo : "",
              thumbnail : "",
              children :[]
            }
          ]
        },
        {
          label : "Tea",
          linktTo : "",
          thumbnail : "",
          children :[
            {
              label : "Black Tea",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Green Tea",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Chai Tea",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Iced Tea",
              linktTo : "",
              thumbnail : "",
              children :[]
            }
          ]
        },
        {
          label : "Specialty Shop",
          linktTo : "",
          thumbnail : "",
          children :[
            {
              label : "Hot Cocoa",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Latte's & More",
              linktTo : "",
              thumbnail : "",
              children :[]
            }
          ]
        },
        {
          label : "Favorite Brands",
          linktTo : "",
          thumbnail : "",
          children :[
            {
              label : "Green Mountain Coffee Roasters",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "The Original Donut Shop",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "McCafe",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Starbucks",
              linktTo : "",
              thumbnail : "",
              children :[]
            },
            {
              label : "Dunkin’",
              linktTo : "",
              thumbnail : "",
              children :[]
            }
          ]
        },
      ]
    }
  ]
}

MobileTypographyBasedExample.args={
  navData : menuData,
  navMode : "typography-based"
}
