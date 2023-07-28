import React from 'react';
import {iProductInfoCardProps} from "../../product-card.interfaces";
import KButton from "../../../Kbutton/KButton";
import {Price} from "../../../Price/Price";
import {MemberCardStyled} from "./member-card.styled";
import {PodInfo} from "../../general_card_components/PodInfo";
import {PriceCentricDisplay} from "../../general_card_components/PriceCentricDisplay";
import Switch from "../../../Switch/Switch";
import KDropDown from "../../../DropDown/drop-down";



export interface iMemberPricingCardProps{
    product: iProductInfoCardProps;
    isLoggedIn: boolean;
    formFactor : "mobile" | "desktop";
    priceLabel: string;
}

type navState = "start" | "sub-or-once" | "subscribe" | "just-once" | "end";

const MemberPriceCard = (props : iMemberPricingCardProps ) => {

    const [currentQuantity, setCurrentQuantity] = React.useState<number>(1);
    const [isScheduled, setIsScheduled] = React.useState(true);
    const [navState, setNavState] = React.useState<navState>("start");
    const [selectedVariantIndex, setSelectedVariantIndex] = React.useState<number>(0);


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
                       <div>
                           <PodInfo
                               productImage={props.product.image}
                               productName={props.product.name}
                               brandName={props.product.brand}
                               productType={props.product.productType}
                               price={props.product.prices[selectedVariantIndex].price * 0.75}
                               priceLabel={props.priceLabel}
                               strikeThroughPrice={props.product.prices[selectedVariantIndex].price}
                               rating={props.product.rating}
                           />
                       </div>

                       <div className={`options-container ${currentNavState}`}>
                           <KButton
                               transitionType="expand-bg"
                               classes={`cta-main `}
                               buttonWidth="fit-width"
                               label={'Subscribe'}
                               iconStandard="icon-subscribe"
                               iconPlacement="after-label"
                               buttonType="primary"
                               actionFunc={() => setNavState("subscribe")}
                           />
                           <KButton
                               transitionType="expand-bg"
                               classes={`cta-main `}
                               buttonWidth="fit-width"
                               label={'Just Once'}
                               iconStandard="icon-add"
                               iconPlacement="after-label"
                               buttonType="secondary"
                               actionFunc={() => {}}
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
        <MemberCardStyled className={`product-card ${props.formFactor}`}>
            {getNavState(navState)}
        </MemberCardStyled>
    );
};

export default MemberPriceCard;