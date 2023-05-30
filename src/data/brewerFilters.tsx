import {iCategoryItem} from "../components/Filters/FiltersCenter/FiltersCenter";


export const brewerFiltersSettings : iCategoryItem[] = [
   //categories
    {
        title: 'Categories',
        subcategories: [
            {
                isChecked: false,
                filterID: 0,
                className: 'liCategories',
                name: 'SMART Wi-Fi® Enabled',
                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer2?fmt=png-alpha'
            },
            {
                isChecked: false,
                filterID: 1,
                className: 'liCategories',
                name: 'Single-Serve Coffee Makers',
                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer3?fmt=png-alpha'
            },
            {
                isChecked: false,
                filterID: 2,
                className: 'liCategories',
                name: 'Coffeehouse Beverages at Home',
                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer4?fmt=png-alpha'
            },
            {
                isChecked: false,
                filterID: 3,
                className: 'liCategories',
                name: 'Dual Coffee Makers',
                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer5?fmt=png-alpha'
            },
            {
                isChecked: false,
                filterID: 4,
                className: 'liCategories',//no border here
                name: 'Brew Over Ice Coffee Makers',
                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer6?fmt=png-alpha'
            },
        ],
        defaultOpen: true
    },

    // features
    {
        title: 'Features',
        subcategories: [
            {
                isChecked: false,
                filterID: 5,
                className: 'liFeatures',
                name: 'Digital Clock',
                productNumber: '(6)',
                imageSrc: '/icons-files/digital_clock_icon.svg'
            },
            {
                isChecked: false,
                filterID: 6,
                className: 'liFeatures',
                name: 'Display Screen',
                productNumber: '(10)',
                imageSrc: '/icons-files/brewer_id_icon@2x.png'
            },
            {
                isChecked: false,
                filterID: 7,
                className: 'liFeatures',
                name: 'Froths Milk',
                productNumber: '(10)',
                imageSrc: '/icons-files/icon-MilkFrother.svg'
            },
            {
                isChecked: false,
                filterID: 8,
                className: 'liFeatures',
                name: 'Iced Setting',
                productNumber: '(10)',
                imageSrc: '/icons-files/icon-BrewOverIce.svg'
            },
            {
                isChecked: false,
                filterID: 9,
                className: 'liFeatures',
                name: 'Multi-Position Water Reservoir',
                productNumber: '(3)',
                imageSrc: '/icons-files/multi_position_reservoir.svg'
            },
            {
                isChecked: false,
                filterID: 10,
                className: 'liFeatures',
                name: 'Strength Control',
                productNumber: '(16)',
                imageSrc: ''
            },
            {
                isChecked: false,
                filterID: 11,
                className: 'liFeatures',
                name: 'Temperature Control',
                productNumber: '(5)',
                imageSrc: ''
            },
        ],
        defaultOpen: true
    },
    // colors
    {
        title: 'Colors',
        subcategories: [
            {
                isChecked: false,
                filterID: 12,
                groupTitle: "Black and White",
                colors: ['#fff', '#000'],
                className: 'liColor',
            },
            {
                isChecked: false,
                filterID: 13,
                groupTitle: "Metals & Metallics",
                colors: ['#676260', '#eae8d4', '#f3f3f3'],
                className: 'liColor',
            },
            {
                isChecked: false,
                filterID: 14,
                groupTitle: "Green and Blue",
                colors: ['#a8bba2', '#405545', '#578295', '#77bcda', '#b0cacb', '#32425e'],
                className: 'liColor',
            },
            {
                isChecked: false,
                filterID: 15,
                groupTitle: "Red",
                colors: ['#bb3a56', '#ff0000'],
                className: 'liColor',
            },
        ],
        defaultOpen: false
    },

    //brew type
    {
        title: 'Brew Type',
        subcategories: [
            {
                isChecked: false,
                filterID: 16,
                name: 'Bagged Coffee',
                productNumber: '(2)',
                imageSrc: ''
            },
            {
                isChecked: false,
                filterID: 17,
                name: 'K-Cup',
                productNumber: '(21)',
                imageSrc: ''
            },
        ],
        defaultOpen: false
    },
    // reservoir
    {
        title: 'Reservoir',
        subcategories: [
            {
            isChecked: false,
            filterID: 18,
            name: '60 oz or more',
            productNumber: '(7)',
            imageSrc: ''
        },
            {
                isChecked: false,
                filterID: 19,
                name: 'Add Water Each Time',
                productNumber: '(2)',
                imageSrc: ''
            },
            {
                isChecked: false,
                filterID: 20,
                name: 'Upto 52 oz',
                productNumber: '(4)',
                imageSrc: ''
            },],
        defaultOpen: false
    },
    //Commercial
    {
        title: 'Commercial',
        subcategories: [
            {
                isChecked:false,
                filterID: 21,
                name: 'Commercial',
                productNumber: '(1)',
                imageSrc: ''
            },{
                isChecked:false,
                filterID: 21,
                name: 'Home',
                productNumber: '(1)',
                imageSrc: ''
            },
        ],
        defaultOpen: false
    }

];