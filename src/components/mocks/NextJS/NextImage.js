import React from 'react';
import Image from "next/image";

const NextImage = ({ src, alt, ...rest }) => {
    return <Image src={src}
                  alt={alt}
                  {...rest}
                  unoptimized={true}
                  width={500}
                  height={500} />;
};

export default NextImage;
