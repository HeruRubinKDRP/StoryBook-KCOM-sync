import {AccordionButton} from "../AccordionStyled";
import Graphic from "../../Graphic/Graphic";
import React, {ReactElement} from "react";
import {AccordionItemStyled} from "./AccordionItem.styled";

export interface iAccordionItem{
    index : number;
    classes? : string;
    outerContainerHeight : number;
    handleClick : Function;
    contents : ReactElement;
    menuItemLabel : string;
}

export const AccordionItem = (props:iAccordionItem) => {

    const outerAccordionInteraction=(i : number)=>{
        props.handleClick(i);
    }

    return(
        <AccordionItemStyled
            overallHeight={props.outerContainerHeight}
            className={`${props.classes} accordion-item`}>
            <AccordionButton onClick={()=>outerAccordionInteraction(props.index)} className="expand-collapse">
                {props.menuItemLabel}<Graphic graphicName={"chevron-right"} />
            </AccordionButton>
            <div className="accordion-content-item">
                <div className="accordion-content">
                    {props.contents}
                </div>
            </div>
        </AccordionItemStyled>
    )
}