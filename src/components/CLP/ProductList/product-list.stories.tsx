import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ProductList from './ProductList';
import {convertPodLibraryToProductInfoCardProps} from './utils';
import {brands} from "../../../pages/myBrews";
import {podLibrary} from "../../../data/beverage-library";
import {NavDemo} from "../../NavMenu/NavigationV2/navigation.stories";
import {brewerLibrary} from "../../../data/brewer-library";
import {brewerFiltersSettings} from "../../../data/brewerFilters";
import {ProductListProps} from "./product-list.interfaces";

export default {
    title: 'CLP/ProductList',
    component: ProductList,
    argTypes: {
        presentationMode: {
            label: "Card Presentation Mode",
            control: "radio",
            options: [ 'traditional-card', 'flip-card'],
            defaultValue: 'flip-card'
        },
        cardMode: {
            label: "Card Mode",
            control: "radio",
            options: [ 'simple', 'ecom'],
            defaultValue: 'simple'
        },
        useFilters: {
            control: "boolean",
            defaultValue: false,
        },
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
        },
        useFlags: {
            label: "Use Card Flags",
            control: "boolean",
        },
        useBanner: {
            label: "Use Banner",
            control: "boolean",
        }


    },
} as Meta;

const Template: StoryFn<ProductListProps> = (args) => <ProductList {...args}  />;


export const Beverages = Template.bind({});
Beverages.args = {
    cardMode: "simple",
    useFlags: true,
    useFilters: false,
    products: convertPodLibraryToProductInfoCardProps(podLibrary),
    cardPresentationMode: "flip-card",
    stickyHeaderMode: "slim",
    pageType: 'beverages',
    columns: 3,
    pageSize: 9,
    columnsHugeScreen : 5,
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
            navItems : NavDemo
        }
    }
};

export const BeverageBundleExample = Template.bind({});
BeverageBundleExample.args = {
    stickyHeaderMode: "slim",
    pageType: 'beverages',
    cardMode: "simple",
    cardPresentationMode: "flip-card",
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
            navItems : NavDemo
        }
    }
}

export const SingleProductExample = Template.bind({});
SingleProductExample.args = {
    stickyHeaderMode: "slim",
    pageType: 'beverages',
    cardMode: "simple",
    cardPresentationMode: "flip-card",
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
            navItems : NavDemo
        }
    }
}




export const BrewerList = Template.bind({});
BrewerList.args = {
    pageType: 'brewer',
    useFlags: false,
    products: brewerLibrary,
    useFilters: true,
    filtersDefinition: brewerFiltersSettings,
    columns: 3,
    pageSize: 9,
    columnsHugeScreen : 4,
    columnsLargeScreen : 3,
    columnsMediumScreen : 2,
    columnsSmallScreen : 1,
    ratingVisible : false,
    cardMode: "simple",
    cardPresentationMode: "flip-card",
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
            navItems : NavDemo
        }
    }
}

export const InStockGuarantee = Template.bind({});
InStockGuarantee.args = {
    cardMode: "simple",
    useFilters: false,
    products: convertPodLibraryToProductInfoCardProps(podLibrary),
    useBanner: true,
    useFlags: true,
    useKSKtoggle: false,
    cardPresentationMode: "flip-card",
    stickyHeaderMode: "slim",
    pageType: 'beverages',
    columns: 3,
    pageSize: 9,
    columnsHugeScreen : 5,
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
            navItems : NavDemo
        }
    }
};
