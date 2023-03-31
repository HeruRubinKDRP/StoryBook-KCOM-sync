import React, { useState } from 'react'
import {useResizeDetector} from "react-resize-detector";
import { getContainerQuery } from '../../_utilities/container-queriesTEST'
import { ProductInfoStyled } from './ProductInfoStyled'

export interface iProductInfo {
    productImage : string;
    brandName: string;
    productName : string;
    productCountSize: string;
    productQuantity: string;
    productSalePrice:string;
    productPrice:string;
}

export const ProductInfo = (props: iProductInfo) => {
    const {width, height, ref} = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 100,
        refreshOptions: {
            leading: true,
            trailing: false,
        },
        handleHeight: false,
        skipOnMount: false,
        onResize: () => {}
    });
    // Add a state variable to keep track of the current viewport width
    const [viewportWidth, setViewportWidth] = useState<number | undefined>(width)

    // Update the viewportWidth state variable whenever the viewport width changes
    if (width !== undefined && viewportWidth !== width) {
        setViewportWidth(width)
    }
    return (
        <ProductInfoStyled className={`ProductInfo-overall-container ${getContainerQuery(
            viewportWidth
        )}`}
                           ref={ref}>
            {/*<p>{viewportWidth}</p>*/}
            <div className={"productImage"}><img src={props.productImage} alt={props.productName} /></div>
            <div className={"productContent"}>
                <div className={"brandName"}>{props.brandName}</div>
                <div className={"productName"}>{props.productName}</div>
                <div className={"productCountSize"}>{props.productCountSize}</div>
                <div className={"productQuantity"}>{props.productQuantity}</div>
                <div className={"price"}>
                    <div className={"productSalePrice"}>{props.productPrice}</div>
                    <div className={"productPrice"}>{props.productPrice}</div>
                </div>
            </div>
        </ProductInfoStyled>
    );
};
