import { Story, Meta } from "@storybook/react/types-6-0";
import React, { ReactElement } from "react";
import {iPageNav, PageNav} from "./PageNav";

export default {
  title: "Organisms/Page Level Nav",
  component : PageNav,
  argTypes :{
    links :{control : "object"},
    background : {control : "select", default:"dark-roast",  options : ["dark-roast", "light-roast", "latte", "medium-roast", "white", "sepia", "text", "discount"]},
    classes : {control : "text"},
    collapsedLabel : {control : "text"},
    useGlass : {control : "boolean"},
    backGroundOpacity : {control : "number", range :{min:0.1, max:1, step:0.1}}

  }
} as Meta;

const Template: Story<iPageNav> = (args)=><PageNav {...args} />;

export const PageNavExample = Template.bind({});

PageNavExample.args = {
  background : "dark-roast",
  collapsedLabel : "Features Menu",
  backGroundOpacity : 0.5,
  links : [
    {
      label : "BREWERS",
      linkTo : "",
      classes : ""
    },{
      label : "TESTIMONIALS",
      linkTo : "",
      classes : ""
    },{
      label : "FEATURES",
      linkTo : "",
      classes : ""
    },{
      label : "KEURIG APP",
      linkTo : "",
      classes : ""
    },{
      label : "BREW MATCH",
      linkTo : "",
      classes : ""
    },{
      label : "BUILD YOUR STARTER KIT",
      linkTo : "",
      classes : "highlighted"
    }
    ],

}
