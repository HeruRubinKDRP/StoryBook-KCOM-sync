import React, {useEffect, useState} from 'react';
import KButton from "../../Kbutton/KButton";
import {ProductInfoCardWrapper} from "./simple-card.styled";
import {Rating} from "../../Rating/Rating";
import {formattedPrice} from "../../_utilities/formatPrice";
import {isValidEmail} from "../../_utilities/validation/validation";
import AsyncImage from "../../AsyncImage/AsyncImage";
import {filterOptionsT} from "../../../data/brewer-library";
import {iProductInfoCardProps} from "../product-card.interfaces";
import {useResizeDetector} from "react-resize-detector";
import {Flag, iFlag} from "../../Flag/Flag";

// Define an interface for the purchase information of a product
export interface purchaseInfo {
    price: number;
    inStock: boolean;
    variant: {
        quantity: number,
        variantName: string
    }

}

export type filterDataItemT = {
    filterName: string;
    filterValues: filterOptionsT[];
}



const ProductInfoCard = (props: iProductInfoCardProps) => {
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const getPriceLabel = () => {
        switch (props.productType) {
            case "brewer":
                return "";
            case "pod":
                return "per pod";
            case "bagged":
                return "per ounce";
            case "bundle":
                return "";
        }
    }

    useEffect(() => {

    }, [props.prices]);

// Define a function to check if all products are out of stock
    const isAllOutOfStock = (products: purchaseInfo[]): boolean => {
        return products.every(product => !product.inStock);
    };


// Define a function to get the lowest price from an array of products
    const getLowestPrice = (products: purchaseInfo[]) => {
        // Filter the products array to keep only those that are in stock
        const inStockProducts = products.filter(product => product.inStock);

        // Map the filtered array of in-stock products to an array of their prices
        const inStockPrices = inStockProducts.map(product => product.price / product.variant.quantity);


        // If there are no in-stock products, return -1
        if (inStockPrices.length === 0) {
            return -1;
        }

        // Calculate and return the lowest price from the in-stock prices array
        return Math.min(...inStockPrices);
    }

    const actionFunc = () => {
        if (isAllOutOfStock(props.prices)) {
            setShowEmailInput(true);
        } else {
            props.onClick();
        }
    }


    //Get specific card configuration
    const {width, height, ref} = useResizeDetector({
        refreshMode: 'debounce',
        refreshRate: 400,
        refreshOptions: {
            leading: true,
            trailing: true
        },
        onResize: () => {
        },
    });


    return (
        <ProductInfoCardWrapper heightY={height ?? 0} className={`${props.productType} ${props.classes ? props.classes : ""} simple-card`}>
            {
                props.flag &&
                <Flag
                    flagColor="medium-roast"
                    flagLabel="Our Best Deal"
                    flagStyle="round-top"
                    flagTextColorOverride="white"
                    font={{
                        fontSize: 'Large',
                        fontWeight: 'heavy-weight'
                    }}
                />
            }
            <div className="product-data-container">
                <div className={`product-image ${props.productType}-image`}>
                    <AsyncImage
                        imageType={"image"}
                        src={props.image}
                        alt={`${props.brand} 
                        ${props.name}`}
                        className="image-inner"
                    />
                </div>
                <div className="product-info-container" ref={ref}>
                    <div className="price">
                        <div className="fine-print">
                            {isAllOutOfStock(props.prices) ? '' : (props.priceDescriptor ? props.priceDescriptor : 'As low as')}
                        </div>
                        <div>
                            {isAllOutOfStock(props.prices) ? 'Out of Stock' : `${formattedPrice(getLowestPrice(props.prices))} ${getPriceLabel()}`}
                        </div>
                    </div>
                    <div className="brand">{props.brand}</div>
                    <div className="product-name">{props.name}</div>
                    <div className="rating-section">
                        {props.ratingVisible && <Rating
                            ratingNumber={props.rating.ratingNumber}
                            scrollToTargetID={""}
                            totalNumberOfReviews={props.rating.totalNumberOfReviews}
                            totalNumberOfStars={props.rating.totalNumberOfStars}
                        />}
                    </div>
                    {showEmailInput && (
                        <div className="email-input-container">
                            <label htmlFor="email">Enter email address:</label>
                            <div className="submit">
                                <input
                                    className="email-input"
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (!isValidEmail(e.target.value)) {
                                            setEmailError('Enter a valid email address.');
                                            setSubmitDisabled(true);
                                        } else {
                                            setEmailError('');
                                            setSubmitDisabled(false);
                                        }
                                    }}

                                />
                                <KButton
                                    transitionType="expand-bg"
                                    classes={`submit-email ${submitDisabled ? 'disabled' : ''}`}
                                    buttonWidth="fit-to-content"
                                    label="Submit"
                                    iconStandard="none"
                                    iconPlacement="after-label"
                                    buttonType="primary"
                                    actionFunc={() => {
                                        if (!isValidEmail(email)) {
                                            setEmailError('Please enter a valid email address.');
                                            // Add your animation class here
                                            document.querySelector('.email-error')?.classList.add('error-active');
                                        } else {
                                            // Handle the valid email submission here
                                        }
                                    }}
                                />
                            </div>
                            {emailError && <div className="email-error">{emailError}</div>}
                        </div>
                    )}
                    {
                        !showEmailInput && (
                            <div className="cta-container">
                                <KButton
                                    transitionType="expand-bg"
                                    classes={`cta-main ${props.productType}-cta`}
                                    buttonWidth="fit-to-content"
                                    label={isAllOutOfStock(props.prices) ? 'Notify Me' : 'Buy Now'}
                                    iconStandard="icon-add"
                                    iconPlacement="after-label"
                                    buttonType="primary"
                                    actionFunc={() => actionFunc()}
                                />
                            </div>
                        )
                    }
                </div>

            </div>

            <div className="backing"/>
        </ProductInfoCardWrapper>
    );
};

export default ProductInfoCard;
