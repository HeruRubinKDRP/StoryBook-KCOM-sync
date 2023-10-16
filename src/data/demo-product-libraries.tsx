import {podItemT} from "../pages/myBrews";
import {iCellItem} from "../components/MasonTiles/Cells/CellBasic/CellBase";
import {colorNameToValue} from "../components/_utilities/color-name-to-value/colorNameToValue";

export const CustomPodLibrary: podItemT[] = [
    {
        brand: "Keurig®",
        podName : "K-Iced™ Single Serve Coffee Maker",
        boxImagePath : "https://images.keurig.com/is/image/keurig/k-iced-single-serve-coffee-maker_5000371871_swatch?fmt=png-alpha&w=640&q=75",
    },
    {
        brand: "Dunkin' Donuts®",
        podName : "COLD Caramel",
        boxImagePath : "https://images.keurig.com/is/image/keurig/Cold-Caramel-coffee-k-cup-dd_en_general?fmt=png-alpha",
    },
    {
        brand: "McCAFÉ®",
        podName : "ICED Hazelnut Latte",
        boxImagePath : "https://images.keurig.com/is/image/keurig/Iced-Hazelnut-Latte-Coffee-K-Cup-McCafe_en_general?fmt=png-alpha"},
    {
        brand: "Keurig®",
        podName : "K-Cup® Pod Carousel",
        boxImagePath : "https://images.keurig.com/is/image/keurig/36-Count-K-Cup-Carousel_5000199363?fmt=png-alpha",
    },
];

export const HomeGridData : iCellItem[] = [
    {
        cellType : 'highlight-item',
        title: 'Keurig® Starter Kit',
        secondaryTitle: 'Coffee Maker for FREE or 50% with the purchase of Beverages',
        highlightImage: '/editorial/home/starter-kit.jpg',
        iconStandard : 'action-arrow',
        backgroundColor: '#ffffff',
        CTA: 'Build Your Starter Kit',
    },{
        cellType : 'chat-text',
        title: 'Your Digital Assistant',
        secondaryTitle: `If you have any questions, just ask.`,
        highlightImage: '',
        iconStandard : 'action-arrow',
        backgroundColor: '#ffffff',
    },{
        cellType : 'basic',
        title: 'Save 40% on your first order',
        secondaryTitle: 'When you include Green Mountain Coffee Roasters® coffee with your order of beverages',
        backgroundImage: '/editorial/home/homepage-bev-bg.jpg',
        highlightImage: '/editorial/home/bev-hero-foreground.png',
        backgroundColor: '#f1f1f1',
        iconStandard : 'action-arrow',
        CTA: 'Click Me'
    },
]

export const BeverageGridData : iCellItem[] = [
    {
        cellType : 'basic',
        title: 'Save 40% on your first order',
        secondaryTitle: 'When you include Green Mountain Coffee Roasters® coffee with your order of beverages',
        backgroundImage: '/editorial/home/homepage-bev-bg.jpg',
        highlightImage: '/editorial/home/bev-hero-foreground.png',
        backgroundColor: '#f1f1f1',
        iconStandard : 'action-arrow',
        CTA: 'Click Me'
    },
    {
        cellType : 'highlight-item',
        title: 'Keurig® Starter Kit',
        secondaryTitle: 'Coffee Maker for FREE or 50% with the purchase of Beverages',
        highlightImage: '/editorial/home/starter-kit.jpg',
        iconStandard : 'action-arrow',
        backgroundColor: '#ffffff',
        CTA: 'Build Your Starter Kit',
    },{
        cellType : 'top-title',
        title: 'Cuddle up with a Fall beverage',
        backgroundImage: '/editorial/home/recipes/recipes-example-1.jpg',
        backgroundColor: '#e5e2db',
        CTA: 'Recipe',
        iconStandard : 'action-arrow'
    },{
        cellType : 'banner',
        title: 'Beverages',
        fontColor: 'white',
        iconStandard : 'action-arrow',
        backgroundColor: colorNameToValue("dark-roast"),
    },{
        cellType : 'suggestions',
        title: '15% Off Beverages',
        secondaryTitle: 'with code SAVETODAY15 or 25% all recurring orders when you subscribe.',
        backgroundColor: '#c9c4c4',
        CTA: 'More',
        iconStandard : 'action-arrow',
    },{
        cellType : 'highlight-item',
        title: 'Item Z',
        backgroundImage: '/editorial/home/bev-clp-bg.jpg',
        backgroundColor: '#e5e2db',
        CTA: 'Click Me'
    }
    // Add more items
]