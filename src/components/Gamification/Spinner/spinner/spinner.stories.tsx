// Spinner.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Spinner, { SpinnerProps } from './spinner';
import { Promotion } from '../Promotion';

export default {
    title: 'Components/Spinner',
    component: Spinner,
    argTypes:{
        wheelRadius : { control: "number" }
    }
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    wheelRadius : 300,
    promotions: [
        {
            name: 'Promo 1',
            link: 'https://example.com/promo1-image.png',
            weight: 1,
            componentType :"image"
        },
        {
            name: 'Promo 2',
            link: 'https://example.com/promo2-image.png',
            weight: 2,
            componentType :"image"
        },
        {
            name: 'Promo 3',
            link: 'https://example.com/promo3-image.png',
            weight: 1,
            componentType :"image"
        },
        {
            name: 'Promo 4',
            link: 'https://example.com/promo3-image.png',
            weight: 0.01,
            componentType :"image"
        },
        {
            name: 'Promo 5',
            link: 'https://example.com/promo3-image.png',
            weight: 0.1,
            componentType :"image"
        },
    ],
    onSpinEnd: (selectedPromo: Promotion) => {
        console.log('Selected promo:', selectedPromo.name);
    },
};
