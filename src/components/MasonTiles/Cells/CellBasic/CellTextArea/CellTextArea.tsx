import {iconType} from "../../../../Graphic/Graphic";
import KButton from "../../../../Kbutton/KButton";
import React from "react";

export interface iCellTextArea {
    title?: string;
    secondaryTitle?: string;
    CTA?: string;
    iconStandard?: iconType;
    fontColor?: string;
    cellType?: string;
}

export const CellTextArea = (props : iCellTextArea) => {
return(
    <>
    <div className="text-area">
        <h3 style={{color:props.fontColor}}>{props.title}</h3>
        {
            props.secondaryTitle &&
            <p style={{color : props.fontColor}}>{props.secondaryTitle}</p>
        }
    </div>
    {
        props.CTA &&
        <KButton
            classes={"cell-cta"}
            label={props.CTA ?? "Learn More"}
            buttonType="secondary"
            buttonWidth="fit-to-content"
            iconPlacement="after-label"
            iconStandard={props.iconStandard ?? "none"}
            transitionType="expand-bg"
        />
    }
    </>
)
}