import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {iLoadingPacifier, LoadingPacifier} from "./LoadingPacifier";
import {iRating} from "../Rating/Rating";

export default {
    title : "Atoms / Loading Pacifiers",
    component : LoadingPacifier,
    argTypes : {
        pacifier : {control : " select", options : ["coffee-cup"]}
    }
}  as Meta;

const Template : StoryFn<iLoadingPacifier> = (args) =>(
    <div style={{height:"30vh", width:"50vw", backgroundColor:"grey"}}>
        <LoadingPacifier {...args} />
    </div>
);

export const LoadingPacifierExample = Template.bind({});

LoadingPacifierExample.args = {
    pacifier : "coffee-cup"
}
