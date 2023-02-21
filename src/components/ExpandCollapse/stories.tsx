import { Story, Meta } from "@storybook/react/types-6-0"
import React from "react";
import {KTable} from "../Table/KTable";
import {sampleTable, tableWithIcons} from "../Table/sample-data";
import {ExpandCollapse, iExpandCollapse} from "./expand-collapse";

export default{
  title: "Molecules/Expand-Collapse",
  component : ExpandCollapse,
  argTypes : {
        expanderStyle : {control : "radio", options:["button", "minimalist"]},

        content : {control:"object"}
  }
} as Meta;

const Template: Story<iExpandCollapse> = (args)=><ExpandCollapse {...args}/>

export const ExampleExpandCollapse = Template.bind({});

ExampleExpandCollapse.args={

}

export const Example = ()=>{
  return (
    <div>
      <ExpandCollapse
        expanderStyle="button"
        content={<KTable rows={tableWithIcons}/>}
        expandText={"Compare"}
      />
    </div>
  )
}


