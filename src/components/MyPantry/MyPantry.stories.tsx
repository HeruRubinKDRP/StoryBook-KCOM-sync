import React from 'react';
import {Meta, Story} from '@storybook/react';
import {MyPantry, iMyPantry} from './MyPantry';
import {iShippingAddress} from "./SeparateComponents/ShippingAddress";
import {iPaymentInformation} from "./SeparateComponents/PaymentInformation";
import KButton from "../Kbutton/KButton";

export default {
    title: "WIP /MyPantry PopUp Content Stories",
    component: MyPantry,
    argTypes: {
          PopUp: {
              control: {
                  disable: true
              }
              },
        renderMyPantryNav: {control: "boolean"},
        renderBottomPanel: {control: "boolean"},
        ProductInfo: {control: "text"},
        ShippingAddress: {control: "text"},
        PaymentInformation: {control: "text"},
        PaymentCardNumber: {control: "text"},
        PaymentExpirationDate: {control: "text"},
        windowTitle: {control: "text"},
        Size: {control: "text"},
        Quantity: {control: "text"},
        Frequency: {control: "text"},
        ProcessDate: {control: "text"},
        modalIsOpen: {control:"boolean"}
    },
} as Meta;


const Template: Story<iMyPantry> = (args) => (
    <>
        <MyPantry {...args} />
    </>
);

export const Addresses: iShippingAddress[] = [
    {
        ShippingNameField: "Name01",
        ShippingAddressField: "54 South Ave, Burlington, MA 01803, United States"
    },
    {
        ShippingNameField: "Name02",
        ShippingAddressField: "55 South Ave, Burlington, MA 01803, United States"
    },
    {
        ShippingNameField: "Name03",
        ShippingAddressField: "56 South Ave, Burlington, MA 01803, United States"
    },
    {
        ShippingNameField: "Name04",
        ShippingAddressField: "57 South Ave, Burlington, MA 01803, United States"
    }
    ,
    {
        ShippingNameField: "Name05",
        ShippingAddressField: "58 South Ave, Burlington, MA 01803, United States"
    },
    {
        ShippingNameField: "Name06",
        ShippingAddressField: "58 South Ave, Burlington, MA 01803, United States"
    }
]

export const PaymentMethod: iPaymentInformation[] = [
    {
        PaymentIcon : 'https://www.keurig.com/_ui/desktop/common/img/modules/checkout/visa-icon.png',
        PaymentCardNumber : "************2345",
        PaymentExpirationDate : "07/07",
        PaymentNameField : 'Name01',
        PaymentAddressField : '53 South Ave, Burlington, MA 01803, United States',
    },
    {
        PaymentIcon : 'https://www.keurig.com/_ui/desktop/common/img/modules/checkout/visa-icon.png',
        PaymentCardNumber : "************2345",
        PaymentExpirationDate : "07/07",
        PaymentNameField : 'Name02',
        PaymentAddressField : '54 South Ave, Burlington, MA 01803, United States',
    },
    {
        PaymentIcon : 'https://www.keurig.com/_ui/desktop/common/img/modules/checkout/visa-icon.png',
        PaymentCardNumber : "************2345",
        PaymentExpirationDate : "07/07",
        PaymentNameField : 'Name03',
        PaymentAddressField : '53 South Ave, Burlington, MA 01803, United States',
    },
    {
        PaymentIcon : 'https://www.keurig.com/_ui/desktop/common/img/modules/checkout/visa-icon.png',
        PaymentCardNumber : "************2345",
        PaymentExpirationDate : "07/07",
        PaymentNameField : 'Name04',
        PaymentAddressField : '53 South Ave, Burlington, MA 01803, United States',
    }
]


export const Default = Template.bind({});
Default.args = {
    AddressesBook: Addresses,
    PaymentBook: PaymentMethod,
    modalIsOpen:true,
    PopUp: {
        isOpen: true,
        hasHeader: true,
        hasVeil: true,
        hasBackButton: true,
        windowTitle: 'MyPantry',
    },
    ProductInfo: {
        productImage: 'https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha',
        brandName: "Dunkin' Donuts®",
        productName: 'Original Blend Coffee',
        productCountSize: "K-Cup® Box 22 ct.",
        productQuantity: "Qty: 1",
        productSalePrice: "$14.99",
        productPrice: "$19.99",
    },
    EditAdItemInfo: {
        Size: "K-Cup® Box 22 ct.",
        Quantity: "1",
        Frequency: "Every 4 weeks",
        ProcessDate: "May2, 2023"
    },
    EditAdOrderInfo:{
        DeliveryName : "Delivery Name",
        Frequency : "Every 4 weeks",
        ProcessDate : "May2, 2023"
    },

    ShippingAddress: {
        header: 'Shipping Information',
        ShippingNameField: 'Name',
        ShippingAddressField: '53 South Ave, Burlington, MA 01803, United States',
    },
    KButtonEditThisShipping: [
        {
            label: "Change",
            buttonType: "secondary",
            iconPlacement: "no-icon",
            /*  iconStandard:"",*/
            buttonWidth: "fit-width",
            transitionType: "expand-bg"
        },
    ],
    PaymentInformation: {
        header: 'Payment Information',
        PaymentIcon: 'https://www.keurig.com/_ui/desktop/common/img/modules/checkout/visa-icon.png',
        PaymentCardNumber: "************2345",
        PaymentExpirationDate: '07/07',
        PaymentNameField: 'Name',
        PaymentAddressField: '53 South Ave, Burlington, MA 01803, United States',
    },
    KButtonEditThisPayment: [
        {
            label: "Change",
            buttonType: "secondary",
            iconPlacement: "no-icon",
            /*  iconStandard:"",*/
            buttonWidth: "fit-width",
            transitionType: "expand-bg"
        },
    ],
    KButtonDone: [
        {
            label: "Done",
            buttonType: "ecommerce-primary",
            iconPlacement: "no-icon",
            /*  iconStandard:"",*/
            buttonWidth: "fit-to-content",
            transitionType: "rise"
        },
    ],
    KButtonConfirm: [
        {
            label: "Confirm",
            buttonType: "ecommerce-primary",
            iconPlacement: "no-icon",
            /*  iconStandard:"",*/
            buttonWidth: "fit-to-content",
            transitionType: "rise"
        },
    ],
    KButtonList_AD_orderLevel_EditThisDelivery:{
        FunctionList:[],
        KButtonList:[
            {
                label: "Order Details",
                buttonType: "primary-light",
                iconPlacement: "right-edge",
                iconStandard: "icon-order-details",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            },
            {
                label: "Edit Shipping & Payment",
                buttonType: "primary-light",
                iconPlacement: "no-icon",
                /*
                                iconStandard: "icon-order-details",
                */
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            },
            {
                label: "Ship Right Away",
                buttonType: "ecommerce-primary",
                iconPlacement: "no-icon",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            },
            {
                label: "Skip Next Shipment",
                buttonType: "ecommerce-primary",
                iconPlacement: "no-icon",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            },
        ],
    },

    KButtonList_AD_itemLevel: {
        FunctionList:[],
        KButtonList: [
            {
                label: "Pause This Item - Do Not Ship",
                buttonType: "primary-light",
                iconPlacement: "right-edge",
                iconStandard: "icon-pause-item",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            },
            {
                label: "Swap An Item",
                buttonType: "primary-light",
                iconPlacement: "right-edge",
                iconStandard: "icon-swap-item",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            },
            {
                label: "Select Backup Product",
                buttonType: "primary-light",
                iconPlacement: "right-edge",
                iconStandard: "icon-backup-product",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            },
            {
                label: "Edit This Delivery",
                buttonType: "primary-light",
                iconPlacement: "right-edge",
                iconStandard: "icon_Edit_delivery",
                buttonWidth: "fit-width",
                transitionType: "expand-bg",
            },
            {
                label: "Order Details",
                buttonType: "primary-light",
                iconPlacement: "right-edge",
                iconStandard: "icon-order-details",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            },
            {
                label: "Remove This Item",
                buttonType: "primary-light",
                iconPlacement: "no-icon", // add icon remove
                iconStandard: "icon-order-details",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            },
        ],
    },
};



