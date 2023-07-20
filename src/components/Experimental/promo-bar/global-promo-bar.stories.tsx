import React from 'react';
import {Story, Meta} from '@storybook/react';
import TextSlider, {TextSliderProps} from './global-promo-bar';
import {colorNamesList} from 'components/_utilities/color-name-to-value/colorNameToValue';

export default {
    title: 'Experimental / TextSlider',
    component: TextSlider,
    argTypes: {
        slide1Text: {control: 'text'},
        slide1Url: {control: 'text'},
        slide1FontColor: {
            control: {
                type: 'select',
                options: colorNamesList,
            },
        },
        slide1BgColor: {
            control: {
                type: 'select',
                options: colorNamesList,
            },
        },
        slide2Text: {control: 'text'},
        slide2Url: {control: 'text'},
        slide2FontColor: {
            control: {
                type: 'select',
                options: colorNamesList,
            },
        },
        slide2BgColor: {
            control: {
                type: 'select',
                options: colorNamesList,
            },
        },
        slide3Text: {control: 'text'},
        slide3Url: {control: 'text'},
        slide3FontColor: {
            control: {
                type: 'select',
                options: colorNamesList,
            },
        },
        slide3BgColor: {
            control: {
                type: 'select',
                options: colorNamesList,
            },
        },
        slide4Text: {control: 'text'},
        slide4Url: {control: 'text'},
        slide4FontColor: {
            control: {
                type: 'select',
                options: colorNamesList,
            },
        },
        slide4BgColor: {
            control: {
                type: 'select',
                options: colorNamesList,
            },
        },

        showArrows: {
            control: 'boolean',
        },
        autoplay: {
            control: 'boolean',
        },
    },
} as Meta;


const Template: Story<TextSliderProps> = (args) => <TextSlider {...args} />;

export const GlobalPromoBarExample = Template.bind({});
GlobalPromoBarExample.args = {
    autoplay: false,
    interval: 2000,
    showArrows: true,
    bgColor:"sepia70",
    fontColor: "dark-roast",

    slide1Text: 'Slide 1 Text',
    slide1Url: 'Slide 1 Url',
    slide1FontColor:'dark-roast',
    slide1BgColor: "transparent",

    slide2Text: 'Slide 2 Text',
    slide2Url: 'Slide 2 Url',
    slide2FontColor:'dark-roast',
    slide2BgColor: "transparent",

    slide3Text: 'Slide 3 Text',
    slide3Url: 'Slide 3 Url',
    slide3FontColor:'dark-roast',
    slide3BgColor: "transparent",

    slide4Text: 'Slide 4 Text',
    slide4Url: 'Slide 4 Url',
    slide4FontColor:'dark-roast',
    slide4BgColor: "transparent",
};

