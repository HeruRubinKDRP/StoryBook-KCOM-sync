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
                                className: 'liCategories',
                                name: 'Iced',
                                productnumber: '',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/beverage%20Just_arrived'
                            },
                            {
                                checkbox: true,
                                className: 'liCategories',
                                name: 'Seasonal',
                                productnumber: '',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-seasonals'
                            },
                            {
                                checkbox: true,
                                className: 'liCategories',
                                name: 'Best Sellers',
                                productnumber: '',
                                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-best-saller'
                            },
                            {
                                checkbox: true,
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
                            {checkbox: true, name: 'BLK & BOLD®', productnumber: '(6)', imageSrc: ''},
                            {checkbox: true, name: 'Barista Prima Coffeehouse®', productnumber: '(7)', imageSrc: ''},
                            {checkbox: true, name: 'Bigelow®', productnumber: '(9)', imageSrc: ''},
                            {checkbox: true, name: 'Café Bustelo®', productnumber: '(3)', imageSrc: ''},
                            {checkbox: true, name: 'Café Escapes®', productnumber: '(9)', imageSrc: ''},
                            {checkbox: true, name: 'Café Gila®', productnumber: '(2)', imageSrc: ''},
                            {checkbox: true, name: 'Caribou Coffee®', productnumber: '(17)', imageSrc: ''},
                            {checkbox: true, name: 'Celestial Seasonings®', productnumber: '(8)', imageSrc: ''},
                            {checkbox: true, name: 'Cinnabon®', productnumber: '(4)', imageSrc: ''},
                            {checkbox: true, name: 'Community® Coffee', productnumber: '(6)', imageSrc: ''},
                            {checkbox: true, name: "Dunkin' Donuts®", productnumber: '(22)', imageSrc: ''},
                            {checkbox: true, name: "Eight O'Clock®", productnumber: '(9)', imageSrc: ''},
                            {checkbox: true, name: "Emeril's®", productnumber: '(1)', imageSrc: ''},
                            {checkbox: true, name: 'Folgers®', productnumber: '(9)', imageSrc: ''},
                            {checkbox: true, name: 'French Market®', productnumber: '(1)', imageSrc: ''},
                            {checkbox: true, name: 'GEVALIA', productnumber: '(5)', imageSrc: ''},
                            {checkbox: true, name: "Gloria Jean's®", productnumber: '(5)', imageSrc: ''},
                        {checkbox: true, name: 'Green Mountain Coffee Roasters®', productnumber: '(88)', imageSrc: ''},
                        {checkbox: true, name: 'Intelligentsia®', productnumber: '(3)', imageSrc: ''},
                        {checkbox: true, name: 'Kahlúa®', productnumber: '(1)', imageSrc: ''},
                        {checkbox: true, name: 'Keurig®', productnumber: '(28)', imageSrc: ''},
                        {checkbox: true, name: "Krispy Kreme® Doughnuts Coffee", productnumber: '(12)', imageSrc: ''},
                        {checkbox: true, name: 'Laughing Man®', productnumber: '(3)', imageSrc: ''},
                        {checkbox: true, name: 'Lavazza®', productnumber: '(8)', imageSrc: ''},
                        {checkbox: true, name: 'Lipton®', productnumber: '(2)', imageSrc: ''},
                        {checkbox: true, name: 'Luzianne®', productnumber: '(2)', imageSrc: ''},
                        {checkbox: true, name: 'Maxwell House®', productnumber: '(3)', imageSrc: ''},
                        {checkbox: true, name: 'McCafé®', productnumber: '(45)', imageSrc: ''},
                        {checkbox: true, name: "Mott's®", productnumber: '(2)', imageSrc: ''},
                        {checkbox: true, name: 'New England Coffee®', productnumber: '(43)', imageSrc: ''},
                        {checkbox: true, name: "Newman's Own® Organics", productnumber: '(11)', imageSrc: ''},
                        {checkbox: true, name: 'Panera Bread®', productnumber: '(7)', imageSrc: ''},
                        {checkbox: true, name: "Peet's Coffee®", productnumber: '(13)', imageSrc: ''},
                        {checkbox: true, name: 'REVV®', productnumber: '(1)', imageSrc: ''},
                        {checkbox: true, name: "Seattle's Best Coffee®", productnumber: '(1)', imageSrc: ''},
                        {checkbox: true, name: 'Starbucks®', productnumber: '(20)', imageSrc: ''},
                        {checkbox: true, name: 'Swiss Miss®', productnumber: '(7)', imageSrc: ''},
                        {checkbox: true, name: 'Tazo®', productnumber: '(2)', imageSrc: ''},
                        {checkbox: true, name: 'The Original Donut Shop®', productnumber: '(32)', imageSrc: ''},
                        {checkbox: true, name: 'Tim Hortons®', productnumber: '(8)', imageSrc: ''},
                        {checkbox: true, name: "Tully's®", productnumber: '(13)', imageSrc: ''},
                        {checkbox: true, name: 'Twinings® of London', productnumber: '(19)', imageSrc: ''},
                        {checkbox: true, name: 'illy®', productnumber: '(6)', imageSrc: ''}
                         ]}
                    />
                    <CategoryItem
                        title="Caffeine"
                        subcategories={[
                            {checkbox: true, name: 'Decaf', productnumber: '(43)', imageSrc: ''},
                            {checkbox: true, name: 'Half Caff', productnumber: '(2)', imageSrc: ''},
                            {checkbox: true, name: 'Regular', productnumber: '(301)', imageSrc: ''},
                        ]}
                        defaultOpen
                    />

                    <CategoryItem
                        title="Roast Type"
                        subcategories={[
                            {checkbox: true, name: 'Dark', productnumber: '(69)', imageSrc: ''},
                            {checkbox: true, name: 'Light', productnumber: '(63)', imageSrc: ''},
                            {checkbox: true, name: 'Medium', productnumber: '(146)', imageSrc: ''},
                            {checkbox: true, name: 'Medium Dark', productnumber: '(14)', imageSrc: ''},
                        ]}
                        defaultOpen
                    />

                    <CategoryItem
                        title="Flavor"
                        subcategories={[
                            {checkbox: true, name: 'Blueberry', productnumber: '(4)', imageSrc: ''},
                            {checkbox: true, name: 'Breakfast Blend', productnumber: '(8)', imageSrc: ''},
                            {checkbox: true, name: 'Caramel', productnumber: '(18)', imageSrc: ''},
                            {checkbox: true, name: 'Caramel Vanilla', productnumber: '(2)', imageSrc: ''},
                            {checkbox: true, name: 'Chai', productnumber: '(4)', imageSrc: ''},
                            {checkbox: true, name: 'Chocolate', productnumber: '(15)', imageSrc: ''},
                            {checkbox: true, name: 'Cinnamon', productnumber: '(10)', imageSrc: ''},
                            {checkbox: true, name: 'Coconut', productnumber: '(2)', imageSrc: ''},
                            {checkbox: true, name: 'Colombian', productnumber: '(13)', imageSrc: ''},
                            {checkbox: true, name: 'Earl Grey', productnumber: '(3)', imageSrc: ''},
                            {checkbox: true, name: 'English Breakfast', productnumber: '(4)', imageSrc: ''},
                            {checkbox: true, name: 'Espresso', productnumber: '(2)', imageSrc: ''},
                            {checkbox: true, name: 'Flavored', productnumber: '(1)', imageSrc: ''},
                            {checkbox: true, name: 'French Roast', productnumber: '(9)', imageSrc: ''},
                            {checkbox: true, name: 'Green Tea', productnumber: '(5)', imageSrc: ''},
                            {checkbox: true, name: 'Hazelnut', productnumber: '(17)', imageSrc: ''},
                            {checkbox: true, name: 'Irish Breakfast', productnumber: '(1)', imageSrc: ''},
                            {checkbox: true, name: 'Italian', productnumber: '(4)', imageSrc: ''},
                            {checkbox: true, name: 'Lemon Ginger', productnumber: '(1)', imageSrc: ''},
                            {checkbox: true, name: 'Mocha', productnumber: '(4)', imageSrc: ''},
                            {checkbox: true, name: 'Pecan', productnumber: '(5)', imageSrc: ''},
                            {checkbox: true, name: 'Pumpkin', productnumber: '(4)', imageSrc: ''},
                            {checkbox: true, name: 'Vanilla', productnumber: '(14)', imageSrc: ''}

                        ]}
                    />
                    <CategoryItem
                        title="Format"
                        subcategories={[
                            {checkbox: true, name: 'Cocoa', productnumber: '(9)', imageSrc: ''},
                            {checkbox: true, name: 'Coffee', productnumber: '(302)', imageSrc: ''},
                            {checkbox: true, name: 'Easy-Peel', productnumber: '(11)', imageSrc: ''},
                            {checkbox: true, name: 'Espresso', productnumber: '(4)', imageSrc: ''},
                            {checkbox: true, name: 'Iced Beverages', productnumber: '(17)', imageSrc: ''},
                            {checkbox: true, name: 'Specialty', productnumber: '(27)', imageSrc: ''},
                            {checkbox: true, name: 'Tea', productnumber: '(35)', imageSrc: ''}
                        ]}
                    />
                    <CategoryItem
                        title="Category"
                        subcategories={[
                            {checkbox: true, name: 'Bagged', productnumber: '(64)', imageSrc: ''},
                            {checkbox: true, name: 'Canned', productnumber: '(7)', imageSrc: ''},
                            {checkbox: true, name: 'Easy-Peel Lid', productnumber: '(11)', imageSrc: ''},
                            {checkbox: true, name: 'K-Cup', productnumber: '(282)', imageSrc: ''},
                            {checkbox: true, name: 'Other', productnumber: '(2)', imageSrc: ''}
  ]}
                    />
                    <CategoryItem
                        title="Box Count"
                        subcategories={[
                            { name: 'K-CUP®', className: 'liCategories', },
                            { checkbox: true, name: 'Cold Brew 2 pk.', productnumber: '(2)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 10 ct.', productnumber: '(20)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 12 ct.', productnumber: '(102)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 20 ct.', productnumber: '(27)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 22 ct.', productnumber: '(78)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 24 ct.', productnumber: '(237)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 36 ct.', productnumber: '(2)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 40 ct.', productnumber: '(11)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 44 ct.', productnumber: '(1)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 48 ct.', productnumber: '(5)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 60 ct.', productnumber: '(23)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 66 ct.', productnumber: '(66)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 72 ct.', productnumber: '(199)', imageSrc: '' },
                            { checkbox: true, name: 'K-Cup® Box 80 ct.', productnumber: '(21)', imageSrc: '' },
                            { name: 'GROUND', className: 'liCategories',},
                            { checkbox: true, name: '10 oz.', productnumber: '(15)', imageSrc: '' },
                            { checkbox: true, name: '11 oz.', productnumber: '(23)', imageSrc: '' },
                            { checkbox: true, name: '12 oz.', productnumber: '(46)', imageSrc: '' },
                            { checkbox: true, name: '20 oz.', productnumber: '(3)', imageSrc: '' },
                            { checkbox: true, name: '22 oz.', productnumber: '(1)', imageSrc: '' },
                            { checkbox: true, name: '29 oz.', productnumber: '(1)', imageSrc: '' },
                            { checkbox: true, name: '30 oz.', productnumber: '(3)', imageSrc: '' },
                            { checkbox: true, name: '9 oz.', productnumber: '(1)', imageSrc: '' },
                            { name: 'WHOLE BEAN', className: 'liCategories', },
                            { checkbox: true, name: '10 oz.', productnumber: '(1)', imageSrc: '' },
                            { checkbox: true, name: '12 oz.', productnumber: '(1)', imageSrc: '' },
                            { checkbox: true, name: '20 oz.', productnumber: '(1)', imageSrc: '' },
                        ]}
                    />

                </ul>
            </div>
        </BrewerCLPFiltersStyle>
    );
};
