import KButton from "../../../Kbutton/KButton";
import React from "react";
import {Styled_KSKPurchaseOption} from "./Styled_KSKPurchaseOption";
import {useResizeDetector} from "react-resize-detector";
import {StyledBrewerOnly} from "./StyledBrewerOnly";
import Graphic from "../../../Graphic/Graphic";
import KDropDown from "../../../DropDown/drop-down";
import {CTA_WithQuantity} from "../../../CTA_With_Quantity/CTA_WithQuantity";
import { MemberPriceMessaging } from "components/Experimental/MemberPricingMessaging/MemberPricingMessaging";

export interface iBrewerOnlyPurchaseOption{
    classes? : string;
    hasCoupon : boolean;
    couponMessage : string;
    couponAppliedMessage : string;
    openExternalLearnMoreFunction : ()=>void;
    addToCartFunction? : () => void;
}

export const BrewerOnlyPurchaseOption =(props : iBrewerOnlyPurchaseOption)=>{

    const {width, height, ref} = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 500,
        refreshOptions: {
            trailing: false,
            leading: true,
        },
        handleHeight: false,
        skipOnMount: false,
        onResize: () => {},
    });

    const [couponApplied, setCouponApplied] = React.useState(false);

    const getCoupon =()=>{
        if(props.hasCoupon){
            return(
                <div className="coupon-area">
                    <div className="coupon-item">
                        {
                            couponApplied ?
                                <div className="coupon-applied">
                                    <Graphic graphicName="checkmark-circled" />
                                    <span>{props.couponAppliedMessage}</span>
                                </div>
                                :
                            <>
                                <KButton
                                    iconStandard="none"
                                    label="Apply Coupon"
                                    buttonType="secondary"
                                    buttonWidth="fit-to-content"
                                    classes="action"
                                    transitionType="expand-bg"
                                    actionFunc={()=>{setCouponApplied(true)}}
                                />
                                <div className="coupon-message-area">
                                    <div className="coupon-message">
                                        <span className="coupon-copy">
                                            {props.couponMessage}
                                        </span>
                                        <KButton
                                            label="Learn More"
                                            buttonType="text-icon-noBG"
                                            iconStandard="launch-pop-up"
                                            iconPlacement="after-label"
                                            buttonWidth="fit-to-content"
                                            classes="learn-more"
                                            transitionType="expand-bg"
                                            actionFunc={props.openExternalLearnMoreFunction}
                                        />
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            )
        }
    }

    return(
        <StyledBrewerOnly className={`item-only-option ${props.classes}`} ref={ref} widthX={width || 0} heightY={height || 0}>
            <div className="deal-area">
                <div className="deal-price">$159.99</div>
                <h3>Buy Brewer only</h3>
                <label className="strike-through-price">$179.99</label>
                <MemberPriceMessaging infoFunction={function(): void {
                    throw new Error("");
                } }></MemberPriceMessaging>
                <div className="savings-callout"></div>
            </div>
            <div className={"coupon-area-container"}>
            <img src="./product-images/kcs/kcs-0.png" alt="" className={"kcs-image"}/>

                {getCoupon()}

            </div>
          <CTA_WithQuantity
              totalQuantity={4}
              buttonLabel="Add to Cart"
              addToCartFunction={props.addToCartFunction}
          />
        </StyledBrewerOnly>
    )

}