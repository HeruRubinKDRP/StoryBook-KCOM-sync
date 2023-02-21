import React, {ReactElement, RefObject, useCallback, useEffect, useRef, useState} from "react";
import {useResizeDetector} from 'react-resize-detector';
import styled from "styled-components";
//import {randomRange} from "../_utilities/Math Pure Funcs/RandomRange";
import KButton from "../Kbutton/KButton";
import {ProductImage} from "../ProductImage/ProductImage";

export type ContainerType =
    "small-skinny"
    | "medium-skinny"
    | "tall-skinny"
    | "wide-skinny"
    | "full-width-viewport-height"
    | "half-width"
    | "initial";

export interface IproductScene {
    componentType: "special" | "top-down" | "brewer-focused"
    outerWidth: number;
    outerHeight: number;
    upperImage: string;
    backgroundImage: string;
    coffeeCupStyle: "modern";
    coffeeDrinkStyle: "black" | "dark-roast" | "dairy-just-poured" | "hot-cocoa" | "hot-cocoa-marshmallows";
    ctaLabel: string;
    ctaURL: string;
    bgColor: string;
    lowerImage: string;
    headerCopy: string;
    headerColor: string;
    detailCopy: string;
    podLids: string[]
}


export const ProductScene = (props: IproductScene) => {

    const aspectRatio = (outerWidth: number, outerHeight: number): ContainerType | undefined => {

        const widthToHeightRatio = outerWidth / outerHeight;
        const heightToWidth = outerHeight / outerWidth;

        console.log(widthToHeightRatio);
        if (widthToHeightRatio > 1 && heightToWidth < 0.25) {
            return "wide-skinny"
        } else if (widthToHeightRatio < 0.25 && heightToWidth > 1) {

            return "tall-skinny";
        }
        return undefined;

    }


    // ****** when this component gets resized by whatever means, this measures the container
    const {width, height, ref} = useResizeDetector();


    const focalRef: RefObject<any> = useRef<HTMLDivElement>();

    useEffect(() => {
        // TODO
    }, []);


    const topDownComponent = () => {

        let focalImageWidth: number = 0;
        let focalImageTop: number = 0;
        let focalImageLeft: number = 0;

        if (width == undefined || height == undefined) {
            return;
        } else {
            focalImageWidth = width / 3;
            focalImageTop = (height / 2) - (focalImageWidth * 0.75);
            focalImageLeft = (width / 2) - (focalImageWidth / 2);
        }


        // make sure focal image doesn't go off top of the page
        if (focalImageTop <= 10) {
            focalImageTop = 10;
        }

        //dynamic display of table top elements:
        const getTopDownElements = () => {

            let pods: ReactElement[] = [];
            let podWidth = focalImageWidth / 3;
            let podHeight = focalImageWidth / 3;
            let podMaxWidth = focalImageWidth / 3;
            let podMaxHeight = focalImageWidth / 3;

            const elementPosition = (index: number, totalElements: number, offset: number, containerWidth: any, containerHeight: any) => {
                const aspectRatioType = aspectRatio(width, height);

                switch (aspectRatioType) {
                    case "tall-skinny":
                        focalImageWidth = width * 2;
                        podWidth = focalImageWidth / 3;
                        podHeight = focalImageWidth / 3;
                        podMaxHeight = focalImageWidth * 0.75;
                        podMaxWidth = focalImageWidth * 0.75;

                        const leftPosition = (width / 2) - (podWidth / 2)
                        if (index == 0) {
                            offset = 0;
                        }
                        const topPosition = (podWidth * index) + (offset * index);
                        return {left: `${leftPosition}px`, top: `${topPosition}px`}
                }


                let radius = containerWidth / 3;
                let angle = Math.PI * 3.5;
                let step = ((2 * Math.PI) / totalElements) * (index + 1);
                let x = Math.round(containerWidth / 2 + radius * Math.cos(angle + step) - radius / 2);
                let y = Math.round(containerHeight / 2 + radius * Math.sin(angle + step) - radius / 2);

                if (x <= 0) {
                    x = 0;
                } else if (x >= containerWidth - podWidth) {
                    x = containerWidth - podWidth;
                }

                if (y <= 0) {
                    y = 0
                } else if (y >= containerHeight - podHeight) {
                    y = containerHeight - podHeight;
                }
// make sure elements don't go off bottom edge
                if (y + (podHeight * 2) + 10 >= containerHeight) {
                    console.log("hit bottom I think", containerHeight - podHeight);
                    y = containerHeight - (podHeight * 2);
                }

                if ((y + (podHeight * 1.72) >= focalImageTop) && (y + podHeight <= focalImageTop + focalImageWidth)) {
                    // reposition pods and elements to avoid focal image
                    if (x <= containerWidth / 2) {
                        x = focalImageLeft - (podHeight * 2);
                    } else if (x <= containerWidth / 2) {
                        x = focalImageLeft + focalImageWidth + (podHeight * 2);
                    }
                }

                const bla = {left: `${x + (focalImageWidth / 3)}px`, top: `${y + (focalImageWidth / 4.65)}px`}
                console.log(bla)
                return bla;
            }


// ******  Create pod lids and elements
            for (let i = 0; i < props.podLids.length; i++) {
                let itemPos = elementPosition(i, props.podLids.length, 20, width, height);

                pods.push(
                    <ProductImage
                        elementType="top-down-realistic"
                        uniqueID={i.toString()}
                        containerDimensions={{
                            height: height?.toString(),
                            width: width?.toString()
                        }}
                        podLid={props.podLids[i]}
                        podPosTop={itemPos.top}
                        podPosLeft={itemPos.left}
                        podWidth={podWidth}
                        podHeight={podHeight}
                        podMaxWidth={podMaxWidth}
                        podMaxHeight={podMaxHeight}
                    />
                )

            }

            return (
                <div className="focal-image" ref={focalRef}>
                    <div className="image-element" style={{
                        left: focalImageLeft,
                        top: focalImageTop,
                        width: focalImageWidth,
                        height: focalImageWidth,
                        maxHeight: focalImageWidth
                    }}>
                        <div style={{position: "relative"}}>
                            <div style={{
                                zIndex: 1,
                                width: focalImageWidth,
                                height: focalImageWidth,
                                maxHeight: focalImageWidth,
                                backgroundImage: `url(${props.upperImage})`
                            }} className=" image-element"/>
                            <div style={{
                                zIndex: 0,
                                width: focalImageWidth * 1.75,
                                height: focalImageWidth,
                                maxHeight: focalImageWidth,
                                backgroundImage: `url("/images/focal-images/overhead-coffee-cups/shadows/shadow-coffee-td-lr.png")`
                            }}
                                 className=" image-element"
                            />
                        </div>
                    </div>

                    <div className="pod-images image-element abs-fill">
                        {pods}
                    </div>
                </div>
            );

        }

        // ***** adjust background based on aspect ratio
        const backgroundManager = () => {
            const aspectRatio = width / height;
            if (aspectRatio > 1) {
                return aspectRatio * 150;
            } else if (aspectRatio < 0.25) {
                return height / 2;
            }

            return width / 2;
        }

        return (
            <div className="filled-bg" style={{
                backgroundSize: `${backgroundManager()}px auto`,
                backgroundImage: `url(${props.backgroundImage})`,
                width: "100%",
                height: "100%"
            }}>
                <div className="main-message-area">
                    <div className="details">{props.detailCopy}</div>
                    <h2>{props.headerCopy}</h2>
                    <KButton classes="" label={props.ctaLabel} linkTo={props.ctaURL} buttonType="primary"
                             iconPlacement="no-icon"/>
                    <p className="secondary-text"></p>
                </div>
                {getTopDownElements()}
            </div>
        )
    };


    const getComponent = () => {

        switch (props.componentType) {
            case "special":
                return (
                    <>


                    </>);
            case "top-down":
                return topDownComponent();
        }
    };


    let ResizeCheckerContainer = styled.div`
      width: ${props.outerWidth}px;
      height: ${props.outerHeight}px;
      background-color: #473036;
      color: #cecece;
      box-sizing: content-box;
    `;

    return <ResizeCheckerContainer className="content-tile" ref={ref}>
        {getComponent()}
    </ResizeCheckerContainer>;

}
