import { StoryFn, Meta } from "@storybook/react";
import React, { ReactElement } from "react";
import SearchBox from "./SearchBox";

export default {
    title: "Navigation Global/Search Box",
    component : SearchBox,
    argTypes : {

    }
}as Meta;

const Template : StoryFn = (args)=>(<div><SearchBox {...args}/></div>)

export const SearchBoxExample = Template.bind({});
SearchBoxExample.args = {

}