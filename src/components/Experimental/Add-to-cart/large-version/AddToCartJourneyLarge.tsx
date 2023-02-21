import {StyledLargeAddToCart} from "./StyledLargeAddToCart";
import {useResizeDetector} from "react-resize-detector";
import {iSimpleProduct} from "../small-version/AddToCartJourneySmall";
import {getContainerQuery} from "../reusable css/container-queries";
import {podItemT} from "../../../../pages/myBrews";
import {SmallAddToCartJourneyStyled} from "../small-version/smallVersionStyled";
import Graphic from "../../../Graphic/Graphic";

export interface iCartAfterLarge{
    selectedProduct : iSimpleProduct;
    suggestedProducts : podItemT[]
}

export const AfterCartActionLarge = (props: iCartAfterLarge) => {
    const {width, height, ref }=useResizeDetector({
        refreshMode: 'debounce',
        refreshRate: 100, refreshOptions: {},
        handleHeight: false, skipOnMount: false,
        onResize: () => {  }
    });

    return(
        <SmallAddToCartJourneyStyled ref={ref} className={`after-cart-action-large ${getContainerQuery(width)}`}>
            <div className="product-added">
                <div className="product-image">
                    <img src={props.selectedProduct.image} alt={props.selectedProduct.name}/>
                </div>
                <div className="product-added-area">
                    <h2 className="product-name">
                        {props.selectedProduct.name}
                    </h2>
                    <div className="product-status">
                        <Graphic graphicName="checkmark-circled" />
                    </div>
                </div>

            </div>

            <div className="suggested-products">

            </div>
        </SmallAddToCartJourneyStyled>
    )
}