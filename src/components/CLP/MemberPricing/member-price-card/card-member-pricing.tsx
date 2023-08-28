import React, {useEffect} from 'react';
import {iProductInfoCardProps} from "../../product-card.interfaces";
import KButton from "../../../Kbutton/KButton";
import {Price} from "../../../Price/Price";
import {MemberCardStyled} from "./member-card.styled";
import {PodInfo} from "../../general_card_components/PodInfo";
import {PriceCentricDisplay} from "../../general_card_components/PriceCentricDisplay";
import Switch from "../../../Switch/Switch";
import KDropDown from "../../../DropDown/drop-down";
import {KToggle} from "../../../Toggle/Toggle";
import {useResizeDetector} from "react-resize-detector";



export interface iMemberPricingCardProps{
    product: iProductInfoCardProps;
    isLoggedIn: boolean;
    formFactor : "mobile" | "small-mobile" | "desktop";
    priceLabel: string;
    calculateCardWidth : boolean;
    actionFunction : ()=>void;
    infoFunction : ()=>void;
}

type navState = "start" | "sub-or-once" | "subscribe" | "just-once" | "end";

const MemberPriceCard = (props : iMemberPricingCardProps ) => {

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
                   <>
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
                               pricingStyle={'member-pricing-simple'}
                               infoFunction={props.infoFunction}
                           />
                       </div>
                       <div className={`options-container ${currentNavState}`}>
                           <KButton
                               transitionType="expand-bg"
                               classes={`cta-main just-once `}
                               buttonWidth="fit-to-content"
                               label={'Just Once'}
                               iconStandard="icon-add"
                               iconPlacement="after-label"
                               buttonType="secondary"
                               actionFunc={props.actionFunction}
                           />
                           <KButton
                               transitionType="expand-bg"
                               classes={`cta-main subscribe `}
                               buttonWidth="fit-width"
                               label={'Subscribe'}
                               iconStandard="icon-subscribe"
                               iconPlacement="after-label"
                               buttonType="secondary"
                               actionFunc={
                                   props.actionFunction
                              }
                           />
                       </div>
                   </>
                )
            case "subscribe":
                return (
                    <div className={`subscription-configuration ${currentNavState}`}>
                        <PodInfo
                            productImage={props.product.image}
                            productName={props.product.name}
                            brandName={props.product.brand}
                            productType={props.product.productType}
                            price={props.product.prices[selectedVariantIndex].price * 0.75}
                            priceLabel={props.priceLabel}
                            strikeThroughPrice={props.product.prices[selectedVariantIndex].price}
                            rating={props.product.rating}
                            pricingStyle={'member-pricing-simple'}
                            infoFunction={props.infoFunction}
                            />
                        <Switch
                            leftValue={"Scheduled Delivery"}
                            rightValue={"Smart Delivery"}
                            value={isScheduled}
                            onChange={() => {
                                setIsScheduled(!isScheduled)
                            }}/>
                        {getConfigurations(isScheduled)}
                        <KButton
                            transitionType="expand-bg"
                            classes={`cta-main `}
                            buttonWidth="fit-to-content"
                            label={'Confirm'}
                            iconStandard="icon-add"
                            iconPlacement="after-label"
                            buttonType="primary"
                            actionFunc={() => setNavState("sub-or-once")}
                        />
                        <KButton label={"Cancel"} buttonType="link-internal" actionFunc={()=>setNavState("start")} />
                    </div>
                )
        }
    }

    return (
        <MemberCardStyled ref={ref} className={`product-card ${ props.calculateCardWidth ? formFactor : props.formFactor} `}>
            {getNavState(navState)}
        </MemberCardStyled>
    );
};

export default MemberPriceCard;