import styled from "styled-components";

export const FocalImageStyled = styled.div`


  &.medium-container, &.small-container{
    background-size: cover;
    flex-direction: column;
    .focal-image-item{
      max-height: 50vh !important;
      min-width: 30vw;
      margin-bottom: 2rem;
    }
    .cta-area{
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .app-stores-container{
      display: flex;
      flex-direction: row;
      height: 3rem;
      margin-bottom: 1.25rem;
      margin-top: 1.25rem;
      justify-content: center;
      width: 100%;
    }
    h1, p{
      text-align: center;
    }
    .sect{
      width: 100% !important;
    }

    .primary-message{
      margin-bottom: 2rem !important;
    }

  }


  &.large-container, &.medium-container{
    .sect{
      width: 33%;
    }
  }
  width : 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 5%;
  h2, p, .focal-callout label, h1{
    color: $dark-roast;
  }

  .callout-area{
    align-self: flex-start;
  }

  .focal-image-item{
    display: flex;
  }
  h1, h2{
    margin-bottom: 0.5rem;
  }

  .primary-message{
    letter-spacing: 0;
    line-height: 40px;
    margin-bottom: 20%;
    h1{
      font-size: 2rem;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 38px;
    }
    p{
      font-weight: 500;
      font-size: 1rem;
      line-height: 28px;
    }
    .app-stores-container {
      display: flex;
      flex-direction: row;
      height: 2rem;
      margin-bottom: 1.25rem;
      margin-top: 1.25rem;
      a{
        margin-right: 0.5rem;
      }
      img{
        height: 100%;
      }
    }
  }

  .focal-callout{
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;
    h2{
      font-size: 26px;
      line-height: 38px;
    }
    p{
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.29px;
      line-height: 26px;
    }
    label{
      font-weight: 800;
    }
  }
  .sect{
    flex-basis: auto;
    flex-grow: 0;
  }
  .focal-image-item{
    max-height : 70vh;
    margin: 0 2rem;
    min-height: 50vh;
    min-width: 30vw;

    .focal-image{
      height: auto;
      width: 100%;
      object-fit: contain;
    }
  }

`
