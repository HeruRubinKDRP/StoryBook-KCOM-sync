import React, {ReactElement, useEffect, useState} from 'react';
import {AccordionContainer} from "./AccordionStyled";
import {useResizeDetector} from "react-resize-detector";
import {sizeT} from "../KSK_Experience/KSK";
import {AccordionItem} from "./AccordionItem/AccordionItem";

export interface iAccordionProps {
    items: {name: string, id: number, isOpen:boolean}[];
    children: ReactElement[];
    accordionAction? : Function;
    useInternalOpenClosedState : boolean;
}

const Accordion: React.FC<iAccordionProps> = (props : iAccordionProps) => {
    const [openItems, setOpenItems] = useState<number[]>([]);
    const [documentDimensions, setDocumentDimensions] = useState<{height : number, width:number}>({height : 0, width:0});

    const {width, height, ref } = useResizeDetector({
        refreshMode: 'debounce',
        refreshRate: 100,
        refreshOptions: {
            leading: true,
            trailing: false
        },
        handleHeight: false, skipOnMount: false,
        onResize: () => {},
    })

    useEffect(() => {
        setDocumentDimensions({height: document.body.offsetHeight, width: document.body.offsetWidth});
    }, [document.body.offsetHeight, document.body.offsetWidth]);


    const handleAccordionClick = (index: number) => {


        if(props.accordionAction){
            props.accordionAction(index);
        }

        if (openItems.includes(index)) {
            setOpenItems(openItems.filter(item => item !== index));
        } else {
            setOpenItems([...openItems, index]);
        }
    };

    const getDynamicStyles =(widthX : number, heightY : number)=>{
        return(
            `
                --overallWidth : ${widthX}px;
                --overallHeight : ${heightY}px;
            `
        )
    }


    const containerQueries =(widthX : number, heightY : number)=> {

        let widthQuery: sizeT = "Small";
        let heightQuery: sizeT = "Small";

        if (widthX > 1600) {
            widthQuery = "Large";
        } else if (widthX > 800 && widthX <= 1600) {
            widthQuery = "Medium";
        }else if (widthX > 200 && widthX <= 800) {
            widthQuery = "Small";
        }else if (widthX <= 200 && widthX > 0) {
            widthQuery = "Tiny";
        }

        return `width-${widthQuery} height-${heightQuery}`;
    }

    const manageOpenClosedState = (index : number)=>{
        if(props.useInternalOpenClosedState){
            return openItems.includes(index) ? 'open' : '';
        }

        return props.items[index].isOpen ? 'open' : '';
    }

    return (
        <AccordionContainer
            className={containerQueries(documentDimensions.width, documentDimensions.height)}
            dynamicStyles={getDynamicStyles(width || documentDimensions.width, height || documentDimensions.height )}
            ref={ref}

        >
            {props.items.map((item, index) => (
                <AccordionItem
                    key={index}
                    index={item.id}
                    classes={manageOpenClosedState(index)}
                    outerContainerHeight={height || documentDimensions.height}
                    contents={props.children[index]}
                    menuItemLabel={item.name}
                    handleClick={handleAccordionClick}/>
            ))}
        </AccordionContainer>
    );
};

export default Accordion;
