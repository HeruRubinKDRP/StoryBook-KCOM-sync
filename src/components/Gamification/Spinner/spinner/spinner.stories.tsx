// Spinner.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Spinner, { SpinnerProps } from './spinner';
import { Promotion } from '../PromoItem/Promotion';

export default {
    title: 'Components/Spinner',
    component: Spinner,
    argTypes:{
        wheelRadius : { control: "number" }
    }
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const TraditionalSpinner = Template.bind({});
TraditionalSpinner.args = {
    wheelRadius : 300,
    spinnerMode: "traditional",
    promotions: [
        {
            name: 'Press or drag the wheel to spin',
            highlightedText : "Spin to Win!",
            promoMode : "default",
            link: 'https://example.com/promo2-image.png',
            weight: 2,
            componentType :"image"
        },
        {
            name: 'Try Again Tomorrow',
            highlightedText : "Sorry!",
            promoMode : "highlighted",
            link: 'https://example.com/promo3-image.png',
            weight: 1,
            componentType :"image"
        },
        {
            name: 'Get extra 5% Off any accessory',
            highlightedText: '5% Off',
            highlightImage : "https://images.keurig.com/is/image/keurig/Keurig-Hot-and-Cold-Milk-Frother_5000373729?fmt=png-alpha",
            link: 'https://example.com/promo1-image.png',
            weight: 1,
            componentType :"image",
            promoMode : "big-image",
        },
        {
            name: "Any Green Mountain Coffee Roasters® product ",
            highlightedText : "$1 Off",
            promoMode : "big-image",
            highlightImage : "https://www.gmcr.com/etc.clientlibs/keurig-sites/clientlibs/keurig-sites/keurig-brand-sites/gmcr/clientlibs/resources/images/logo.png",
            link: 'https://example.com/promo3-image.png',
            weight: 0.01,
            componentType :"image"
        },

        {
            name: 'Green Mountain Coffee Roasters® Southern Pecan',
            highlightedText : "$4 off ",
            link: 'https://example.com/promo3-image.png',
            highlightImage : "https://images.keurig.com/is/image/keurig/Southern-Pecan-Coffee-K-Cup-Green-Mountain-Coffee_en_general?fmt=png-alpha",
            promoMode : "big-image",
            weight: 0.1,
            componentType :"image"
        }
    ],
    onSpinEnd: (selectedPromo: Promotion) => {
        console.log('Selected promo:', selectedPromo.name);
    },
};


export const IconsFirst = Template.bind({});

IconsFirst.args = {
    wheelRadius : 300,
    spinnerMode: "icons-first",
    promotions: [
        {
            name: 'Perks Points',
            highlightedText : "1000 Bonus",
            promoMode : "default",
            link: 'https://example.com/promo2-image.png',
            highlightImage : "editorial/perks_points.svg",
            weight: 2,
            componentType :"image"
        },
        {
            name: '1 Perks Reward',
            highlightedText : "Free!",
            promoMode : "big-image",
            highlightImage : 'editorial/present.png',
            link: '',
            weight: 1,
            componentType :"image"
        },
        {
            name: 'Get extra 5% Off any accessory',
            highlightedText: '5% Off',
            highlightImage : "https://images.keurig.com/is/image/keurig/Keurig-Hot-and-Cold-Milk-Frother_5000373729?fmt=png-alpha",
            link: 'https://example.com/promo1-image.png',
            weight: 1,
            componentType :"image",
            promoMode : "big-image",
        },
        {
            name: "Any Green Mountain Coffee Roasters® product ",
            highlightedText : "$1 Off",
            promoMode : "big-image",
            highlightImage : "https://www.gmcr.com/etc.clientlibs/keurig-sites/clientlibs/keurig-sites/keurig-brand-sites/gmcr/clientlibs/resources/images/logo.png",
            link: 'https://example.com/promo3-image.png',
            weight: 0.01,
            componentType :"image"
        },
        {
            name: 'Green Mountain Coffee Roasters® Southern Pecan',
            highlightedText : "$4 off ",
            link: 'https://example.com/promo3-image.png',
            highlightImage : "food-scenes/Pecan_Pie_and_Coffee.png",
            promoMode : "big-image",
            weight: 0.1,
            componentType :"image"
        }
    ],
    onSpinEnd: (selectedPromo: Promotion) => {
        console.log('Selected promo:', selectedPromo.name);
    },
};
