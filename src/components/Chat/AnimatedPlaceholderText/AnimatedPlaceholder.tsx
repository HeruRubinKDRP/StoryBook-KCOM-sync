// components/AnimatedPlaceholder.tsx

import React, { useState, useEffect } from 'react';
import {AnimatedPlaceholderStyled} from "./animated-placeholder.styled";

interface Props {
    placeholders: string[];
    duration: number;
}

const AnimatedPlaceholder: React.FC<Props> = ({ placeholders, duration }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        }, duration * 1000);

        return () => clearInterval(interval);
    }, [placeholders, duration]);

    return (
        <AnimatedPlaceholderStyled  key={placeholders[currentIndex]} className="animated-placeholder">
            {placeholders[currentIndex]}
        </AnimatedPlaceholderStyled>
    );
};

export default AnimatedPlaceholder;
