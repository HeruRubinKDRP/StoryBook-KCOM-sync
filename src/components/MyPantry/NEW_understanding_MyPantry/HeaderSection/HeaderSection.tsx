import Graphic from "components/Graphic/Graphic";
import {SubcriptionType} from "../SubscriptionGrid/SubscriptionGrid";
import {HeaderSectionStyled} from "./header-section-styled";

export interface iHeaderSection {
    subscriptiontype: SubcriptionType,
}

export const HeaderSection = (props: iHeaderSection) => {
    return (
        <HeaderSectionStyled>
            <div>
                <Graphic
                    graphicName={"SMART-logo"}></Graphic>{props.subscriptiontype}</div>
        </HeaderSectionStyled>
    )
}