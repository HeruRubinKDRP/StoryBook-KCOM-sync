import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {CLP, Iclp} from "./CLP";

export default {
  title : "Experiences/CLP",
  argTypes :{
    designVersion :{control : "radio", options:["standard", "large-image", "box-art"]}
  }
} as Meta;

const Template: Story<Iclp> = (args)=>

      <div style={{width:"100%", height:"100%"}} className={` `}>
        <CLP {...args} />
      </div>


export const CLPdemo = Template.bind({});

CLPdemo.args = {
  designVersion: "standard"
}
