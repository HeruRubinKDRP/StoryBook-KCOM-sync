import React, {useState} from 'react';
import { BrewerCLPFiltersStyle } from './Brewer-CLP-filters-styled';
import { CategoryItem } from './Filters-CLP-CategoryItems';


export interface iFilters {
    isVisible?: boolean;
    type?: string;
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
                                filterID: 0,
                                className: 'liCategories',
                                name: 'Iced',
                                productnumber: '',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/beverage%20Just_arrived'
                            },
                            {
                                checkbox: true,
                                filterID: 1,
                                className: 'liCategories',
                                name: 'Seasonal',
                                productnumber: '',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-seasonals'
                            },
                            {
                                checkbox: true,
                                filterID: 2,
                                className: 'liCategories',
                                name: 'Best Sellers',
                                productnumber: '',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-best-saller'
                            },
                            {
                                checkbox: true,
                                filterID: 3,
                                className: 'liCategories',
                                name: 'Flavored',
                                productnumber: '',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-flavored'
                            },

                        ]}
                        defaultOpen
                    />

                    <CategoryItem
                        title="Brands"
                        subcategories={[
                            {
                                checkbox: true,
                                name: 'BLK & BOLD®',
                                filterID: 4,
                                productnumber: '(6)',
                                imageSrc: ''},
                            {
                                checkbox: true,
                                name: 'Barista Prima Coffeehouse®',
                                filterID: 5,
                                productnumber: '(7)',
                                imageSrc: ''},
                            {
                                checkbox: true,
                                filterID: 6,
                                name: 'Bigelow®',
                                productnumber: '(9)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 7,
                                name: 'Café Bustelo®',
                                productnumber: '(3)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 8,
                                name: 'Café Escapes®',
                                productnumber: '(9)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 9,
                                name: 'Café Gila®',
                                productnumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 10,
                                name: 'Caribou Coffee®',
                                productnumber: '(17)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 11,
                                name: 'Celestial Seasonings®',
                                productnumber: '(8)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 12,
                                name: 'Cinnabon®',
                                productnumber: '(4)',
                                imageSrc: ''},
                            {checkbox: true,
                                filterID: 13,
                                name: 'Community® Coffee',
                                productnumber: '(6)',
                                imageSrc: ''},
                            {
                                checkbox: true,
                                filterID: 14,
                                name: "Dunkin' Donuts®",
                                productnumber: '(22)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 15,
                                name: "Eight O'Clock®",
                                productnumber: '(9)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 16,
                                name: "Emeril's®",
                                productnumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 17,
                                name: 'Folgers®',
                                productnumber: '(9)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 18,
                                name: 'French Market®',
                                productnumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 19,
                                name: 'GEVALIA',
                                productnumber: '(5)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 20,
                                name: "Gloria Jean's®",
                                productnumber: '(5)',
                                imageSrc: ''
                            },
                        {
                            checkbox: true,
                            filterID: 21,
                            name: 'Green Mountain Coffee Roasters®',
                            productnumber: '(88)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 22,
                            name: 'Intelligentsia®',
                            productnumber: '(3)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 23,
                            name: 'Kahlúa®',
                            productnumber: '(1)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 24,
                            name: 'Keurig®',
                            productnumber: '(28)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 25,
                            name: "Krispy Kreme® Doughnuts Coffee",
                            productnumber: '(12)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 26,
                            name: 'Laughing Man®',
                            productnumber: '(3)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 27,
                            name: 'Lavazza®',
                            productnumber: '(8)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 28,
                            name: 'Lipton®',
                            productnumber: '(2)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 29,
                            name: 'Luzianne®',
                            productnumber: '(2)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 30,
                            name: 'Maxwell House®',
                            productnumber: '(3)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 31,
                            name: 'McCafé®',
                            productnumber: '(45)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 32,
                            name: "Mott's®",
                            productnumber: '(2)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 33,
                            name: 'New England Coffee®',
                            productnumber: '(43)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 34,
                            name: "Newman's Own® Organics",
                            productnumber: '(11)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 35,
                            name: 'Panera Bread®',
                            productnumber: '(7)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 36,
                            name: "Peet's Coffee®",
                            productnumber: '(13)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 37,
                            name: 'REVV®',
                            productnumber: '(1)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 38,
                            name: "Seattle's Best Coffee®",
                            productnumber: '(1)', imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 39,
                            name: 'Starbucks®',
                            productnumber: '(20)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 40,
                            name: 'Swiss Miss®',
                            productnumber: '(7)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 41,
                            name: 'Tazo®',
                            productnumber: '(2)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 42,
                            name: 'The Original Donut Shop®',
                            productnumber: '(32)', imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 43,
                            name: 'Tim Hortons®',
                            productnumber: '(8)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 44,
                            name: "Tully's®",
                            productnumber: '(13)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 45,
                            name: 'Twinings® of London',
                            productnumber: '(19)',
                            imageSrc: ''
                        },
                        {
                            checkbox: true,
                            filterID: 46,
                            name: 'illy®',
                            productnumber: '(6)',
                            imageSrc: ''
                        }
                         ]}
                    />
                    <CategoryItem
                        title="Caffeine"
                        subcategories={[
                            {
                                checkbox: true,
                                filterID: 47,
                                name: 'Decaf',
                                productnumber: '(43)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 48,
                                name: 'Half Caff',
                                productnumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 49,
                                name: 'Regular',
                                productnumber: '(301)',
                                imageSrc: ''
                            },
                        ]}
                        defaultOpen
                    />

                    <CategoryItem
                        title="Roast Type"
                        subcategories={[
                            {
                                checkbox: true,
                                filterID: 50,
                                name: 'Dark',
                                productnumber: '(69)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 51,
                                name: 'Light',
                                productnumber: '(63)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 52,
                                name: 'Medium',
                                productnumber: '(146)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 53,
                                name: 'Medium Dark',
                                productnumber: '(14)',
                                imageSrc: ''
                            },
                        ]}
                        defaultOpen
                    />

                    <CategoryItem
                        title="Flavor"
                        subcategories={[
                            {
                                checkbox: true,
                                filterID: 54,
                                name: 'Blueberry',
                                productnumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 55,
                                name: 'Breakfast Blend',
                                productnumber: '(8)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 56,
                                name: 'Caramel',
                                productnumber: '(18)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 57,
                                name: 'Caramel Vanilla',
                                productnumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 58,
                                name: 'Chai',
                                productnumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 59,
                                name: 'Chocolate',
                                productnumber: '(15)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 60,
                                name: 'Cinnamon',
                                productnumber: '(10)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 61,
                                name: 'Coconut',
                                productnumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 62,
                                name: 'Colombian',
                                productnumber: '(13)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 63,
                                name: 'Earl Grey',
                                productnumber: '(3)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 64,
                                name: 'English Breakfast',
                                productnumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 65,
                                name: 'Espresso',
                                productnumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 66,
                                name: 'Flavored',
                                productnumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 66,
                                name: 'French Roast',
                                productnumber: '(9)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 67,
                                name: 'Green Tea',
                                productnumber: '(5)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 68,
                                name: 'Hazelnut',
                                productnumber: '(17)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 69,
                                name: 'Irish Breakfast',
                                productnumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 70,
                                name: 'Italian',
                                productnumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 71,
                                name: 'Lemon Ginger',
                                productnumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 72,
                                name: 'Mocha',
                                productnumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 73,
                                name: 'Pecan',
                                productnumber: '(5)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 74,
                                name: 'Pumpkin',
                                productnumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 75,
                                name: 'Vanilla',
                                productnumber: '(14)',
                                imageSrc: ''
                            }

                        ]}
                    />
                    <CategoryItem
                        title="Format"
                        subcategories={[
                            {
                                checkbox: true,
                                filterID: 76,
                                name: 'Cocoa',
                                productnumber: '(9)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 77,
                                name: 'Coffee',
                                productnumber: '(302)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 78,
                                name: 'Easy-Peel',
                                productnumber: '(11)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 79,
                                name: 'Espresso',
                                productnumber: '(4)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 80,
                                name: 'Iced Beverages',
                                productnumber: '(17)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 81,
                                name: 'Specialty',
                                productnumber: '(27)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 82,
                                name: 'Tea',
                                productnumber: '(35)',
                                imageSrc: ''
                            }
                        ]}
                    />
                    <CategoryItem
                        title="Category"
                        subcategories={[
                            {
                                checkbox: true,
                                filterID: 83,
                                name: 'Bagged',
                                productnumber: '(64)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 84,
                                name: 'Canned',
                                productnumber: '(7)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 85,
                                name: 'Easy-Peel Lid',
                                productnumber: '(11)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 86,
                                name: 'K-Cup',
                                productnumber: '(282)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 87,
                                name: 'Other',
                                productnumber: '(2)',
                                imageSrc: ''
                            }
  ]}
                    />
                    <CategoryItem
                        title="Box Count"
                        subcategories={[
                            { name: 'K-CUP®', className: 'liCategories', filterID: -1, },
                            {
                                checkbox: true,
                                filterID: 84,
                                name: 'Cold Brew 2 pk.',
                                productnumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 85,
                                name: 'K-Cup® Box 10 ct.',
                                productnumber: '(20)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 86,
                                name: 'K-Cup® Box 12 ct.',
                                productnumber: '(102)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 87,
                                name: 'K-Cup® Box 20 ct.',
                                productnumber: '(27)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                name: 'K-Cup® Box 22 ct.',
                                filterID: 88,
                                productnumber: '(78)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 89,
                                name: 'K-Cup® Box 24 ct.',
                                productnumber: '(237)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 90,
                                name: 'K-Cup® Box 36 ct.',
                                productnumber: '(2)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 91,
                                name: 'K-Cup® Box 40 ct.',
                                productnumber: '(11)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 92,
                                name: 'K-Cup® Box 44 ct.',
                                productnumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 93,
                                name: 'K-Cup® Box 48 ct.',
                                productnumber: '(5)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 94,
                                name: 'K-Cup® Box 60 ct.',
                                productnumber: '(23)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 95,
                                name: 'K-Cup® Box 66 ct.',
                                productnumber: '(66)',
                                imageSrc: ''

                            },
                            {
                                checkbox: true,
                                filterID: 96,
                                name: 'K-Cup® Box 72 ct.',
                                productnumber: '(199)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 96,
                                name: 'K-Cup® Box 80 ct.',
                                productnumber: '(21)',
                                imageSrc: ''
                            },
                            {
                                name: 'GROUND',
                                className: 'liCategories',
                                filterID: -1,
                            },
                            {
                                checkbox: true,
                                name: '10 oz.',
                                filterID: 97,
                                productnumber: '(15)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 98,
                                name: '11 oz.',
                                productnumber: '(23)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 99,
                                name: '12 oz.',
                                productnumber: '(46)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 100,
                                name: '20 oz.',
                                productnumber: '(3)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 101,
                                name: '22 oz.',
                                productnumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 102,
                                name: '29 oz.',
                                productnumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 103,
                                name: '30 oz.',
                                productnumber: '(3)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 104,
                                name: '9 oz.',
                                productnumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                name: 'WHOLE BEAN',
                                className: 'liCategories',
                                filterID: -1,
                            },
                            {
                                checkbox: true,
                                filterID: 105,
                                name: '10 oz.',
                                productnumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                name: '12 oz.',
                                filterID: 106,
                                productnumber: '(1)',
                                imageSrc: ''
                            },
                            {
                                checkbox: true,
                                filterID: 107,
                                name: '20 oz.',
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
