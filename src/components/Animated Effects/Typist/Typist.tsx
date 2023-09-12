import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TypingContainer = styled.div`
  font-size: 16px;
`;

const WordContainer = styled.span`
  display: inline-block;
`;

const CharSpan = styled.span<{ delay: number }>`
  display: inline-block;
  opacity: 0;
  transform: translateY(0.15em);
  animation: appear 0.2s forwards;
  animation-delay: ${(props) => props.delay}s;

  @keyframes appear {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export interface TypingEffectProps {
    message: string;
    speed?: number;
    showCursor?: boolean;
    classes?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
                                                       message,
                                                       speed = 0.1,
                                                       showCursor = true,
                                                       classes = '',
                                                   }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        let typedText = '';
        let index = 0;

        function typeCharacter() {
            if (index < message.length) {
                typedText += message[index];
                index++;
                setText(typedText);
                setTimeout(typeCharacter, speed * 1000);
            }
        }

        typeCharacter();
    }, [message, speed]);

    return (
        <TypingContainer className={`typing-effect ${classes}`}>
            {text.split(' ').map((word, wordIndex) => (
                <WordContainer key={wordIndex}>
                    {word.split('').map((char, charIndex) => (
                        <CharSpan key={charIndex} delay={(wordIndex + charIndex) * speed}>
                            {char}
                        </CharSpan>
                    ))}
                    {'\u00A0'}
                </WordContainer>
            ))}
        </TypingContainer>
    );
};

export default TypingEffect;
