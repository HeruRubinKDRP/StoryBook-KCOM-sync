import React, {ReactElement, useState} from "react";
import {MyPantryGridStyled, MyPantryCardStyled} from "./MyPantryCardStyled";
import {getContainerQuery} from "../../_utilities/container-queriesTEST";
import {useResizeDetector} from "react-resize-detector";
import Graphic, {iconType} from "../../Graphic/Graphic";
import KButton, {iButton} from "../../Kbutton/KButton";
import {LifeBar} from "../../LifeBar/LifeBar";
import {number} from "prop-types";

export interface iMyPantryCard {
    graphicIconSmartAD?: iconType;
    graphicIconPodFilled?: iconType;
    graphicIconDeliveryTruck?: iconType;
    graphicIconAdDelivery?: iconType;
    graphicIconProductCanceledOoo?: iconType;
    graphicIconBoxes?: iconType;
    status: statusCard;
    productImage?: string;
    countLeft?: string;
    shipDate?: string;
    brandName?: string;
    productName?: string;
    onetimeNumber?: string;
    KButtonListRemove?: iButton[];
    KButtonListReactivate?: iButton[];
    KButtonListSmartActive?: iButton[];
    KButtonListAdActive?: iButton[];
    FunctionList: Function[];
}


export const MyPantryDemoCardsSMART: iMyPantryCard[] = [
    {
        status: "SMART-active",
        productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
        graphicIconDeliveryTruck: "delivery-truck",
        graphicIconPodFilled: "icon-pod-filled",
        graphicIconBoxes: "icon-boxes",
        countLeft: "12",
        shipDate: "May2, 2023",
        brandName: "Dunkin' Donuts®",
        productName: "Original Blend Coffee",
        FunctionList: [],
        KButtonListSmartActive: [
            {
                label: "Dunkin' Donuts®",
                secondaryLabel: "Original Blend Coffee",
                buttonType: "ecommerce-secondary-2-lines",
                iconPlacement: "after-label",
                iconStandard: "chevron-right",
                buttonWidth: "fit-width",
                transitionType: "none"
            },],
    },
    {
        status: "SMART-active",
        productImage: "https://images.keurig.com/is/image/keurig/Veranda-Blend-Coffee-Starbucks_en_general?fmt=png-alpha",
        graphicIconDeliveryTruck: "delivery-truck",
        graphicIconPodFilled: "icon-pod-filled",
        graphicIconBoxes: "icon-boxes",
        countLeft: "48",
        shipDate: "30+ Days From Now",
        brandName: "Starbucks®",
        productName: "Veranda Blend® Coffee",
        FunctionList: [],
        KButtonListSmartActive: [
            {
                label: "Starbucks®",
                secondaryLabel: "Veranda Blend® Coffee",
                buttonType: "ecommerce-secondary-2-lines",
                iconPlacement: "after-label",
                iconStandard: "chevron-right",
                buttonWidth: "fit-width",
                transitionType: "none"
            },],
    },
    {
        status: "SMART-active",
        productImage: "https://images.keurig.com/is/image/keurig/Major-Dickasons-Blend-Coffee-Peets-K-Cup_en_general?fmt=png-alpha",
        graphicIconDeliveryTruck: "delivery-truck",
        graphicIconPodFilled: "icon-pod-filled",
        graphicIconBoxes: "icon-boxes",
        countLeft: "33",
        shipDate: "30+ Days From Now",
        brandName: "Peet's Coffee®",
        productName: "Major Dickason's Blend® Coffee",
        FunctionList: [],
        KButtonListSmartActive: [
            {
                label: "Peet's Coffee®",
                secondaryLabel: "Major Dickason's Blend® Coffee",
                buttonType: "ecommerce-secondary-2-lines",
                iconPlacement: "after-label",
                iconStandard: "chevron-right",
                buttonWidth: "fit-width",
                transitionType: "none"
            },],
    },
    {
        status: "one-time",
        productImage:
            "https://images.keurig.com/is/image/keurig/descaling-solution_5000367641?fmt=png-alpha",
        countLeft: "12",
        shipDate: "May2, 2023121221",
        brandName: "Green Mountain Coffee",
        productName: "Nantucket Blend® Coffee",
        graphicIconDeliveryTruck: "delivery-truck",
        graphicIconPodFilled: "icon-pod-filled",
        graphicIconBoxes: "icon-boxes",
        onetimeNumber: "2",
        KButtonListRemove: [
            {
                label: "Remove",
                buttonType: "ecommerce-secondary",
                iconPlacement: "right-edge",
                iconStandard: "remove-icon",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            }
        ],
        FunctionList: [() => {
        }],
    },
    {
        status: "cancel",
        productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
        brandName: "Dunkin' Donuts®",
        productName: "Original Blend Coffee",
        graphicIconProductCanceledOoo: "icon-product-canceled-OOO",
        KButtonListReactivate: [
            {
                label: "Reactivate",
                buttonType: "ecommerce-secondary",
                iconPlacement: "right-edge",
                iconStandard: "plus-icon",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            }
        ],
        FunctionList: [() => {
        }],
    },
    {
        status: "add-item-smart",
        graphicIconSmartAD: "SMART-logo",
        KButtonListReactivate: [
            {
                label: "Add an Item",
                buttonType: "primary",
                iconPlacement: "right-edge",
                iconStandard: "plus-icon",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            }
        ],
        FunctionList: [() => {
        }],
    },
];
export const MyPantryDemoCardsAD: iMyPantryCard[] = [
    {
        status: "AD-active",
        productImage:
            "https://images.keurig.com/is/image/keurig/Coffee-Chicory-K-Cup-Community-Coffee_en_general?fmt=png-alpha",
        countLeft: "12",
        shipDate: "May2, 2023121221",
        brandName: "Green Mountain Coffee",
        productName: "Nantucket Blend® Coffee",
        onetimeNumber: "2",
        graphicIconDeliveryTruck: "delivery-truck",
        graphicIconPodFilled: "icon-pod-filled",
        graphicIconBoxes: "icon-boxes",
        KButtonListAdActive: [
            {
                label: "Dunkin' Donuts®",
                secondaryLabel: "Original Blend Coffee",
                buttonType: "ecommerce-secondary-2-lines",
                iconPlacement: "after-label",
                iconStandard: "chevron-right",
                buttonWidth: "fit-width",
                transitionType: "none"
            }
        ],
        FunctionList: [() => {
        }],
    },
    {
        status: "one-time",
        productImage:
            "https://images.keurig.com/is/image/keurig/descaling-solution_5000367641?fmt=png-alpha",
        countLeft: "12",
        shipDate: "May2, 2023121221",
        brandName: "Green Mountain Coffee",
        productName: "Nantucket Blend® Coffee",
        graphicIconDeliveryTruck: "delivery-truck",
        graphicIconPodFilled: "icon-pod-filled",
        graphicIconBoxes: "icon-boxes",
        onetimeNumber: "2",
        KButtonListRemove: [
            {
                label: "Remove",
                buttonType: "ecommerce-secondary",
                iconPlacement: "right-edge",
                iconStandard: "remove-icon",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            }
        ],
        FunctionList: [() => {
        }],
    },
    {
        status: "cancel",
        productImage: "https://images.keurig.com/is/image/keurig/original-blend-coffee-dd_en_general?fmt=png-alpha",
        brandName: "Dunkin' Donuts®",
        productName: "Original Blend Coffee",
        graphicIconProductCanceledOoo: "icon-product-canceled-OOO",
        KButtonListReactivate: [
            {
                label: "Reactivate",
                buttonType: "ecommerce-secondary",
                iconPlacement: "right-edge",
                iconStandard: "plus-icon",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            }
        ],
        FunctionList: [() => {
        }],
    },
    {
        status: "add-item-ad",
        graphicIconAdDelivery: "icon-AD-Delivery",
        KButtonListReactivate: [
            {
                label: "Add an Item",
                buttonType: "primary",
                iconPlacement: "right-edge",
                iconStandard: "plus-icon",
                buttonWidth: "fit-width",
                transitionType: "expand-bg"
            }
        ],
        FunctionList: [() => {
        }],
    },
];


export type statusCard =
    "SMART-active"
    | "AD-active"
    | "one-time"
    | "cancel"
    | "grid"
    | "add-item-smart"
    | "add-item-ad";

export const MyPantryCard = (props: iMyPantryCard) => {

    const {width, ref} = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 100,
        refreshOptions: {
            leading: true,
            trailing: false,
        },
        handleHeight: false,
        skipOnMount: false,
        onResize: () => {
        }
    });
    const [viewportWidth, setViewportWidth] = useState
    < number | undefined > (width)
    if (width !== undefined && viewportWidth !== width) {
        setViewportWidth(width)
    }
    const GetGridSMART = (): ReactElement[] => {
        const tilesSMART = [];
        for (let i = 0; i < MyPantryDemoCardsSMART.length; i++) {
            tilesSMART.push(
                GetComponentState(MyPantryDemoCardsSMART[i].status, MyPantryDemoCardsSMART[i])
            );
        }
        return [
            <div>
                <div className={"header-container"}>
                    <div className={"GraphicContainer"}>
                        <Graphic graphicName={props.graphicIconSmartAD}></Graphic>
                    </div>
                    <div>
                        <div className={"subscription-title"}>Smart Delivery</div>
                        <div className={""}>53 South Ave, Burlington MA</div>
                    </div>
                </div>
                <div className="subscription-tile">{tilesSMART}</div>
            </div>
        ];
    }
    const GetGridAD = (): ReactElement[] => {
        const tilesAD = [];
        for (let i = 0; i < MyPantryDemoCardsAD.length; i++) {
            tilesAD.push(
                GetComponentState(MyPantryDemoCardsAD[i].status, MyPantryDemoCardsAD[i])
            );
        }
        return [
            <div>
                <div className={"header-container"}>
                    <div className={"GraphicContainer"}>
                        <Graphic
                            graphicName={props.graphicIconAdDelivery}></Graphic>
                    </div>
                    <div>
                        <div className={"subscription-title"}>Scheduled Auto-Delivery</div>
                        <div className={""}>Name</div>
                    </div>
                </div>
                <div key="gridAD" className="subscription-tile">{tilesAD}</div>
            </div>];
    }
    const GetComponentState = (mode: statusCard, card: iMyPantryCard): ReactElement => {
        switch (mode) {
            case "SMART-active":
                return (
                    <>
                        <MyPantryCardStyled>
                            <div className={"content-area"}>
                                <div className={"StatusLabel"}>
                                    <div className={"label"}>
                                        <div className={"ActiveLabel"}></div>
                                        <div className={"StatusTitle"}>Active</div>
                                    </div>


                                    <div className={"LoyaltyPoints"}>+140pts/
                                        <div className={"GraphicContainer"}>
                                            <Graphic graphicName={card.graphicIconDeliveryTruck}></Graphic>
                                        </div>
                                    </div>
                                </div>
                                <div className={"ProductContent"}>
                                    <div className={"productImageCard"}><img src={card.productImage} alt=""/></div>
                                    <div className={"ProductInfo"}>
                                        <div className={"InfoContainer"}>
                                            <div className={"icon-container"}>
                                                <div className={"GraphicContainer"}>
                                                    <Graphic graphicName={card.graphicIconPodFilled}></Graphic>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={"CountContainer"}>
                                                    <div className={"CountLeft"}>{card.countLeft}</div>
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
                                                graphicName={props.graphicIconDeliveryTruck}></Graphic>
                                            </div></div>
                                            <div>
                                                <div className={"NextShip"}>Next Ship</div>
                                                <div className={"ShipDate"}>{card.shipDate}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"bottomPart"}>
                                    {card.KButtonListSmartActive && card.KButtonListSmartActive.map((button, index) => (
                                        <KButton
                                            actionFunc={card.FunctionList[index]}
                                            key={button.label}
                                            label={button.label}
                                            secondaryLabel={button.secondaryLabel}
                                            buttonType={button.buttonType}
                                            iconPlacement={button.iconPlacement}
                                            iconStandard={button.iconStandard}
                                            buttonWidth={button.buttonWidth}
                                            transitionType={button.transitionType}
                                            iconSize={""}
                                        />
                                    ))}
                                    {/*                                    <div className={"brandName"}>{card.brandName}</div>
                                    <div className={"productName"}>{card.productName}</div>*/}
                                </div>
                            </div>
                        </MyPantryCardStyled>
                    </>
                )
                break;
            case "AD-active":
                return (
                    <>
                        <MyPantryCardStyled>
                            <div className={"content-area"}>
                                <div className={"StatusLabel"}>
                                    <div className={"label"}>
                                        <div className={"ActiveLabel"}></div>
                                        <div className={"StatusTitle"}>Active</div>
                                    </div>
                                    <div className={"LoyaltyPoints"}>+140pts/
                                        <div className={"GraphicContainer"}>
                                            <Graphic graphicName={card.graphicIconDeliveryTruck}></Graphic>
                                        </div>
                                    </div>
                                </div>
                                <div className={"ProductContent"}>
                                    <div className={"productImageCard"}><img src={card.productImage} alt=""/></div>
                                    <div className={"ProductInfo"}>
                                        <div className={"Container"}>
                                            <div className={"icon-container"}>
                                                <div className={"GraphicContainer"}><Graphic
                                                    graphicName={props.graphicIconBoxes}></Graphic>
                                                </div></div>
                                            <div>
                                                <div className={"NextShip"}>3 boxes</div>
                                                <div className={"NextShip"}>every</div>
                                                <div className={"ShipDate"}>4 weeks</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"bottomPart"}>
                                    {card.KButtonListAdActive && card.KButtonListAdActive.map((button, index) => (
                                        <KButton
                                            actionFunc={card.FunctionList[index]}
                                            key={button.label}
                                            label={button.label}
                                            secondaryLabel={button.secondaryLabel}
                                            buttonType={button.buttonType}
                                            iconPlacement={button.iconPlacement}
                                            iconStandard={button.iconStandard}
                                            buttonWidth={button.buttonWidth}
                                            transitionType={button.transitionType}
                                            iconSize={""}
                                        />
                                    ))}
                                    {/*                                    <div className={"brandName"}>{card.brandName}</div>
                                    <div className={"productName"}>{card.productName}</div>*/}
                                </div>
                            </div>
                        </MyPantryCardStyled>
                    </>
                )
                break;
            case "one-time":
                return (
                    <>
                        <MyPantryCardStyled>
                            <div className={"content-area"}>
                                <div className={"center"}>
                                    <div className={"StatusLabel"}>
                                        <div className={"label"}>
                                            <div className={"OneTimeLabel"}></div>
                                            <div className={"StatusTitle"}>One-Time</div>
                                        </div>
                                        <div className={"LoyaltyPoints"}>+140pts/
                                            <div className={"GraphicContainer"}>
                                                <Graphic graphicName={card.graphicIconDeliveryTruck}></Graphic>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"ProductContent"}>
                                        <div className={"OneTime"}>{card.onetimeNumber}</div>
                                        <div className={"productImageCard"}><img src={card.productImage} alt=""/>
                                        </div>
                                        <div className={"ProductInfo"}>
                                            <div className={"Container"}>
                                                <div>
                                                    <div className={"brandName"}>{card.brandName}</div>
                                                    <div className={"productName"}>{card.productName}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"bottomPart"}>
                                        {card.KButtonListRemove && card.KButtonListRemove.map((button, index) => (
                                            <KButton
                                                actionFunc={card.FunctionList[index]}
                                                key={button.label}
                                                label={button.label}
                                                buttonType={button.buttonType}
                                                iconPlacement={button.iconPlacement}
                                                iconStandard={button.iconStandard}
                                                buttonWidth={button.buttonWidth}
                                                transitionType={button.transitionType}
                                                iconSize={""}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MyPantryCardStyled>
                    </>
                )
                break;
            case "cancel":
                return (
                    <>
                        <MyPantryCardStyled>
                            <div className={"canceled"}>
                                <div className={"center"}>
                                    <div className={"StatusLabel"}>
                                        <div className={"label"}>
                                            <div className={"CanceledLabel"}></div>
                                            <div className={"StatusTitle"}>Canceled</div>
                                        </div>
                                    </div>
                                    <div className={"ProductContent"}>
                                        <div className={"iconCanceled"}><Graphic
                                            graphicName={card.graphicIconProductCanceledOoo}></Graphic></div>
                                        <div className={"productImageCard"}><img src={card.productImage} alt=""/>
                                        </div>
                                        <div className={"ProductInfo"}>
                                            <div className={"Container"}>
                                                <div>
                                                    <div className={"brandName"}>{card.brandName}</div>
                                                    <div className={"productName"}>{card.productName}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"canceledBottomPart"}>
                                {card.KButtonListReactivate && card.KButtonListReactivate.map((button, index) => (
                                    <KButton
                                        actionFunc={card.FunctionList[index]}
                                        key={button.label}
                                        label={button.label}
                                        buttonType={button.buttonType}
                                        iconPlacement={button.iconPlacement}
                                        iconStandard={button.iconStandard}
                                        buttonWidth={button.buttonWidth}
                                        transitionType={button.transitionType}
                                        iconSize={""}
                                    />
                                ))}
                            </div>
                        </MyPantryCardStyled>
                    </>
                )
                break;
            case "add-item-smart":
                return (
                    <>
                        <MyPantryCardStyled>
                            <div className={"add-items-container"}>
                                <div className={"StatusLabel"}>
                                    <div className={""}>
                                        <div className={"StatusTitle"}></div>
                                    </div>
                                </div>
                                <div className={"GraphicSmart"}>
                                    <Graphic graphicName={card.graphicIconSmartAD}></Graphic>
                                </div>
                                <div className={"bottomPart"}>
                                    {card.KButtonListReactivate && card.KButtonListReactivate.map((button, index) => (
                                        <KButton
                                            actionFunc={card.FunctionList[index]}
                                            key={button.label}
                                            label={button.label}
                                            buttonType={button.buttonType}
                                            iconPlacement={button.iconPlacement}
                                            iconStandard={button.iconStandard}
                                            buttonWidth={button.buttonWidth}
                                            transitionType={button.transitionType}
                                            iconSize={""}
                                        />
                                    ))}
                                </div>
                            </div>
                        </MyPantryCardStyled>
                    </>
                );
                break;
            case "add-item-ad":
                return (
                    <>
                        <MyPantryCardStyled>
                            <div className={"add-items-container"}>
                                <div className={"StatusLabel"}>
                                    <div className={"label"}>
                                    <div className={""}>
                                        <div className={"StatusTitle"}></div>
                                    </div>
                                    </div>
                                </div>
                                <div className={"GraphicSmart"}>
                                    <Graphic graphicName={card.graphicIconAdDelivery}></Graphic>
                                </div>
                                <div className={"bottomPart"}>
                                    {card.KButtonListReactivate && card.KButtonListReactivate.map((button, index) => (
                                        <KButton
                                            actionFunc={card.FunctionList[index]}
                                            key={button.label}
                                            label={button.label}
                                            buttonType={button.buttonType}
                                            iconPlacement={button.iconPlacement}
                                            iconStandard={button.iconStandard}
                                            buttonWidth={button.buttonWidth}
                                            transitionType={button.transitionType}
                                            iconSize={""}
                                        />
                                    ))}
                                </div>
                            </div>
                        </MyPantryCardStyled>
                    </>
                );
                break;
            case "grid":
                return (
                    <>
                        <div>
                            {[...GetGridSMART(), ...GetGridAD()]}
                        </div>
                    </>
                );
            default:
                return (
                    <MyPantryCardStyled>
                        <div>Invalid status</div>
                    </MyPantryCardStyled>
                );
                break;
        }
    }

    return (
        <MyPantryGridStyled className={`MyPantryGrid ${getContainerQuery(
            viewportWidth
        )}`} ref={ref}>
            {GetComponentState(props.status, props)}
            {/*<div className={"ABC"}><p>{viewportWidth}</p></div>*/}

        </MyPantryGridStyled>
    )
}
