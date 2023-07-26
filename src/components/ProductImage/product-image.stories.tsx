import {StoryFn, Meta} from "@storybook/react"
import React from "react"

import {IproductImage, ProductImage} from "./ProductImage"
import "./images/dynamic/pod-base/pod-base.png";
import './images/dynamic/pod-base/pod-duo-shiny.png';

export default {
    title: "Molecules/CardBack Image",
    component: ProductImage,
    argTypes: {
        elementType: {
            control : "select",
            options : [
                "pod-box",
                "pod-two-up",
                "pod-box-and-pods",
                "pod-lid"
            ]},
        podLid : {control : "text", options : "ddd"},
        podBox : {control : "text", options : "12345"},
        containerDimensions : { height : {controls : "23rem"}, width : {controls : "23rem"}}
    },

} as Meta;

const Template: StoryFn<IproductImage> = (args) => <ProductImage {...args} />;



export const TwoPods = Template.bind({});
TwoPods.args = {
    elementType : "pod-two-up",
    podLid : "https://images.keurig.com/is/image/keurig/Milk-Chocolate-Hot-Cocoa-Swiss-Miss_en_general?fmt=png-alpha",
    containerDimensions : {height:"20%", width:"20%"}
}

export const PodLid = Template.bind({});

PodLid.args = {
    elementType : "pod-lid",
    podLid : "https://images.keurig.com/is/image/keurig/Breakfast-Blend-Coffee-K-Cup-Green-Mountain_en_general?fmt=png-alpha",
    containerDimensions : {height:"12rem", width:"12rem"}
}
