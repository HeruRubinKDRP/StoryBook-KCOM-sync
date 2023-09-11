import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface TypingEffectProps {
    message: string;
    speed?: number;
    showCursor?: boolean;
    classes?: string;
}

const TypingContainer = styled.div`
   
  font-size: 16px;
`;

const Cursor = styled.span`
  animation: blink 0.5s infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

const TypingEffect: React.FC<TypingEffectProps> = ({
                                                       message,
                                                       speed = 100,
                                                       showCursor = true,
                                                       classes = '',
                                                   }) => {
    const [text, setText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText((prevText) => prevText + message[index]);
            index++;
            if (index > message.length - 1) {
                clearInterval(timer);
            }
        }, speed);

        return () => {
            clearInterval(timer);
        };
    }, [message, speed]);

    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setCursorVisible((prevVisible) => !prevVisible);
        }, 500);

        return () => {
            clearInterval(cursorTimer);
        };
    }, []);

    return (
        <TypingContainer className={`typing-effect ${classes}`}>
            {text}
            {showCursor && cursorVisible && <Cursor>|</Cursor>}
        </TypingContainer>
    );
};

export default TypingEffect;
