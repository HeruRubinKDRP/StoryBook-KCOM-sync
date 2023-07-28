import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ProductGrid, { ProductGridProps } from './MemberCardGrid';
import {transformPodItemsToProductInfoCardProps} from "../../../_utilities/PodDataConverter/PodDataConverter";
import {podLibrary} from "../../../../data/beverage-library";
import {colorByNameType} from "../../../_utilities/color-name-to-value/colorNameToValue";
import {sizeT} from "../../../KSK_Experience/KSK";
import {fontWeightT} from "../../../ContentComponents/ContentComponent";
import {flagStylesT} from "../../../Flag/Flag";

export default {
    title: 'Example/ProductGrid',
    component: ProductGrid,
} as Meta;

const Template: StoryFn<ProductGridProps> = (args) => <ProductGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
    products: transformPodItemsToProductInfoCardProps(
        podLibrary,
        "pod",
        true,
        () => console.log("onclick"),
        "",
        () => console.log("flip"),
        false,
        {
            flagLabel : "New",
            flagColor : "forest-green",
            flagClasses : "",
            font :{
                fontSize : "Small",
                fontWeight : "regular-weight"
            },
            flagStyle : "curved-rect"
        }
    ),
    formFactor: "mobile",
    isLoggedIn: true,
    priceLabel: 'Member Pricing',
};
