import React from "react";
import { EditADitemInfoStyled } from './EditADitemInfoStyled'

export interface iEditSubscription{
    Size : string;
    Quantity: string;
    Frequency: string;
    ProcessDate: string;
}

export const EditADitemInfo = (props: iEditSubscription) => {

    return(
        <EditADitemInfoStyled>
            <h1>Size</h1>
            <h2 className={"Size"}>{props.Size}</h2>
            <h1>Quantity</h1>
            <div className={"Quantity"}>{props.Quantity}</div>
            <h1>Frequency</h1>
            <h2 className={"Frequency"}>{props.Frequency}</h2>
            <h1>Process Date</h1>
            <h2 className={"ProcessDate"}>{props.ProcessDate}</h2>
        </EditADitemInfoStyled>
    )
}