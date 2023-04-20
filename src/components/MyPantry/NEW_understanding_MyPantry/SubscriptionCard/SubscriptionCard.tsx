import Graphic from "components/Graphic/Graphic";
import {LifeBar} from "components/LifeBar/LifeBar";
import {SubscriptionCardStyled} from "./subscription-card-styled"

export interface iSubscriptionCard {
    countLeft?: string;
    shipDate?: string;
    productImage: string;
    countBox?: string;
    productName: string;
    brandName: string;
    status: CardStatus;
}

export type CardStatus =
    "SMART-active"
    | "AD-active";

export const SubscriptionCard = (props: iSubscriptionCard) => {
    const getStatus = () => {
        switch (props.status) {
            case "AD-active":
                return (
                        <div className={"invisible-button"}>
                            <div className={"content-area"}>
                                <div className={"center"}>
                                    <div className={"StatusLabel"}>
                                        <div className={"label"}>
                                            <div className={"ActiveLabel"}></div>
                                            <div className={"StatusTitle"}>Active</div>
                                        </div>
                                        <div className={"LoyaltyPoints"}>+140pts/
                                            <div className={"GraphicTruckContainer"}>
                                                <Graphic graphicName={"icon-shipping-truck-no-logo"}
                                                         colorOverride="#BB9985"></Graphic>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"ProductContent"}>
                                        <div className={"productImageCard"}><img src={props.productImage} alt=""/>
                                        </div>
                                        <div className={"ProductInfo"}>
                                            <div className={"Container"}>
                                                <div className={"icon-container"}>
                                                    <div className={"GraphicContainer"}>
                                                        <Graphic graphicName={"icon-boxes"}></Graphic>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={"CountContainer"}>
                                                        <div className={"CountBox"}>{props.countBox}</div>
                                                        <div className={"text"}>box</div>

                                                    </div>
                                                    <div className={"ShipDate"}>every 4 weeks</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"bottomPart"}>
                                        <div className={"flexRow"}>
                                            <div>
                                                <div className={"brandName"}>{props.brandName}</div>
                                                <div className={"productName"}>{props.productName}</div>
                                            </div>
                                            <Graphic graphicName={"chevron-right"}></Graphic>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            case "SMART-active":
                return (
                        <div className={"invisible-button"}>
                            <div className={"content-area"}>
                                <div className={"StatusLabel"}>
                                    <div className={"label"}>
                                        <div className={"ActiveLabel"}></div>
                                        <div className={"StatusTitle"}>Active</div>
                                    </div>


                                    <div className={"LoyaltyPoints"}>+140pts/
                                        <div className={"GraphicTruckContainer"}>
                                            <Graphic graphicName={"icon-shipping-truck-no-logo"}
                                                     colorOverride="#BB9985"></Graphic>
                                        </div>
                                    </div>
                                </div>
                                <div className={"ProductContent"}>
                                    <div className={"productImageCard"}><img src={props.productImage} alt=""/></div>
                                    <div className={"ProductInfo"}>
                                        <div className={"InfoContainer"}>
                                            <div className={"icon-container"}>
                                                <div className={"GraphicContainer"}>
                                                    <Graphic graphicName={"icon-pod-filled"}></Graphic>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={"CountContainer"}>
                                                    <div className={"CountLeft"}>{props.countLeft}</div>
                                                    <div className={"text"}>Left</div>
                                                </div>
                                                <LifeBar
                                                    barCurrentAmount={24}
                                                    barFullAmount={50}
                                                    barHeight="1rem"
                                                    barWidth="15rem"
                                                    stylePreset="KCOM"
                                                    borderColor={"red"}/>
                                            </div>
                                        </div>
                                        <div className={"Container"}>
                                            <div className={"icon-container"}>
                                                <div className={"GraphicContainer"}><Graphic
                                                    graphicName={"icon-shipping-truck-no-logo"}></Graphic>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={"NextShip"}>Next Ship</div>
                                                <div className={"ShipDate"}>{props.shipDate}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"bottomPart"}>
                                    <div className={"flexRow"}>
                                        <div>
                                            <div className={"brandName"}>{props.brandName}</div>
                                            <div className={"productName"}>{props.productName}</div>
                                        </div>
                                        <Graphic graphicName={"chevron-right"}></Graphic>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
        }
    }
    return (
        <SubscriptionCardStyled>
            {getStatus()}
        </SubscriptionCardStyled>
    )
}