import React, {ReactElement, useEffect, useState} from 'react';
import {AccordionButton, AccordionContainer, AccordionItem} from "./AccordionStyled";
import {useResizeDetector} from "react-resize-detector";
import Graphic from "../Graphic/Graphic";
import {sizeT} from "../KSK_Experience/KSK";


export interface AccordionProps {
    items: string[];
    children: ReactElement[];
}



const Accordion: React.FC<AccordionProps> = ({ items, children }) => {
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

    return (
        <AccordionContainer
            className={containerQueries(documentDimensions.width, documentDimensions.height)}
            dynamicStyles={getDynamicStyles(width || documentDimensions.width, height || documentDimensions.height )}
            ref={ref}
        >
            {documentDimensions.height}
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    overallHeight={height || documentDimensions.height}
                    className={`${openItems.includes(index) ? "accordion-item-open" : "closed"}`}>
                    <AccordionButton onClick={() => handleAccordionClick(index)} className="expand-collapse">
                        {item}<Graphic graphicName={"chevron-right"} />
                    </AccordionButton>
                    <div className="accordion-content-item">
                       <div className="accordion-content">
                           {openItems.includes(index) && children[index]}
                       </div>
                    </div>

                </AccordionItem>
            ))}
        </AccordionContainer>
    );
};

export default Accordion;
