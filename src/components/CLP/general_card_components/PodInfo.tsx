import AsyncImage from "../../AsyncImage/AsyncImage";
import React from "react";
import {formattedPrice} from "../../_utilities/formatPrice";
import {iRating, Rating} from "../../Rating/Rating";
import {isValidEmail} from "../../_utilities/validation/validation";
import KButton from "../../Kbutton/KButton";
import {productTypeT} from "../../../pages/myBrews";
import {PriceCentricDisplay} from "./PriceCentricDisplay";

export interface iPodInfoProps {
    productImage : string;
    productName : string;
    brandName : string;
    productType : productTypeT;
    price: number;
    priceLabel: string;
    strikeThroughPrice?: number;
    rating : iRating;
}

export const PodInfo = (props : iPodInfoProps) => {

    return(
        <div className="pod-info">
            <div className={`product-image ${props.productType}-image`}>
                <AsyncImage
                    imageType={"image"}
                    src={props.productImage}
                    alt={`${props.brandName} 
                        ${props.productName}`}
                    className="image-inner"
                />
            </div>
            <div className="product-info-container" >
                <div className="brand">{props.brandName}</div>
                <div className="product-name">{props.productName}</div>
                <Rating
                    ratingNumber={props.rating.ratingNumber}
                    scrollToTargetID={""}
                    totalNumberOfReviews={props.rating.totalNumberOfReviews}
                    totalNumberOfStars={props.rating.totalNumberOfStars}
                />
                <PriceCentricDisplay
                    price={props.price}
                    label={props.priceLabel}
                    strikeThroughPrice={props.strikeThroughPrice}
                />
            </div>
        </div>
    )

}