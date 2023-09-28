import styled from "styled-components";
import {ctaColorStyles} from "../../../../_commonStyles/common.styled";

export const ChatItemContainer = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: var(--space-2xl-3xl, 1fr);
  .back-and-forth {
    grid-column-start: 2;
  }
    .summary{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      width: var(--space-2xl-3xl);
      .divider{
        background-color: #c1b1b1;
        border-radius: 100vw;
        width: 2px;
        margin: 0 2rem;
        height: 100%;
      }
      h3{
        margin: 0;
        font-size: var(var(--step--4));
      }
    }
`;
export const ChatBubbleStyled = styled.div`
  ${ctaColorStyles};
  display: flex;
  align-items: center;
  flex-direction: row;
  
  &.left {
    flex-direction: row; 
    .text{
        background-color: rgba(255,255,255,0.5); 
        box-shadow: 1px 1px 0.5rem 0 rgba(12,12,12,0.15);
        font-size: 1rem;
        color: #332a2a;
        
    }
  }

  &.right { 
    width: 100%;
    .text{
      background-color: #fff; 
      width: inherit;
      text-align: left;
    }
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex-grow: 0;
  }

  .text {
    padding: 1rem 2rem;
    margin: 1rem 0 0 1rem;
    flex-basis: fit-content;
    box-sizing: border-box;
    border-radius: 0 1rem 1rem 1rem;
    flex-grow: 1;
  }

`;