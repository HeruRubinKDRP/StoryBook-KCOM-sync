import { Story, Meta } from "@storybook/react/types-6-0"
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

const Template: Story<iKTable> = (args)=><div style={{padding : "3rem"}}><KTable {...args}/></div>
const CompTemplate: Story<iKTable> = (args)=><div style={{height: "100vh"}}><KTable {...args}/></div>
const BasicTemplate: Story<iKTable> = (args)=><KTable {...args}/>

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




