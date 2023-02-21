import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ProductList, { ProductListProps } from './CLP_Container';
import {convertPodLibraryToProductInfoCardProps, generateProducts} from './utils';
import {podLibrary} from "../../../pages/myBrews";

export default {
    title: 'CLP/ProductList',
    component: ProductList,
    argTypes: {
        products: {
            control: null,
        },
        ratingVisible : {
            control : "boolean"
        },
        columns: {
            control: {
                type: 'number',
                defaultValue: 3,
                min: 1,
                step: 1,
            },
        },
        promotionalContent: {
            control: {
                type: 'object',
            },
        },
        pageSize: {
            control: {
                type: 'number',
                defaultValue: 9,
                min: 1,
                step: 1,
            },
        },
    },
} as Meta;

const Template: Story<ProductListProps> = (args) => <ProductList {...args} />;

const products = convertPodLibraryToProductInfoCardProps(podLibrary);

export const Default = Template.bind({});
Default.args = {
    products: products,
    columns: 3,
    pageSize: 9,
    columnsHugeScreen : 5,
    columnsLargeScreen : 4,
    columnsMediumScreen : 3,
    columnsSmallScreen : 2,
    ratingVisible : false,
};
