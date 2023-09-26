import {OptionSelectionStyled} from "./option-selection-styled";
import KButton from "../../Kbutton/KButton";
import Image from "next/image";
export interface iOptionSelectionProps{
    mainImage : string,
    secondaryTitle : string,
    actionLabel: string,
    mainTitle : string,
    description : string,
    primaryAction : ()=>void,
}


export const OptionSelectionItem = (props: iOptionSelectionProps) => {


    return(
        <OptionSelectionStyled className="option-selection-area">
            <div className="titles-area">
                <h1 className="main-title">
                    {props.mainTitle}
                </h1>
                <h2>{props.secondaryTitle}</h2>
            </div>

            <div className="main-image">
                <Image
                    src={props.mainImage}
                    alt=""
                    unoptimized={true}
                    width={500}
                    height={500}
                />
            </div>
            <KButton
                label={props.actionLabel}
                buttonType="primary"
                actionFunc={props.primaryAction}
            />
        </OptionSelectionStyled>
    );

}