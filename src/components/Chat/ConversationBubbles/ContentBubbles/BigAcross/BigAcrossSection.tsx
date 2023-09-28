import {BigAcrossStyled} from "./big-across.styled";
import {messagePositionT} from "../../../../ContentComponents/SimpleHighlightCard/SimpleHighlightCard";
import KButton from "../../../../Kbutton/KButton";
import Image from "next/image";
import {colorByNameType} from "../../../../_utilities/color-name-to-value/colorNameToValue";
import {Dispatch, SetStateAction} from "react";

export interface iBigAcrossProps {
    backgroundImage : string;
    mainMessage : string;
    secondaryMessage : string;
    ctaLabel : string;
    actionFunction : (message: string) => void;
    backgroundColor? : string | colorByNameType;
}

export const BigAcross: React.FC<iBigAcrossProps> = (props : iBigAcrossProps) => {

    return(
        <BigAcrossStyled className="big-across" style={{backgroundColor : props.backgroundColor}}>
            <div className="message-area">
                <h1>{props.mainMessage}</h1>
                <p>{props.secondaryMessage}</p>
                <KButton
                    label={props.ctaLabel}
                    buttonType="primary"
                    buttonWidth="fit-to-content"
                    actionFunc={()=>props.actionFunction("Help me find a new coffee maker")}
                    transitionType="expand-bg"
                />
            </div>
            <div className="image-area">
                <Image
                    src={props.backgroundImage}
                    alt="intro image"
                    height={2048}
                    width={1024}
                />
            </div>
        </BigAcrossStyled>
    )
}