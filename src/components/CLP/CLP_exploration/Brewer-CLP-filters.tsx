import React, {useEffect, useState} from 'react';
import {CategoryItem, iCategorySubcategory} from './Filters-CLP-CategoryItems';
import {BrewerCLPFiltersStyle} from "./Brewer-CLP-filters-styled";
import {filterDataItemT} from "../SimpleCard/SimpleCard";

export interface iFilters {
    isVisible?: boolean;
    type?: string;
    onButtonClick?: () => void;
    defaultVisible?: boolean;
    filtersFunction? : ()=>filterDataItemT[];
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
                <ul>
                    <CategoryItem
                        title="Categories"
                        subcategories={[


                        ]}
                        defaultOpen
                    />
                    <CategoryItem
                        title="Features"
                        subcategories={[

                        ]}
                        defaultOpen
                    />
                    <CategoryItem
                        title="Color"
                        subcategories={[

                        ]}
                        defaultOpen
                    />
                    <CategoryItem
                        title="Brew Type"
                        subcategories={[

                        ]}
                    />

                    <CategoryItem
                        title="Reservoir"
                        subcategories={[

                        ]}
                    />

                    <CategoryItem
                        title="Commercial"
                        subcategories={[
                            {
                                checkbox: selectedIndexes[21].isChecked,
                                filterID: 21,
                                name: 'Commercial',
                                productnumber: '(1)',
                                imageSrc: ''
                            },
                        ]}
                    />
                </ul>
            </div>
        </BrewerCLPFiltersStyle>
    );
};
