import styled from "styled-components";


export const ChatBubbleStyled = styled.div`
  
  display: flex;
  align-items: center;
  margin: 10px;
  
  &.left {
    flex-direction: row;
  }

  &.right {
    flex-direction: row-reverse;
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .text {
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 10px;
    margin: 0 10px;
  }

`;