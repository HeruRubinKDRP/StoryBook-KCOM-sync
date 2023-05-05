import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ProductList, { ProductListProps } from './ProductList';
import {convertPodLibraryToProductInfoCardProps} from './utils';
import {brands, podLibrary} from "../../../pages/myBrews";
import {iProductInfoCardProps} from "../SimpleCard/SimpleCard";
import {navDemo} from "../../NavMenu/NavigationV2/navigation.stories";

export default {
    title: 'CLP/ProductList',
    component: ProductList,
    argTypes: {
        products: {
            control: null,
        },
        ratingVisible : {
            control : "boolean"
        },
        columns: {
            control: {
                type: 'number',
                defaultValue: 3,
                min: 1,
                step: 1,
            },
        },
        promotionalContent: {
            control: {
                type: 'object',
            },
        },
        pageSize: {
            control: {
                type: 'number',
                defaultValue: 9,
                min: 1,
                step: 1,
            },
        },
        stickyHeaderMode: {
            control: "radio",
            options: ["slim", "full"],
            defaultValue: "slim",
        }
    },
} as Meta;

const Template: Story<ProductListProps> = (args) => <ProductList {...args} />;

const products = convertPodLibraryToProductInfoCardProps(podLibrary);

export const Default = Template.bind({});
Default.args = {
    stickyHeaderMode: "slim",
    products: products,
    columns: 3,
    pageSize: 9,
    columnsHugeScreen : 5,
    columnsLargeScreen : 4,
    columnsMediumScreen : 3,
    columnsSmallScreen : 1,
    ratingVisible : false,
    stickyHeader : {
        stickyHeaderMode : "slim",
        navigationRelated : {
            sizingMode : "liquid-design",
            loggedIn : false,
            emailErrorMessage : "Please enter a valid email address",
            emailSuccessMessage : "Thank you for subscribing!",
            emailExplanationText : "Sign up for our newsletter to receive updates on new products and promotions.",
            placeHolderText : "Enter your email address",
            defaultActiveHoverIndex : -1,
            submitButtonText : "Subscribe",
            isNobo : false,
            navItems : navDemo
        }
    }
};

export const BeverageBundleExample = Template.bind({});
BeverageBundleExample.args = {
    stickyHeaderMode: "slim",
    products: [
        {
            priceDescriptor: " ",
            productType: "bundle",
            ratingVisible: true,
            prices: [
                {
                    price: 54.36,
                    inStock: true,
                    variant: {quantity : 1, variantName : ""}
                }
            ],
            name: "Panera Bread® Best Sellers Bundle",
            brand: "Panera Bread®",
            image: "https://images.keurig.com/is/image/keurig/panera-best-sellers-bundle_5000346304_bundle?fmt=png-alpha&qlt=75,1&op_sharpen=0&resMode=bicub&op_usm=1,1,6,0&iccEmbed=0&printRes=72",
            rating: {
                "totalNumberOfStars": 5,
                "totalNumberOfReviews": 4.3,
                "ratingNumber": 1092
            },
            onClick: () => console.log('Add to Cart clicked'),
        },
        {
            priceDescriptor: " ",
            productType: "pod",
            ratingVisible: true,
            prices: [
                {
                    price: 54.36,
                    inStock: false,
                    variant: {quantity : 12, variantName : "ct"}
                }
            ],
            name: "Decaf Best Sellers Bagged Coffee Bundle",
            brand: brands.gmcr,
            image: "https://images.keurig.com/is/image/keurig/decaf-best-sellers-bagged-bundle_5000198873_bundle?fmt=png-alpha&qlt=75,1&op_sharpen=0&resMode=bicub&op_usm=1,1,6,0&iccEmbed=0&printRes=72",
            rating: {
                "totalNumberOfStars": 5,
                "totalNumberOfReviews": 4.3,
                "ratingNumber": 1092
            },
            onClick: () => console.log('Add to Cart clicked'),
        }

    ],
    columns: 3,
    pageSize: 9,
    columnsHugeScreen : 5,
    columnsLargeScreen : 4,
    columnsMediumScreen : 1,
    columnsSmallScreen : 1,
    ratingVisible : false,
    stickyHeader : {
        stickyHeaderMode : "slim",
        navigationRelated : {
            sizingMode : "liquid-design",
            loggedIn : false,
            emailErrorMessage : "Please enter a valid email address",
            emailSuccessMessage : "Thank you for subscribing!",
            emailExplanationText : "Sign up for our newsletter to receive updates on new products and promotions.",
            placeHolderText : "Enter your email address",
            defaultActiveHoverIndex : -1,
            submitButtonText : "Subscribe",
            isNobo : false,
            navItems : navDemo
        }
    }
}

export const SingleProductExample = Template.bind({});
SingleProductExample.args = {
    stickyHeaderMode: "slim",
    products: [
        {
            productType: "pod",
            ratingVisible: true,
            prices: [
                {
                    price: 10.49,
                    inStock: false,
                    variant: {quantity : 12, variantName : "ct"}
                },
                {
                    price: 16.99,
                    inStock: false,
                    variant: {quantity : 24, variantName : "ct"}
                },
                {
                    price: 49.99,
                    inStock: false,
                    variant: {quantity : 72, variantName : "ct"}
                },
                {
                    price: 53.96,
                    inStock: false,
                    variant: {quantity : 96, variantName : "ct"}
                }
            ],
            name: "Breakfast Blend Coffee",
            brand: "Green Mountain Coffee Roasters®",
            image: "https://images.keurig.com/is/image/keurig/Breakfast-Blend-Coffee-K-Cup-Green-Mountain_en_general?fmt=png-alpha",
            rating: {
                "totalNumberOfStars": 5,
                "totalNumberOfReviews": 4.3,
                "ratingNumber": 1092
            },
            onClick: () => console.log('Add to Cart clicked'),
        }

    ],
    columns: 3,
    pageSize: 9,
    columnsHugeScreen : 5,
    columnsLargeScreen : 4,
    columnsMediumScreen : 1,
    columnsSmallScreen : 1,
    ratingVisible : false,
    stickyHeader : {
        stickyHeaderMode : "slim",
        navigationRelated : {
            sizingMode : "liquid-design",
            loggedIn : false,
            emailErrorMessage : "Please enter a valid email address",
            emailSuccessMessage : "Thank you for subscribing!",
            emailExplanationText : "Sign up for our newsletter to receive updates on new products and promotions.",
            placeHolderText : "Enter your email address",
            defaultActiveHoverIndex : -1,
            submitButtonText : "Subscribe",
            isNobo : false,
            navItems : navDemo
        }
    }
}


export const brewerLibrary : iProductInfoCardProps[] =[
    {
        productType: 'brewer',
        image: "./brewer-images/KSPS.png",
        brand: "Keurig",
        name : "K-Supreme Plus® SMART Single Serve Coffee Maker",
        siloImagePath : "https://images.keurig.com/is/image/keurig/K-Supreme-Plus-SMART-Coffee-Maker_5000365542_swatch?$pdp_general$&fmt=png-alpha&qlt=75,1&op_sharpen=0&resMode=bicub&op_usm=1,1,6,0&iccEmbed=0&printRes=72&extend=0,0,0,0",
        productFeatures : [
            {
                label : "BrewID™",
                iconLink : "https://images.keurig.com/is/content/keurig/icon-BrewID"
            },
            {
                label : "Connected Convenience",
                iconLink : "https://images.keurig.com/is/content/keurig/icon-ConnectedConvenience"
            },
            {
                label : "Barista Mode™",
                iconLink : "https://images.keurig.com/is/content/keurig/icon-BaristaMode"
            },
            {
                label : "SMART Delivery",
                iconLink : "https://images.keurig.com/is/content/keurig/icon-SmartAutoDelivery"
            },
            {
                label : "Complete Customization",
                iconLink : "https://images.keurig.com/is/content/keurig/K-Iced_Icons_PDP-02_Strong"
            },
            {
                label : "MultiStream™ Technology",
                iconLink : "https://images.keurig.com/is/content/keurig/icon-MultiStream"
            },
            {
                label : "4 Brew Sizes",
                iconLink : "https://images.keurig.com/is/content/keurig/K-Iced_Icons_PDP-05_Sizes2"
            },
            {
                label : "66oz Dual-Position Reservoir",
                iconLink : "https://images.keurig.com/is/content/keurig/K-Iced_Icons_PDP-03_Reservoir"
            },
            {
                label : "Brew Over Ice",
                iconLink : "https://images.keurig.com/is/content/keurig/K-Iced_Icons_PDP-01_Iced"
            }
        ],
        prices : [
            {
                price : 89.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 89.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },
    {
        productType: 'brewer',
        image: "./brewer-images/k-cafe.png",
        brand: "Keurig",
        name : "K-Café® SMART Single Serve Coffee Maker",
        prices : [
            {
                price : 124.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 124.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },{
        productType: 'brewer',
        image: "./brewer-images/k-supreme.png",
        brand: "Keurig",
        name : "K-Supreme® SMART Single Serve Coffee Maker",
        prices : [
            {
                price : 74.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 74.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },{
        productType: 'brewer',
        image: "./brewer-images/k-slim1.png",
        brand: "Keurig",
        name : "K-Slim® Single Serve Coffee Maker",
        prices : [
            {
                price : 74.99,
                inStock : true,
                variant: {quantity : 12, variantName : "Black"}
            },{
                price : 74.99,
                inStock : true,
                variant: {quantity : 12, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },{
        productType: 'brewer',
        image: "./brewer-images/k-elite.png",
        brand: "Keurig",
        name : "Keurig® K-Elite® Single Serve Coffee Maker",
        prices : [
            {
                price : 74.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 74.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },{
        productType: 'brewer',
        image: "./brewer-images/k-mini.png",
        brand: "Keurig",
        name : "K-Mini® Single Serve Coffee Maker",
        prices : [
            {
                price : 89.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 0,
                inStock : true,
                variant: {quantity : 1, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },{
        productType: 'brewer',
        image: "./brewer-images/k-select.png",
        brand: "Keurig",
        name : "Keurig® K-Select® Coffee Maker",
        prices : [
            {
                price : 74.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 74.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },{
        productType: 'brewer',
        image: "./brewer-images/k-mini-plus.png",
        brand: "Keurig",
        name : "K-Mini Plus® Single Serve Coffee Maker",
        prices : [
            {
                price : 74.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 0,
                inStock : true,
                variant: {quantity : 1, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },{
        productType: 'brewer',
        image: "./brewer-images/k-duo.png",
        brand: "Keurig",
        name : "K-Duo™ Single Serve & Carafe Coffee Maker",
        prices : [
            {
                price : 94.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 94.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },{
        productType: 'brewer',
        image: "./brewer-images/k-duo-special.png",
        brand: "Keurig",
        name : "K-Duo® Special Edition Single Serve & Carafe Coffee Maker",
        prices : [
            {
                price : 49.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 49.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },{
        productType: 'brewer',
        image: "./brewer-images/k-classic.png",
        brand: "Keurig",
        name : "Keurig® K-Classic® Coffee Maker",
        prices : [
            {
                price : 74.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 74.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },{
        productType: 'brewer',
        image: "./brewer-images/k-duo-plus.png",
        brand: "Keurig",
        name : "K-Duo Plus™ Single Serve & Carafe Coffee Maker",
        prices : [
            {
                price : 149.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 149.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },{
        productType: 'brewer',
        image: "./brewer-images/k-slim-iced.png",
        brand: "Keurig",
        name : "K-Slim + ICED™ Single Serve Coffee Maker",
        prices : [
            {
                price : 49.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 49.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    },{
        productType: 'brewer',
        image: "./brewer-images/k-express.png",
        brand: "Keurig",
        name : "K-Express™ Single Serve Coffee Maker",
        prices : [
            {
                price : 49.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Black"}
            },{
                price : 49.99,
                inStock : true,
                variant: {quantity : 1, variantName : "Grey"}
            }
        ],
        ratingVisible : false,
        rating : {
            totalNumberOfStars : 5,
            totalNumberOfReviews : 1023,
            ratingNumber : 4.25
        },
        onClick: () => console.log('Add to Cart clicked'),
    }
]

export const BrewerList = Template.bind({});
BrewerList.args = {
    products: brewerLibrary,
    columns: 3,
    pageSize: 9,
    columnsHugeScreen : 4,
    columnsLargeScreen : 3,
    columnsMediumScreen : 2,
    columnsSmallScreen : 1,
    ratingVisible : false,
    stickyHeader : {
        stickyHeaderMode : "slim",
        navigationRelated : {
            sizingMode : "liquid-design",
            loggedIn : false,
            emailErrorMessage : "Please enter a valid email address",
            emailSuccessMessage : "Thank you for subscribing!",
            emailExplanationText : "Sign up for our newsletter to receive updates on new products and promotions.",
            placeHolderText : "Enter your email address",
            defaultActiveHoverIndex : -1,
            submitButtonText : "Subscribe",
            isNobo : false,
            navItems : navDemo
        }
    }
}
