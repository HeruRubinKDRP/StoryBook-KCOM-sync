import React, {ReactElement, useEffect, useState} from 'react';
import {AccordionContainer} from "./accordion.styled.";
import {useResizeDetector} from "react-resize-detector";
import {sizeT} from "../KSK_Experience/KSK";
import {AccordionItem} from "./AccordionItem/AccordionItem";

export interface iAccordionItem {
    name: string,
    id: number,
    isOpen:boolean
}
export interface iAccordionProps {
    items: iAccordionItem[];
    children: ReactElement[];
    accordionAction? : Function;
    useInternalOpenClosedState : boolean;
    initialOpenItems? : number[];
    onlyOneOpenAtOnce? : boolean;
}

const Accordion: React.FC<iAccordionProps> = (props : iAccordionProps) => {
    const [openItems, setOpenItems] = useState<number[]>(props.initialOpenItems ?? []);
    const [documentDimensions, setDocumentDimensions] = useState<{height : number, width:number}>({height : 0, width:0});

    const {width, height, ref } = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 200,
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

    useEffect(() => {
        console.log(openItems);
    }, [openItems]);

    const handleAccordionClick = (index: number) => {

        console.log('accordion clicked');
        if(props.accordionAction){
            props.accordionAction(index);
        }

        if (props.onlyOneOpenAtOnce) {
            setOpenItems([index]);
        } else {
            if (openItems.includes(index)) {
                setOpenItems(openItems.filter(item => item !== index));
            } else {
                setOpenItems([...openItems, index]);
            }
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
            return openItems.includes(index) ? 'open' : 'closed';
        }
        return props.items[index].isOpen ? 'open' : 'closed';
    }


    return (
        <AccordionContainer
            className={`${containerQueries(documentDimensions.width, documentDimensions.height)} accordion-container`}
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
