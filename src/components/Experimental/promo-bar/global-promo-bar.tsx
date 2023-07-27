import Graphic from '../../Graphic/Graphic';
import React, {useState, useEffect} from 'react';
import {SliderWrapper, SlideWrapper, Slide, Arrow, SvgContainer} from './global-promo-bar-styled';
import {colorByNameType, colorNameToValue} from 'components/_utilities/color-name-to-value/colorNameToValue';
import KButton from 'components/Kbutton/KButton';
/*
import {Link} from 'react-router-dom';
*/


type SlideData = {
    text: string;
    url: string;
};

export interface TextSliderProps {
    slide1Text: string;
    slide1Url: string;
    slide1BgColor: colorByNameType;
    slide1FontColor: colorByNameType;

    slide2Text: string;
    slide2Url: string;
    slide2BgColor: colorByNameType;
    slide2FontColor: colorByNameType;

    slide3Text: string;
    slide3Url: string;
    slide3BgColor: colorByNameType;
    slide3FontColor: colorByNameType;

    slide4Text: string;
    slide4Url: string;
    slide4BgColor: colorByNameType;
    slide4FontColor: colorByNameType;

    interval: number; // in milliseconds
    bgColor?: colorByNameType;
    fontColor?: colorByNameType;
    showArrows?: boolean;
    autoplay?: boolean;

}

export const TextSlider: React.FC<TextSliderProps> = ({
                                                          slide1Text, slide1Url, slide1BgColor, slide1FontColor,
                                                          slide2Text, slide2Url, slide2BgColor, slide2FontColor,
                                                          slide3Text, slide3Url, slide3BgColor, slide3FontColor,
                                                          slide4Text, slide4Url, slide4BgColor, slide4FontColor,
                                                          interval,
                                                          bgColor = "sepia70",
                                                          fontColor = "dark-roast",
                                                          showArrows = true,
                                                          autoplay = true
                                                      }) => {
    const slides = [
        {text: slide1Text, url: slide1Url, bgColor: slide1BgColor, fontColor: slide1FontColor},
        {text: slide2Text, url: slide2Url, bgColor: slide2BgColor, fontColor: slide2FontColor},
        {text: slide3Text, url: slide3Url, bgColor: slide3BgColor, fontColor: slide3FontColor},
        {text: slide4Text, url: slide4Url, bgColor: slide4BgColor, fontColor: slide4FontColor}
    ];


    const [current, setCurrent] = useState(0);

    useEffect(() => {
        let slideInterval: NodeJS.Timeout;
        if (autoplay) { // Only start the interval if autoplay is true
            slideInterval = setInterval(() => {
                const newIndex = (current + 1) % slides.length;
                setCurrent(newIndex);
            }, interval);
        }

        // Clean up interval on unmount
        return () => slideInterval && clearInterval(slideInterval);
    }, [current, interval, slides.length, autoplay]);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <SliderWrapper bgColor={bgColor}>
            {showArrows && (
                <Arrow onClick={prevSlide} left>
                    <SvgContainer>
                        <Graphic graphicName={"chevron-left"} colorOverride=""></Graphic>
                    </SvgContainer>
                </Arrow>
            )}
            <SlideWrapper translateX={current * 100}>
                {slides.map((slide, index) => (
                    <Slide key={index} color={slide.fontColor || fontColor} bgColor={slide.bgColor}>{slide.text}
                        <KButton
                            label="CTA"
                            buttonType="ecommerce-secondary"
                            iconPlacement="right-edge"
                            iconStandard="none"
                            buttonWidth="fit-to-content"
                            transitionType="expand-bg"
                            iconSize={""}
                        />
                    </Slide>
                ))}
            </SlideWrapper>
            {showArrows && (
                <Arrow onClick={nextSlide} right>
                    <SvgContainer>
                        <Graphic graphicName={"chevron-right"} colorOverride=""></Graphic>
                    </SvgContainer>
                </Arrow>
            )}
        </SliderWrapper>
    );
};

export default TextSlider;
