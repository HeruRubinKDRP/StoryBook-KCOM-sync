import React, {useState} from 'react';
import {PopUp, iPopUp} from "../PopUp/PopUp";
import {MyPantryStyle} from "./MyPantryStyled";
import {getContainerQuery} from "../_utilities/container-queriesTEST";
import {useResizeDetector} from "react-resize-detector";
import {ProductInfo, iProductInfo} from './SeparateComponents/ProductInfo';
import {ShippingAddress, iShippingAddress} from './SeparateComponents/ShippingAddress';
import {iPaymentInformation, PaymentInformation} from "./SeparateComponents/PaymentInformation";
import {iMyPantryNav, MyPantryNav} from "./SeparateComponents/MyPantryNav";
import KButton, {iButton} from "../Kbutton/KButton";
import {Addresses} from "./MyPantry.stories";
import {iEditSubscription, EditADitemInfo} from "./SeparateComponents/EditADitemInfo";
import {ShippingAddressStyled} from "./SeparateComponents/ShippingAddressStyled";
import {iEditOrder, EditADorderInfo} from "./SeparateComponents/EditADorderInfo";

export interface iMyPantry {
    PopUp: iPopUp;
    ProductInfo: iProductInfo;
    ShippingAddress: iShippingAddress;
    PaymentInformation: iPaymentInformation;
    EditAdItemInfo: iEditSubscription;
    EditAdOrderInfo: iEditOrder;
    MyPantryNav: iMyPantryNav;
//Single KButton
    KButtonEditThisShipping?: iButton[];
    KButtonEditThisPayment?: iButton[];
    KButtonDone?: iButton[];
    KButtonConfirm?: iButton[];
//TabNav List
    KButtonList_AD_itemLevel: NavSection;
    KButtonList_AD_orderLevel_EditThisDelivery: NavSection;

    AddressesBook?: iShippingAddress[];
    PaymentBook?: iPaymentInformation[];
    renderMyPantryNav?: boolean;
    renderBottomPanel?: boolean;
    windowTitle?: string;
    modalIsOpen: boolean;
}



export type MyPantryPanelMode =
    'AD-item-level'
    | 'AD-pause-this-item'
    | 'AD-swap-an-item'
    | 'AD-choose-a-backup-product'
    | 'AD-order-level-edit-this-delivery'
    | 'AD-order-details'
    | 'AD-remove-this-item'
    | 'AD-edit-shipping-payment'
    | 'AD-order-level-shipment'
    | 'AD-order-level-payment'

export type iMyPantryPanel = {
    name: MyPantryPanelMode,
    label: string,
}
export type NavSection = {
    FunctionList: Function[];
    KButtonList: iButton[];
};


export const MyPantry = (props: iMyPantry) => {

    const {width, height, ref} = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 100,
        refreshOptions: {
            leading: true,
            trailing: false,
        },
        handleHeight: false,
        skipOnMount: false,
        onResize: () => {
        }
    });

    const [CurrentPanel, setCurrentPanel] = useState<iMyPantryPanel>({
        label: 'Scheduled Auto-Delivery',
        name: 'AD-item-level'
    })
    // Switch
    const GetComponentState = () => {
        switch (CurrentPanel.name) {
            case "AD-item-level":
                const KButtonFunctionList: Function[] = [
                    () => setCurrentPanel({label: 'Pause This Item', name: 'AD-pause-this-item'}),
                    () => setCurrentPanel({label: 'Swap An Item', name: 'AD-swap-an-item'}),
                    () => setCurrentPanel({label: 'Choose a Backup Product', name: 'AD-choose-a-backup-product'}),
                    () => setCurrentPanel({label: 'Dynamic FieldName', name: 'AD-order-level-edit-this-delivery'}),
                    () => setCurrentPanel({label: 'Dynamic FieldName Order Details', name: 'AD-order-details'}),
                    () => setCurrentPanel({label: 'Confirm', name: 'AD-remove-this-item'}),
                ]

                return (
                    <>
                        <div className={"main-content"}>
                            <div className={"TwoColContainer"}>
                                <div className={"ProductInfoContainer"}>
                                    <ProductInfo
                                        productImage={props.ProductInfo.productImage}
                                        brandName={props.ProductInfo.brandName}
                                        productName={props.ProductInfo.productName}
                                        productCountSize={props.ProductInfo.productCountSize}
                                        productQuantity={props.ProductInfo.productQuantity}
                                        productSalePrice={props.ProductInfo.productSalePrice}
                                        productPrice={props.ProductInfo.productPrice}
                                    />
                                </div>
                                <div className={"EditSubscriptionContainer"}>
                                    <EditADitemInfo
                                        Size={props.EditAdItemInfo.Size}
                                        Quantity={props.EditAdItemInfo.Quantity}
                                        Frequency={props.EditAdItemInfo.Frequency}
                                        ProcessDate={props.EditAdItemInfo.ProcessDate}
                                    /></div>
                            </div>
                            <div className={"TabNavContainer"}><MyPantryNav
                                KButtonList={props.KButtonList_AD_itemLevel.KButtonList}
                                FunctionList={KButtonFunctionList}/>
                            </div>
                        </div>
                        <div className={"bottom-panel"}>
                            <div className={"bottom-content"}>
                                {props.KButtonDone && props.KButtonDone.map((button) => (
                                    <KButton
                                        key={button.label}
                                        label={button.label}
                                        buttonType={button.buttonType}
                                        iconPlacement={button.iconPlacement}
                                        iconStandard={button.iconStandard}
                                        buttonWidth={button.buttonWidth}
                                        transitionType={button.transitionType}
                                        iconSize={""}
                                    />
                                ))}
                            </div>
                        </div>

                    </>
                )
            case "AD-pause-this-item":
                return (
                    <></>
                )
            case "AD-swap-an-item":
                return (
                    <></>
                )
            case "AD-choose-a-backup-product":
                return (
                    <></>
                )
            case "AD-order-level-edit-this-delivery":
                const KButtonADFunctionList: Function[] = [
                    () => setCurrentPanel({label: 'Dynamic FieldName Order Details', name: 'AD-order-details'}),
                    () => setCurrentPanel({label: 'Edit Shipping & Payment', name: 'AD-edit-shipping-payment'}),
                    () => setCurrentPanel({label: 'Choose a Backup Product', name: 'AD-choose-a-backup-product'}),
                    () => setCurrentPanel({label: 'Dynamic Field Name', name: 'AD-order-level-edit-this-delivery'}),
                ]
                return (
                    <>
                        <div className={"main-content"}>
                            <div className={"TwoColContainer"}>
                                <div className={"ProductInfoContainer"}>
                                    <ProductInfo
                                        productImage={props.ProductInfo.productImage}
                                        brandName={props.ProductInfo.brandName}
                                        productName={props.ProductInfo.productName}
                                        productCountSize={props.ProductInfo.productCountSize}
                                        productQuantity={props.ProductInfo.productQuantity}
                                        productSalePrice={props.ProductInfo.productSalePrice}
                                        productPrice={props.ProductInfo.productPrice}
                                    />
                                </div>
                                <div className={"EditSubscriptionContainer"}>
                                    <EditADorderInfo
                                        DeliveryName={props.EditAdOrderInfo.DeliveryName}
                                        Frequency={props.EditAdOrderInfo.Frequency}
                                        ProcessDate={props.EditAdOrderInfo.ProcessDate}
                                    /></div>
                            </div>
                            <div className={"TabNavContainer"}><MyPantryNav
                                KButtonList={props.KButtonList_AD_orderLevel_EditThisDelivery.KButtonList}
                                FunctionList={KButtonADFunctionList}/>
                            </div>
                        </div>
                        <div className={"bottom-panel"}>
                            <div className={"bottom-content"}>
                                {props.KButtonConfirm && props.KButtonConfirm.map((button) => (
                                    <KButton
                                        key={button.label}
                                        label={button.label}
                                        buttonType={button.buttonType}
                                        iconPlacement={button.iconPlacement}
                                        iconStandard={button.iconStandard}
                                        buttonWidth={button.buttonWidth}
                                        transitionType={button.transitionType}
                                        iconSize={""}
                                    />
                                ))}
                            </div>
                        </div>

                    </>
                )
            case "AD-order-details":
                return (
                    <></>
                )
            case "AD-remove-this-item":
                return (
                    <></>
                )
            case "AD-edit-shipping-payment":
                return (
                    <>
                        <div className={"main-content"}>
                            <div className={"ProductInfoContainer"}>
                                <ProductInfo
                                    productImage={props.ProductInfo.productImage}
                                    brandName={props.ProductInfo.brandName}
                                    productName={props.ProductInfo.productName}
                                    productCountSize={props.ProductInfo.productCountSize}
                                    productQuantity={props.ProductInfo.productQuantity}
                                    productSalePrice={props.ProductInfo.productSalePrice}
                                    productPrice={props.ProductInfo.productPrice}
                                />
                            </div>
                            <div className={"TwoColContainer"}>
                                <div className={"ShippingAddress"}>
                                    <ShippingAddress
                                        header={props.ShippingAddress.header}
                                        ShippingNameField={props.ShippingAddress.ShippingNameField}
                                        ShippingAddressField={props.ShippingAddress.ShippingAddressField}/>
                                    <div>
                                        {props.KButtonEditThisShipping && props.KButtonEditThisShipping.map((button) => (
                                            <KButton
                                                key={button.label}
                                                label={button.label}
                                                buttonType={button.buttonType}
                                                iconPlacement={button.iconPlacement}
                                                iconStandard={button.iconStandard}
                                                buttonWidth={button.buttonWidth}
                                                transitionType={button.transitionType}
                                                actionFunc={() => setCurrentPanel({
                                                    label: 'Choose shipping address or add new',
                                                    name: 'AD-order-level-shipment'
                                                })}
                                                iconSize={""}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className={"PaymentInformation"}>
                                    <PaymentInformation
                                        header={props.PaymentInformation.header}
                                        PaymentIcon={props.PaymentInformation.PaymentIcon}
                                        PaymentCardNumber={props.PaymentInformation.PaymentCardNumber}
                                        PaymentExpirationDate={props.PaymentInformation.PaymentExpirationDate}
                                        PaymentNameField={props.PaymentInformation.PaymentNameField}
                                        PaymentAddressField={props.PaymentInformation.PaymentAddressField}/>
                                    <div>
                                        {props.KButtonEditThisPayment && props.KButtonEditThisPayment.map((button) => (
                                            <KButton
                                                key={button.label}
                                                label={button.label}
                                                buttonType={button.buttonType}
                                                iconPlacement={button.iconPlacement}
                                                iconStandard={button.iconStandard}
                                                buttonWidth={button.buttonWidth}
                                                transitionType={button.transitionType}
                                                actionFunc={() => setCurrentPanel({
                                                    label: 'Choose the payment method or add a new one',
                                                    name: 'AD-order-level-payment'
                                                })}
                                                iconSize={""}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            case "AD-order-level-shipment":
                return (
                    <div className="main-content">
                        {props.AddressesBook?.map((address) => (
                            <ShippingAddress
                                ShippingNameField={address.ShippingNameField}
                                ShippingAddressField={address.ShippingAddressField}/>
                        ))}
                    </div>
                )
            case "AD-order-level-payment":
                return (
                    <div className="main-content">
                        {props.PaymentBook?.map((address) => (
                            <PaymentInformation
                                PaymentIcon={props.PaymentInformation.PaymentIcon}
                                PaymentCardNumber={props.PaymentInformation.PaymentCardNumber}
                                PaymentExpirationDate={props.PaymentInformation.PaymentExpirationDate}
                                PaymentNameField={props.PaymentInformation.PaymentNameField}
                                PaymentAddressField={props.PaymentInformation.PaymentAddressField}/>

                        ))}
                    </div>
                )}
    }

    // Add a state variable to keep track of the current viewport width
    const [viewportWidth, setViewportWidth] = useState
    < number
    | undefined > (width)

    // Update the viewportWidth state variable whenever the viewport width changes
    if (width !== undefined && viewportWidth !== width) {
        setViewportWidth(width)
    }
    //open close modal window
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(true)

    return (
        <MyPantryStyle className={`MyPantry-overall-container ${getContainerQuery(
            viewportWidth
        )}`}
                       ref={ref}>
              {
                props.modalIsOpen ? (
                    <>
                        <div className={"ABC"}><p>{viewportWidth}</p></div>
                        <PopUp classes={"MyPantryPopUp"} isOpen={props.PopUp.isOpen}
                               hasHeader={props.PopUp.hasHeader || false}
                               hasVeil={props.PopUp.hasVeil}
                               hasBackButton={props.PopUp.hasBackButton}
                               windowTitle={CurrentPanel.label}
                               closeFunc={() => setCurrentPanel({
                                   label: "Scheduled Auto-Delivery",
                                   name: "AD-item-level"
                               })}
                        >
                            {GetComponentState()}
                        </PopUp></>
                        ) : <></>
                        }
        </MyPantryStyle>
    );
};
