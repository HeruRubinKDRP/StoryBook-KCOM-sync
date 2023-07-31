import React from 'react';
import {Meta, StoryFn} from "@storybook/react";
import EyebrowBanner from "./EyeBrowBanner";
import {EyebrowBannerProps} from "./eyebrow-banner.interfaces";

export default {
    title: 'Components/Eyebrow',
    component: EyebrowBanner,
    argTypes: {}
} as Meta;

const Template: StoryFn<EyebrowBannerProps> = (args) => <EyebrowBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
    // your props here
    contents: [
        {
            heading: "20% OFF",
            paragraph: "brewers & accessories",
            finePrint: "USE CODE: STAYCOOL23",
            hyperlink: "/products/fresh-brewed-coffee"
        },
        {
            heading: "Organic Coffee Beans",
            paragraph: "Explore our range of 100% organic coffee beans. Roasted to perfection for the best flavour.",
            finePrint: "Delivery available nationwide. Order now for the fresh coffee experience at home!",
            hyperlink: "/products/organic-coffee-beans"
        },
        {
            heading: "Coffee Machines and Accessories",
            paragraph: "Discover our high-quality coffee machines and accessories. Brew your perfect cup of coffee every morning.",
            finePrint: "Get a 10% discount with your first purchase. Use the code COFFEE10 at checkout!",
            hyperlink: "/products/coffee-machines"
        },

    ],
    height: "auto"
};
