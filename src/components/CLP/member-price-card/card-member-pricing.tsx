import React from 'react';
import {iProductInfoCardProps} from "../product-card.interfaces";
import KButton from "../../Kbutton/KButton";
import {Price} from "../../Price/Price";



export interface iMemberPricingCardProps{
    product: iProductInfoCardProps;
    isLoggedIn: boolean;
}

type navState = "start" | "sub-or-once" | "subscribe" | "just-once" | "end";

const MemberPriceCard = (props : iMemberPricingCardProps ) => {

    const [currentQuantity, setCurrentQuantity] = React.useState<number>(1);

    const [navState, setNavState] = React.useState<navState>("start");
    const [selectedVariantIndex, setSelectedVariantIndex] = React.useState<number>(0);
    const getPrice = (): string => {
        if (props.isLoggedIn) {
            return `$${props.product.prices[0].price.toFixed(2)} (Member Price)`;
        } else {
            return `$${props.product.prices[0].price.toFixed(2)}`;
        }
    };

    const getNavState=(currentNavState : navState)=>{
        switch (currentNavState) {
            case "start":
                return (
                    <div className={`options-container ${currentNavState}`}>
                        <h3>{props.product.name}</h3>
                        <p>{getPrice()}</p>
                        <KButton
                            transitionType="expand-bg"
                            classes={`cta-main `}
                            buttonWidth="fit-to-content"
                            label={'Buy Now'}
                            iconStandard="icon-add"
                            iconPlacement="after-label"
                            buttonType="secondary"
                            actionFunc={() => setNavState("sub-or-once")}
                        />
                    </div>
                )
            case "sub-or-once":
                return (
                    <div className={`options-container ${currentNavState}`}>
                        <KButton
                            transitionType="expand-bg"
                            classes={`cta-main `}
                            buttonWidth="fit-width"
                            label={'Subscribe Now'}
                            iconStandard="icon-add"
                            iconPlacement="after-label"
                            buttonType="secondary"
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
                            actionFunc={() => setNavState("just-once")}
                        />
                    </div>
                )
            case "subscribe":
                return (
                    <div className={`options-container ${currentNavState}`}>

                        <Price basePrice={props.product.prices[selectedVariantIndex].price} currency={"$"} />
                    </div>
                )
        }
    }

    return (
        <div className="product-card">
            {getNavState(navState)}
        </div>
    );
};

export default MemberPriceCard;