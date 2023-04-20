import Graphic from "components/Graphic/Graphic";
import { SubcriptionType } from "../SubscriptionGrid/SubscriptionGrid";
import { HeaderSectionStyled } from "./header-section-styled";

export interface iHeaderSection{
    subscriptiontype: SubcriptionType,
}

export const HeaderSection = (props:iHeaderSection) => {
    return(
        <HeaderSectionStyled>
            <div><Graphic
                graphicName={"icon-shipping-truck-no-logo"}></Graphic>HEADER GRID {props.subscriptiontype}</div>
        </HeaderSectionStyled>
    )
}