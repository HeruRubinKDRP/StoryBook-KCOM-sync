import styled from "styled-components";

export const SequenceStyled = styled.div`
.title{
  background-color: var(--colorDarkRoast);
  color: white;
  border-radius: var(--step--6);
  padding: var(--step--1);
}
  
  .summary{
  font-size: var(--step-0);
  margin: 0;
  font-weight: 200;
  color: var(--colorSepia);
}
  .step{
    display: flex; 
    align-items: center;
    flex-wrap: nowrap;
    p{
      font-size: var(--step--3);    
    }
  }
.step-number{
  display: flex;
  justify-content: center;
  font-size: var(--step-0);
  flex-basis: 0;
  color: var(--colorMediumRoast);
  min-width: 1rem;
  margin-right: var(--space-s);
}
  
  .instructions{
    padding: var(--space-xs) var(--step--1);
  }

`