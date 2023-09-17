import Image from "next/image";
import React from "react";
import {CellBasicStyled} from "./CellBasicStyled";
import KButton from "../../../Kbutton/KButton";

export type iCellItem = {
    index?: number;
    cellType: 'basic' | 'image' | 'hero' | 'banner'; // Add more cell types as needed
    title?: string;
    secondaryTitle?: string;
    highlightImage?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    fontColor?: string;
    CTA?: string;
};

export const CellBase = (props : iCellItem) => {
    console.log("Rendering CellBase with props:", props);

    return(
        <CellBasicStyled
            style={{backgroundColor : props.backgroundColor}}
            key={props.index+"-inner"} className={`cell-${props.index} 
            ${props.cellType}
            cell-base`}   >
            <div className="cell-content">
                <h3 style={{color:props.fontColor}}>{props.title}</h3>
                {
                    props.secondaryTitle &&
                    <p style={{color : props.fontColor}}>{props.secondaryTitle}</p>
                }
                {
                    props.CTA &&
                    <KButton
                        label={props.CTA ?? "Learn More"}
                        buttonType="primary"
                        buttonWidth="fit-to-content"
                        iconPlacement="after-label"
                        iconStandard="none"
                        transitionType="expand-bg"
                    />
                }
            </div>
            {
                props.highlightImage &&
                <Image className="highlight-image" height={200} width={200} src={props.highlightImage} alt={props.title ?? ""} />

            }
            {
                props.backgroundImage &&
                <Image
                    className="background-image"
                    src={props.backgroundImage ?? ""}
                    alt={"background image"}
                    height={1250}
                    width={2800}
                />
            }

        </CellBasicStyled>
    )
}