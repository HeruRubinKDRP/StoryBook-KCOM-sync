import AsyncImage from "../../AsyncImage/AsyncImage";
import React from "react";
import {formattedPrice} from "../../_utilities/formatPrice";
import {iRating, Rating} from "../../Rating/Rating";
import {isValidEmail} from "../../_utilities/validation/validation";
import KButton from "../../Kbutton/KButton";
import {productTypeT} from "../../../pages/myBrews";
import {PriceCentricDisplay} from "./PriceCentricDisplay";
import {KToggle} from "../../Toggle/Toggle";
import { PricingStyled } from "../Classic_Card/Pricing-option/Pricing.styled";


export interface iPodInfoProps {
    productImage : string;
    productName : string;
    brandName : string;
    productType : productTypeT;
    price: number;
    priceLabel: string;
    strikeThroughPrice?: number;
    rating : iRating;
    infoFunction : ()=>void;
    showRating?: boolean;
    ratingsLayout?: "horizontal" | "vertical";
    pricingStyle: "classic" | "member-pricing-simple" | "member-price-no-icon";
    pricingMode : "member" | "non-member";
}

export const PodInfo = (props : iPodInfoProps) => {
    const getPricing = () => {

        switch (props.pricingStyle) {
            case "classic":
                return (
                    <PricingStyled className={`${props.pricingStyle}`}>
                        <div className={"ADPrice"}>
                            <div className="currency">$</div>
                            <div className="price">{props.price.toFixed(2)}</div>
                            <div className="copydeal">(25% off)</div>
                            <img className={"ADlogo"} src={"../../logos/AD-logo.png"}/>
                        </div>
                        <div className={"RegularPrice"}>
                            <div className="reg-currency">$</div>
                            <div className={"reg-price"}>{props.strikeThroughPrice}</div>
                        </div>
                    </PricingStyled>
                )
            case "member-pricing-simple":
                return (
                    <PricingStyled className={`${props.pricingStyle}`}>
                        <PriceCentricDisplay
                            price={props.price}
                            label={props.priceLabel}
                            strikeThroughPrice={props.strikeThroughPrice}
                            infoFunction={props.infoFunction}
                        />
                    </PricingStyled>
                )
            case "member-price-no-icon":
                return (
                    <PricingStyled className={`${props.pricingStyle}`}>
                        member price no icon
                    </PricingStyled>
                )
        }

    }
    return (
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
            <div className="product-info-container">
                <div className="brand">{props.brandName}</div>
                <div className="product-name">{props.productName}</div>
                <KToggle
                    toggleOptions={
                        [
                            {
                                label: "12 ct"
                            },
                            {
                                label: "24 ct"
                            },
                            {
                                label: "48 ct"
                            },
                            {
                                label: "96 ct"
                            }
                        ]
                    }
                    selectedCaratPosition="bottom"
                    toggleType="side-by-side"
                    toggleStyle="spaced-out"
                />
                {getPricing()}
                {props.showRating &&(
                    <Rating
                        ratingNumber={props.rating.ratingNumber}
                        scrollToTargetID={""}
                        totalNumberOfReviews={props.rating.totalNumberOfReviews}
                        totalNumberOfStars={props.rating.totalNumberOfStars}
                        layout={"horizontal"}
                    />
                )}
            </div>
        </div>
    )

}