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
                <div className={"perks-tooltip"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
                    urna eget felis dictum imperdiet. Mauris orci nisi, molestie at posuere eu, convallis eu ipsum.
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