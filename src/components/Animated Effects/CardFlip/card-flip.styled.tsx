import styled from "styled-components";

interface iCardContainer{
    overallWidth: number;
}

export const CardContainer = styled.div<iCardContainer>`
  --overallWidth: ${props => props.overallWidth + 'px'};
  --spacingLarge: calc(var(--overallWidth) * 0.008 + 8px);
  --ctaButtonHeight: calc(var(--spacingLarge) * 2);
  
  perspective: 1000px;
  min-width: 200px; // Adjust the card width as needed
  min-height: 300px; // Adjust the card height as needed
  height: 100%;
  width: 100%;
  position: relative;
  
  .cta-container{
    display: grid;
    grid-template-columns: 1fr 0.25fr;
    grid-template-rows: auto;
    grid-gap: 0;
    align-items: end;
    bottom: calc(var(--ctaButtonHeight) ) !important;
    position: absolute;
    width: 100%;
    height: calc(var(--ctaButtonHeight) * 3) !important;
    padding: 0 5% 0 5%;
    .flip-btn{
      grid-column: 2 / 2;
      grid-row: 1 / 1;
    }
    .cta-main{
      grid-column: 1 / 1;
      grid-row: 1 / 1; 
    } 
    
    
  }
`;

export const CardInner = styled.div<{ isFlipped: boolean }>`
  transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};
  transform-style: preserve-3d;
  transition: transform 0.8s;
  transform-origin: center center; // adjust the transform-origin
   
  width: 100%;
  height: 100%;
  
  .card-front, .card-back{
    height: 100%;
  }
  
  .backing{
    position: absolute;
    inset: 0;
    background-color: #fff;
  }
`;


export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  
`;

export const Front = styled(CardFace)`
    transform: rotateY(0deg);
`;

export const Back = styled(CardFace)`
  transform: rotateY(180deg);
  
`;