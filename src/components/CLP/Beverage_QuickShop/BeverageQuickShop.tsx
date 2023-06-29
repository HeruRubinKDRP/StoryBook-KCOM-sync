import {ModalStyled} from "../../Experimental/Modal-Styled";
import React, {ReactElement, useEffect, useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import {BevQuickShopContent} from "./BevQuickShopContent";
import {LoadingPacifier} from "../../Loader_Pacifiers/LoadingPacifier";
import {PopUpStyled} from "../../PopUp/PopUpStyled";
import {PopUp} from "../../PopUp/PopUp";


export interface iBeverageQuickShop {
    productName: string;
    brand: string;
    productImageURL: string;
    productPrices: number[]
    boxSizes: number[];
    selectedProductOverride?: number;
    isSmartEligible : boolean;
    edlpOffer : string;
    subscriptionVisible : boolean;
    closeFunction : () => void;
    addToCartFunction? : () => void;
    hasCloseButton? : boolean;
}

export type subscriptionModeT = "scheduled" | "smart";

export const BeverageQuickShop = (props: iBeverageQuickShop) => {

    const [isLoaded, setIsloaded] = useState(false);

    const {width, height, ref} = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 400,
        refreshOptions: {
            leading: true,
            trailing: false,
        },
        handleHeight: false,
        skipOnMount: false,
        onResize: () => {}
    });

    useEffect(() => {
       setTimeout(() => {
           setIsloaded(true);
       }, 2500);
    });

    const getModalContainerQueries = (width: number) => {
        if (!width) {
            return
        }
        if (width < 1000 && width >= 400) {
            return "medium-dimensions"
        } else if (width < 440) {
            return "mobile-dimensions"
        }
        return "large-dimensions"
    }


    const getBevQuickShop = () => {
        return(
            <BevQuickShopContent
                productName={props.productName}
                brand={props.brand}
                productImageURL={props.productImageURL}
                productPrices={props.productPrices}
                boxSizes={props.boxSizes}
                isSmartEligible={props.isSmartEligible}
                edlpOffer={props.edlpOffer}
                subscriptionVisible={props.subscriptionVisible}
                closeFunction={props.closeFunction}
                hasCloseButton={false}
                addToCartFunction={props.addToCartFunction}
            />
        )
    }

    const getLoader=()=>{
        return(
            <LoadingPacifier pacifier="coffee-cup-classic" />
        )
    }

    return (
        <PopUp
            hasVeil={true}
            isOpen={true}
            hasBackButton={false}
            hasHeader={false}
            closeFunc={props.closeFunction}
            appendTo="body"
            classes={`modal-${getModalContainerQueries(width || 0)} minimal-header`}
        >
            <ModalStyled ref={ref} className={`modal-contents`}>
                {isLoaded ? getBevQuickShop() : getLoader()   }
            </ModalStyled>
        </PopUp>

    )
}