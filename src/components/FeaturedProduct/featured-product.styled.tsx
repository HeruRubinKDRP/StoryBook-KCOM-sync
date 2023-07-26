import styled from "styled-components";
import {ctaColorStyles} from "../_commonStyles/common.styled";

export const FeaturedProductStyled = styled.section`
  // color variables:
  ${ctaColorStyles};
  
  
  display: flex;
  &.small-container{
    flex-direction: column-reverse;
    .k-carousel {
      max-height: 60vh;
      margin-top: 1rem;
    }
  }
  .media-area{
    max-height: 80vh;
    padding: 1rem;
  }

  .flag-area{
    margin-bottom: 0.5rem;
  }

  .icon{
    min-width: 1rem;
  }
  .copy-area{
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .flag-container{
      margin-right: 0.5rem;
    }

    .title-area{
      margin-bottom: 1rem;
    }
  }

  .k-carousel{
    height: 100% !important;
    .messaging-container{
      padding-bottom: 0;
    }

    .image-item-container{
      &.video{
        padding-bottom: 0;
      }
    }
    .content-container{
      height: 100%;
    }
    .content-item{
      border-radius: 1rem;
      overflow: hidden;
    }
    .nav-dots-container{
      background-color: transparent;
      max-height: 3rem;
      .nav-item{
        border: 1px solid var(--colorSepia);
        width : 3rem;
        height : 3rem;
      }
    }
  }

  .tag-line, h1{
    color: var(--colorDarkRoast);
    font-weight: 600;
  }

  .tag-line{
    font-size: 1.25rem;
  }

  h1{
    font-size: 2rem;
    color: var(--colorDarkRoast);
  }

  .k-btn{
    margin-bottom: 1rem;
  }

  .media-area, .copy-area{
    flex-basis: 50%;
  }

  .nav-dots-container {
    width: 90%;
  }

`;