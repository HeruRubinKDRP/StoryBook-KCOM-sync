import React, {useEffect, useState} from 'react';
import {CategoryItem} from './Filters-CLP-CategoryItems';
import {BrewerCLPFiltersStyle} from "./Brewer-CLP-filters-styled";
import {filterDataItemT} from "../SimpleCard/SimpleCard";
import {FiltersCenter, iCategoryItem} from "../../Filters/FiltersCenter/FiltersCenter";

export interface iFilters {
    isVisible?: boolean;
    type?: string;
    onButtonClick?: () => void;
    defaultVisible?: boolean;
    filtersFunction : (index: number, sectionIndex : number) => void;
    filtersDefiniton : iCategoryItem[];
}


export const Filters = (props: iFilters) => {
    const {defaultVisible = true, isVisible, onButtonClick} = props;
    const [localIsVisible, setLocalIsVisible] = useState(defaultVisible);
    const [selectedIndexes, setSelectedIndex] = useState<{isChecked : boolean, filterIndex : number}[]>([
        {isChecked: false, filterIndex: 0},
    ])
    const handleToggleVisibility = () => {
        if (onButtonClick) {
            onButtonClick();
        } else {
            setLocalIsVisible(!localIsVisible);
        }
    };

    useEffect(() => {

    }, []);

    const visibility = isVisible !== undefined ? isVisible : localIsVisible;



    return (
        <BrewerCLPFiltersStyle className={"brewer-clp-filters"} style={{width: visibility ? '340px' : '0'}}>
            <div className="filters" style={{display: isVisible ? '340px' : '0'}}>
                <FiltersCenter filtersFunction={props.filtersFunction} filtersDefinition={props.filtersDefiniton} />
            </div>
        </BrewerCLPFiltersStyle>
    );
};
