//ProductRecommendation

import React from 'react';
import {iProductInfoCardProps} from "../../../CLP/product-card.interfaces";
import {CardAggregator} from "../../../CLP/CardAggregator";
import {ChatBrewerCard} from "../../ChatCards/BrewerCard";
import {RecommendationBubbleStyled} from "./recommendation-bubble.styled";

interface ProductRecommendationProps {
    recommendations: Array<{ productType: string; name: string }>;
    allProducts: iProductInfoCardProps[];
}

const ProductRecommendation: React.FC<ProductRecommendationProps> = ({ recommendations, allProducts }) => {
    if (!recommendations || !allProducts) {
        return <></>;
    }
    if (recommendations.length === 0 || allProducts.length === 0) {
        return <></>;
    }

    return (
        <RecommendationBubbleStyled>
            <h2 className="title">Recommendations for you</h2>
            <div className="recommendation-cards">
                {recommendations.map((recommendation, index) => {
                    const productDetails = allProducts.find(product =>
                        product.name.toLowerCase().includes(recommendation.name.toLowerCase())
                    );
                    if (productDetails) {
                        console.log("recommendation found", recommendation.name)
                        switch (recommendation.productType){
                            case "machine":
                                return (
                                    <ChatBrewerCard
                                        key={index}
                                        productName={productDetails.name}
                                        productImage={productDetails.image}
                                    />
                                );
                            default:
                                return (<></>)
                        }

                    }
                    return null;
                })}
            </div>
        </RecommendationBubbleStyled>
    );
};

export default ProductRecommendation;
