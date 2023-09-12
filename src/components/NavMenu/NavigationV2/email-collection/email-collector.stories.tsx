import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {EmailCollector} from "./EmailCollector";

export default {
    title : "Navigation Global/Email Collector",
    component : EmailCollector,
    argTypes : {
        emailErrorMessage : {control : "text"},
    }
}as Meta;

const Template : StoryFn = (args)=>(
    <div style={{padding : "2vw"}}>
        <EmailCollector
            placeHolderText={""} submitButtonText={""}
            explanationText={""}
            emailValidMessage={""}
            emailErrorMessage={""}
            {...args}        />
    </div>
);

export const EmailCollectorExample = Template.bind({});

EmailCollectorExample.args={
    emailErrorMessage : "Please enter a valid email address",
    emailValidMessage : "Thank you for subscribing!",
    placeHolderText : "Email address",
    explanationText : "<span class='attention'>Save 15% On Your Next Order</span> <br>Get news, deals and more in your inbox.",
    submitButtonText : "Subscribe"
}