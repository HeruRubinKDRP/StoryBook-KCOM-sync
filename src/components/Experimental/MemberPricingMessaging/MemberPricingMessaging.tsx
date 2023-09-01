import {Graphic, Igraphics} from "../../Graphic/Graphic";
import { MemberPricingMessagingStyled } from "./MemberPricingMessagingStyled";

export interface iMemberPriceMessagingProps {
    priceLogo?: Igraphics;
    infoFunction: ()=>void;
}

export const MemberPriceMessaging = (props: iMemberPriceMessagingProps) => {
    return(
        <MemberPricingMessagingStyled className="member-price-display">
            <div className="label pricing-info">
                <span>You save 25% with Auto-Delivery & <strong className="info-link" onClick={()=>props.infoFunction()}>Perks</strong></span>
                <span>
                    <Graphic graphicName="perks-logo-small"/>
                </span>
            </div>
        </MemberPricingMessagingStyled>
    )
}