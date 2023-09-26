import Image from "next/image";
import React from "react";
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

        </CellBasicStyled>
    )
}