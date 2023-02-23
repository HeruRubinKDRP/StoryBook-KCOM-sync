import {Flag} from "../../../Flag/Flag";
import KButton from "../../../Kbutton/KButton";
import React from "react";
import {Styled_KSKPurchaseOption} from "./Styled_KSKPurchaseOption";
import {useResizeDetector} from "react-resize-detector";

export interface iKSKPurchaseOption{

}

export const KSKPurchaseOption =(props : iKSKPurchaseOption)=>{

    const {width, height, ref} = useResizeDetector({
        refreshMode: 'debounce',
        refreshRate: 100, refreshOptions: {},
        handleHeight: false, skipOnMount: false,
        onResize: () => {},
    });

    return(
        <Styled_KSKPurchaseOption className="preferred-option" ref={ref} heightY={height || 0} widthX={width || 0}>

            <Flag
                flagLabel="Our best deal"
                flagColor="KSK"
                font={{fontWeight: "heavy-weight", fontSize: "Small"}}
                flagStyle="alternating-sharp-round"
            />
            <div className="deal-area">
                <div className="deal-price">$89.99</div>
                <h3>Build a starter kit & save 50%</h3>
                <label className="strike-through-price">$179.99</label>
                <div className="savings-callout">Save $90.00 with Starter Kit</div>
            </div>

            <KButton
                iconStandard="none"
                label="Build Your Kit"
                buttonType="primary"
                buttonWidth="fit-width"
                classes="action"
                transitionType="expand-bg"
            />
        </Styled_KSKPurchaseOption>
    )
}