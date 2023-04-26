import React from "react";
import {Story, Meta} from "@storybook/react/types-6-0";
import {iMyPantryCard, MyPantryCard} from "./MyPantryCard";

export default {
    title: "WIP /MyPantry CardFlip Style",
    component: MyPantryCard,
    argTypes: {
        status: {
            control: "select",
            options: ["SMART-active", "AD-active", "one-time", "cancel", "grid", "add-item-smart", "add-item-ad", "recently-purchased"],
        },
        productImage: {control: "text"},
        countLeft: {control: "text"},
        shipDate: {control: "text"},
        brandName: {control: "text"},
        productName: {control: "text"},
    },
} as Meta;

const Template: Story<iMyPantryCard> = (args) => <MyPantryCard {...args} />;

export const GridExample = Template.bind({});
GridExample.args = {
    status: "grid",
    productImage:
        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
    graphicIconSmartAD: "SMART-logo",
    graphicIconAdDelivery: "icon-AD-Delivery",
    countLeft: "12",
    graphicIconDeliveryTruck: "delivery-truck",
    graphicIconDeliveryTruckNoLogo:"icon-shipping-truck-no-logo",
    shipDate: "May2, 2023",
    brandName: "Dunkin' Donuts®",
    productName: "Original Blend Coffee",
    FunctionList: [],
    KButtonListViewDetails: [
        {
            label: "View Details",
            buttonType: "secondary",
            iconPlacement: "right-edge",
            iconStandard: "icon-settings",
            buttonWidth: "fit-width",
            transitionType: "expand-bg"
        },],
};

export const SmartActiveCardExample = Template.bind({});
SmartActiveCardExample.args = {
    status: "SMART-active",
    productImage:
        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
    graphicIconSmartAD: "SMART-logo",
    graphicIconPodFilled: "icon-pod-filled",
    countLeft: "12",
    graphicIconDeliveryTruck: "delivery-truck",
    graphicIconDeliveryTruckNoLogo:"icon-shipping-truck-no-logo",
    shipDate: "May2, 2023",
    brandName: "Dunkin' Donuts®",
    productName: "Original Blend Coffee",
    FunctionList: [],
    KButtonListSmartActive: [
        {
            label: "Dunkin' Donuts®",
            secondaryLabel: "Original Blend Coffee",
            buttonType: "ecommerce-secondary-2-lines",
            iconPlacement: "after-label",
            iconStandard: "chevron-right",
            buttonWidth: "fit-width",
            transitionType: "none"
        },],
    graphicChevronRight:"chevron-right",
};

export const ADActiveCardExample = Template.bind({});
ADActiveCardExample.args = {
    status: "AD-active",
    productImage:
        "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
    graphicIconSmartAD: "SMART-logo",
    graphicIconDeliveryTruck: "delivery-truck",
    graphicIconPodFilled: "icon-pod-filled",
    graphicIconBoxes: "icon-boxes",
    graphicIconDeliveryTruckNoLogo:"icon-shipping-truck-no-logo",
    countBox: "1",
    shipDate: "every 4 weeks",
    brandName: "Dunkin' Donuts®",
    productName: "Original Blend Coffee",
    graphicChevronRight:"chevron-right",
    FunctionList: [],
    KButtonListAdActive: [
        {
            label: "Dunkin' Donuts®",
            secondaryLabel: "Original Blend Coffee",
            buttonType: "ecommerce-secondary-2-lines",
            iconPlacement: "after-label",
            iconStandard: "chevron-right",
            buttonWidth: "fit-width",
            transitionType: "none"
        },],
};

export const RecentlyPurchaseCardExample = Template.bind({});
RecentlyPurchaseCardExample.args = {
    status: "recently-purchased",
    productImage:
        "https://images.keurig.com/is/image/keurig/Medium-Roast-Coffee-K-Cup-Illy_en_general?fmt=png-alpha",
    brandName: "illy®",
    productName: "Classico Coffee 20-Count (2 boxes of 10)",
    FunctionList: [],
    boxFormat: "K-Cup® Box 20 ct.",
    salePriceItem: "",
    strikePriceItem: "",
    priceItem: "$25.98",
    KButtonListRecentlyPurchase: [
        {
            label: "Buy Again",
            buttonType: "ecommerce-secondary",
            iconPlacement: "after-label",
            iconStandard: "plus-icon",
            buttonWidth: "fit-width",
            transitionType: "expand-bg"
        },
        {
            label: "Add to Auto-Delivery",
            buttonType: "ecommerce-secondary",
            iconPlacement: "after-label",
            iconStandard: "plus-icon",
            buttonWidth: "fit-width",
            transitionType: "expand-bg"
        },],
};

export const SmartAddAnItemCardExample = Template.bind({});
SmartAddAnItemCardExample.args = {
    FunctionList: [],
    status: "add-item-smart",
    KButtonListReactivate: [
        {
            label: "Add an Item",
            buttonType: "primary",
            iconPlacement: "right-edge",
            iconStandard: "plus-icon",
            buttonWidth: "fit-width",
            transitionType: "expand-bg"
        },],
    graphicIconSmartAD: "SMART-logo",
};

export const OneTimeCardExample = Template.bind({});
OneTimeCardExample.args = {
    FunctionList: [],
    status: "one-time",
    KButtonListRemove: [
        {
            label: "Remove",
            buttonType: "ecommerce-secondary",
            iconPlacement: "right-edge",
            iconStandard: "remove-icon",
            buttonWidth: "fit-width",
            transitionType: "expand-bg"
        },],
    productImage:
        "https://images.keurig.com/is/image/keurig/descaling-solution_5000367641?fmt=png-alpha",
    brandName: "Keurig®",
    productName: "Descaling Solution",
    onetimeNumber: "1",
    countLeft: "12",
    shipDate: "May2, 2023",
    graphicIconDeliveryTruckNoLogo: "icon-shipping-truck-no-logo",
};

export const CancelCardExample = Template.bind({});
CancelCardExample.args = {
    status: "cancel",
    FunctionList: [],
    KButtonListReactivate: [
        {
            label: "Reactivate",
            buttonType: "ecommerce-secondary",
            iconPlacement: "right-edge",
            iconStandard: "plus-icon",
            buttonWidth: "fit-width",
            transitionType: "expand-bg"
        },],
    productImage:
        "https://images.keurig.com/is/image/keurig/nantucket-blend-coffee-green-mountain-coffee-k-cup_en_general?fmt=png-alpha",
    brandName: "Green Mountain Coffee",
    productName: "Nantucket Blend® Coffee",
    graphicIconProductCanceledOoo: "icon-product-canceled-OOO",
    graphicIconDeliveryTruckNoLogo:"icon-shipping-truck-no-logo",
};

export const AddAnItemCardADExample = Template.bind({});
AddAnItemCardADExample.args = {
    FunctionList: [],
    status: "add-item-ad",
    KButtonListReactivate: [
        {
            label: "Add an Item",
            buttonType: "primary",
            iconPlacement: "right-edge",
            iconStandard: "plus-icon",
            buttonWidth: "fit-width",
            transitionType: "expand-bg"
        },],
    graphicIconAdDelivery: "icon-AD-Delivery",
};
