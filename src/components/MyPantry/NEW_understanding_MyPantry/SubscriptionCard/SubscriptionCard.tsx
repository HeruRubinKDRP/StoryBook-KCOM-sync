import Graphic from "components/Graphic/Graphic";
import KButton, {iButton} from "components/Kbutton/KButton";
import {LifeBar} from "components/LifeBar/LifeBar";
import {SubscriptionCardStyled} from "./subscription-card-styled"

export interface iSubscriptionCard {
    onetimeNumber?: string;
    countLeft?: string;
    shipDate?: string;
    productImage?: string;
    countBox?: string;
    productName?: string;
    brandName?: string;
    status: CardStatus;
    mode: CardMode;
}

export type CardStatus =
    "Active"
    | "Inactive"
    | "one-time"
    | "Canceled"
    | "Add-item-smart";

export type CardMode =
    "SMART"
    | "AD"
    | "one-time"
    | 'Canceled'
    | 'add-item-smart';


export const SubscriptionCard = (props: iSubscriptionCard) => {
    const getStatus = () => {
        switch (props.mode) {
            case "AD":
                return (
                    <div className={"invisible-button"}>
                        <div className={"content-area"}>
                            <div className={"center"}>
                                <div className={"StatusLabel"}>
                                    <div className={"label"}>
                                        <div className={`Label ${props.status}`}></div>
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
            case "SMART":
                return (
                    <div className={"invisible-button"}>
                        <div className={"content-area"}>
                            <div className={"StatusLabel"}>
                                <div className={"label"}>
                                    <div className={`Label ${props.status}`}></div>
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
            case "one-time":
                return (

                    <div className={"invisible-button"}>
                        <div className={"content-area"}>
                            <div className={"center"}>
                                <div className={"StatusLabel"}>
                                    <div className={"label"}>
                                        <div className={`Label ${props.status}`}></div>
                                        <div className={"StatusTitle"}>One-Time</div>
                                    </div>
                                    <div className={"LoyaltyPoints"}>+140pts/
                                        <div className={"GraphicTruckContainer"}>
                                            <Graphic graphicName={"icon-shipping-truck-no-logo"}
                                                     colorOverride="#BB9985"></Graphic>
                                        </div>
                                    </div>
                                </div>

                                <div className={"ProductContent"}>
                                    <div className={"OneTime"}>{props.onetimeNumber}</div>
                                    <div className={"productImageCard"}><img src={props.productImage} alt=""/>
                                    </div>
                                    <div className={"ProductInfo"}>
                                        <div className={"Container"}>
                                            <div>
                                                <div className={"brandName"}>{props.brandName}</div>
                                                <div className={"productName"}>{props.productName}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"bottomPart"}>
                                    <KButton
                                        label="Remove"
                                        buttonType="ecommerce-secondary"
                                        iconPlacement="right-edge"
                                        iconStandard="remove-icon"
                                        buttonWidth="fit-width"
                                        transitionType="expand-bg"
                                        iconSize={"1.5rem"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
                break;
            case "Canceled":
                return (
                    <div className={"invisible-button"}>
                        <div className={"canceled"}>
                            <div className={"center"}>
                                <div className={"StatusLabel"}>
                                    <div className={"label"}>
                                        <div className={`Label ${props.status}`}></div>
                                        <div className={"StatusTitle"}>Canceled</div>
                                    </div>
                                </div>
                                <div className={"ProductContent"}>
                                    <div className={"iconCanceled"}><Graphic
                                        graphicName={"icon-product-canceled-OOO"}></Graphic></div>
                                    <div className={"productImageCard"}><img src={props.productImage} alt=""/>
                                    </div>
                                    <div className={"ProductInfo"}>
                                        <div className={"Container"}>
                                            <div>
                                                <div className={"brandName"}>{props.brandName}</div>
                                                <div className={"productName"}>{props.productName}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"canceledBottomPart"}>
                            <KButton
                                label="Reactivate"
                                buttonType="ecommerce-secondary"
                                iconPlacement="right-edge"
                                iconStandard="plus-icon"
                                buttonWidth="fit-width"
                                transitionType="expand-bg"
                                iconSize={""}
                            />
                        </div>
                    </div>
                )
                break;
            case "add-item-smart":
                return (
                            <div className={"invisible-button"}>
                                <div className={"add-items-container"}>
                                    <div className={"StatusLabel"}>
                                        <div className={""}>
                                            <div className={"StatusTitle"}></div>
                                        </div>
                                    </div>
                                    <div className={"GraphicSmart-AD"}>
                                        <Graphic graphicName={"SMART-logo"}></Graphic>
                                    </div>
                                    <div className={"bottomPart"}>
                                        <KButton
                                            label="Add an Item"
                                            buttonType="primary"
                                            iconPlacement="right-edge"
                                            iconStandard="plus-icon"
                                            buttonWidth="fit-width"
                                            transitionType="expand-bg"
                                        />
                                    </div>
                                </div>
                            </div>
                );
                break;
        }
    }
    return (
        <SubscriptionCardStyled className={`${props.status}`}>
            {getStatus()}
        </SubscriptionCardStyled>
    )
}