import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import {iFilters, Filters} from "./Brewer-CLP-filters";
import {brewerFiltersSettings} from "../../../data/brewerFilters";

export default {
    title: 'WIP /CLP Brewers Exploration Filters',
    component: Filters,
}as Meta

export const Template: StoryFn = () => {
    return <Filters filtersFunction={()=>{}} isVisible={true}   filtersDefiniton={brewerFiltersSettings}/>
}
