import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ProductInfoCard, { iProductInfoCardProps } from './SimpleCard';
import {podLibrary} from "../../../pages/myBrews";

export default {
    title: 'CLP/ProductInfoCard',
    component: ProductInfoCard,
    argTypes: {
        productType: {
            control: 'radio',
            options: ['brewer', 'pod', 'bagged'] },
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

const Template: Story<iProductInfoCardProps> = (args) => (
    <div className="outer" style={{backgroundImage : "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(245,241,234,1) 100%)", height: "100%", padding : "5%"}}>
        <ProductInfoCard {...args} />
    </div>);

export const Default = Template.bind({});
Default.args = {
    productType: 'pod',
    image: podLibrary[0].productImagePrimaryPath,
    brand: podLibrary[0].brand,
    name: podLibrary[0].podName,
    prices: [{
            price : 74.99,
            inStock : true,
            variant : "64 ct"
    }],
    onClick: () => console.log('Add to Cart clicked'),
};

export const brewerCard = Template.bind({});
brewerCard.args = {productType: 'brewer',
    image : "./brewer-images/KSPS.png",
    brand : "Keurig",
    name : "K-Supreme® SMART Single Serve Coffee Maker",
        prices : [
            {
                price : 199.99,
                inStock : true,
                variant : "Black"
            },{
                price : 99.99,
                inStock : true,
                variant : "Stainless Steel"
            },
        ],
    onClick : () => console.log('Add to Cart clicked')
};