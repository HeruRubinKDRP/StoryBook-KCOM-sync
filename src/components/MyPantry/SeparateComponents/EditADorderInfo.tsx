import React from "react";
import { EditADorderInfoStyled } from './EditADorderInfoStyled'

export interface iEditOrder{
    DeliveryName : string;
    Frequency: string;
    ProcessDate: string;
}

export const EditADorderInfo = (props: iEditOrder) => {

    return(
        <EditADorderInfoStyled>
            <h1>Delivery Name</h1>
            <h2 className={"DeliveryName"}>{props.DeliveryName}</h2>
            <h1>Frequency</h1>
            <h2 className={"Frequency"}>{props.Frequency}</h2>
            <h1>Process Date</h1>
            <h2 className={"ProcessDate"}>{props.ProcessDate}</h2>
        </EditADorderInfoStyled>
    )
}