import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Filters } from './Beverages-CLP-filters'

export default {
    title: 'WIP /CLP Beverages Exploration Filters',
    component: Filters,
}as Meta

export const Template: Story = () => {
    return <Filters filtersFunction={()=>{}} isVisible={true}  />
}
