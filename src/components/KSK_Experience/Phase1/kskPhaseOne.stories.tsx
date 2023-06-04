import { Story, Meta } from "@storybook/react/types-6-0"
import React from "react";
import {filtersList} from "../../../pages/myBrews";
import {podLibrary} from "../../../data/beverage-library";
import {iKSK_PhaseOne, KSK_Phase_One} from "./KSK_Phase_One";


export default {
  title : "Experiences/KSK Phase One",
  component : KSK_Phase_One,
  argTypes : {
    podLibrary : {control : "object"}
  }
}as Meta;

const Template: Story<iKSK_PhaseOne> = (args)=><KSK_Phase_One {...args}/>;

export const KSK_Example_P1 = Template.bind({});

KSK_Example_P1.args={
  podLibrary : podLibrary,
  helpMeChooseFilters : filtersList
}


