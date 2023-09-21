import { StoryFn, Meta } from "@storybook/react"
import React from "react";
import {iKTable, KTable, kTableCellType} from "./KTable";
import {sampleTable, sampleTableBig, tableWithIcons} from "../../data/sample-data";

export default{
  title : "Molecules/K-Table",
  component : KTable,
  argTypes :{
    rows : {control : "array"}
  }
} as Meta;

const Template: StoryFn<iKTable> = (args)=><div style={{padding : "3rem"}}><KTable {...args}/></div>
const CompTemplate: StoryFn<iKTable> = (args)=><div style={{height: "100vh"}}><KTable {...args}/></div>
const BasicTemplate: StoryFn<iKTable> = (args)=><KTable {...args}/>

export const ExampleTable = CompTemplate.bind({});

ExampleTable.args = {
  rows: sampleTable,
  columnWidths : ["33%", "33%", "33%"],
  ensureProperGrid : false
}

export const TableWithIcons = Template.bind({});

TableWithIcons.args={
  rows: tableWithIcons
}

export const LargeTable = BasicTemplate.bind({});

LargeTable.args={
  rows : sampleTableBig,
  columnWidths : ["20rem", "20rem", "20rem", "20rem","20rem", "20rem", "12rem", "12rem", "12rem", "12rem", "12rem", "12rem"],
  ensureProperGrid : true
}




