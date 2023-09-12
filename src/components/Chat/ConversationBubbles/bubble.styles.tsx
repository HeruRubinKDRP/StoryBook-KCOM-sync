import styled from "styled-components";
import {ctaColorStyles} from "../../_commonStyles/common.styled";


export const ChatBubbleStyled = styled.div`
  ${ctaColorStyles};
  display: flex;
  align-items: center;
  margin: 10px;
  
  &.left {
    flex-direction: row;
    .text{
        background-color: #fff;
        border-radius: 0 1rem 1rem 1rem;
        box-shadow: 1px 1px 0.75rem 4px rgba(12,12,12, 0.15);
        font-size: 1rem;
        color: #332a2a;
    }
  }

  &.right {
    flex-direction: row-reverse;
    .text{
      background-color: #f1f1f1;
      border-radius: 1rem 0 1rem 1rem;
    }
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .text { 
    
    padding: 1rem 2rem;
    border-radius: 10px;
    margin: 1rem 0.75rem 0.75rem 0;
  }

`;