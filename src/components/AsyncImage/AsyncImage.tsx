import React from 'react';

interface AsyncImageProps {
    src: string;
    alt: string;
    className?: string;
}

const AsyncImage: React.FC<AsyncImageProps> = ({ src, alt, className }) => {
    const [loaded, setLoaded] = React.useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };

    return (
        <>
            <img
                src={src}
                alt={alt}
                className={`${className || ''} ${loaded ? '' : 'hidden'}`}
                onLoad={handleImageLoad}
            />
            {!loaded && (
                <div className={`placeholder ${loaded ? 'hidden' : ''}`}>
                    {/* Add your loading indicator or a fallback here */}
                </div>
            )}
        </>
    );
};

export default AsyncImage;
