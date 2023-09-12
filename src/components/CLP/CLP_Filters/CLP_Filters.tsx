import React, { useState, useEffect } from "react";
import Accordion from "../../k-accordion/KAccordion";
import {ExpandCollapse} from "../../ExpandCollapse/expand-collapse";

export interface iCLP_FilterItem {
    id: number;
    name: string;
    timesUsed : number;
    isOpen : boolean;
    // add any additional properties as needed
}

export interface iCLP_Filters{
    filterSections : iCLP_FilterItem[];
}

export const filtersDemo: iCLP_FilterItem[] = [
    { id: 1, name: "Price", timesUsed: 7, isOpen: false },
    { id: 2, name: "Brand", timesUsed: 6, isOpen: false },
    { id: 3, name: "Box Count", timesUsed: 5, isOpen: false },
    { id: 4, name: "Roast Type", timesUsed: 4, isOpen: false },
    { id: 5, name: "Flavor", timesUsed: 4, isOpen: false },
    { id: 6, name: "Caffeine", timesUsed: 3, isOpen: false },
    { id: 7, name: "Format", timesUsed: 0, isOpen: false },
    { id: 8, name: "Category", timesUsed: 0, isOpen: false }

    // add more filters as needed
];


export const CLP_Filters = (props : iCLP_Filters) => {
    const [filterSections, setFilterSections] = useState<iCLP_FilterItem[]>(props.filterSections);
    const[topFilters, setTopFilters] = useState<iCLP_FilterItem[]>([]);
    const [bottomFilters, setBottomFilters] = useState<iCLP_FilterItem[]>([]);

    const handleFilterClick=(filterID : number)=>{
        const usedFilter = props.filterSections.find((filter : iCLP_FilterItem)=>filter.id === filterID)
        if(usedFilter){
            usedFilter.timesUsed += 1;
            usedFilter.isOpen = !usedFilter.isOpen;
            setFilterSections([...props.filterSections]);
        }

    }

    useEffect(()=>{
        const newArray : iCLP_FilterItem[] = props.filterSections.sort((a, b) => b.timesUsed - a.timesUsed);

        setTopFilters(newArray.slice(0,3));
        setBottomFilters(newArray.slice(3));

    },[filterSections, props.filterSections])


    return (
        <div>
            <Accordion
                key={"topFilters"}
                accordionAction={handleFilterClick}
                items={topFilters}
                useInternalOpenClosedState={false}
            >
                <></>
                <></>
                <></>
            </Accordion>
            <ExpandCollapse
                expanderStyle="button"
                expandText="Show More Filters"
                content={
                    <Accordion
                        key={"bottomFilters"}
                        accordionAction={handleFilterClick}
                        items={bottomFilters}
                        useInternalOpenClosedState={false}
                    >
                        <></>
                        <></>
                        <></>
                    </Accordion>
                }
            />

        </div>
    );
};






