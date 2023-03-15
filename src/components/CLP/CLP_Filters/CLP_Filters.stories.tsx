import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import {CLP_Filters, filtersDemo, iCLP_FilterItem} from "./CLP_Filters";



export default {
    title: "CLP / CLP Filters",
    component: CLP_Filters,
} as Meta;

const Template: Story = () => <CLP_Filters filterSections={filtersDemo} />;

export const Default = Template.bind({});
