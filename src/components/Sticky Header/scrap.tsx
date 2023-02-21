import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const slideIn = keyframes`
  from {
    transform: translateY(50%);
  }

  to {
    transform: translateY(0%);
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 30px;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1), 0px 4px 5px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s ease-in;
`;

const Button = styled.button`
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 3px 3px 10px #e6e6e6, -3px -3px 10px #f9f9f9;

  &:hover {
    box-shadow: 5px 5px 20px #e6e6e6, -5px -5px 20px #f9f9f9;
    transform: translateY(-2px);
  }
`;

interface Props {}

export const ScrapComponent: React.FC<Props> = () => {
    const [showButtons, setShowButtons] = useState(false);

    return (
        <Container>
            <Button onClick={() => setShowButtons(!showButtons)}>
                {showButtons ? 'Hide' : 'Show'} Buttons
            </Button>
            {showButtons && (
                <ButtonsContainer>
                    <Button>Button 1</Button>
                    <Button>Button 2</Button>
                    <Button>Button 3</Button>
                    <Button>Button 4</Button>
                </ButtonsContainer>
            )}
        </Container>
    );
};
