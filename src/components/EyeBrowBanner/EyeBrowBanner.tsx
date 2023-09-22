import React, {useEffect, useState} from 'react';
import {EyebrowBannerProps} from "./eyebrow-banner.interfaces";
import {DisclaimerStyled, EyebrowBannerStyled, EyeBrowSlideStyled} from "./eye-brow-banner.styled";
import {useResizeDetector} from "react-resize-detector";
import {Kcarousel} from "../Carousel/Kcarousel";
import {PopUp} from "../PopUp/PopUp";


const EyebrowBanner: React.FC<EyebrowBannerProps> = ({
                                                         overrideTextColor,
                                                         overrideBGColor,
                                                         contents,
                                                         overallHeight,
                                                         mainColor, mobileBreakPoint}) => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState("");

    const [isMobile, setIsMobile] = useState(false);
    const {width, height, ref} = useResizeDetector({
        refreshMode: 'throttle',
        refreshRate: 100,
        refreshOptions: {
            leading: true,
            trailing: false,
        },
        handleHeight: false, skipOnMount: false,
        onResize: () => {

        },
    })

    useEffect(() => {
        checkSize(width!);
    }, [width])

    const checkSize = (widthX: number) => {
        if (!widthX) return;
        console.log("widthX", widthX);
        if (widthX <  1000) {
            setIsMobile(true);
            return;
        }
        setIsMobile(false);
        return;
    }

    const handleContent = (selectedIndex : number) => {
        setModalContent(contents[selectedIndex].disclaimer);
        setModalIsOpen(true);
    }

    const getSlides = () => {

        return contents.map((content, index) => (
            <EyeBrowSlideStyled className="eyebrow-slide" key={index}
                                style={{width: `${isMobile ? 100 : 100 / contents.length}%` }}>
                <a href={content.ctaLink} className={`eb-slide-content ${content.color}`} style={{backgroundColor : overrideBGColor }}>

                  <div className="text-area">
                      {/*<h1 style={{color : overrideTextColor}}></h1>*/}
                      <p className="message" style={{color : overrideTextColor}}>
                          <strong>{content.heading}</strong>
                          {` ${content.paragraph} ${content.details} ${content.finePrint} `}
                          <a className="fine-print" onClick={()=>handleContent(index)}>{content.hyperlinkText}</a>
                      </p>
                      {/*<p style={{color : overrideTextColor}}>{content.details}</p>*/}
                  </div>
                </a>
                <div className="fine-print-area">
                    <small></small>

                </div>
                <div className="divider"/>
            </EyeBrowSlideStyled>
        ))
    }

    return (
        <EyebrowBannerStyled ref={ref} className={`${isMobile ? "mobile" : "desktop"} ${mainColor}`}
                             overallHeight={overallHeight}>
            {isMobile && <Kcarousel
                carouselType="slider"
                component="carousel"
                itemsPerSlide={1}
                keepNavButtons={true}
                navPosition="bottom"
                navStyle="dots"
                slides={getSlides()}
                useContainerQueries="ignore"
            />}
            {modalIsOpen && <PopUp hasVeil={true} classes="bg-white" closeFunc={()=>setModalIsOpen(false)} isOpen={true} hasHeader={true} hasBackButton={false} >
                <DisclaimerStyled className="disclaimer-content">
                    {modalContent}
                </DisclaimerStyled>
            </PopUp>}

            {!isMobile && getSlides()}
        </EyebrowBannerStyled>
    );
};

export default EyebrowBanner;
