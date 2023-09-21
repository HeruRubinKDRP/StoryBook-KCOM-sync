import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {CLP_Filters, filtersDemo, iCLP_FilterItem} from "./CLP_Filters";



export default {
    title: "CLP / CLP Filters",
    component: CLP_Filters,
} as Meta;

const Template: StoryFn = () => <CLP_Filters filterSections={filtersDemo} />;

export const Default = Template.bind({});
