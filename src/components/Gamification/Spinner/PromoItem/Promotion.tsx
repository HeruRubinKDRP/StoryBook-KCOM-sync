import {PromotionStyled} from "./promotion.styles";
import {spinnerModeType} from "../spinner/spinner";
import Image from "next/image";

export interface Promotion {
    name: string;
    highlightedText?: string;
    link: string;
    weight: number;
    componentType: "image";
    promoMode : "default" | "highlighted" | "big-image";
    backgroundTexture? : string;
    highlightImage? : string;
    spinnerMode? : spinnerModeType;
    imageCounterRotation? : number;
}


export const PromotionItem = (props: Promotion) => {
    return(
        <PromotionStyled datatype={`data-promo-index`} href={props.link} className={`promotion-item ${props.promoMode} spinner-mode-${props.spinnerMode}`}>
            <div className="text-area">
                {props.highlightedText ? <h2>{props.highlightedText}</h2> : null}
                <p>{props.name}</p>
            </div>
            {props.highlightImage ? <Image unoptimized={true}
                                           width={500}
                                           height={500}
                                           style={{transform: `rotate(${props.imageCounterRotation ? -props.imageCounterRotation : 0}deg)`}}
                                           src={props.highlightImage}
                                           alt={props.name}
            /> : null}
        </PromotionStyled>
    )
}

export default PromotionItem;
