import React, {useState} from 'react';
import {CategoryItem} from './Brewer-CLP-CategoryItems';
import {BrewerCLPFiltersStyle} from "./Brewer-CLP-filters-styled";

export interface iFilters {
    isVisible?: boolean;
    onButtonClick?: () => void;
    defaultVisible?: boolean;
}

export const Filters = (props: iFilters) => {
    const {defaultVisible = true, isVisible, onButtonClick} = props;
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
        <BrewerCLPFiltersStyle className={"brewer-clp-filters"} style={{width: visibility ? '340px' : '0'}}>
            <div className="filters" style={{display: isVisible ? '340px' : '0'}}>
                <ul>
                    <CategoryItem
                        title="Categories"
                        subcategories={[
                            {
                                checkbox: true,
                                className: 'liCategories',
                                name: 'SMART Wi-Fi® Enabled',
                                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer2?fmt=png-alpha'
                            },
                            {
                                checkbox: true,
                                className: 'liCategories',
                                name: 'Single-Serve Coffee Makers',
                                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer3?fmt=png-alpha'
                            },
                            {
                                checkbox: true,
                                className: 'liCategories',
                                name: 'Coffeehouse Beverages at Home',
                                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer4?fmt=png-alpha'
                            },
                            {
                                checkbox: true,
                                className: 'liCategories',
                                name: 'Dual Coffee Makers',
                                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer5?fmt=png-alpha'
                            },
                            {
                                checkbox: true,
                                className: 'liCategories',//no border here
                                name: 'Brew Over Ice Coffee Makers',
                                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer6?fmt=png-alpha'
                            },
                        ]}
                        defaultOpen
                    />
                    <CategoryItem
                        title="Features"
                        subcategories={[
                            {
                                checkbox: true,
                                className: 'liFeatures',
                                name: 'Digital Clock',
                                productnumber: '(6)',
                                imageSrc: '/icons-files/digital_clock_icon.svg'
                            },
                            {
                                checkbox: true,
                                className: 'liFeatures',
                                name: 'Display Screen',
                                productnumber: '(10)',
                                imageSrc: '/icons-files/brewer_id_icon@2x.png'
                            },
                            {
                                checkbox: true,
                                className: 'liFeatures',
                                name: 'Froths Milk',
                                productnumber: '(10)',
                                imageSrc: '/icons-files/icon-MilkFrother.svg'
                            },
                            {
                                checkbox: true,
                                className: 'liFeatures',
                                name: 'Iced Setting',
                                productnumber: '(10)',
                                imageSrc: '/icons-files/icon-BrewOverIce.svg'
                            },
                            {
                                checkbox: true,
                                className: 'liFeatures',
                                name: 'Multi-Position Water Reservoir',
                                productnumber: '(3)',
                                imageSrc: '/icons-files/multi_position_reservoir.svg'
                            },
                            {
                                checkbox: true,
                                className: 'liFeatures',
                                name: 'Strength Control',
                                productnumber: '(16)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                className: 'liFeatures',
                                name: 'Temperature Control',
                                productnumber: '(5)',
                                imageSrc: ''
                            },
                        ]}
                        defaultOpen
                    />
                    <CategoryItem
                        title="Color"
                        subcategories={[
                            {
                                checkbox: true,
                                groupTitle: "Black and White",
                                colors: ['#fff', '#000'],
                                className: 'liColor',
                            },
                            {
                                checkbox: true,
                                groupTitle: "Metals & Metallics",
                                colors: ['#676260', '#eae8d4', '#f3f3f3'],
                                className: 'liColor',
                            },
                            {
                                checkbox: true,
                                groupTitle: "Green and Blue",
                                colors: ['#a8bba2', '#405545', '#578295', '#77bcda', '#b0cacb', '#32425e'],
                                className: 'liColor',
                            },
                            {
                                checkbox: true,
                                groupTitle: "Red",
                                colors: ['#bb3a56', '#ff0000'],
                                className: 'liColor',
                            },
                        ]}
                        defaultOpen
                    />
                    <CategoryItem
                        title="Brew Type"
                        subcategories={[
                            {checkbox: true, name: 'Bagged Coffee', productnumber: '(2)', imageSrc: ''},
                            {checkbox: true, name: 'K-Cup', productnumber: '(21)', imageSrc: ''},
                        ]}
                    />

                    <CategoryItem
                        title="Reservoir"
                        subcategories={[
                            {checkbox: true, name: '60 oz or more', productnumber: '(7)', imageSrc: ''},
                            {checkbox: true, name: 'Add Water Each Time', productnumber: '(2)', imageSrc: ''},
                            {checkbox: true, name: 'Upto 52 oz', productnumber: '(4)', imageSrc: ''},
                        ]}
                    />

                    <CategoryItem
                        title="Commercial"
                        subcategories={[
                            {checkbox: true, name: 'Commercial', productnumber: '(1)', imageSrc: ''},
                        ]}
                    />
                </ul>
            </div>
        </BrewerCLPFiltersStyle>
    );
};
