import styled from "styled-components";

export const StickyItemStyled = styled.div`
  &.is-sticky{
    background-color: white;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    animation: moveFromTop 0.5s ease-in-out forwards;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  }
  
  &.not-sticky{
    display: none;
  }
  @keyframes moveFromTop {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(0); }
  }
  .sticky-menu-placement{
    display: flex;
    justify-content: space-between;
  }
  
  .left-area{
    display: flex;
    .logo{
      max-height: 8vh;
      width: 10vw;
      margin-left: 1vw;
    }
  }
  
  
`;