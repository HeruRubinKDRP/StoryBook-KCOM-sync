import React from "react";
import KButton, {iButton} from "../../Kbutton/KButton";
import {MyPantryNavStyled} from "./MyPantryNavStyled";

export interface iMyPantryNav {
    KButtonList?: iButton[];
    FunctionList: Function[];
}


export const MyPantryNav = (props: iMyPantryNav) => {


    return (
        <MyPantryNavStyled>
            {props.KButtonList && props.KButtonList.map((button,index) => (
                <KButton
                    actionFunc={props.FunctionList[index]}
                    key={button.label}
                    label={button.label}
                    buttonType={button.buttonType}
                    iconPlacement={button.iconPlacement}
                    iconStandard={button.iconStandard}
                    buttonWidth={button.buttonWidth}
                    transitionType={button.transitionType}
                    iconSize={""}
                />
            ))}
        </MyPantryNavStyled>
    );
};

