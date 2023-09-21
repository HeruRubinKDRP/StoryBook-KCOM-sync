import React, { useState } from 'react';
import styled from 'styled-components';
import {SmallAddToCartJourneyStyled} from "./small-version/smallVersionStyled";
import {AddToCartJourneyLarge} from "./large-version/AddToCartJourneyLarge";
import {AddToCartJourneySmall, iSimpleProduct} from "./small-version/AddToCartJourneySmall";
import {podItemT} from "../../../pages/myBrews";
import {AddToCartDemoStyled} from "./AddToCartDemoStyled";

export type demoComponentType = "small-after-add" | "large-after-add";

export interface iDemoProps{
    selectedComponent: demoComponentType;
    products : podItemT[];
    selectedProduct? : iSimpleProduct;
    numberOfSuggestions : number;
    currentCartValue : number;
    freeShippingTarget : number;
}
export const simplifiedPodItems = (pods : podItemT[]) : iSimpleProduct[]=>{
    return pods.map((pod) => {
        return {
            name : pod.podName,
            image : pod.boxImagePath || "",
            brand : pod.brand,
        }
    })
}

const AddToCartDemo: React.FunctionComponent<iDemoProps> = (props:iDemoProps) => {
    const getComponent = ( componentName : demoComponentType) => {
        switch (componentName) {
            case "small-after-add":
                return (
                    <AddToCartJourneySmall
                        freeShippingTarget={props.freeShippingTarget}
                        selectedProduct={simplifiedPodItems(props.products.slice(0))[0]}
                        suggestedProducts={simplifiedPodItems(props.products.slice(1, 4))}
                        numberOfSuggestions={props.numberOfSuggestions}
                        currentCartTotal={props.currentCartValue}
                    />
                )
            case "large-after-add":
                return <AddToCartJourneyLarge
                    freeShippingTarget={props.freeShippingTarget}
                    selectedProduct={simplifiedPodItems(props.products.slice(0))[0]}
                    suggestedProducts={simplifiedPodItems(props.products.slice(1, 4))}
                    numberOfSuggestions={props.numberOfSuggestions}
                    currentCartTotal={props.currentCartValue}/>
        }
        return<></>
    }

    return (
        <AddToCartDemoStyled>
            {getComponent(props.selectedComponent)}
        </AddToCartDemoStyled>
    );
};

export default AddToCartDemo;
