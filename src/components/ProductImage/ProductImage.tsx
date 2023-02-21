import React, {ReactElement, useEffect, useRef, useCallback, RefObject, DOMElement, useState} from "react";

import styled from "styled-components";
import {randomRange} from "../_utilities/Math Pure Funcs/RandomRange";

//import reusable images

import podBaseImage from "./images/dynamic/pod-base/pod-base.png";
import podShinyOverlay from './images/dynamic/pod-base/pod-duo-shiny.png';

export type creativeAsset = "pod-box" | "pod-two-up" | "pod-box-and-pods" | "pod-lid" | "coffee-maker" | "top-down-realistic";

export interface IproductImage {
    elementType: creativeAsset;
    uniqueID: string;
    podLid?: string;
    podBox?: string;
    containerDimensions: { height: string, width: string };

    podPosLeft?: string | number | undefined;
    podPosTop?: string | number | undefined;
    podWidth?: string | number | undefined;
    podHeight?: string | number | undefined,
    podMaxWidth?: string | number | undefined,
    podMaxHeight?: string | number | undefined
}


export function ProductImage(props: IproductImage) {
    const [initialized, setInitialized] = useState(false);

    const boxRef = useRef<HTMLDivElement>();
    const [boxContainerDimensions, setBoxDimensions] = useState({width: 0, height: 0});

    const podBox = (stringExpected: string | undefined) => {
        if (stringExpected == undefined) {
            return ""
        } else {
            return stringExpected;
        }
    }

    useEffect(() => {
            const productBox = boxRef.current as HTMLDivElement;
            let prodDims: DOMRect;
            if (productBox != undefined) {
                prodDims = productBox.getBoundingClientRect();
                if (initialized == false && productBox != undefined) {
                    setInitialized(true);
                    setBoxDimensions({
                        width: prodDims.width,
                        height: prodDims.height
                    });

                }
            }
        },[initialized]
    )


    const getComponent = () : ReactElement => {
        switch (props.elementType) {

            case "pod-two-up":
              console.log("podBaseImage.src ", podBaseImage);

                return (
                    <div style={
                        {
                            height: props.containerDimensions.height,
                            width: props.containerDimensions.width
                        }
                    }
                         className="pod-duo"
                    >

                        <svg style={{overflow: "visible"}} viewBox="0 0 200 200" width="100%" height="100%">
                            <image  href={podBaseImage} height="200" width="200"/>
                            <mask id={`${props.uniqueID}mask1`}>
                                <circle cx="59" cy="113" r="60" fill="white"/>
                            </mask>
                            <mask id={`${props.uniqueID}mask2`}>
                                <ellipse cx="136" cy="48" rx="57" ry="19" fill="white"/>
                            </mask>
                            <g>
                                <image mask={`url(#${props.uniqueID}mask1)`} preserveAspectRatio="none" height="117"
                                       width="124" x="-2.25" y="53.5" href={props.podLid}/>
                                <image mask={`url(#${props.uniqueID}mask2)`} preserveAspectRatio="none" height="37"
                                       width="118" x="76" y="30" href={props.podLid}/>
                            </g>
                            <image href={podShinyOverlay} height="200" width="200"/>

                        </svg>

                    </div>
                )
                break;

            case "pod-lid":
                return (
                    <div
                      ref={refChecker()}
                      className="pod-lid"
                      style={
                          {
                            width : props.containerDimensions.width,
                            height : props.containerDimensions.height,
                            backgroundImage : `url(${props.podLid})`
                          }
                      }
                    />
                    )


            case "pod-box":
                return (
                  <div
                  ref={refChecker()}
                  style={
                    {
                        height: props.containerDimensions.height,
                        width: props.containerDimensions.width,
                        backgroundImage: `url(${props.podBox})`,

                    }
                }
                             className="pod-box"
                >
                    <div className="box-edge-l auto-elem"/>
                    <div className="box-edge-t auto-elem"/>
                    <div className="box-edge-r auto-elem"/>
                    <div className="box-edge-b auto-elem"/>
                </div>)
            case "pod-box-and-pods":
                return (
                    <div
                      ref={refChecker()}
                      className="pod-scene-container"
                    >
                        <ProductImage
                            elementType="pod-box"
                            uniqueID={props.uniqueID}
                            podBox={podBox(props.podBox)}
                            containerDimensions={
                                {
                                    width: props.containerDimensions.width,
                                    height: props.containerDimensions.height
                                }
                            }/>
                        <div className="pods-duo-container"
                             style={
                                 {
                                     bottom: `-75px`,
                                     right: `-75px`
                                 }
                             }
                        >
                            <ProductImage
                                elementType="pod-two-up"
                                uniqueID={props.uniqueID}
                                podLid={podBox(props.podLid)}
                                containerDimensions={
                                    {
                                        width: `calc(${props.containerDimensions.width} * 0.5 )`,
                                        height: `calc(${props.containerDimensions.width} * 0.5 )`
                                    }
                                }
                            />
                        </div>


                    </div>
                )

            case "top-down-realistic":

                return (
                    <div
                        ref={refChecker()}
                        key={`k${props.uniqueID}`}
                        style={
                            {
                                left: props.podPosLeft,
                                top: props.podPosTop,
                                width: props.podWidth,
                                height: props.podHeight,
                                maxWidth: props.podMaxWidth,
                                maxHeight: props.podMaxHeight
                            }
                        }
                        className="pod">
                        <div className="pod-clip stretch-up-down">
                            <div className="pod-lid image-element stretch-up-down"
                                 style={{
                                     zIndex: 2,
                                     opacity: 0.75,
                                     backgroundImage: `url("/images/pod-lids/shiny-overlay.png")`
                                 }}/>
                            <div className="pod-lid image-element stretch-up-down" style={{
                                zIndex: 1,
                                transform: `rotate(${randomRange(40, true)}deg)`,
                                backgroundImage: `url(${props.podLid})`
                            }}/>
                            )
                        </div>
                        <div className=" image-element shadow" style={{
                            zIndex: 0,
                            backgroundImage: `url("/images/pod-lids/shadows/pod-shadow-left-right.png")`
                        }}/>
                    </div>
                )

        }

        return <></>
    }

    const refChecker = (): RefObject<HTMLDivElement> | null => {
        if (boxRef.current != undefined) {
            return boxRef as RefObject<HTMLDivElement>;
        } else {
            return null;
        }
    }


    return (getComponent())
}
