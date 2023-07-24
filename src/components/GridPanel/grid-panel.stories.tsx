import {StoryFn, Meta} from "@storybook/react"
import React from "react"

//import {GridPanel, IgridPanel} from
import {GridPanel, IgridPanel} from "./GridPanel";


export default {
  title: "Molecules/GridPanel",
  component: GridPanel,
  argTypes: {
    panelGridType: {
      control: "select", options:
        [
          "mobile-item-panel",
          "four-columns",
          "custom"
        ]
    },
    focalImagePath : {control : "text"},
    fontColorOverride: {control: "color"},
    productStatus : {control : "select", options : ["active", "out-of-stock"]},
    productType : {control : "select", options : ["pod-lid", "coffee-maker"]},
    gridWidth : {control : "text"},
    minGridHeight : {control : "text"},
    nextShipDate : {control : "text"},
    podsLeft : {control : "number"},
    boxCount : {control : "number"}

  },
} as Meta

const Template: StoryFn<IgridPanel> = (args) => <GridPanel {...args} />

export const SubscriptionItemPanel = Template.bind({})
SubscriptionItemPanel.args = {
  panelGridType : "mobile-item-panel",
  productType : "pod-lid",
  productStatus : "active",
  gridWidth : "100%",
  minGridHeight : "3rem",
  nextShipDate : "Feb 13",
  podsLeft : 2,
  boxCount : 22,
  focalImagePath : "https://images.keurig.com/is/image/keurig/Breakfast-Blend-Coffee-K-Cup-Green-Mountain_en_general?fmt=png-alpha"
}
