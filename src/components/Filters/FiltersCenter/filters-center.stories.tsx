import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FiltersCenter, iFiltersCenter, iCategoryItem, iCategorySubcategory } from './FiltersCenter';
import {brewerFiltersSettings} from "../../../data/brewerFilters";
import {filterOptionsT} from "../../../data/brewer-library";
import {keyframes} from "styled-components";

export default {
    title: 'Example/FiltersCenter',
    component: FiltersCenter,
} as Meta;

const Template: Story<iFiltersCenter> = (args) => <FiltersCenter {...args} />;


export const Default = Template.bind({});
Default.args = {
    filtersDefinition: brewerFiltersSettings,
    filtersFunction: () => {
        console.log(["bagged-coffee", "brewers", "white"])
        return ["bagged-coffee", "brewers", "white"] as filterOptionsT[]
    }
}

export const riseUpAnim = keyframes`
  from {
    top: 0;
  }
  to {
    top: 200px;
  } 
`

