import React, {createRef, ReactElement, useEffect, useCallback, useState} from 'react';
import {StyledRangeSlider} from "./range-slider-styled.styled";
import KButton from "../../Kbutton/KButton";
import {useResizeDetector} from "react-resize-detector";

export type iKSKProduct = {
    price: number,
    commitment: number,
    minimumPrice: number,
    isActive: boolean
};

export type iKSKRangeSlider = {
    products: iKSKProduct[],
    basePriceUnit: number,
    headerTitle: "Name Your Price"
};

const KSKRangeSlider: React.FC<iKSKRangeSlider> = ({ products, basePriceUnit }) => {
    const [desiredPrice, setDesiredPrice] = useState(0);
    const [scrollSnapInterval, setScrollSnapInterval] = useState(200);
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDesiredPrice(Number(event.target.value));
    };

    const scrollerRef = createRef<HTMLDivElement>();
    //const scrollSnapInterval = 500;
    const outerMostContainerRef = createRef<HTMLDivElement>()


    const determineCardSize = useCallback(() => {
        if(!outerMostContainerRef.current) {return Math.round(screen.width / 4);}
        let cardWidth = outerMostContainerRef.current.offsetWidth;

        if(cardWidth <= 500 ) {
            cardWidth = Math.round(cardWidth / 2);
        }

        if(cardWidth > 500 && cardWidth <= 1000 ) {
            cardWidth = Math.round(cardWidth / 4);
        }

        if(cardWidth > 1000 && cardWidth < 1600) {
            cardWidth = Math.round(cardWidth / 4);
        }
        setScrollSnapInterval(cardWidth);
    }, [outerMostContainerRef]);


    useEffect(() => {
        const container = scrollerRef.current;
        determineCardSize();
        if (!container) {
            return;
        }

        let initialScrollPos = 0;
        let initialMousePos = 0;
        let mouseMovement = 0;

        const onMouseDown = (event: MouseEvent) => {
            initialScrollPos = container.scrollLeft;
            initialMousePos = event.clientX;
        };

        const onMouseMove = (event: MouseEvent) => {
            if (initialMousePos) {
                mouseMovement = event.clientX - initialMousePos;
                container.scrollLeft = initialScrollPos - mouseMovement;
            }
        };

        const onMouseUp = (event: MouseEvent) => {
            const currentScrollPos = container.scrollLeft;
            const scrollDifference = currentScrollPos - initialScrollPos;
            const cardsToScroll = Math.round(scrollDifference / scrollSnapInterval);
            const newScrollPos = initialScrollPos + (cardsToScroll * scrollSnapInterval);
            container.scrollTo({
                left: newScrollPos,
                behavior: 'smooth',
            });
            initialMousePos = 0;
        };
        //in case of update, remove these event listeners
        container.removeEventListener('mousedown', onMouseDown);
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseup', onMouseUp);
        //add these event listeners with updated values based on viewport dimensions
        container.addEventListener('mousedown', onMouseDown);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseup', onMouseUp);

        return () => {
            container.removeEventListener('mousedown', onMouseDown);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseup', onMouseUp);
        };
    }, [scrollSnapInterval, determineCardSize, scrollerRef]);

    const getProductActiveStatus = (isActive : boolean, product : iKSKProduct) => {

        let btnLabel : string = `Select`;
        let details : ReactElement = <></>;

        if(desiredPrice < product.minimumPrice){
            btnLabel = `Select for $${product.minimumPrice}`;
            details= (
                <>
                    <p>Your price is tool low</p>
                    <p>Best Price: {product.minimumPrice}</p>
                </>
            )
        }

        if(desiredPrice >= product.price){
            btnLabel = `Select`;
               details = (
                   <>
                       <p>Get it for</p>
                       <p className="best-deal" >${product.price}</p>
                   </>
               )
        }

        return <div className="best-deal">
            {details}
            <KButton label={btnLabel} buttonType="ecommerce-secondary" iconStandard="none" iconPlacement="after-label" />
        </div>


    }

    return (
        <StyledRangeSlider className="range-slider-container" ref={outerMostContainerRef}>
            <div className="name-your-price-controls">
                <h2>Name Your Price: ${desiredPrice}</h2>
                <input
                    className="ksk-range-slider"
                    type="range"
                    min={0}
                    max={getMaxPrice(products)}
                    value={desiredPrice}
                    onChange={handlePriceChange}
                />
            </div>
           <div className="product-card-container" ref={scrollerRef}>
               {products.map((product, index) => (
                   <div style={{width : scrollSnapInterval}}  key={index} className={`ksk-product-card`}>
                       <p>Original price: ${product.price}</p>
                       <p>Commitment: {getCommitment(product, desiredPrice, basePriceUnit)}</p>
                       {getProductActiveStatus(product.isActive, product)}
                   </div>
               ))}
           </div>

        </StyledRangeSlider>
    );
};

const getMaxPrice = (products: iKSKProduct[]) => {
    return Math.max(...products.map(product => product.price));
};

const getCommitment = (product: iKSKProduct, desiredPrice: number, basePriceUnit: number) => {

    if(desiredPrice > product.price) {
        return 0;
    }

    const priceDifference = product.price - desiredPrice;

    if(desiredPrice < product.minimumPrice){
        return Math.round(priceDifference / basePriceUnit);
    }

    if(desiredPrice < product.price && desiredPrice >= product.minimumPrice){
        return Math.round(priceDifference / basePriceUnit);
    }
};

export default KSKRangeSlider;
