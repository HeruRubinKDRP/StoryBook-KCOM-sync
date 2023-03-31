import React from "react";
import KButton, {iButton} from "../../Kbutton/KButton";
import { PaymentInformationStyled } from './PaymentInformationStyled'

export interface iPaymentInformation{
    PaymentIcon : string;
    PaymentExpirationDate: string;
    PaymentCardNumber: string;
    PaymentNameField:string;
    PaymentAddressField: string;
    header?:string;
    KButtonList?: iButton[];
}

export const PaymentInformation = (props: iPaymentInformation) => {

/*const getExpirationDate =() => {
    const options:Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit' };
    const formattedDate = props.PaymentExpirationDate.toLocaleDateString('en-US', options);
    return formattedDate; // output: "03/15"
}*/

    return(
        <PaymentInformationStyled>
            {props.header ? <h1>Payment Information</h1>:null}
            <div className={"paymentIcon"}><img src={props.PaymentIcon} alt="" /></div>
            <div>{props.PaymentCardNumber}</div>
            <div>{props.PaymentExpirationDate}</div>
            <h2>{props.PaymentNameField}</h2>
            {props.PaymentAddressField}
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
        </PaymentInformationStyled>
    )
}