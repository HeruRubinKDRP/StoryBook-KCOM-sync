import styled from "styled-components";

export const RecommendationBubbleStyled = styled.div`
  
  *{
    box-sizing: border-box;  
  }
   .recommendation-cards{
     display: flex;
     flex-direction: row;
     justify-content: center;
     gap: var(--space-2xs);
   }
  h2.title{
    color: white;
    text-align: center;
    font-size: var(--step-0);
    font-weight: 100;
    margin: 0 var(--step--6) var(--step--6) 0;
  }
  display: flex;
  flex-direction: column;
  min-height: 33vh;  
  margin: 1rem 0 2rem 0;   
  padding: 1rem 2rem;
  background-color: #473036;
  border-radius: 0;
  margin: 1rem -2rem;
`;