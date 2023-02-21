import {Story, Meta} from "@storybook/react/types-6-0"
import React from "react"

import {Iscroller, ScrollerSpy} from "./ScrollerSpy";

export default {
  title: "Compositional Components/Scroller Spy",
  component: ScrollerSpy, ScrollerSpy,
  argTypes: {
    label : {control : "text"}
  }
} as Meta;

const Template: Story<Iscroller> = (args) => <ScrollerSpy {...args} />
export const Example = Template.bind({});

Example.args = {
  label : "sdsdsd"
}
