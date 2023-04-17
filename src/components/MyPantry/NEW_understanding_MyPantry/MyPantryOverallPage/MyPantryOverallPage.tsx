import {LoyaltyTracker} from "components/Loyalty Experience/loyalty-tracker/loyalty-tracker";
import {SubscriptionCard} from "../SubscriptionCard/SubscriptionCard";
import {MyPantryOverallStyled} from "./mypantry-overall-page-styled";
import {iSubscriptionGrid, SubscriptionGrid} from '../SubscriptionGrid/SubscriptionGrid';
import {iSubscriptionCard, CardStatus} from '../SubscriptionCard/SubscriptionCard';
import { HeaderSection } from "../HeaderSection/HeaderSection";

export interface iMyPantryOverall {
    test?: string;
    deliveryGroups: iSubscriptionGrid[]
}

export const MyPantryOverall = (props: iMyPantryOverall) => {
    return (
        <MyPantryOverallStyled>
            <div>Header Nav</div>
            <LoyaltyTracker points={0} maxPoints={0} tickets={[]}></LoyaltyTracker>

            {props.deliveryGroups.map((deliverygroup, index) => (
                <>
                    <HeaderSection subscriptiontype={deliverygroup.subscriptiontype}></HeaderSection>
                    <SubscriptionGrid subscriptions={deliverygroup.subscriptions} subscriptiontype={deliverygroup.subscriptiontype}/>
                </>
            ))}

        </MyPantryOverallStyled>
    )
}