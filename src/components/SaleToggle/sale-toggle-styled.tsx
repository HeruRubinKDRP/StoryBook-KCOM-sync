import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: inline-block;
  width: 40px;
  height: 20px;
  position: relative;
  background-color: #00889F;
  border-radius: 20px;
`;

export const ToggleButton = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid #00889F;
  border-radius: 50%;
  position: absolute;
  top: 0;
  transition: left 0.2s ease-in-out;
`;
