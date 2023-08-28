import React, {useEffect} from 'react';
import {iProductInfoCardProps} from "../product-card.interfaces";
import KButton from "../../Kbutton/KButton";
import {Price} from "../../Price/Price";
import {MemberCardStyled} from "./classic-beverage-clp-card.styled";
import {PodInfo} from "../general_card_components/PodInfo";
import {PriceCentricDisplay} from "../general_card_components/PriceCentricDisplay";
import Switch from "../../Switch/Switch";
import KDropDown from "../../DropDown/drop-down";
import {KToggle} from "../../Toggle/Toggle";
import {useResizeDetector} from "react-resize-detector";
import {iRating, Rating} from "../../Rating/Rating";
import { ClassicCard } from 'components/Classic_components/cards/ClassicCard';

export interface iClassicClpCardProps{
    rating?: iRating;
    product: iProductInfoCardProps;
    isLoggedIn: boolean;
    formFactor : "mobile" | "small-mobile" | "desktop";
    priceLabel: string;
    calculateCardWidth : boolean;
    actionFunction : ()=>void;
    infoFunction : ()=>void;
    pricingStyle: "classic" | "member-pricing-simple" | "member-price-no-icon";
}

type navState = "start" | "sub-or-once" | "subscribe" | "just-once" | "end";

const ClassicClpCard = (props : iClassicClpCardProps ) => {

    const [currentQuantity, setCurrentQuantity] = React.useState<number>(1);
    const [isScheduled, setIsScheduled] = React.useState(true);
    const [navState, setNavState] = React.useState<navState>("start");
    const [selectedVariantIndex, setSelectedVariantIndex] = React.useState<number>(0);

    const [ formFactor, setFormFactor ] = React.useState< "small-mobile" | "mobile" | "desktop">("desktop");

    const {width, height, ref} = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 200,
        refreshOptions: {
            leading: true,
            trailing: false,
        },
        handleHeight: false,
        skipOnMount: false,
        onResize: () => {
        },
    })

    useEffect(()=>{
        getFormFactor(width!);
    },[width]);

    const getFormFactor = (width : number) => {
        if (!width) return;

        if (width <  600 && width > 360) {
            setFormFactor("mobile");
            return;
        }
        if(width < 360){
            setFormFactor("small-mobile");
            return;
        }
        setFormFactor("desktop");
        return;
    }

    const getConfigurations =(isScheduled : boolean)=>{
        if(isScheduled){
            return (
                <div className="scheduled-configuration">
                    <KDropDown
                        dropDownType={"small"}
                        defaultLabel={"Every 4 Weeks"}
                        label={"How often should we ship?"}
                        selected={"Every 4 Weeks"}
                        selectionOptions={[
                            {
                                label: "Every 4 Weeks",
                                value: 0,
                            },
                            {
                                label: "Every 6 Weeks",
                                value: 1,
                            },
                            {
                                label: "Every 8 Weeks",
                                value: 2,
                            },
                            {
                                label: "Every 12 Weeks",
                                value: 3,
                            },
                        ]}
                    />
                </div>
            )
        }
    }

    const getNavState=(currentNavState : navState)=>{
        switch (currentNavState) {
            case "sub-or-once":
                return (
                    <div className={`options-container ${currentNavState}`}>


                    </div>
                )
            case "start":
                return (
                    <div className={"invisible-button"}>
                    <div className="product-card">
                        <div className="card-primary-section">
                            <PodInfo
                                productImage={props.product.image}
                                productName={props.product.name}
                                brandName={props.product.brand}
                                productType={props.product.productType}
                                price={props.product.prices[selectedVariantIndex].price * 0.75}
                                priceLabel={props.priceLabel}
                                strikeThroughPrice={props.product.prices[selectedVariantIndex].price}
                                rating={props.product.rating}
                                enableRating={false}
                                infoFunction={props.infoFunction}
                                pricingStyle={props.pricingStyle}
                            />
                        </div>
                        <div className={`options-container ${currentNavState}`}>
                            <div className="card-primary-section">
                                {props.rating && (
                                    <Rating
                                        ratingNumber={props.rating.ratingNumber}
                                        scrollToTargetID={""}
                                        totalNumberOfReviews={props.rating.totalNumberOfReviews}
                                        totalNumberOfStars={props.rating.totalNumberOfStars}
                                        classes={`mobile-only`}
                                        layout={"vertical"}
                                    />
                                )}

                            </div>
                            <KButton
                                transitionType="none"
                                classes={`cta-main square-btn`}
                                buttonWidth="fit-width"
                                label={'BUY NOW'}
                                iconStandard="icon-subscribe"
                                iconPlacement="no-icon"
                                buttonType="ecommerce-secondary"
                                actionFunc={
                                    props.actionFunction
                                }
                            />
                        </div>
                    </div>
                    </div>
                )
        }
    }

    return (
        <MemberCardStyled ref={ref} className={`product-card classic ${ props.calculateCardWidth ? formFactor : props.formFactor} `}>
            {getNavState(navState)}
        </MemberCardStyled>
    );
};

export default ClassicClpCard;