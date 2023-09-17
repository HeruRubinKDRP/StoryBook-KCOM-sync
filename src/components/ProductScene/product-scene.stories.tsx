import {StoryFn, Meta} from "@storybook/react";
import React from "react";
import {IproductScene, ProductScene} from "./ProductScene";

export default {
  title : "Organisms/CardBack Scene",
  component : ProductScene,
  argTypes :{
    outerWidth : {
      control: { type: 'range', min: 0, max: 2200, step: 1 }
    },
    outerHeight : {
      control: { type: 'range', min: 0, max: 2200, step: 1 }
    },
    backgroundImage : {
      control : "select", options : [
        "images/dynamic/bg/light-marble.jpg",
        "images/dynamic/bg/dark-marble.jpg",
        "images/dynamic/bg/bg-wood-slats.jpg",
        "none"
      ]
    },
  }
} as Meta;


const Template: StoryFn<IproductScene> = (args) => <ProductScene {...args} />;

export const OverheadPods = Template.bind({});

OverheadPods.args = {
  componentType: "top-down",
  backgroundImage:"images/dynamic/bg/light-marble.jpg",
  outerWidth: 400,
  outerHeight: 300,
  ctaLabel: "Explore seasonal",
  bgColor: "#3B2B2F",
  headerColor: "white",
  podLids: [
    "/images/pod-lids/Breakfast-Blend-Coffee-K-Cup-Green-Mountain_en_general.webp",
    "/images/pod-lids/dark-magic-coffee-green-mountain-coffee-k-cup_en_general.webp",
    "/images/pod-lids/original-blend-coffee-dd_en_general.webp",
  ],
  ctaURL:"https://www.keurig.com/beverages/seasonal/c/seasonal101",
  upperImage:"/images/focal-images/overhead-coffee-cups/coffee-cup-autumn.png",
  lowerImage:"/images/seasonal-fall-tastes.png"
}

export const OverheadRustic = Template.bind({});
OverheadRustic.args = {
  componentType: "top-down",
  backgroundImage:"images/dynamic/bg/light-marble.jpg",
  outerWidth: 1200,
  outerHeight: 400,
  ctaLabel: "Explore seasonal",
  bgColor: "#3B2B2F",
  headerColor: "white",
  podLids: [
    "/images/pod-lids/Breakfast-Blend-Coffee-K-Cup-Green-Mountain_en_general.webp",
    "/images/pod-lids/dark-magic-coffee-green-mountain-coffee-k-cup_en_general.webp",
    "/images/pod-lids/original-blend-coffee-dd_en_general.webp",
  ],
  ctaURL:"https://www.keurig.com/beverages/seasonal/c/seasonal101",
  upperImage:"/images/focal-images/overhead-coffee-cups/coffee-cup-autumn.png",
  lowerImage:"/images/seasonal-fall-tastes.png"
}
