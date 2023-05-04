import {PromotionStyled} from "./promotion.stories";

export interface Promotion {
    name: string;
    highlightedText?: string;
    link: string;
    weight: number;
    componentType: "image";
    promoMode : "default" | "highlighted" | "big-image";
    backgroundTexture? : string;
    highlightImage? : string;
}


export const PromotionItem = (props: Promotion) => {


    return(
        <PromotionStyled href={props.link} className={`promotion-item ${props.promoMode}`}>
            <div className="text-area">
                {props.highlightedText ? <h2>{props.highlightedText}</h2> : null}
                <p>{props.name}</p>
            </div>
            {props.highlightImage ? <img src={props.highlightImage} alt={props.name} /> : null}
        </PromotionStyled>
    )
}

export default PromotionItem;
