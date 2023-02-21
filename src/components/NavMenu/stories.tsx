import { Story, Meta } from "@storybook/react/types-6-0"
import React, { ReactElement } from "react"

import { HeaderNav, iHeader} from "./Header";
import {SubNavGroups } from "./subNavGroups";


export default {
  title: "Experiences/Nav Menu",
  component : HeaderNav,
  argTypes :{
    headerType : {"radio" : {options : [ "fake-header" , "product-header" , "next-gen"]}},
    topLevelItems : { control : "object"}
  }
} as Meta;

const Template: Story<iHeader> = (args)=><HeaderNav {...args} />;

export const NavExample =  Template.bind({});


export const headerNavData : iHeader = {
  headerType: "next-gen",
  topLevelItems: [
    {
      label: "Keurig® Starter Kit",
      linkTo : "",
      classes : "ksk highlighted",

    },{
      label: "Start Auto-Delivery",
      linkTo : "",
      classes : ""
    },{
      label: "Beverages",
      linkTo : "",
      classes : "",
      subMenu : "beverages"
    },

    {
      label: "Coffee Makers",
      linkTo : "",
      classes : ""
    },{
      label: "Accessories",
      linkTo : "",
      classes : ""
    },{
      label: "Auto-Delivery",
      linkTo : "",
      classes : ""
    },{
      label: "Gift Guide",
      linkTo : "",
      classes : ""
    },{
      label: "Deals",
      linkTo : "",
      classes : ""
    }
  ],
  subMenus :[
    {
      hasSubMenu : false,
      subNavAreas :[],
      sideNavList :{
        list :[]
      }
    },{
      hasSubMenu : false,
      subNavAreas :[],
      sideNavList :{
        list :[]
      }
    },
    {
      hasSubMenu : true,
      subNavAreas : [
        {
          navSections :[
            {
              sectionLabel : "Specialty Shop",
              sectionMainLinkTo : "#",
              columnItems : [
                {
                  label : "Hot Cocoa",
                  linkTo : "",
                  imagePath : "",
                  size : "small"
                },
                {
                  label : "Latte's & More",
                  linkTo : "",
                  imagePath : "",
                  size : "small"
                }
              ]
            },
            {
              sectionLabel : "Tea",
              sectionMainLinkTo : "#",
              columnItems : [
                {
                  label : "Black Tea",
                  linkTo : "",
                  imagePath : "",
                  size : "small"
                },
                {
                  label : "Green Tea",
                  linkTo : "",
                  imagePath : "",
                  size : "small"
                },
                {
                  label : "Chai Tea",
                  linkTo : "",
                  imagePath : "",
                  size : "small"
                },
                {
                  label : "Iced Tea",
                  linkTo : "",
                  imagePath : "",
                  size : "small"
                }
              ]
            },
            {
              sectionLabel : "Coffee",
              sectionMainLinkTo : "#",
              columnItems : [
                {
                  label : "Dark Roast & Expresso Roast",
                  linkTo : "",
                  imagePath : "https://images.keurig.com/is/image/keurig/oz-dark-rosted1?wid=80&fmt=jpg&qlt=90,1",
                  size : "small"
                },
                {
                  label : "Medium Roast",
                  linkTo : "",
                  imagePath : "https://images.keurig.com/is/image/keurig/oz-medium-rosted-2?wid=80&fmt=jpg&qlt=90,1",
                  size : "small"
                },
                {
                  label : "Light Roast",
                  linkTo : "",
                  imagePath : "https://images.keurig.com/is/image/keurig/oz-light-rosted1?wid=80&fmt=jpg&qlt=90,1",
                  size : "small"
                },
                {
                  label : "Decaf",
                  linkTo : "",
                  imagePath : "https://images.keurig.com/is/image/keurig/oz-decaf1?wid=80&fmt=jpg&qlt=90,1",
                  size : "small"
                },
                {
                  label : "Brew Over Ice",
                  linkTo : "",
                  imagePath : "https://images.keurig.com/is/image/keurig/oz-brew-ice1?wid=80&fmt=jpg&qlt=90,1",
                  size : "small"
                }
              ]
            },
          ]
        }
      ],

      sideNavList: {
          list :[
            {

              label : "Deals of the Day",
              linkTo : "",
              icon : "icon-checkmark",
              classes : "deal"
            },
            {
              label : "Shop Gifts",
              linkTo : ""
            },
            {
              label : "K-Cup Pods",
              linkTo : ""
            },
            {
              label : "Variety Packs",
              linkTo : ""
            },
            {
              label : "Bagged Coffee",
              linkTo : ""
            },
            {
              label : "Canned Coffee",
              linkTo : ""
            },
            {
              label : "Beverage Bundles",
              linkTo : ""
            },
            {
              label : "Custom Variety Packs",
              linkTo : ""
            },
            {
              label : "Learn About Recyclable K-Cup Pods",
              linkTo : ""
            },
            {
              label : "Find your perfect cup",
              linkTo : ""
            }
          ]
        }

    }
  ]
}

NavExample.args = headerNavData
