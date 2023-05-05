import {SmallAddToCartJourneyStyled} from "./smallVersionStyled";
import KButton from "../../../Kbutton/KButton";
import {useResizeDetector} from "react-resize-detector";

import {breakPoints} from "../../../NavMenu/NavigationV2/Navigation";
import {getContainerQuery} from "../reusable css/container-queries";
import FreeShippingIndicator from "../../../FreeShippingDisplay/FreeShipping";
import Graphic from "../../../Graphic/Graphic";
import {createRef, RefObject, useEffect, useState} from "react";
import {css} from "styled-components";
import Typist from "../../../Animated Effects/Typist/Typist";


export interface iSimpleProduct {
    name: string,
    brand: string,
    image: string
}

export interface iCartAfterSmall {
    selectedProduct: iSimpleProduct
    suggestedProducts: iSimpleProduct[]
    numberOfSuggestions: number;
    currentCartTotal: number;
    freeShippingTarget: number;
    loadingShippingMessage?: string;
    closeFunc?: Function;
    addSuggestionToCartFunc?: Function;
}

export const AddToCartJourneySmall = (props: iCartAfterSmall) => {
    const [suggestionsLoading, setSuggestionsLoaded] = useState(false);
    const [suggestionWidth, setSuggestionWidth] = useState(0);
    const [actionBarHeight, setActionbarHeight] = useState(0);

    const [freeShippingLoaded, setFreeShippingLoaded] = useState(false);

    const {width, height, ref} = useResizeDetector({
        refreshMode: 'debounce',
        refreshRate: 100,
        refreshOptions: {
            leading: true,
            trailing: false
        },
        handleHeight: false, skipOnMount: false,
        onResize: () => {
        },
    });

    useEffect(() => {
        upDateDimensions();
        setSuggestionsLoaded(false);
    }, [width]);

    const doLoadSuggestions = () => {
        setTimeout(() => {
            setSuggestionsLoaded(true);
        }, 4000);

        setTimeout(() => {
            setFreeShippingLoaded(true);
        }, 2000);
    }


    useEffect(() => {
        doLoadSuggestions();
    }, [width]);

    const upDateDimensions = () => {
        setSuggestionWidth(suggestionsSectionRef.current?.offsetWidth || screen.width / 2);
        setActionbarHeight(actionBarRef.current?.offsetHeight || screen.height * 0.2);
    }

    const suggestionsSectionRef = createRef<HTMLDivElement>();
    const actionBarRef = createRef<HTMLDivElement>();

    const handleAddSuggested = (index: number) => {
        if (!props.addSuggestionToCartFunc) {
            return;
        }

        props.addSuggestionToCartFunc(index);
    }

    const getSuggestedProducts = () => {
        return props.suggestedProducts.slice(0, 3).map((product, index) => {

            return (
                <div className={`product-image step${index}`} key={index}>
                    <KButton
                        label=""
                        buttonType="round-no-label"
                        buttonHeightOverride=""
                        iconPlacement="after-label"
                        iconStandard="plus-icon"
                        buttonWidth="fit-to-content"
                        transitionType="expand-bg"
                        actionFunc={() => handleAddSuggested(index)}
                    />
                    <KButton
                        label="Add"
                        buttonType="primary"
                        buttonHeightOverride=""
                        iconPlacement="no-icon"
                        iconStandard="none"
                        buttonWidth="fit-width"
                        transitionType="expand-bg"
                        classes="add-label-btn"
                        actionFunc={() => handleAddSuggested(index)}
                    />
                    <div className="product-image-inner">
                        <img src={product.image} alt=""/>
                    </div>
                    <div className="product-name">{product.name}</div>
                </div>
            )
        })
    }

    const loadSuggestions = (isLoaded: boolean) => {
        if (!isLoaded) {
            return (
                <div className="loading">
                    <div className="loading-graphic">
                        <img src="./loaders/cup_loader_med.gif" alt="loading"/>
                    </div>
                    {/*<Typist message={"Brewing up some great recommendations for you..."} />*/}
                </div>
            )
        }

        return (
            <div className="suggested-products">
                {getSuggestedProducts()}
            </div>
        )
    }

    const getDynamicStyles = (widthX: number) => {
        return css`
          --overallWidth: ${widthX}px;
        `
    }


    return (
        <SmallAddToCartJourneyStyled
            ref={ref}
            dynamicStyles={getDynamicStyles(width || screen.width)}
            heightY={height ? height : 122}
            outerWidth={width ? width : screen.width}
            actionBarHeight={actionBarHeight}
            className={`add-to-cart-journey-small ${width} ${getContainerQuery(width)} `}

        >
            <div className="modal-item">
                <div className="header-area">
                   <div className="cart-info">
                       {/*{freeShippingLoaded ?*/}
                       {/*    <FreeShippingIndicator targetPrice={props.freeShippingTarget}*/}
                       {/*                           currentPrice={100}/>*/}
                       {/*    :*/}
                       {/*    <div className="free-shipping-placeholder-inner">*/}
                       {/*        <Graphic graphicName="free-shipping-truck"/>*/}
                       {/*        <p>*/}
                       {/*            {props.loadingShippingMessage ? props.loadingShippingMessage : "Loading..."}*/}
                       {/*        </p>*/}
                       {/*    </div>*/}
                       {/*}*/}
                       <div className="cart-total">
                           <span className="label"> Cart Total:</span>
                           <span className="value">$124.99</span>
                       </div>
                   </div>
                    <div className="cart-message">
                        <Graphic graphicName="checkmark-circled"/>
                        <p>You're getting free shipping!</p>
                    </div>

                    <KButton
                        buttonType="text-icon-noBG"
                        buttonWidth="fit-to-content"
                        classes="close-btn"
                        iconPlacement="right-edge"
                        iconStandard="close"
                        label="Continue Shopping"
                        transitionType="expand-bg"
                        actionFunc={props.closeFunc}
                    />

                </div>

                <div className="content-area">
                    <div className="product-area">
                        <div className="product-added">
                            <div className="product-image">
                                <img src={props.selectedProduct.image} alt={props.selectedProduct.name}/>
                            </div>
                            <div className="product-status-area">
                                <div className="cart-message">
                                    <Graphic graphicName="checkmark-circled"/>
                                    <p>Successfully added to cart</p>
                                </div>
                                <h2 className="product-name-area">
                                    <div className="brand">{props.selectedProduct.brand}</div>
                                    <div className="product-name">{props.selectedProduct.name}</div>
                                </h2>
                            </div>
                        </div>
                        <div className="actions-container" ref={actionBarRef}>
                            <KButton
                                label={"Checkout Now"}
                                buttonType="secondary"
                                buttonWidth="fit-width"
                                iconPlacement="after-label"
                                iconStandard="icon-cart"
                                transitionType={"expand-bg"}
                                actionFunc={props.closeFunc}
                            />
                            {/*                       <KButton
                                label={"Continue Shopping"}
                                buttonType="primary"
                                buttonWidth="fit-width"
                                iconPlacement="after-label"
                                iconStandard="none"
                                transitionType={"expand-bg"}
                                actionFunc={props.closeFunc}
                            />*/}
                        </div>
                    </div>
                    <div ref={suggestionsSectionRef} className="suggested-products-container">
                        <Typist classes="typist" message={"You might be interested in"}/>
                        {loadSuggestions(suggestionsLoading)}
                        <div className={"shop-all-cta"}>
                            <KButton
                                label="Shop Beverages"
                                buttonType="secondary"
                                buttonWidth="fit-width"
                                iconPlacement="after-label"
                                iconStandard="none"
                                transitionType={"expand-bg"}
                                actionFunc={props.closeFunc}
                                classes="shop-more-btn left"
                            />

                            <KButton
                                classes="shop-more-btn right"
                                label="Shop Accessories"
                                buttonType="secondary"
                                buttonWidth="fit-width"
                                iconPlacement="after-label"
                                iconStandard="none"
                                transitionType={"expand-bg"}
                                actionFunc={props.closeFunc}
                            />

                        </div>
                    </div>
                </div>
            </div>
            <div className="back-fill"></div>
        </SmallAddToCartJourneyStyled>
    )
}