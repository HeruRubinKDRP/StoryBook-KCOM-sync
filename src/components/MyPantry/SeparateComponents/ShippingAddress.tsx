import React from "react";
import KButton, {iButton} from "../../Kbutton/KButton";
import { ShippingAddressStyled } from './ShippingAddressStyled'

export interface iShippingAddress{
    ShippingNameField:string;
    ShippingAddressField: string;
    header?:string;
    KButtonList?: iButton[];
}

export const ShippingAddress = (props: iShippingAddress) => {
    return(
        <ShippingAddressStyled>
            {props.header ? <h1>{props.header}</h1>:null}
            <h2>{props.ShippingNameField}</h2>
            <h3>{props.ShippingAddressField}</h3>
            <div>
                {props.KButtonList && props.KButtonList.map((button) => (
                    <KButton
                        key={button.label}
                        label={button.label}
                        buttonType={button.buttonType}
                        iconPlacement={button.iconPlacement}
                        iconStandard={button.iconStandard}
                        buttonWidth={button.buttonWidth}
                        transitionType={button.transitionType}
                    />
                ))}
            </div>
        </ShippingAddressStyled>
    )
}