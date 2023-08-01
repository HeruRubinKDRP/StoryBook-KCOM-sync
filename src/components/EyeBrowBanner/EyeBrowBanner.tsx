import React, {useEffect, useState} from 'react';
import {EyebrowBannerProps} from "./eyebrow-banner.interfaces";
import {EyebrowBannerStyled, EyeBrowSlideStyled} from "./eye-brow-banner.styled";
import {useResizeDetector} from "react-resize-detector";
import {Kcarousel} from "../Carousel/Kcarousel";


const EyebrowBanner: React.FC<EyebrowBannerProps> = ({contents, overallHeight, mainColor, mobileBreakPoint}) => {

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

    const getSlides = () => {

        return contents.map((content, index) => (
            <EyeBrowSlideStyled className="eyebrow-slide" key={index}
                                style={{width: `${isMobile ? 100 : 100 / contents.length}%`}}>
                <a href={content.ctaLink} className={`eb-slide-content ${content.color}`}>
                    <h1>{content.heading}</h1>
                    <p>{content.paragraph}</p>
                    <small>{content.details}</small>
                </a>
                <div className="fine-print-area">
                    <small>{content.finePrint}</small>
                    <a className="fine-print" href={content.hyperlink}>{content.hyperlinkText}</a>
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

            {!isMobile && getSlides()}
        </EyebrowBannerStyled>
    );
};

export default EyebrowBanner;
