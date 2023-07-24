import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const MultiBlockStyled = styled.div`
  --colorSepia : ${colorNameToValue("sepia")};

  width: 100%;
  overflow: hidden;
  &.small-container{
    .cta-container{
      margin-top: auto;
    }
    .title-area{
      height: 100%;
      .k-btn{
        margin-top: 1rem;
      }

    }
  }

  .title-area {
    padding: 0 1rem 1rem 1rem;
  }

  .cta-container{
    margin-top: 1rem;
  }

  &.large-container {
    .cards-container {
      .highlight-card-container {
        width: 30rem;
        border: 1px solid var(--colorSepia);
        border-radius: 1rem;
        .image-container {
          &.rounded-rectangle {
            border-radius: 1rem 1rem 0 0;
          }
        }

        .bg-image-container {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
        }
      }
    }
  }

  .cards-container {
    display: inline-flex;
    width: auto;

    //background-color: #977F8A;
  }

`;