import React, {useState} from 'react';
import { BrewerCLPFiltersStyle } from './Brewer-CLP-filters-styled';
import { CategoryItem } from './Filters-CLP-CategoryItems';
import {filterDataItemT} from "../SimpleCard/SimpleCard";


export interface iFilters {
    isVisible?: boolean;
    type?: string;
    onButtonClick?: () => void;
    defaultVisible?: boolean;
    filtersFunction? : (index: number, sectionIndex : number) => void;
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
                                isChecked: true,
                                filterID: 0,
                                className: 'liCategories',
                                name: 'Iced',
                                productNumber: '',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/beverage%20Just_arrived'
                            },
                            {
                                isChecked: true,
                                filterID: 1,
                                className: 'liCategories',
                                name: 'Seasonal',
                                productNumber: '',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-seasonals'
                            },
                            {
                                isChecked: true,
                                filterID: 2,
                                className: 'liCategories',
                                name: 'Best Sellers',
                                productNumber: '',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-best-saller'
                            },
                            {
                                isChecked: true,
                                filterID: 3,
                                className: 'liCategories',
                                name: 'Flavored',
                                productNumber: '',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-flavored'
                            },

                        ]}
                        defaultOpen
                    />

                    <CategoryItem
                        title="Brands"
                        subcategories={[
                            {
                                isChecked: true,
                                name: 'BLK & BOLD®',
                                filterID: 4,
                                productNumber: '(6)',
                                imageSrc: ''},
                            {
                                isChecked: true,
                                name: 'Barista Prima Coffeehouse®',
                                filterID: 5,
                                productNumber: '(7)',
                                imageSrc: ''},
                            {
                                isChecked: true,
                                filterID: 6,
                                name: 'Bigelow®',
                                productNumber: '(9)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 7,
                                name: 'Café Bustelo®',
                                productNumber: '(3)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 8,
                                name: 'Café Escapes®',
                                productNumber: '(9)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 9,
                                name: 'Café Gila®',
                                productNumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 10,
                                name: 'Caribou Coffee®',
                                productNumber: '(17)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 11,
                                name: 'Celestial Seasonings®',
                                productNumber: '(8)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 12,
                                name: 'Cinnabon®',
                                productNumber: '(4)',
                                imageSrc: ''},
                            {isChecked: true,
                                filterID: 13,
                                name: 'Community® Coffee',
                                productNumber: '(6)',
                                imageSrc: ''},
                            {
                                isChecked: true,
                                filterID: 14,
                                name: "Dunkin' Donuts®",
                                productNumber: '(22)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 15,
                                name: "Eight O'Clock®",
                                productNumber: '(9)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 16,
                                name: "Emeril's®",
                                productNumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 17,
                                name: 'Folgers®',
                                productNumber: '(9)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 18,
                                name: 'French Market®',
                                productNumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 19,
                                name: 'GEVALIA',
                                productNumber: '(5)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 20,
                                name: "Gloria Jean's®",
                                productNumber: '(5)',
                                imageSrc: ''
                            },
                        {
                            isChecked: true,
                            filterID: 21,
                            name: 'Green Mountain Coffee Roasters®',
                            productNumber: '(88)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 22,
                            name: 'Intelligentsia®',
                            productNumber: '(3)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 23,
                            name: 'Kahlúa®',
                            productNumber: '(1)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 24,
                            name: 'Keurig®',
                            productNumber: '(28)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 25,
                            name: "Krispy Kreme® Doughnuts Coffee",
                            productNumber: '(12)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 26,
                            name: 'Laughing Man®',
                            productNumber: '(3)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 27,
                            name: 'Lavazza®',
                            productNumber: '(8)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 28,
                            name: 'Lipton®',
                            productNumber: '(2)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 29,
                            name: 'Luzianne®',
                            productNumber: '(2)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 30,
                            name: 'Maxwell House®',
                            productNumber: '(3)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 31,
                            name: 'McCafé®',
                            productNumber: '(45)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 32,
                            name: "Mott's®",
                            productNumber: '(2)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 33,
                            name: 'New England Coffee®',
                            productNumber: '(43)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 34,
                            name: "Newman's Own® Organics",
                            productNumber: '(11)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 35,
                            name: 'Panera Bread®',
                            productNumber: '(7)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 36,
                            name: "Peet's Coffee®",
                            productNumber: '(13)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 37,
                            name: 'REVV®',
                            productNumber: '(1)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 38,
                            name: "Seattle's Best Coffee®",
                            productNumber: '(1)', imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 39,
                            name: 'Starbucks®',
                            productNumber: '(20)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 40,
                            name: 'Swiss Miss®',
                            productNumber: '(7)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 41,
                            name: 'Tazo®',
                            productNumber: '(2)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 42,
                            name: 'The Original Donut Shop®',
                            productNumber: '(32)', imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 43,
                            name: 'Tim Hortons®',
                            productNumber: '(8)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 44,
                            name: "Tully's®",
                            productNumber: '(13)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 45,
                            name: 'Twinings® of London',
                            productNumber: '(19)',
                            imageSrc: ''
                        },
                        {
                            isChecked: true,
                            filterID: 46,
                            name: 'illy®',
                            productNumber: '(6)',
                            imageSrc: ''
                        }
                         ]}
                    />
                    <CategoryItem
                        title="Caffeine"
                        subcategories={[
                            {
                                isChecked: true,
                                filterID: 47,
                                name: 'Decaf',
                                productNumber: '(43)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 48,
                                name: 'Half Caff',
                                productNumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 49,
                                name: 'Regular',
                                productNumber: '(301)',
                                imageSrc: ''
                            },
                        ]}
                        defaultOpen
                    />

                    <CategoryItem
                        title="Roast Type"
                        subcategories={[
                            {
                                isChecked: true,
                                filterID: 50,
                                name: 'Dark',
                                productNumber: '(69)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 51,
                                name: 'Light',
                                productNumber: '(63)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 52,
                                name: 'Medium',
                                productNumber: '(146)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 53,
                                name: 'Medium Dark',
                                productNumber: '(14)',
                                imageSrc: ''
                            },
                        ]}
                        defaultOpen
                    />

                    <CategoryItem
                        title="Flavor"
                        subcategories={[
                            {
                                isChecked: true,
                                filterID: 54,
                                name: 'Blueberry',
                                productNumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 55,
                                name: 'Breakfast Blend',
                                productNumber: '(8)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 56,
                                name: 'Caramel',
                                productNumber: '(18)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 57,
                                name: 'Caramel Vanilla',
                                productNumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 58,
                                name: 'Chai',
                                productNumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 59,
                                name: 'Chocolate',
                                productNumber: '(15)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 60,
                                name: 'Cinnamon',
                                productNumber: '(10)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 61,
                                name: 'Coconut',
                                productNumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 62,
                                name: 'Colombian',
                                productNumber: '(13)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 63,
                                name: 'Earl Grey',
                                productNumber: '(3)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 64,
                                name: 'English Breakfast',
                                productNumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 65,
                                name: 'Espresso',
                                productNumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 66,
                                name: 'Flavored',
                                productNumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 66,
                                name: 'French Roast',
                                productNumber: '(9)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 67,
                                name: 'Green Tea',
                                productNumber: '(5)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 68,
                                name: 'Hazelnut',
                                productNumber: '(17)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 69,
                                name: 'Irish Breakfast',
                                productNumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 70,
                                name: 'Italian',
                                productNumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 71,
                                name: 'Lemon Ginger',
                                productNumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 72,
                                name: 'Mocha',
                                productNumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 73,
                                name: 'Pecan',
                                productNumber: '(5)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 74,
                                name: 'Pumpkin',
                                productNumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 75,
                                name: 'Vanilla',
                                productNumber: '(14)',
                                imageSrc: ''
                            }

                        ]}
                    />
                    <CategoryItem
                        title="Format"
                        subcategories={[
                            {
                                isChecked: true,
                                filterID: 76,
                                name: 'Cocoa',
                                productNumber: '(9)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 77,
                                name: 'Coffee',
                                productNumber: '(302)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 78,
                                name: 'Easy-Peel',
                                productNumber: '(11)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 79,
                                name: 'Espresso',
                                productNumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 80,
                                name: 'Iced Beverages',
                                productNumber: '(17)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 81,
                                name: 'Specialty',
                                productNumber: '(27)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 82,
                                name: 'Tea',
                                productNumber: '(35)',
                                imageSrc: ''
                            }
                        ]}
                    />
                    <CategoryItem
                        title="Category"
                        subcategories={[
                            {
                                isChecked: true,
                                filterID: 83,
                                name: 'Bagged',
                                productNumber: '(64)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 84,
                                name: 'Canned',
                                productNumber: '(7)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 85,
                                name: 'Easy-Peel Lid',
                                productNumber: '(11)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 86,
                                name: 'K-Cup',
                                productNumber: '(282)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 87,
                                name: 'Other',
                                productNumber: '(2)',
                                imageSrc: ''
                            }
  ]}
                    />
                    <CategoryItem
                        title="Box Count"
                        subcategories={[
                            { name: 'K-CUP®', className: 'liCategories', filterID: -1, },
                            {
                                isChecked: true,
                                filterID: 84,
                                name: 'Cold Brew 2 pk.',
                                productNumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 85,
                                name: 'K-Cup® Box 10 ct.',
                                productNumber: '(20)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 86,
                                name: 'K-Cup® Box 12 ct.',
                                productNumber: '(102)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 87,
                                name: 'K-Cup® Box 20 ct.',
                                productNumber: '(27)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                name: 'K-Cup® Box 22 ct.',
                                filterID: 88,
                                productNumber: '(78)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 89,
                                name: 'K-Cup® Box 24 ct.',
                                productNumber: '(237)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 90,
                                name: 'K-Cup® Box 36 ct.',
                                productNumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 91,
                                name: 'K-Cup® Box 40 ct.',
                                productNumber: '(11)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 92,
                                name: 'K-Cup® Box 44 ct.',
                                productNumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 93,
                                name: 'K-Cup® Box 48 ct.',
                                productNumber: '(5)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 94,
                                name: 'K-Cup® Box 60 ct.',
                                productNumber: '(23)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 95,
                                name: 'K-Cup® Box 66 ct.',
                                productNumber: '(66)',
                                imageSrc: ''

                            },
                            {
                                isChecked: true,
                                filterID: 96,
                                name: 'K-Cup® Box 72 ct.',
                                productNumber: '(199)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 96,
                                name: 'K-Cup® Box 80 ct.',
                                productNumber: '(21)',
                                imageSrc: ''
                            },
                            {
                                name: 'GROUND',
                                className: 'liCategories',
                                filterID: -1,
                            },
                            {
                                isChecked: true,
                                name: '10 oz.',
                                filterID: 97,
                                productNumber: '(15)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 98,
                                name: '11 oz.',
                                productNumber: '(23)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 99,
                                name: '12 oz.',
                                productNumber: '(46)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 100,
                                name: '20 oz.',
                                productNumber: '(3)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 101,
                                name: '22 oz.',
                                productNumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 102,
                                name: '29 oz.',
                                productNumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 103,
                                name: '30 oz.',
                                productNumber: '(3)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 104,
                                name: '9 oz.',
                                productNumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                name: 'WHOLE BEAN',
                                className: 'liCategories',
                                filterID: -1,
                            },
                            {
                                isChecked: true,
                                filterID: 105,
                                name: '10 oz.',
                                productNumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                name: '12 oz.',
                                filterID: 106,
                                productNumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                isChecked: true,
                                filterID: 107,
                                name: '20 oz.',
                                productNumber: '(1)',
                                imageSrc: ''
                            },
                        ]}
                    />

                </ul>
            </div>
        </BrewerCLPFiltersStyle>
    );
};
