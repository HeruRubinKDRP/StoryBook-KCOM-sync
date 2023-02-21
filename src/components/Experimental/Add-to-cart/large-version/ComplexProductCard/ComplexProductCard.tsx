import {podItemT} from "../../../../../pages/myBrews";
import {StyledBevCardVerbose} from "./StyledBevCardVerbose";

export interface iProdcutCardBevVerbose{
    productInfo  : podItemT,

}

export const ProductCardBevVerbose = (props: iProdcutCardBevVerbose) => {


    return(
        <StyledBevCardVerbose className="product-card-bev-verbose-container">

        </StyledBevCardVerbose>
    )

}