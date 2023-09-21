import React, { useState } from 'react';
import styled from 'styled-components';
import {Graphic, iconType} from "../../Graphic/Graphic";
import {iIllustration} from "../../Graphic/Illustrations";
import KButton from "../../Kbutton/KButton";
import {FilterableCheckboxListStyled} from "./filterable-toggle-list.styled";
import AsyncImage from "../../AsyncImage/AsyncImage";
import {
    ClearButton,
    FilterListItem, FiltersInput,
    FiltersLabelStyled,
    NoResults
} from "./CheckBoxListItem/check-box-list-item.styled";

export interface CheckboxItem {
    label: string;
    detailsText?: string;
    isChecked: boolean;
    imageSrc?: string | iconType | iIllustration;
}

export interface FilterableCheckboxListProps {
    useFilter?: boolean;
    sectionIndex: number;
    items: CheckboxItem[];
    onSelectionChange: (index: number, sectionIndex: number) => void;
}

const FilterableCheckboxList = (props:FilterableCheckboxListProps) => {
    const [filterText, setFilterText] = useState('');
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(event.target.value);


    };



    const filteredItems = props.items.filter(item => item.label.toLowerCase().includes(filterText.toLowerCase()));

    return (
        <FilterableCheckboxListStyled>
            {
                props.useFilter &&  <FiltersInput className="filter-input" type="text" placeholder="Filter..." value={filterText} onChange={handleInputChange} />
            }
            {filteredItems.length === 0 ? (
                <NoResults>
                    No results found. <ClearButton onClick={() => setFilterText('')}>Clear filters</ClearButton>
                </NoResults>
            ) : (
                <ul className="list-container">
                    {filteredItems.map((item, index: number) => {

                        return(
                            <FilterListItem className="check-list-item" key={index}>
                                <KButton classes="overlay-btn" label={""} buttonType={"text-icon-noBG"}  actionFunc={()=>props.onSelectionChange(index, props.sectionIndex)} />
                                <div className={`${item.isChecked ? "is-checked" : ""} check-list-item-container`} >

                                        <div className="check-container">
                                            {item.isChecked && <Graphic graphicName={"icon-checkmark"} />}
                                        </div>
                                        <div className="text-area">
                                            <FiltersLabelStyled>{item.label}</FiltersLabelStyled>
                                            {
                                                item.detailsText &&
                                                <p className="checkbox-item-details">
                                                    {item.detailsText}
                                                </p>
                                            }
                                        </div>

                                    {
                                        item.imageSrc &&
                                        <AsyncImage
                                            imageType={"image"}
                                            src={item.imageSrc}
                                            alt={item.detailsText ?? ""}
                                        />
                                    }
                                </div>
                            </FilterListItem>
                        )
                    })}
                </ul>
            )}

        </FilterableCheckboxListStyled>
    );
};





export default FilterableCheckboxList;
