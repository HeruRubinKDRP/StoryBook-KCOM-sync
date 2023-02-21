import {Story, Meta} from "@storybook/react/types-6-0";
import classNames from "classnames";
import React from "react";
import {myBrewsQuery} from "../my-brews/myBrewsManager";
import {PanelHeader, IpanelHeader} from "./PanelHeader";

export default {
  title : "Molecules/Panel Header",
  argTypes:{
    headerText : {control : "text"},
    hasCloseButton : {control : "boolean"},
    hasBackButton : {control : "boolean"},

  }
} as Meta;

const Template: Story<IpanelHeader> = (args)=>
    <div style={{width:"100%", height:"100%"}} className={` `}>
      <PanelHeader {...args} />
    </div>



export const Basic = Template.bind({});

Basic.args = {
  headerText : "Header Text",
  hasCloseButton : true,
  hasBackButton : true
}


