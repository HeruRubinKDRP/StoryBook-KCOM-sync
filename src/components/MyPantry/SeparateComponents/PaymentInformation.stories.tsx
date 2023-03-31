import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {iPaymentInformation, PaymentInformation} from "./PaymentInformation";

export default {
    title: "WIP /MyPantry Payment Information",
    component: PaymentInformation,
    argTypes: {
        PaymentCardNumber:{control:"text"},
        PaymentExpirationDate:{control:"text"}
    }
} as Meta;

const Template: Story<iPaymentInformation> = (args) => (
    <PaymentInformation {...args}/>
);
export const PaymentInformationExample = Template.bind({});

PaymentInformationExample.args={
    PaymentIcon : 'https://www.keurig.com/_ui/desktop/common/img/modules/checkout/visa-icon.png',
    PaymentCardNumber : "************2345",
    PaymentExpirationDate : "07/07",
    PaymentNameField : 'Name',
    PaymentAddressField : '53 South Ave, Burlington, MA 01803, United States',
    KButtonList: [
        {
            label: "Edit this payment",
            buttonType: "secondary",
            iconPlacement:"no-icon",
            /*  iconStandard:"",*/
            buttonWidth:"fit-width",
            transitionType:"expand-bg"
        },
]
}
