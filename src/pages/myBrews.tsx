import classNames from "classnames";
import React, {ReactElement, useCallback, useEffect, useState} from "react";
import GridPanel from "../components/GridPanel/GridPanel";
import {AddProductMenu, mobilePositionType} from "../components/add-products/addProducts";
import {MyBrewsSubs} from "../components/myBrewsSubs/myBrewsSubs";

//*** AVAILABLE Brands
export const brands =
  {
    gmcr: "Green Mountain Coffee Roasters®",
    dunkin: "Dunkin' Donuts®",
    donutShop: "The Original Donut Shop®",
    starBucks: "Starbucks®",
    peets : "Peet's Coffee®"
  }

  export type brandsType = {
    gmcr: string,
    dunkin: string,
    donutShop: string,
    starBucks: string,
    peets : string
  }

export type subType = "scheduled" | "SMART" | "one-time";


// *** Money related
export type currencyType = "$"

export type currenciesType = {
  USD: currencyType,
  CAD : currencyType
}

export const currencies :currenciesType = {
  USD: "$",
  CAD : "$"
}

// ******Money end
/// ---------------------------------------------------------
// **** POD related types
export type podCount = 12 | 22 | 24 | 40 | 66 | 72 | 88 | 96;

export type podVariant = {
  boxCount : podCount,
  basePrice : number,
  discountAsNumber : number,
  currency : currencyType,
  inStock : boolean
}

export type podItemT = {
  podName : string;
  podId : number;
  brand : string;
  pricePerPod : number;
  variant : podVariant[],
  productImagePrimaryPath : string,
  boxImagePath : string;
  additionalImages? : string[]
  inventory : number;
  subscribed : {
    SMART:{
      activeSub : boolean;
      podInventory : number;
      variant : podCount
    },
    scheduled :{
      activeSub : boolean;
      variant : podCount;
      locations : string[]
    },
    previouslySubbed : boolean
  }
}


// **** Destination

// export type myDestinationType = {
//
// }

export type MyLocationsType = {
  locationName : string;
  locationAddress :{
    addressLineOne : string,
    city : string,
    state: string,
    zip : string
  };
}

export type MyDestinationsType = {
  scheduled : MyLocationsType[],
  SMART : MyLocationsType[]
}

export let MyDestinations : MyDestinationsType  = {
  scheduled :[
    {
      locationName : "John's Office",
      locationAddress : {
        addressLineOne : "142 Eastern Ave",
        city : "Malden",
        state : "MA",
        zip : "01234"
      }
    },
    {
      locationName : "Home",
      locationAddress : {
        addressLineOne : "1234 Milus street",
        city : "Beverly",
        state : "MA",
        zip : "01821"
      }
    },
    {
      locationName : "Lake house",
      locationAddress : {
        addressLineOne : "32 Caribou Way",
        city : "Fon Du Lac",
        state : "ME",
        zip : "10201"
      }
    }
  ],
  SMART : [
    {
      locationName : "Keurig K-Supreme SMART Plus",
      locationAddress : {
        addressLineOne : "1234 Milus street",
        city : "Beverly",
        state : "MA",
        zip : "01821"
      }
    }
  ]
}

// ****** pod related ****

export const filtersList = [
  "Medium Roast",
  "Light Roast",
  "Dark Roast",
  "Flavored Roast",
  "Specialty, Tea & Cocoa",
  "Decaf"
]

export const podLibrary : podItemT[] = [
  {
    podId : 0,
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
    pricePerPod : 0.73,
    podName : "Dark Magic® Coffee",
    brand : brands.gmcr,
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
    podName : "Nantucket Blend® Coffee",
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
    podName : "Caramel Vanilla Cream Coffee",
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
    podName : "Original Blend Coffee",
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
    podName : "The Original Donut Shop® Coffee",
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
    podName : "Pike Place® Roast Coffee",
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
    podName : "Sumatra Coffee",
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
    podName : "Half-Caff Coffee",
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
    pricePerPod : 0.78,
    podName : "Major Dickason's Blend® Coffee",
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
    pricePerPod : 0.86,
    podName : "French Roast Coffee",
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
    pricePerPod : 0.67,
    podName : "Breakfast Blend Decaf Coffee",
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

export type subscriptionLibType = {
  SMART: podItemT[],
  scheduled : podItemT[],
  youAlsoBrewed : podItemT[]
}



export default function MyBrews(){
return(<></>)


}

