import styled from "styled-components";

export const ContentStoryStyled = styled.div`

  //handle table as child
  .k-table-container{
    margin-top: -1.5rem;
    .row{
      &:first-child{
        padding-top: 1.75rem;
      }
    }
  }
  
// main rules
  width: 100%;
  .content-area{
    overflow: hidden;
    .filterable-cards-area{
      animation: moveDownFromTop 1s forwards ease-out;
    }
    height: auto !important;
    &:empty{
      margin: 0 !important;
      display: none;
    }
  }
  .button-area{
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;

    .k-btn{
      z-index: 111;
    }
    .dividing-line{
      border-bottom: 1px solid $medium;
      position: absolute;
      right: 0;
      left: 0;
      top: 50%;
      height: 2px;
      z-index: 1;
    }
  }

  button.k-btn{
    &.secondary{
      border-color: $medium !important;
    }

  }

`;