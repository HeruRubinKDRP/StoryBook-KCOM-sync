import React, { useState } from 'react';
import {EyebrowBannerProps} from "./eyebrow-banner.interfaces";
import {EyebrowBannerStyled, EyeBrowSlideStyled} from "./eye-brow-banner.styled";





const EyebrowBanner: React.FC<EyebrowBannerProps> = ({ contents, height }) => {




    return (
        <EyebrowBannerStyled height={height}>
            {contents.map((content, index) => (
                <EyeBrowSlideStyled className="eyebrow-slide" key={index}>
                    <h1>{content.heading}</h1>
                    <p>{content.paragraph}</p>
                    <small>{content.finePrint}</small>
                    <small>{content.finePrint}</small>
                    <a className="fine-print" href={content.hyperlink}>Read more</a>
                </EyeBrowSlideStyled>
            ))}
        </EyebrowBannerStyled>
    );
};

export default EyebrowBanner;
