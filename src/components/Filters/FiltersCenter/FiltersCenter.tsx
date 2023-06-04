import React, {ReactElement, useState} from "react";
import {filterDataItemT} from "../../CLP/SimpleCard/SimpleCard";
import Accordion, {iAccordionItem} from "../../k-accordion/KAccordion";
import FilterableCheckboxList, {CheckboxItem} from "../filterableList/FilterableCheckboxList";
import {filterOptionsT} from "../../../data/brewer-library";
import {FiltersCenterStyled} from "./filters-center.styled";


export interface iFiltersCenter{
    filtersDefinition : iCategoryItem[];
    filtersFunction? : (index: number, sectionIndex :number) => void;
}

export interface iCategoryItem {
    title: string;
    priority?: "high" | "medium" | "low";
    subcategories: iCategorySubcategory[];
    defaultOpen?: boolean;
}

export interface iCategorySubcategory {
    name?: string;
    filterTerm?: filterOptionsT;
    filterID:number;
    imageSrc?: string;
    className?: string;
    colorThumbnail?: string;
    isChecked?: boolean;
    groupTitle?: string;
    colors?: string[];
    description?: string;
    productNumber?: string;
}

export const FiltersCenter=(props:iFiltersCenter)=>{


    const createFilterArea=()=>{
        let Children : ReactElement[] = [];
        let Items : iAccordionItem[] = [];

        //prep accordion items
        for(let i=0; i < props.filtersDefinition.length; i++) {
            Items.push({
                name: props.filtersDefinition[i].title,
                id: i,
                isOpen: props.filtersDefinition[i].defaultOpen ?? false
            })
        }

        //prep accordion children React Elements
        for(let i=0; i < props.filtersDefinition.length; i++) {
            //prepare items data based on the category
            let filtersAreaItems : CheckboxItem[] = [];

            for(let j=0; j < props.filtersDefinition[i].subcategories.length; j++) {
                filtersAreaItems.push({
                    label: props.filtersDefinition[i].subcategories[j].name ?? "",
                    detailsText: props.filtersDefinition[i].subcategories[j].description ?? "",
                    isChecked: props.filtersDefinition[i].subcategories[j].isChecked ?? false,
                    imageSrc: props.filtersDefinition[i].subcategories[j].imageSrc ?? "",
                })
            }
            //prepare category section
            Children.push(
                <div key={i}>
                    <div key={i}>
                        <FilterableCheckboxList sectionIndex={i} items={filtersAreaItems} onSelectionChange={props.filtersFunction as () => unknown }/>
                    </div>
                </div>
            )
        }

        return(
            <>
                 <Accordion
                     items={Items}
                     useInternalOpenClosedState={true}
                     children={Children}
                 />
            </>
        )
    }

    return(
        <FiltersCenterStyled className="filters-center-container">{createFilterArea()}</FiltersCenterStyled>
    )
}