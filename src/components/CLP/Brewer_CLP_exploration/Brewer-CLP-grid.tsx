import KButton from 'components/Kbutton/KButton';
import React, {useState} from 'react';
import {BrewerCLPStyled} from "./Brewer-CLP-grid-styled"

export interface iCardProps {
    name: string;
    onetimeprice: string;
    kskprice?: string;
    imageUrl: string;
    hoverUrl: string;
}

export interface IProductGridProps {
    products: iCardProps[];
}


export const ProductCard = (props: iCardProps): JSX.Element => {
    return (
        <div className={"invisible-button"}>
        <div className="product-card">
            <div className={"product-image"} style={{backgroundImage: `url(${props.imageUrl})`}}
                 onMouseOver={(e) => (e.currentTarget.style.backgroundImage = `url(${props.hoverUrl})`)}
                 onMouseOut={(e) => (e.currentTarget.style.backgroundImage = `url(${props.imageUrl})`)}
            ></div>
            <div className="bottom-part">

                <div className={"product-name"}>{props.name}</div>
                <div className={"pricing"}>
                    <div className={"ksk"}>
                        <div className={"ksk-title"}>Build a Starter Kit</div>
                        <div className={"ksk-price"}>{props.kskprice}</div>
                    </div>
                    <div className={"onetime"}>
                        <div className={"onetime-title"}>One Time Purchase</div>
                        <div className={"one-time-price"}>{props.onetimeprice}</div>
                    </div>
                </div>
                <KButton
                    label="Buy Now"
                    buttonType="primary"
                    iconPlacement="right-edge"
                    iconStandard="none"
                    buttonWidth="fit-width"
                    transitionType="expand-bg"
                />
            </div>
        </div>
        </div>
    );
};


export const ProductGrid = ({products}: IProductGridProps): JSX.Element => {
    return (
        <BrewerCLPStyled>
            {products.map((product) => (
                <ProductCard key={product.name} {...product} />
            ))}
        </BrewerCLPStyled>
    );
};

export const SingleProduct = ({product}: { product: iCardProps }): JSX.Element => {
    return <ProductCard {...product} />;
};
