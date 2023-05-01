import React, { useState } from 'react';
import { CategoryItem } from './Brewer-CLP-CategoryItems';
import { BrewerCLPFiltersStyle } from "./Brewer-CLP-filters-styled";

export interface iFilters {
    isVisible?: boolean;
    onButtonClick?: () => void;
    defaultVisible?: boolean;
}

export const Filters = (props: iFilters) => {
    const { defaultVisible = true, isVisible, onButtonClick } = props;
    const [localIsVisible, setLocalIsVisible] = useState(defaultVisible);

    const handleToggleVisibility = () => {
        if (onButtonClick) {
            onButtonClick();
        } else {
            setLocalIsVisible(!localIsVisible);
        }
    };

    const visibility = isVisible !== undefined ? isVisible : localIsVisible;

    return (
        <BrewerCLPFiltersStyle style={{ width: visibility ? '340px' : '0' }}>
            <div className="filters" style={{display: isVisible ? '340px' : '0'}}>
                <ul>
                        <CategoryItem
                            title="Categories"
                            subcategories={[
                                { className: 'liCategories', name: 'SMART Wi-Fi® Enabled', imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer2?fmt=png-alpha' },
                                { className: 'liCategories', name: 'Single-Serve Coffee Makers', imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer3?fmt=png-alpha' },
                                { className: 'liCategories', name: 'Coffeehouse Beverages at Home', imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer4?fmt=png-alpha' },
                                { className: 'liCategories', name: 'Dual Coffee Makers', imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer5?fmt=png-alpha' },
                                { className: 'liCategories', name: 'Brew Over Ice Coffee Makers', imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer6?fmt=png-alpha' },
                            ]}
                            defaultOpen
                        />
                        <CategoryItem
                            title="Features"
                            subcategories={[
                                { checkbox: true, className: 'liFeatures', name: 'Digital Clock (6)', imageSrc: '' },
                                { checkbox: true, className: 'liFeatures', name: 'Display Screen (10)', imageSrc: '' },
                                { checkbox: true, className: 'liFeatures', name: 'Froths Milk (10)', imageSrc: '' },
                                { checkbox: true, className: 'liFeatures', name: 'Iced Setting (10)', imageSrc: '' },
                                { checkbox: true, className: 'liFeatures', name: 'Multi-Position Water Reservoir (3)', imageSrc: '' },
                                { checkbox: true, className: 'liFeatures', name: 'Strength Control (16)', imageSrc: '' },
                                { checkbox: true, className: 'liFeatures', name: 'Temperature Control (5)', imageSrc: '' },
                            ]}
                            defaultOpen
                        />

                        <CategoryItem
                            title="Brew Type"
                            subcategories={[
                                { checkbox: true, name: 'Bagged Coffee (2)', imageSrc: ''},
                                { checkbox: true, name: 'K-Cup (21)', imageSrc: '' },
                            ]}
                        />

                        <CategoryItem
                            title="Reservoir"
                            subcategories={[
                                { checkbox: true, name: '60 oz or more (7)', imageSrc: '' },
                                { checkbox: true, name: 'Add Water Each Time (2)', imageSrc: '' },
                                { checkbox: true, name: 'Upto 52 oz (4)', imageSrc: '' },
                            ]}
                        />

                        <CategoryItem
                            title="Commercial"
                            subcategories={[
                                { checkbox: true, name: 'Commercial (1)', imageSrc: ''},
                            ]}
                        />
                    <CategoryItem
                        title="Color"
                        subcategories={[
                            {
                                groupTitle: "Neutral, Black and White",
                                colors: ['#676260','#eae8d4','#fff', '#000', '#f3f3f3'],
                                className: 'liColor',
                            },
                            {
                                groupTitle: "Green and Blue",
                                colors: ['#a8bba2', '#405545','#578295', '#77bcda', '#b0cacb', '#32425e'],
                                className: 'liColor',
                            },
                            {
                                groupTitle: "Red",
                                colors: ['#bb3a56', '#ff0000'],
                                className: 'liColor',
                            },
                        ]}
                        defaultOpen
                    />


                </ul>
            </div>
        </BrewerCLPFiltersStyle>
    );
};
