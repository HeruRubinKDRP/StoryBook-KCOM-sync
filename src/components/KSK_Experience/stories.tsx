import { Story, Meta } from "@storybook/react/types-6-0";
import React, { ReactElement } from "react";
import {ChooseBrewer} from "./ChooseBrewer";
import {coffeeMakerList, Iksk, KSK} from "./KSK";


export default {
  title : "Experiences/KSK",
  component:KSK,
  argTypes: {
    name : {control : "text"}
  }
} as Meta;

const Template: Story<Iksk> =(args) =><KSK {...args} />

export const KSK_base = Template.bind({});

KSK_base.args={
  name: "test",
  steps : [
    {
      name: "Select Coffee Maker",
      panel : <ChooseBrewer filterProgram={"all"} productsList={coffeeMakerList} mainFunc={ ()=>{} } />
    }
  ]
}


