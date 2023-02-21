import KButton from "../../../Kbutton/KButton";
import React from "react";
import {Styled_KSKPurchaseOption} from "./Styled_KSKPurchaseOption";
import {useResizeDetector} from "react-resize-detector";
import {StyledBrewerOnly} from "./StyledBrewerOnly";
import Graphic from "../../../Graphic/Graphic";
import KDropDown from "../../../DropDown/drop-down";

export interface iBrewerOnlyPurchaseOption{
    hasCoupon : boolean;
    couponMessage : string;
    couponAppliedMessage : string;
    openExternalLearnMoreFunction : ()=>void;
}

export const BrewerOnlyPurchaseOption =(props : iBrewerOnlyPurchaseOption)=>{

    const {width, height, ref} = useResizeDetector({
        refreshMode: 'debounce',
        refreshRate: 200,
        refreshOptions: {},
        handleHeight: false,
        skipOnMount: false,
        onResize: () => {},
    });

    const [couponApplied, setCouponApplied] = React.useState(false);

    const getCoupon =()=>{
        if(props.hasCoupon){
            return(
                <>
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
                                        <span>
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
                </>
            )
        }
    }

    return(
        <StyledBrewerOnly ref={ref} widthX={width || 0} heightY={height || 0}>
            <div className="deal-area">
                <div className="deal-price">$159.99</div>
                <h3>Brewer only</h3>
                <label className="strike-through-price">$179.99</label>
                <div className="savings-callout"></div>
            </div>
            <div className="coupon-area">
                {getCoupon()}
            </div>
            <div className="add-to-cart-container">
                <KDropDown
                    classes="quantity-selection"
                    dropDownType="medium"
                    defaultLabel={"1"}
                    label="1"
                    selected="1"
                    selectionOptions={[
                        {
                            label: "1",
                            value: "1"
                        },
                        {
                            label: "2",
                            value: "2"
                        },
                        {
                            label: "3",
                            value: "3"
                        },
                        {
                            label: "4",
                            value: "4"
                        }
                    ]}
                />
                <KButton
                    iconStandard="none"
                    label="Add to Cart"
                    buttonType="primary"
                    buttonWidth="fit-width"
                    classes="action"
                    transitionType="expand-bg"
                />
            </div>
        </StyledBrewerOnly>
    )

}