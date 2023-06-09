import React from 'react';
import {iIllustration} from "../Graphic/Illustrations";
import {Graphic, iconType} from "../Graphic/Graphic";
import {AsyncImageWrapper} from "./Async.styled";

interface AsyncImageProps {
    src: string | iIllustration | iconType;
    imageType: "icon" | "illustration" | "image";
    alt: string;
    className?: string;
}

const AsyncImage = (props: AsyncImageProps) => {
    const [loaded, setLoaded] = React.useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };

    const getImage = () => {
        switch (props.imageType) {
            case "icon":
                return <Graphic graphicName={props.src as iconType}  />;
            case "image":
                return <AsyncImageWrapper
                    src={props.src as string}
                    alt={props.alt}
                    className={`${props.className || ''} ${loaded ? '' : 'hidden'} async-image`}
                    onLoad={handleImageLoad}
                />
        }
    }

        return (
            <>
                {getImage()}
                {!loaded && (
                    <div className={`placeholder ${loaded ? 'hidden' : ''}`}>
                        {/* Add your loading indicator or a fallback here */}
                    </div>
                )}
            </>
        );
};


export default AsyncImage;
