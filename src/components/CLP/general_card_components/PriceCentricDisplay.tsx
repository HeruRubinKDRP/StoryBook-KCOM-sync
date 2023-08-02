import {PriceCentricDisplayStyled} from "./PriceCentricdisplayStyled";
import {Graphic, Igraphics} from "../../Graphic/Graphic";

export interface iMemberPriceDisplayProps {
    price: number;
    label: string;
    strikeThroughPrice?: number;
    priceLogo?: Igraphics;
    infoFunction: ()=>void;
}

export const PriceCentricDisplay = (props: iMemberPriceDisplayProps) => {
    const formattedPrice = props.price.toFixed(2); // Format the price to have 2 decimal places

    // Split the price into dollars and cents
    const [dollars, cents] = formattedPrice.split('.');

    return(
        <PriceCentricDisplayStyled className="member-price-display">
            <div className="main-pricing">
                <div className="final-price">
                    <div className="price">
                        <div className="currency">$</div>
                        <div className="dollar">{dollars}</div>
                        <div className="cents">{cents}</div>
                    </div>
                </div>
                {
                    props.strikeThroughPrice &&
                    <div className="strike-through">
                        <div className={"striker"} />
                        <span className="currency">$</span>
                        {props.strikeThroughPrice.toFixed(2)}
                    </div>
                }
            </div>
            <div className="label pricing-info">
                <span>Your price with <strong className="info-link" onClick={()=>props.infoFunction()}>Perks</strong></span>
                <span>
                    <Graphic graphicName="perks-logo-small"/>
                </span>
            </div>
        </PriceCentricDisplayStyled>
    )
}