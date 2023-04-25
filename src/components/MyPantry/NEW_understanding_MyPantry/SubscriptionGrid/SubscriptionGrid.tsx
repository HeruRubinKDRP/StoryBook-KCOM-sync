import {iSubscriptionCard, SubscriptionCard} from "../SubscriptionCard/SubscriptionCard";
import {SubscriptionGridStyled} from "./subscription-grid-styled";

export interface iSubscriptionGrid {
    subscriptiontype: SubcriptionType,
    subscriptions: iSubscriptionCard[]
}

export type SubcriptionType =
"Smart Delivery"
| "Scheduled Auto-Delivery";


export const SubscriptionGrid = (props: iSubscriptionGrid) => {


    return (
        <SubscriptionGridStyled>
            {props.subscriptions.map((card, index) => (
                <SubscriptionCard status={card.status} productImage={card.productImage} productName={card.productName}
                                  brandName={card.brandName} countLeft={card.countLeft} shipDate={card.shipDate}
                                  countBox={card.countBox} onetimeNumber={card.onetimeNumber} mode={card.mode}/>
            ))}
        </SubscriptionGridStyled>
    )
}