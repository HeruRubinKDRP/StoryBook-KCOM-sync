import {NavItem} from "../components/NavigationSimpler/NavLight";

export const navItems: NavItem[] = [
    {
        label: 'Shop',
        link: '/home',
        children: [
            {
                label: 'Coffee Makers',
                link: '/coffee-makers',
            },{
                label: 'Beverages',
                link: '/beverages',
            },{
                label: 'Accessories',
                link: '/accessories',
            },{
                label: 'Shop All',
                link: '/shop-all',
            },
        ]
    },
    {
        label: 'Explore',
        link: '/about',
        children: [

            {
                label: 'Help With Your Coffee Maker, Pods, and Accessories',
                link: '/AI/history',
            },
            {
                label: 'Coffee Knowledge',
                link: '/AI/coffee-knowledge',
            },
            {
                label: 'Sustainability & Ethical Sourcing',
                link: '/AI/sustainability',
            },
        ],
    },
    {
        label: 'Create',
        link: '/contact',
        children: [
            {
                label: 'Recipes',
                link: '/AI/recipes',
            },
            {
                label: 'Social',
                link: '/AI/social',
            }
        ]
    },
];
