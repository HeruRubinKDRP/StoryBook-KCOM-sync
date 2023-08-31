import {iProductInfoCardProps, tCardMode, tPresentationMode} from "./product-card.interfaces";
import ProductInfoCard from "./SimpleCard/SimpleCard";
import {getContainerQuery} from "../Experimental/Add-to-cart/reusable css/container-queries";
import CardBack from "./SimpleCard/CardBack/CardBack";
import CardFlip from "../Animated Effects/CardFlip/CardFlip";
import React, {ReactElement} from "react";
import {iFlag} from "../Flag/Flag";

interface iCardAggregatorProps {
    product: iProductInfoCardProps;
    cardPresentationMode: tPresentationMode;
    cardMode: tCardMode;
    index: number;
    ratingVisible: boolean;
    classes?: string;
    quickShopFunction: (quickShopOpen: boolean, productIndex:number) => void;
    flag?: iFlag;
}
export const CardAggregator = (props : iCardAggregatorProps) => {

    const manageQuickShop= () => {

    }
    const getCard= ():ReactElement => {
        switch (props.cardMode){
            case 'simple':
                return <ProductInfoCard
                    flag={props.flag}
                    key={props.index+"info-card"}
                    prices={props.product.prices}
                    priceDescriptor={props.product.priceDescriptor}
                    image={props.product.image}
                    brand={props.product.brand}
                    name={props.product.name}
                    productType={props.product.productType}
                    ratingVisible={props.ratingVisible}
                    classes={props.product.classes}
                    rating={{
                        totalNumberOfStars: 5,
                        totalNumberOfReviews: props.product.rating.totalNumberOfReviews || 100,
                        ratingNumber: props.product.rating.ratingNumber || 4.6,
                    }}
                    onClick={props.quickShopFunction}
                />

        }

        return <></>
    }

     switch (props.cardPresentationMode){
            case 'flip-card':
                return (
                    <CardFlip
                        key={props.index+"flip-card"}
                        flipToBackButtonLabel="Features"
                        flipToBackButtonIcon="icon-features"
                        flipToFrontButtonLabel="Images"
                        flipToFrontButtonIcon="icon-images"
                        frontContent={ getCard() }
                        backContent={
                            <CardBack name={props.product.name}
                                      description={props.product.productDescription ?? "Cofee maker description"}
                                      imageSrc={props.product.siloImagePath}
                                      features={props.product.productFeatures ?? []}/>
                        }
                        sideShowing="front"
                        classes={props.product.productType == "brewer" ? "brewer-card" : "pod-card"}
                    />
                )

     }

     console.log("Error- no card type defined")
    return <></>
}