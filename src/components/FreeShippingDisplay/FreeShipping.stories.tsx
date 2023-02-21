import { Story, Meta } from "@storybook/react/types-6-0";
import React, { ReactElement } from "react";

import FreeShipping, {iFreeShippingProps} from "./FreeShipping";
import FreeShippingIndicator from "./FreeShipping";

export default {
    title: "Components/Free Shipping ProgressBar",
    component : FreeShipping,
    argTypes: {
        targetPrice: { control: "number" },
        currentPrice: { control: "number" }
    }
} as Meta;

const Template: Story<iFreeShippingProps> = (args) => (
    <FreeShippingIndicator {...args} />
);

export const Default = Template.bind({});
Default.args = {
    targetPrice: 35,
    currentPrice: 3.5
};

export const Halfway = Template.bind({});
Halfway.args = {
    targetPrice: 35,
    currentPrice: 17.5
};

export const Completed = Template.bind({});
Completed.args = {
    targetPrice: 35,
    currentPrice: 35
};
