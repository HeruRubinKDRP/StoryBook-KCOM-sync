import { Story, Meta } from "@storybook/react/types-6-0";
import React, { ReactElement } from "react";
import SearchBox from "./SearchBox";

export default {
    title: "Navigation Global/Search Box",
    component : SearchBox,
    argTypes : {

    }
}as Meta;

const Template : Story = (args)=>(<div><SearchBox {...args}/></div>)

export const SearchBoxExample = Template.bind({});
SearchBoxExample.args = {

}