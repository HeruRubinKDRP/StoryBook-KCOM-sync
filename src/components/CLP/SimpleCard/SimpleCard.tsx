import React from 'react';
import styled from 'styled-components';
import KButton from "../../Kbutton/KButton";
import {ProductInfoCardWrapper} from "./StyledSimpleCard";
import {ProductImage} from "../../ProductImage/ProductImage";
import {Kcarousel} from "../../Carousel/Kcarousel";
import {Rating} from "../../Rating/Rating";

export interface ProductInfoCardProps {
    image: string;
    brand: string;
    name: string;
    price: number;
    ratingVisible: boolean;
    rating: {
        totalNumberOfStars: 5 | 10;
        totalNumberOfReviews: number;
        ratingNumber: number;
    }
    onClick: () => void;
}


const ProductInfoCard: React.FC<ProductInfoCardProps> = ({
                                                             image,
                                                             brand,
                                                             name,
                                                             price,
                                                             rating,
                                                             ratingVisible,
                                                             onClick,
                                                         }) => {
    const formattedPrice = price < 1 ? `${Math.round(price * 100)}¢` : `$${price.toFixed(2)}`;

    return (
        <ProductInfoCardWrapper>
            <div className="product-data-container">
                <div className="product-image">
                    <img className="image-inner" src={image} alt={`${brand} ${name}`}/>
                </div>
                <div className="price">{formattedPrice} per pod</div>
                <Kcarousel
                    itemsPerSlide={1}
                    component="carousel"
                    carouselType="slider"
                    keepNavButtons={true}
                    slides={[
                        <div className="size">K-Cup® Box 24 ct.</div>,
                        <div className="size">K-Cup® Box 72 ct</div>,
                        <div className="size">K-Cup® Box 96 ct</div>,
                        <div className="size">K-Cup® Box 12 ct.</div>
                    ]}
                    navStyle="dots"
                    navPosition="bottom"
                />
                <div className="brand">{brand}</div>
                <div className="product-name">{name}</div>
                <div className="rating-section">
                    {ratingVisible && <Rating
                        ratingNumber={rating.ratingNumber}
                        scrollToTargetID={""}
                        totalNumberOfReviews={rating.totalNumberOfReviews}
                        totalNumberOfStars={rating.totalNumberOfStars}

                    />}
                </div>
            </div>
            <KButton
                transitionType="expand-bg"
                classes="cta-main"
                buttonWidth="fit-to-content"
                label="Buy Now"
                iconStandard="icon-add"
                iconPlacement="after-label"
                buttonType="primary"
                actionFunc={onClick}
            />
            <div className="backing"/>
        </ProductInfoCardWrapper>
    );
};

export default ProductInfoCard;
