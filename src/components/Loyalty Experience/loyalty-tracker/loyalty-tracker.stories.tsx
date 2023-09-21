import { StoryFn, Meta } from "@storybook/react";
import React, { ReactElement } from "react";
import {redeemBev} from "../data/loyalty-dummy-data";
import {iLoyaltyTracker, LoyaltyTracker} from "./loyalty-tracker";

export default{
  title: "Experiences/Loyalty Tracker",
  component: LoyaltyTracker,
  argTypes:{
    showTicks : {
      name : "Show ticks on progress bar",
      control : "boolean"
    },
    maxPoints : {
      name : "Points Amount to Get Reward",
      control : "number"
    },
    tickets : {
      name : "Current Rewards",
      control : "object"
    },
    potentialPoints : {
      name : "Potential Points: Carrot & Stick",
      control : "number"
    }
  }
} as Meta;

const Template: StoryFn<iLoyaltyTracker> = (args)=><LoyaltyTracker {...args} />

export const LoyaltyTrackerBase = Template.bind({});

LoyaltyTrackerBase.args ={
  points : 25,
  maxPoints : 250,
  showTicks : false,
  beverageLibrary : redeemBev,
  tickets : [
    {ticketCount : 1,
    expirationDate : "January 12th 2023"}
  ]
}

const DemoTemplate: StoryFn<iLoyaltyTracker> = (args)=> (
  <div>
    <h2>Large</h2>
    <div style={{width: "100%", padding: "6vw", minWidth:1000}}>
      <LoyaltyTracker {...args} />
    </div>

    <h2>Medium</h2>
    <div style={{width: 500, padding: "6vw"}}>
      <LoyaltyTracker {...args} />
    </div>

    <h2>Small</h2>
    <div style={{width: 270, padding: "2rem"}}>
      <LoyaltyTracker {...args} />
    </div>
  </div>
)

export const Variations = DemoTemplate.bind({});
Variations.args={
  points : 25,
  maxPoints : 250,
  showTicks : false,
  beverageLibrary : redeemBev,
  tickets : [
    {ticketCount : 1,
      expirationDate : "January 12th 2023"},
    {ticketCount : 1,
      expirationDate : "March 12th 2023"},
    {ticketCount : 1,
      expirationDate : "March 12th 2023"}
  ]
}
