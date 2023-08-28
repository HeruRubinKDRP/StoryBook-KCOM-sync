import styled, {keyframes} from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StepContainer = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
  margin-bottom: 20px;
  height: 65vh;
`;


export const StepsOutermostContainer = styled.div`
display: flex;
  .option-selection-area{
    text-align: center;
    h1{
        font-size: 3rem;
      margin: 0;
    }
    h2{
        font-size: 1.5rem;
      margin: 0;
    }
  }
  +
  .selections-area{
    display: flex;
    flex-direction: row;
  }

`;