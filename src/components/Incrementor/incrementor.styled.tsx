import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const IncrementorStyled = styled.div`
  --colorKSK : ${colorNameToValue("KSK")};
  
  display: flex;
  align-items: center;
  width: 100%;
  label{
    margin: 0 1vw;
  }

  .incrementor {
    padding: 0.25rem !important;
    width: 3vw !important;
    height: 3vw !important;
    box-sizing: border-box;

    &:hover {
      .expander {
        background-color: var(--colorKSK);
      }

      .filled {
        fill: white;
      }
    }

    label {
      display: none;
    }

    .icon {
      margin: 0.25vw !important;
      width: 100% !important;
      height: 100% !important;
    }
  }

`;