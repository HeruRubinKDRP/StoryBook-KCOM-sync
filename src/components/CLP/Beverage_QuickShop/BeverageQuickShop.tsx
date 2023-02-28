import {ModalStyled} from "../../Experimental/Modal-Styled";
import React, {ReactElement, useState} from "react";
import {BevQuickShopStyled} from "./StyledBeverageQuickShop";
import {CTA_WithQuantity, getNumericalSequenceSelectionsForDropDown} from "../../CTA_With_Quantity/CTA_WithQuantity";
import {useResizeDetector} from "react-resize-detector";
import {KToggle} from "../../Toggle/Toggle";
import Switch from "../../Switch/Switch";
import KButton from "../../Kbutton/KButton";
import {Flag} from "../../Flag/Flag";
import {getDiscountedPrice, getPricePerPod} from "../../Classic_components/cards/ClassicCard";
import {Rating} from "../../Rating/Rating";
import KDropDown from "../../DropDown/drop-down";
import Graphic from "../../Graphic/Graphic";

export interface iBeverageQuickShop {
    productName: string;
    brand: string;
    productImageURL: string;
    productPrices: number[]
    boxSizes: number[];
    selectedProductOverride?: number;
    isSmartEligible : boolean;
    edlpOffer : string;
}

export type subscriptionModeT = "scheduled" | "smart";

export const BeverageQuickShop = (props: iBeverageQuickShop) => {

    const [subscriptionVisible, setSubscriptionVisible] = useState(false);
    const [isScheduled, setIsScheduled] = useState(true);

    const [subscriptionMode, setSubscriptionMode] = useState<"scheduled" | "smart" >("scheduled");

    const [currentSelectedIndex, setCurrentSelectedIndex] = useState(props.selectedProductOverride || 0);
    const {width, height, ref} = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 100,
        refreshOptions: {
            leading: true,
            trailing: false,
        },
        handleHeight: false,
        skipOnMount: false,
        onResize: () => {}
    })

    const getContainerQueries = (width: number) => {
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

    const getVariants =()=>{

        return(
            <>
                <KToggle
                    classes="variant-selection-menu-container "

                    toggleOptions={[
                        {
                            label: `${props.boxSizes[0]}ct`,
                            imagePath: "",
                            action : ()=>{setCurrentSelectedIndex(0)}
                        },
                        {
                            label: `${props.boxSizes[1]}ct`,
                            action: ()=>{setCurrentSelectedIndex(1)},
                            imagePath: ""
                        },
                        {
                            label: `${props.boxSizes[2]}ct`,
                            action: ()=>{setCurrentSelectedIndex(2)},
                            imagePath: ""
                        },
                        {
                            label: `${props.boxSizes[3]}ct`,
                            action: ()=>{setCurrentSelectedIndex(3)},
                            imagePath: ""
                        },
                    ]
                    }
                    overrideSelectedIndex={1}
                    toggleType={"side-by-side"}
                    toggleStyle={"one-pill"}
                    selectedCaratPosition={"none"}
                />

            </>
        )

    }

    const getConfigurations = (mode : subscriptionModeT) => {

        switch(mode){
            case "scheduled":
                return(
                    <div className="scheduled-configuration config-area">
                        <div className="configuration-item">
                            <CTA_WithQuantity totalQuantity={20} buttonLabel="Create Auto-Delivery" />
                        </div>
                    </div>
                )

                case "smart":
                    return(
                        <div className="smart-configuration config-area">
                            <div className="configuration-item setting">
                                <label className="section-label">
                                    How many boxes fo you want? <Graphic graphicName="info-icon" />
                                </label>
                                <KDropDown
                                    dropDownType="large"
                                    defaultLabel="2"
                                    label="2"
                                    selected="2"
                                    selectionOptions={getNumericalSequenceSelectionsForDropDown(20)}
                                />
                            </div>
                            <div className="configuration-item setting">
                                <label className="section-label">
                                    Do you already have pods? <Graphic graphicName="info-icon" />
                                </label>
                                <KDropDown
                                    dropDownType="large"
                                    defaultLabel="No answer"
                                    label="2"
                                    selected="2"
                                    selectionOptions={getNumericalSequenceSelectionsForDropDown(20)}
                                />
                            </div>
                            <KButton
                                iconStandard="none"
                                label="Subscribe Now"
                                buttonType="action"
                                buttonWidth="fit-width"
                                classes="action cta"
                                transitionType="expand-bg"
                                actionFunc={() => setSubscriptionVisible(true)}
                            />
                        </div>
                    )
        }
    }



    return (
        <ModalStyled className={`modal-${getContainerQueries(width || 0)}`}>

            <BevQuickShopStyled ref={ref} widthX={width || 0} className={`${getContainerQueries(width || 0)}`}>
                <KButton
                    buttonType="text-icon-noBG"
                    buttonWidth="fit-to-content"
                    classes="close-btn"
                    iconPlacement="right-edge"
                    iconStandard="close"
                    label=""
                />
                <div className="quick-shop-container">
                    <section className="product-container">
                        <div className="product-image">
                            <img src={props.productImageURL} alt={props.productName}/>
                            <div className="brand">{props.brand}</div>
                            <h2>{props.productName}</h2>
                            <div className="rating">
                                <Rating
                                    ratingNumber={4.2}
                                    scrollToTargetID="Ratings"
                                    totalNumberOfReviews={1431}
                                    totalNumberOfStars={5}
                                />
                            </div>
                        </div>
                    </section>
                    <div className="configuration-container">
                        <div className="box-selection">
                            <div className="select-box-size">Select Box Size:</div>
                            <div className={"switch-container "}>
                                {getVariants()}
                            </div>

                        </div>
                        <section className="subscription-group-section">
                            <Flag
                                flagLabel="Best deal"
                                flagColor="secondaryGold"
                                font={{fontWeight: "heavy-weight", fontSize: "Small"}}
                                flagStyle="alternating-sharp-round"
                            />

                            <div className="configure-subscription-container">
                                <section className="messaging-container">

                                    <div className="price discounted">
                                        <div className="price-display">
                                            <span className="price-label">${getDiscountedPrice(currentSelectedIndex , props.productPrices[currentSelectedIndex])} </span>
                                            <span className="price-per-pod">({getPricePerPod(currentSelectedIndex , props.productPrices[currentSelectedIndex])} per pod)</span>
                                        </div>
                                        <span className="purchase-type">Subscription</span>
                                    </div>
                                    <h3 className="terms">No fees. Cancel anytime.</h3>
                                </section>
                                <div className={`starting-state-subscription ${subscriptionVisible}`}>
                                    <KButton
                                        iconStandard="none"
                                        label="Subscribe Now"
                                        buttonType="action"
                                        buttonWidth="fit-width"
                                        classes="action cta"
                                        transitionType="expand-bg"
                                        actionFunc={() => setSubscriptionVisible(true)}
                                    />
                                </div>
                                <div className={`subscription-configuration ${subscriptionVisible}`}>
                                    <Switch
                                        leftValue={"Scheduled Delivery"}
                                        rightValue={"Smart Delivery"}
                                        value={isScheduled}
                                        onChange={() => {
                                            setSubscriptionMode(prevMode => prevMode === "scheduled" ? "smart" : "scheduled")
                                    }}/>
                                    {getConfigurations(subscriptionMode)}
                                </div>
                            </div>
                        </section>
                        <section className="one-time-section">
                            <section className="messaging-container">
                                <div className="price">
                                    <div className="price-display">
                                        <span className="price-label">${ props.productPrices[currentSelectedIndex]}</span>
                                        <span className="price-per-pod"> ({getPricePerPod(currentSelectedIndex , props.productPrices[currentSelectedIndex])} per pod)</span>
                                    </div>
                                    <span className="purchase-type">One-Time Purchase</span>
                                </div>
                                {props.edlpOffer ? <div className="edlp-offer terms">{props.edlpOffer}</div> : <></>}
                            </section>
                            <div className="fader">
                                <div className="fader"></div>
                            </div>

                            <CTA_WithQuantity totalQuantity={20} buttonLabel="Add to Cart"/>
                        </section>
                    </div>
                </div>
                <div className="backing"></div>
            </BevQuickShopStyled>
        </ModalStyled>
    )
}