import { StoryFn, Meta } from "@storybook/react";
import React, { ReactElement } from "react";
import {iStickyHeader, StickyHeader} from "./StickyHeader";
import {NavDemo} from "../NavMenu/NavigationV2/navigation.stories";
import {ScrapComponent} from "./scrap";

export default {
    title: "Navigation Global / Sticky Header",
    component : StickyHeader,
    argTypes: {}
} as Meta;

const Template: StoryFn<iStickyHeader> = (args) => (
    <>
        <StickyHeader {...args} />
        <div style={{height:250, marginBottom:24, backgroundColor : "lightgray"}}></div>
        <div style={{height:250, marginBottom:24, backgroundColor : "lightgray"}}></div>
        <div style={{height:250, marginBottom:24, backgroundColor : "lightgray"}}></div>
        <div style={{height:250, marginBottom:24, backgroundColor : "lightgray"}}></div>
        <div style={{height:250, marginBottom:24, backgroundColor : "lightgray"}}></div>
        <div style={{height:250, marginBottom:24, backgroundColor : "lightgray"}}></div>
        <div style={{height:250, marginBottom:24, backgroundColor : "lightgray"}}></div>
        <div style={{height:250, marginBottom:24, backgroundColor : "lightgray"}}></div>
        <div style={{height:250, marginBottom:24, backgroundColor : "lightgray"}}></div>
        <div style={{height:250, marginBottom:24, backgroundColor : "lightgray"}}></div>
        <div style={{height:250, marginBottom:24, backgroundColor : "lightgray"}}></div>
    </>
);

export const StickyHeaderExample = Template.bind({});

StickyHeaderExample.args = {
    navigationRelated : {
        sizingMode : "liquid-design",
        loggedIn : false,
        emailErrorMessage : "Please enter a valid email address",
        emailSuccessMessage : "Thank you for subscribing!",
        emailExplanationText : "Sign up for our newsletter to receive updates on new products and promotions.",
        placeHolderText : "Enter your email address",
        defaultActiveHoverIndex : -1,
        submitButtonText : "Subscribe",
        isNobo : false,
        navItems : NavDemo
    }
}
