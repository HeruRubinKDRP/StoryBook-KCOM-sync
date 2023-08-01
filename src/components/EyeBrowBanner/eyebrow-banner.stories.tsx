import React from 'react';
import {Meta, StoryFn} from "@storybook/react";
import EyebrowBanner from "./EyeBrowBanner";
import {EyebrowBannerProps} from "./eyebrow-banner.interfaces";
import {colorNamesList} from "../_utilities/color-name-to-value/colorNameToValue";

export default {
    title: 'Components/Eyebrow',
    component: EyebrowBanner,
    argTypes: {
        mainColor: { control: 'select', options: colorNamesList },
    }
} as Meta;

const Template: StoryFn<EyebrowBannerProps> = (args) => <EyebrowBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
    contents: [
        {
            heading: "20% OFF",
            paragraph: "brewers & accessories",
            details: "USE CODE: STAYCOOL23",
            hyperlink: "/products/fresh-brewed-coffee",
            finePrint : "Ends 7/31",
            hyperlinkText: "See Details"
        },
        {
            heading: "UP TO $20 OFF",
            paragraph: "Dorm Sized Brewers! \n K-Mini Plus & K—Iced on Sale.",
            details: "NO CODE NEEDED",
            finePrint : "Ends 7/31",
            hyperlinkText: "See Details",
            hyperlink: "/products/fresh-brewed-coffee",
        },
        {
            heading: "75% OFF",
            paragraph: "K-Duo SE as a Starter Kit",
            details: "NO CODE NEEDED",
            finePrint : "Ends 7/31",
            hyperlinkText: "See Details",
            hyperlink: "/products/fresh-brewed-coffee",
        },

    ],
    displayMode: "chiclets",
    overallHeight: "auto",
    mainColor: "dark-roast",
};
