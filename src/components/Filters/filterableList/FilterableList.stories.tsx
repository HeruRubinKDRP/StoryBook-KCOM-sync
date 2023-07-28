import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FilterableCheckboxList, { FilterableCheckboxListProps, CheckboxItem } from './FilterableCheckboxList';

export default {
    title: 'Example/FilterableCheckboxList',
    component: FilterableCheckboxList,
} as Meta;


const initialItems: CheckboxItem[] = [
    {
        label: 'Example item 1',
        isChecked: false,
        detailsText: "This is a detail text",
    },
    {
        label: 'Example item 2',
        isChecked: false,
        detailsText: "This is a detail text",
    },{
        label: 'Example item 3',
        isChecked: false,
        detailsText: "This is a detail text",
    },
];

export const StatefulCheckboxList: React.FC = () => {
    const [items, setItems] = useState<CheckboxItem[]>(initialItems);

    const handleSelectionChange = (index: number) => {
        console.log("index",index);
        setItems(items => items.map((item, i) => {
            if (i === index) {

                return {
                    label: item.label,
                    isChecked: !item.isChecked,
                    detailsText: item.detailsText,
                };
            }
            return item;
        }));
        console.log('Selection changed');
    };

    return <FilterableCheckboxList
        sectionIndex={0}
        items={items}
        onSelectionChange={handleSelectionChange}
    />;
};

