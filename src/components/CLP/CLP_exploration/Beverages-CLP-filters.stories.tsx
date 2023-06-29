
import { StoryFn, Meta } from '@storybook/react'
import { Filters } from './Beverages-CLP-filters'

export default {
    title: 'WIP /CLP Beverages Exploration Filters',
    component: Filters,
}as Meta

export const Template: StoryFn = () => {
    return <Filters filtersFunction={()=>{}} isVisible={true}  />
}
