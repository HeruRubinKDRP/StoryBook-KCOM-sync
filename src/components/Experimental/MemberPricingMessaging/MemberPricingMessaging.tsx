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
                <div className={"perks-tooltip"}>With Auto-Delivery & Perks, members save 25% on recurring and one time orders as long as you have an active recurring order in the last 12 weeks. AND earn points towards free coffee & more with each delivery!
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