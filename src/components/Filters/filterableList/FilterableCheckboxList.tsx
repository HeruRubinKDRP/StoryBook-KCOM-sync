import React, { useState } from 'react';
import styled from 'styled-components';
import {Graphic, iconType} from "../../Graphic/Graphic";
import {iIllustration} from "../../Graphic/Illustrations";
import KButton from "../../Kbutton/KButton";
import {FilterableCheckboxListStyled} from "./filterable-toggle-list.styled";

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
                props.useFilter &&  <Input className="filter-input" type="text" placeholder="Filter..." value={filterText} onChange={handleInputChange} />
            }
            {filteredItems.length === 0 ? (
                <NoResults>
                    No results found. <ClearButton onClick={() => setFilterText('')}>Clear filters</ClearButton>
                </NoResults>
            ) : (
                <ul className="list-container">
                    {filteredItems.map((item, index: number) => {

                        return(
                            <ListItem className="check-list-item" key={index}>
                                <KButton classes="overlay-btn" label={""} buttonType={"text-icon-noBG"}  actionFunc={()=>props.onSelectionChange(index, props.sectionIndex)} />
                                <div className={`${item.isChecked ? "is-checked" : ""} check-list-item-container`} >
                                    <div className="check-container">
                                        {item.isChecked && <Graphic graphicName={"icon-checkmark"} />}
                                    </div>
                                    <div className="text-area">
                                        <Label>{item.label}</Label>
                                        {
                                            item.detailsText &&
                                            <p className="checkbox-item-details">
                                                {item.detailsText}
                                            </p>
                                        }
                                    </div>
                                </div>
                            </ListItem>
                        )
                    })}
                </ul>
            )}
        </FilterableCheckboxListStyled>
    );
};



const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;


const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`;

const Label = styled.label`
  cursor: pointer;
`;

const NoResults = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ClearButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

export default FilterableCheckboxList;
