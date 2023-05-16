import React from 'react'
import { Story, Meta } from '@storybook/react'
import {iFilters, Filters} from "./Brewer-CLP-filters";

export default {
    title: 'WIP /CLP Brewers Exploration Filters',
    component: Filters,
}as Meta

export const Template: Story = () => {
    return <Filters />
}
