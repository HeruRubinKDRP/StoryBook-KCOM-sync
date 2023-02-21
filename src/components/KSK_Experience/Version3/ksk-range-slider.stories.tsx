import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import KSKRangeSlider, {iKSKProduct, iKSKRangeSlider} from "./RangeSliderKSK";

export default {
    title: "KSK/KSK Range Slider",
    component: KSKRangeSlider,
    argTypes: {
        products: { control: "object" },
        headerTitle: { control: "text" },
    }
}as Meta;

const products : iKSKProduct[] = [
    {
        price: 88,
        commitment: 12,
        minimumPrice: 0,
        isActive: true
    },
    {
        price: 100,
        commitment: 16,
        minimumPrice: 0,
        isActive: true
    },
    {
        price: 120,
        commitment: 12,
        minimumPrice: 0,
        isActive: true
    },
    {
        price: 220,
        commitment: 16,
        minimumPrice: 80,
        isActive: true
    }
];

const Template: Story<iKSKRangeSlider> = (args) => <KSKRangeSlider {...args} />;

export const KSKRangeSliderExample = Template.bind({});
KSKRangeSliderExample.args = {
    products: products,
    basePriceUnit: 4,
    headerTitle: "Name Your Price"
}

