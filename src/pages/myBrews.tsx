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

export type productTypeT = "brewer" | "pod" | "bagged" | "accessory" | "bundle";

export type podItemT = {
  productType? : productTypeT,
  podName : string;
  podId? : number;
  brand : string;
  pricePerPod? : number;
  variant? : podVariant[],
  productImagePrimaryPath? : string,
  boxImagePath? : string;
  additionalImages? : string[]
  inventory? : number;
  productPrices? : number[];
  boxSizes? : number[];
  subscribed? : {
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



export type subscriptionLibType = {
  SMART: podItemT[],
  scheduled : podItemT[],
  youAlsoBrewed : podItemT[]
}



export default function MyBrews(){
return(<></>)


}


