import {iCategoryItem} from "../components/Filters/FiltersCenter/FiltersCenter";


export const brewerFiltersSettings : iCategoryItem[] = [
   //categories
    {
        title: 'Categories',
        priority: "high",
        subcategories: [
            {
                isChecked: false,
                filterID: 0,
                filterTerm: "smart-wifi-enabled",
                className: 'liCategories',
                name: 'SMART Wi-Fi® Enabled',
                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer2?fmt=png-alpha'
            },
            {
                isChecked: false,
                filterID: 1,
                filterTerm: "single-serve-coffee-maker",
                className: 'liCategories',
                name: 'Single-Serve Coffee Makers',
                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer3?fmt=png-alpha'
            },
            {
                isChecked: false,
                filterID: 2,
                filterTerm: "coffee-house-beverages-at-home",
                className: 'liCategories',
                name: 'Coffeehouse Beverages at Home',
                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer4?fmt=png-alpha'
            },
            {
                isChecked: false,
                filterID: 3,
                filterTerm: "dual-coffee-makers",
                className: 'liCategories',
                name: 'Dual Coffee Makers',
                description: 'Get high tech features, wi-fi enable, lorem ipsum',
                imageSrc: 'https://images.keurig.com/is/image/keurig/oz-nav-brewer5?fmt=png-alpha'
            },
            {
                isChecked: false,
                filterID: 4,
                filterTerm: "brew-over-ice-coffee-makers",
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
        priority: "high",
        subcategories: [
            {
                isChecked: false,
                filterID: 5,
                filterTerm: "digital-clock",
                className: 'liFeatures',
                name: 'Digital Clock',
                productNumber: '(6)',
                imageSrc: '/icons-files/digital_clock_icon.svg'
            },
            {
                isChecked: false,
                filterID: 6,
                filterTerm: "display-screen",
                className: 'liFeatures',
                name: 'Display Screen',
                productNumber: '(10)',
                imageSrc: '/icons-files/brewer_id_icon@2x.png'
            },
            {
                isChecked: false,
                filterID: 7,
                filterTerm: "froths-milk",
                className: 'liFeatures',
                name: 'Froths Milk',
                productNumber: '(10)',
                imageSrc: '/icons-files/icon-MilkFrother.svg'
            },
            {
                isChecked: false,
                filterID: 8,
                filterTerm: "iced-setting",
                className: 'liFeatures',
                name: 'Iced Setting',
                productNumber: '(10)',
                imageSrc: '/icons-files/icon-BrewOverIce.svg'
            },
            {
                isChecked: false,
                filterID: 9,
                filterTerm: "multi-position-reservoir",
                className: 'liFeatures',
                name: 'Multi-Position Water Reservoir',
                productNumber: '(3)',
                imageSrc: '/icons-files/multi_position_reservoir.svg'
            },
            {
                isChecked: false,
                filterID: 10,
                filterTerm: "strength-control",
                className: 'liFeatures',
                name: 'Strength Control',
                productNumber: '(16)',
                imageSrc: ''
            },
            {
                isChecked: false,
                filterID: 11,
                filterTerm: "temperature-control",
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
                filterTerm: "white",
                groupTitle: "Black and White",
                colors: ['#fff', '#000'],
                className: 'liColor',
            },
            {
                isChecked: false,
                filterID: 13,
                filterTerm: "black",
                groupTitle: "Metals & Metallics",
                colors: ['#676260', '#eae8d4', '#f3f3f3'],
                className: 'liColor',
            },
            {
                isChecked: false,
                filterID: 14,
                filterTerm: "grey",
                groupTitle: "Green and Blue",
                colors: ['#a8bba2', '#405545', '#578295', '#77bcda', '#b0cacb', '#32425e'],
                className: 'liColor',
            },
            {
                isChecked: false,
                filterID: 15,
                filterTerm: "bronze",
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
                filterTerm: "bagged-coffee",
                productNumber: '(2)',
                imageSrc: ''
            },
            {
                isChecked: false,
                filterID: 17,
                name: 'K-Cup',
                filterTerm: "k-cup",
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
            filterTerm: "60oz-removable-reservoir",
            name: '60 oz or more',
            productNumber: '(7)',
            imageSrc: ''
        },
            {
                isChecked: false,
                filterID: 19,
                filterTerm: "add-water-each-time",
                name: 'Add Water Each Time',
                productNumber: '(2)',
                imageSrc: ''
            },
            {
                isChecked: false,
                filterID: 20,
                filterTerm: "up-to-52-ounces",
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
                filterTerm: "commercial",
                name: 'Commercial',
                productNumber: '(1)',
                imageSrc: ''
            },{
                isChecked:false,
                filterID: 21,
                filterTerm: "home",
                name: 'Home',
                productNumber: '(1)',
                imageSrc: ''
            },
        ],
        defaultOpen: false
    }

];