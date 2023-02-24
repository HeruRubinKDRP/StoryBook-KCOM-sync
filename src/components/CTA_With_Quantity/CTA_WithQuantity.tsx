import KDropDown, {dropDownItem} from "../DropDown/drop-down";
import KButton from "../Kbutton/KButton";
import React, {ReactElement} from "react";
import {Styled_CTA_withQuantity} from "./Styled_CTA_withQuantity";

export interface iCTA_withQuantity {
    totalQuantity: number;
    buttonLabel: string;
}



export const CTA_WithQuantity = (props: iCTA_withQuantity) => {
    const getSelectionMenu = () => {
        let selectionOptions : dropDownItem[] = []
        for(let i=0; i<props.totalQuantity; i++){
            selectionOptions.push(
                {
                    label: `${i+1}`,
                    value: i+1,
                }
            )
        }

        return selectionOptions;
    }

    return(
        <Styled_CTA_withQuantity>
            <div className="add-to-cart-container">
                <KDropDown
                    classes="quantity-selection"
                    dropDownType="medium"
                    defaultLabel={"1"}
                    label="1"
                    selected="1"
                    selectionOptions={getSelectionMenu()}
                />
                <KButton
                    iconStandard="none"
                    label="Add to Cart"
                    buttonType="primary"
                    buttonWidth="fit-width"
                    classes="action"
                    transitionType="expand-bg"
                />
            </div>
        </Styled_CTA_withQuantity>
    )

}