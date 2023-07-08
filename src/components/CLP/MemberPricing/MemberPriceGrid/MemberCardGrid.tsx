import React from 'react';
import styled from 'styled-components';
import MemberPriceCard, { iMemberPricingCardProps } from '../member-price-card/card-member-pricing';
import {GridContainer} from "./member-card-grid.styled";



export interface ProductGridProps {
    products: iMemberPricingCardProps[];
    isLoggedIn: boolean;
    priceLabel: string;
    formFactor: "mobile" | "desktop";
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, isLoggedIn, priceLabel, formFactor }) => {
    return (
        <GridContainer>
            {products.map((product, index) => (
                <MemberPriceCard
                    key={index}
                    product={product.product}
                    isLoggedIn={isLoggedIn}
                    formFactor={formFactor} // You can make this dynamic based on screen size as well if needed
                    priceLabel={priceLabel}
                />
            ))}
        </GridContainer>
    );
};

export default ProductGrid;
