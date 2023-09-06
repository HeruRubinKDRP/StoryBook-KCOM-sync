import React, {useState} from 'react';
import {Graphic, Igraphics} from "../../Graphic/Graphic";
import {MemberPricingMessagingStyled} from "./MemberPricingMessagingStyled";

export interface iMemberPriceMessagingProps {
    priceLogo?: Igraphics;
    infoFunction: () => void;
}

export const MemberPriceMessaging = (props: iMemberPriceMessagingProps) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    return (

        <MemberPricingMessagingStyled className="member-price-display">
            {tooltipVisible && (
                <div className={"perks-tooltip"}>Keurig Perks gives subscribers like you 25% off all recurring Auto-Delivery and one-time beverage, accessory, & brewer orders.
                </div>
            )}

            <div className="label pricing-info">
                <span>You save 25% with Auto-Delivery &
                    <strong className="info-link"
                            onClick={() => props.infoFunction()}
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}>Perks
                        {tooltipVisible && (
                            <div className={"tooltip-caret"}>
                            </div>
                        )}
                        <Graphic graphicName="perks-logo-small"/>
                        </strong>
                </span>
                <span>

                </span>
            </div>
        </MemberPricingMessagingStyled>
    )
}