import {filterDataItemT, iProductInfoCardProps, purchaseInfo} from "../components/CLP/SimpleCard/SimpleCard";
import {brands, currencies, podItemT, productTypeT} from "../pages/myBrews";

export const podLibrary : podItemT[] = [
    {
        podId : 0,
        productType : "pod",
        pricePerPod : 0.76,
        subscribed : {
            SMART:{
                activeSub : true,
                podInventory : 0,
                variant : 24
            },
            scheduled :{
                activeSub : false,
                variant : 24,
                locations : []
            },
            previouslySubbed : true
        },
        inventory : 4,
        podName : "Breakfast Blend Coffee",
        brand : brands.gmcr,
        productPrices : [10.49, 16.99, 49.99, 53.96],
        boxSizes : [12, 24, 72, 96],

        variant : [
            {
                boxCount : 12,
                basePrice :9.49,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 24,
                basePrice : 15.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 72,
                basePrice : 43.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 96,
                basePrice : 53.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            }
        ],
        boxImagePath : "https://images.keurig.com/is/image/keurig/ALT_1_GMCR_BreakfastBlend_Pilot_24ct_Carton_Left_Pods?id=XvFRd0&wid=334&hei=334&fmt=png-alpha",
        productImagePrimaryPath : "https://images.keurig.com/is/image/keurig/Breakfast-Blend-Coffee-K-Cup-Green-Mountain_en_general?fmt=png-alpha"
    },
    {
        podId : 1,
        productType : "pod",
        pricePerPod : 0.73,
        podName : "Dark Magic® Coffee",
        brand : brands.gmcr,
        productPrices : [10.49, 16.99, 47.99, 71.96],
        boxSizes : [12, 24, 72, 96],
        subscribed : {
            SMART:{
                activeSub : true,
                podInventory : 0,
                variant : 24
            },
            scheduled :{
                activeSub : false,
                variant : 24,
                locations : []
            },
            previouslySubbed : true
        },
        inventory : 12,
        variant : [
            {
                boxCount : 12,
                basePrice :9.49,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 24,
                basePrice : 15.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 72,
                basePrice : 43.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 96,
                basePrice : 53.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            }
        ],
        boxImagePath : "https://images.keurig.com/is/image/keurig/dark-magic-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
        productImagePrimaryPath : "https://images.keurig.com/is/image/keurig/dark-magic-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha"
    },
    {
        podId : 2,
        productType : "pod",
        podName : "Nantucket Blend® Coffee",
        productPrices : [10.49, 17.99, 49.99, 53.96],
        boxSizes : [12, 24, 72, 96],
        pricePerPod : 0.65,
        subscribed : {
            SMART:{
                activeSub : false,
                podInventory : 0,
                variant : 24
            },
            scheduled :{
                activeSub : true,
                variant : 24,
                locations : ["Home"]
            },
            previouslySubbed : true
        },
        inventory : 0,
        brand : brands.gmcr,
        variant : [
            {
                boxCount : 12,
                basePrice :9.49,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 24,
                basePrice : 15.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 72,
                basePrice : 43.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 96,
                basePrice : 53.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            }
        ],
        boxImagePath : "https://images.keurig.com/is/image/keurig/nantucket-blend-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
        productImagePrimaryPath : "https://images.keurig.com/is/image/keurig/nantucket-blend-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha"
    },
    {
        podId : 3,
        productType : "pod",
        podName : "Caramel Vanilla Cream Coffee",
        productPrices : [10.49, 16.99, 53.97, 71.96],
        boxSizes : [12, 24, 72, 96],
        pricePerPod : 0.65,
        subscribed : {
            SMART:{
                activeSub : false,
                podInventory : 0,
                variant : 24
            },
            scheduled :{
                activeSub : false,
                variant : 24,
                locations : []
            },
            previouslySubbed : true
        },
        inventory : 0,
        brand : brands.gmcr,
        variant : [
            {
                boxCount : 12,
                basePrice :9.49,
                currency : currencies.USD,
                discountAsNumber: 25,
                inStock : true
            },
            {
                boxCount : 24,
                basePrice : 15.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 72,
                basePrice : 43.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 96,
                basePrice : 53.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            }
        ],
        boxImagePath : "https://images.keurig.com/is/image/keurig/Caramel-Vanilla-Cream-Coffee-K-Cup-Green-Mountain_en_general?fmt=png-alpha",
        productImagePrimaryPath : "https://images.keurig.com/is/image/keurig/Caramel-Vanilla-Cream-Coffee-K-Cup-Green-Mountain_en_general?fmt=png-alpha"
    },
    {
        podId : 4,
        productType : "pod",
        podName : "Original Blend Coffee",
        productPrices : [19.49, 38.98, 58.47, 67.86],
        boxSizes : [22, 44, 66, 88],
        pricePerPod : 0.74,
        subscribed : {
            SMART:{
                activeSub : false,
                podInventory : 0,
                variant : 24
            },
            scheduled :{
                activeSub : false,
                variant : 24,
                locations : []
            },
            previouslySubbed : true
        },
        inventory : 0,
        brand : brands.dunkin,
        variant : [
            {
                boxCount : 12,
                basePrice :9.49,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 24,
                basePrice : 15.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 72,
                basePrice : 43.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 96,
                basePrice : 53.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            }
        ],
        boxImagePath : "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
        productImagePrimaryPath : "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha"
    },
    {
        podId : 5,
        productType : "pod",
        podName : "The Original Donut Shop® Coffee",
        productPrices : [10.49, 17.49, 49.99, 53.96],
        boxSizes : [12, 24, 72, 96],
        pricePerPod : 0.67,
        subscribed : {
            SMART:{
                activeSub : false,
                podInventory : 0,
                variant : 24
            },
            scheduled :{
                activeSub : true,
                variant : 24,
                locations : ["John's Office", "Home"]
            },
            previouslySubbed : false
        },
        inventory : 0,
        brand : brands.donutShop,
        variant : [
            {
                boxCount : 12,
                basePrice :9.49,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 24,
                basePrice : 15.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 72,
                basePrice : 43.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 96,
                basePrice : 53.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            }
        ],
        boxImagePath : "https://images.keurig.com/is/image/keurig/Original-Donut-Shop-Extra-Bold-Coffee-K-Cup-CP_en_general?fmt=png-alpha",
        productImagePrimaryPath : "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha"
    },
    {
        podId : 6,
        productType : "pod",
        podName : "Pike Place® Roast Coffee",
        productPrices : [9.99, 19.99, 29.99, 39.99],
        boxSizes : [12, 24, 72, 96],
        pricePerPod : 0.92,
        subscribed : {
            SMART:{
                activeSub : true,
                podInventory : 0,
                variant : 24
            },
            scheduled :{
                activeSub : false,
                variant : 24,
                locations : []
            },
            previouslySubbed : false
        },
        inventory : 64,
        brand : brands.starBucks,
        variant : [
            {
                boxCount : 22,
                basePrice : 15.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 66,
                basePrice : 53.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 88,
                basePrice : 53.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            }
        ],
        boxImagePath : "https://images.keurig.com/is/image/keurig/Pike-Place-Roast-Coffee-Starbucks_en_general?fmt=png-alpha",
        productImagePrimaryPath : "https://images.keurig.com/is/image/keurig/Pike-Place-Roast-Coffee-Starbucks_en_general?fmt=png-alpha"
    },
    {
        podId : 7,
        productType : "pod",
        podName : "Sumatra Coffee",
        productPrices : [9.99, 19.99, 29.99, 39.99],
        boxSizes : [12, 24, 72, 96],
        pricePerPod : 0.89,
        subscribed : {
            SMART:{
                activeSub : false,
                podInventory : 0,
                variant : 24
            },
            scheduled :{
                activeSub : false,
                variant : 24,
                locations : []
            },
            previouslySubbed : false
        },
        inventory : 0,
        brand : brands.starBucks,
        variant : [
            {
                boxCount : 22,
                basePrice : 15.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 66,
                basePrice : 53.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : false
            },
            {
                boxCount : 88,
                basePrice : 53.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 88,
                basePrice : 53.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            }
        ],
        boxImagePath : "https://images.keurig.com/is/image/keurig/sumatra-coffee-starbucks-k-cup_en_general?fmt=png-alpha",
        productImagePrimaryPath : "https://images.keurig.com/is/image/keurig/sumatra-coffee-starbucks-k-cup_en_general?fmt=png-alpha"
    },
    {
        podId : 8,
        productType : "pod",
        podName : "Half-Caff Coffee",
        productPrices : [9.99, 19.99, 29.99, 39.99],
        boxSizes : [12, 24, 72, 96],
        pricePerPod : 0.87,
        subscribed : {
            SMART:{
                activeSub : false,
                podInventory : 0,
                variant : 24
            },
            scheduled :{
                activeSub : false,
                variant : 24,
                locations : []
            },
            previouslySubbed : false
        },
        inventory : 0,
        brand : brands.gmcr,
        variant : [
            {
                boxCount : 12,
                basePrice :9.49,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true,

            },
            {
                boxCount : 24,
                basePrice : 15.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 72,
                basePrice : 43.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 96,
                basePrice : 53.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            }
        ],
        boxImagePath : "https://images.keurig.com/is/image/keurig/half-caff-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
        productImagePrimaryPath : "https://images.keurig.com/is/image/keurig/half-caff-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha"
    },
    {
        podId : 9,
        productType : "pod",
        pricePerPod : 0.78,
        podName : "Major Dickason's Blend® Coffee",
        productPrices : [9.99, 19.99, 29.99, 39.99],
        boxSizes : [12, 24, 72, 96],
        subscribed : {
            SMART:{
                activeSub : false,
                podInventory : 0,
                variant : 24
            },
            scheduled :{
                activeSub : false,
                variant : 24,
                locations : []
            },
            previouslySubbed : false
        },
        inventory : 0,
        brand : brands.peets,
        variant : [
            {
                boxCount : 22,
                basePrice :17.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : false
            },
            {
                boxCount : 40,
                basePrice : 31.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 66,
                basePrice : 52.39,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 88,
                basePrice : 64.56,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            }
        ],
        boxImagePath : "https://images.keurig.com/is/image/keurig/Major-Dickasons-Blend-Coffee-Peets-K-Cup_en_general?fmt=png-alpha",
        productImagePrimaryPath : "https://images.keurig.com/is/image/keurig/Major-Dickasons-Blend-Coffee-Peets-K-Cup_en_general?fmt=png-alpha"
    },
    {
        podId : 10,
        productType : "pod",
        pricePerPod : 0.86,
        podName : "French Roast Coffee",
        productPrices : [9.99, 19.99, 29.99, 39.99],
        boxSizes : [12, 24, 72, 96],
        subscribed : {
            SMART:{
                activeSub : false,
                podInventory : 0,
                variant : 24
            },
            scheduled :{
                activeSub : false,
                variant : 24,
                locations : []
            },
            previouslySubbed : false
        },
        inventory : 0,
        brand : brands.starBucks,
        variant : [
            {
                boxCount : 22,
                basePrice :17.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : false
            },
            {
                boxCount : 40,
                basePrice : 31.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 66,
                basePrice : 52.39,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 88,
                basePrice : 64.56,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            }
        ],
        boxImagePath : "https://images.keurig.com/is/image/keurig/French-Roast-Coffee-Starbucks_en_general?fmt=png-alpha",
        productImagePrimaryPath : "https://images.keurig.com/is/image/keurig/French-Roast-Coffee-Starbucks_en_general?fmt=png-alpha"
    },
    {
        podId : 11,
        productType : "pod",
        pricePerPod : 0.67,
        podName : "Breakfast Blend Decaf Coffee",
        productPrices : [9.99, 19.99, 29.99, 39.99],
        boxSizes : [12, 24, 72, 96],
        subscribed : {
            SMART:{
                activeSub : false,
                podInventory : 0,
                variant : 24
            },
            scheduled :{
                activeSub : false,
                variant : 24,
                locations : []
            },
            previouslySubbed : false
        },
        inventory : 0,
        brand : brands.gmcr,
        variant : [
            {
                boxCount : 22,
                basePrice :17.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : false
            },
            {
                boxCount : 40,
                basePrice : 31.99,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 66,
                basePrice : 52.39,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            },
            {
                boxCount : 88,
                basePrice : 64.56,
                discountAsNumber: 25,
                currency : currencies.USD,
                inStock : true
            }
        ],
        boxImagePath : "https://images.keurig.com/is/image/keurig/Breakfast-Blend-Decaf-Coffee-K-Cup-Green-Mountain_en_general?fmt=png-alpha",
        productImagePrimaryPath : "https://images.keurig.com/is/image/keurig/Breakfast-Blend-Decaf-Coffee-K-Cup-Green-Mountain_en_general?fmt=png-alpha"
    },


]