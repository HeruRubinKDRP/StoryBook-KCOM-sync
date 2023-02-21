import styled from "styled-components";

export const NavItemStyled = styled.a`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  
  //base style rules
  label {
    display: flex;
  }

  .nav-item-image {
    width: 12vw;

    img {
      width: 100%;
    }
  }

  

  // by size

  &.product-large {
    padding-right: 15%;

    .nav-item-image {

    }

    .expander {
      opacity: 1;
      top: 25%;
      bottom: 20%;
      left: 10%;
      right: 10%;
      background: linear-gradient(180deg, #f5f4f1 0%, #fff 100%);
    }

    label {
      font-weight: 600;
      margin-left: 3%;
    }

    flex-direction: row;

  }

  &.large{
    .primary-text{
      text-align: center;
      margin: 0.5vw 1vw;
      align-items: center;
    }
    .chevron-right{
      margin-bottom: 0.35vw;
    }
  }

  &.small {
    label {
      flex-direction: row-reverse;
      align-items: center;
    }

    .icon {
      height: 1.5vw;
      width: 1.5vw;
      margin-right: 1vw;
    }

  }

  // by mode

`
