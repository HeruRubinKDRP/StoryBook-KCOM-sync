import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const TypingContainer = styled.div`
  font-size: 16px;
`;

const WordContainer = styled.span`
  display: inline-block;
`;

export interface TypingEffectProps {
    message: string;
    speed?: number;
    showCursor?: boolean;
    classes?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
                                                       message,
                                                       speed = 100,
                                                       showCursor = true,
                                                       classes = '',
                                                   }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let index = 0;
        const container = containerRef.current;

        function typeCharacter() {
            if (container && index < message.length) {
                const charSpan = document.createElement('span');
                charSpan.innerText = message[index];
                container.appendChild(charSpan);
                index++;
                setTimeout(typeCharacter, speed);
            }
        }

        typeCharacter();
    }, []);

    return (
        <TypingContainer className={`typing-effect ${classes}`} ref={containerRef}>
            {/* Content will be added here */}
        </TypingContainer>
    );
};

export default TypingEffect;
