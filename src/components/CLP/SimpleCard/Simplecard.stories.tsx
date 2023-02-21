import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ProductInfoCard, { ProductInfoCardProps } from './SimpleCard';
import {podLibrary} from "../../../pages/myBrews";

export default {
    title: 'CLP/ProductInfoCard',
    component: ProductInfoCard,
    argTypes: {
        image: {
            control: {
                type: 'text',

            },
        },
        brand: {
            control: {
                type: 'text',

            },
        },
        name: {
            control: {
                type: 'text',
            },
        },
        price: {
            control: {
                type: 'number',
                defaultValue: 0.57,
                min: 0,
                step: 0.01,
            },
        },
        onClick: {
            action: 'clicked',
        },
    },
} as Meta;

const Template: Story<ProductInfoCardProps> = (args) => <div className="outer" style={{backgroundImage : "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(245,241,234,1) 100%)"}}><ProductInfoCard {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
    image: podLibrary[0].productImagePrimaryPath,
    brand: podLibrary[0].brand,
    name: podLibrary[0].podName,
    price: 0.57,
    onClick: () => console.log('Add to Cart clicked'),
};
