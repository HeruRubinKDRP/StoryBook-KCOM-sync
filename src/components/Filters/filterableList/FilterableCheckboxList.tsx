import React, { useState } from 'react';
import styled from 'styled-components';

interface CheckboxItem {
    label: string;
    value: string;
}

interface FilterableCheckboxListProps {
    items: CheckboxItem[];
    onSelectionChange: (selectedItems: string[]) => void;
}

const FilterableCheckboxList: React.FC<FilterableCheckboxListProps> = ({ items, onSelectionChange }) => {
    const [filterText, setFilterText] = useState('');
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(event.target.value);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedItems([...selectedItems, value]);
        } else {
            setSelectedItems(selectedItems.filter(item => item !== value));
        }
    };

    const filteredItems = items.filter(item => item.label.toLowerCase().includes(filterText.toLowerCase()));

    return (
        <Wrapper>
            <Input type="text" placeholder="Filter..." value={filterText} onChange={handleInputChange} />
            {filteredItems.length === 0 ? (
                <NoResults>
                    No results found. <ClearButton onClick={() => setFilterText('')}>Clear filters</ClearButton>
                </NoResults>
            ) : (
                <List>
                    {filteredItems.map(item => (
                        <ListItem key={item.value}>
                            <Checkbox id={item.value} value={item.value} checked={selectedItems.includes(item.value)} onChange={handleCheckboxChange} />
                            <Label htmlFor={item.value}>{item.label}</Label>
                        </ListItem>
                    ))}
                </List>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
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
