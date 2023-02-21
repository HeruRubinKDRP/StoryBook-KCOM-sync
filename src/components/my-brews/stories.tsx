import {Story, Meta} from "@storybook/react/types-6-0";
import React from "react";
import {brands} from "../../pages/myBrews";
import {ImyBrewsManager, MyBrewsManager} from "./myBrewsManager";


export default{
  title : "Experiences/My Brews Manager",
  argTypes : {
    brands : {control : "object"},
    userHasConnected : {control : "boolean"},
    userHasScheduled : {control : "boolean"},
  }
} as Meta;

const Template: Story<ImyBrewsManager> = (args) => <MyBrewsManager {...args} />


export const AddItemsOnTop = Template.bind({});

AddItemsOnTop.args = {
  brands : brands,
  userHasConnected : true,
  userHasScheduled : true

}
