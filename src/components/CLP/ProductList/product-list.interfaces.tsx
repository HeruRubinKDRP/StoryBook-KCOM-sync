import {iProductInfoCardProps, tCardMode, tPresentationMode} from "../product-card.interfaces";
import React from "react";
import {iStickyHeader} from "../../Sticky Header/StickyHeader";
import {iCategoryItem} from "../../Filters/FiltersCenter/FiltersCenter";

export interface ProductListProps {
    cardPresentationMode: tPresentationMode;
    cardMode: tCardMode;
    isMember: boolean;
    products: iProductInfoCardProps[];
    ratingVisible: boolean;
    columns?: number;
    promotionalContent?: React.ReactNode;
    pageSize?: number;
    columnsHugeScreen: number;
    columnsLargeScreen: number;
    columnsMediumScreen: number;
    columnsSmallScreen: number;
    stickyHeader: iStickyHeader;
    stickyHeaderMode: "slim" | "full";
    useFilters: boolean;
    filters: JSX.Element;
    pageType: 'beverages' | 'brewer';
    filtersFunction: ()=>void;
    filtersDefinition: iCategoryItem[];
    useFlags?: boolean;
    useBanner?: boolean;
    useKSKtoggle?: boolean;
}


export interface iFiltersWrapper {
    type: string,
    isVisible: boolean,
    filtersFunction : (index: number, sectionIndex : number) => void;
    filtersDefinition : iCategoryItem[];
}

export type searchObject = {searchType : "filter" | "free-text" }