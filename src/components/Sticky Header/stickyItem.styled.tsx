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
    z-index: 10000;
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
  
  .purchase-options-container,.price-area {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .purchase-options-container { 
    margin: 1rem;
    .price-area{
      margin-right: 0.5rem;
    }
    
  }
  
  .left-area{
    display: flex;
    align-items: center;
    .logo{
      max-height: 8vh;
      width: 10vw;
      margin-left: 1vw;
    }
  }
  
  
  //Breakpoints
  
  &.mobile-dimensions{
    .left-area{
     .logo{
       display: none;
     } 
    }
    .search-input{
      display: none;
    }

    .purchase-options-container{
      .price-area{
        flex-direction: column;
       
        p{
          line-height: 0.5rem;
        }
      }
    }
  }
  
  
`;