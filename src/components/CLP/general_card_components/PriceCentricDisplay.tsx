export interface iMemberPriceDisplayProps {
    price: number;
    label: string;
    strikeThroughPrice?: number;
}

export const PriceCentricDisplay = (props: iMemberPriceDisplayProps) => {
    const formattedPrice = props.price.toFixed(2); // Format the price to have 2 decimal places

    // Split the price into dollars and cents
    const [dollars, cents] = formattedPrice.split('.');

    return(
        <div className="member-price-display">
            <div className="final-price">
                <div className="price">
                    <div className="currency">$</div>
                    <div className="dollar">{dollars}</div>
                    <div className="cents">{cents}</div>
                </div>
                <div className="label">{props.label}</div>
            </div>
            {
                props.strikeThroughPrice &&
                <div className="strike-through">
                    <div className={"striker"} />
                    {props.strikeThroughPrice.toFixed(2)}
                </div>
            }
        </div>
    )
}