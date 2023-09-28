import Image from "next/image";
import React, {Dispatch, SetStateAction} from "react";
import {CellBasicStyled} from "./CellBasicStyled";
import KButton from "../../../Kbutton/KButton";
import {iconType} from "../../../Graphic/Graphic";
import {CellTextArea} from "./CellTextArea/CellTextArea";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";

export type iCellItem = {
    index?: number;
    cellType: 'basic' | 'chat-text' | 'suggestions' | 'image' | 'hero' | 'banner' | 'top-title' | 'highlight-item'; // Add more cell types as needed
    title?: string;
    secondaryTitle?: string;
    highlightImage?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    fontColor?: string;
    CTA?: string;
    iconStandard?: iconType;
    chatFunction?: (message: string) => void;
};

export const CellBase = (props : iCellItem) => {


    return(
        <CellBasicStyled
            style={{backgroundColor : props.backgroundColor}}
            key={props.index+"-inner"} className={`cell-${props.index} 
            ${props.cellType}
            cell-base`}   >
            <div className="cell-content">
                <CellTextArea
                    title={props.title ?? ""}
                    secondaryTitle={props.secondaryTitle ?? ""}
                    CTA={props.CTA ?? ""}
                    iconStandard={props.iconStandard ?? "none"}
                    fontColor={props.fontColor ?? colorNameToValue("dark-roast")}
                />

            </div>
            {
                props.highlightImage &&
                <Image
                    className="highlight-image"
                    height={1200}
                    width={500}
                    src={props.highlightImage}
                    alt={props.title ?? ""}
                    unoptimized={true}
                />

            }
            {
                props.backgroundImage &&
                <Image
                    className="background-image"
                    src={props.backgroundImage ?? ""}
                    alt={"background image"}
                    height={1250}
                    width={2800}
                    unoptimized={true}
                />
            }

            {
                props.cellType === "chat-text" &&
                <div className="actions">
                    <KButton
                        classes={"cell-cta"}
                        label={ `Help me find a coffee maker?`}
                        buttonType="secondary"
                        buttonWidth="fit-to-content"
                        iconPlacement="after-label"
                        iconStandard={"none"}
                        transitionType="expand-bg"
                        actionFunc={ () => props.chatFunction ? props.chatFunction("Help me find a coffee maker?") : null}
                    />
                    <KButton
                        classes={"cell-cta"}
                        label={`How do I clean my brewer?`}
                        buttonType="secondary"
                        buttonWidth="fit-to-content"
                        iconPlacement="after-label"
                        iconStandard={"none"}
                        transitionType="expand-bg"
                        actionFunc={ () => props.chatFunction ? props.chatFunction("How do I clean my brewer?") : null}
                    />
                    <KButton
                        classes={"cell-cta"}
                        label={`When is my next Auto-Delivery shipment?`}
                        buttonType="secondary"
                        buttonWidth="fit-to-content"
                        iconPlacement="after-label"
                        iconStandard={"none"}
                        transitionType="expand-bg"
                        actionFunc={ () => props.chatFunction ? props.chatFunction("When is my next Auto-Delivery shipment?") : null}
                    />
                    <KButton
                        classes={"cell-cta"}
                        label={`Why do they roast coffee?`}
                        buttonType="secondary"
                        buttonWidth="fit-to-content"
                        iconPlacement="after-label"
                        iconStandard={"none"}
                        transitionType="expand-bg"
                        actionFunc={ () => props.chatFunction ? props.chatFunction("Why do they roast coffee?") : null}
                    />
                    <KButton
                        classes={"cell-cta"}
                        label={`How do I recycle my pods?`}
                        buttonType="secondary"
                        buttonWidth="fit-to-content"
                        iconPlacement="after-label"
                        iconStandard={"none"}
                        transitionType="expand-bg"
                        actionFunc={ () => props.chatFunction ? props.chatFunction("How do I recycle my pods?") : null}
                    />
                </div>
            }

        </CellBasicStyled>
    )
}