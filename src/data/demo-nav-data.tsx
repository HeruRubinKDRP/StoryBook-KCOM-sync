import {NavItem} from "../components/NavigationSimpler/NavLight";

export const navItems: NavItem[] = [
    {
        label: 'Shop',
        link: '/home',
        children: [
            {
                label: 'Coffee Makers',
                link: '/coffee-makers',
            },
        ]
    },
    {
        label: 'Explore',
        link: '/about',
        children: [
            {
                label: 'Coffee Knowledge',
                link: '/team',
            },
            {
                label: 'Sustainability & Ethical Sourcing',
                link: '/history',
            },
        ],
    },
    {
        label: 'Create',
        link: '/contact',
        children: [
            {
                label: 'Recipes',
                link: '/team',
            },
            {
                label: 'Sustainability & Ethical Sourcing',
                link: '/history',
            },
        ]
    },
];
