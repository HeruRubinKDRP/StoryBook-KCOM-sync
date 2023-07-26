import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const ValidationStyled = styled.div`
  --colorOKStatus : ${colorNameToValue("OK-Status")};
  --colorDiscount : ${colorNameToValue("discount")};
  
  @keyframes slideDown {
    from {margin-top: -2rem }
    to{margin-top: -1rem}
  }

  .notification{
    display: flex;
    align-items: center;
    p{
      margin-left: 0.5rem;
    }
    &.success{
      p{
        color: var(--colorOKStatus);
      }
      .stroked{
        stroke: var(--colorOKStatus);
        stroke-width: 2px;
      }
      .filled{
        fill: var(--colorOKStatus);
      }
    }
  }

  
  
  .notification{
    animation: slideDown 0.75s forwards;
    margin: -1rem 0 1.5rem 0;


    &.error{
      p{
        color: var(--colorDiscount);
      }
      .filled{
        fill : var(--colorDiscount);
      }
      .highlighted{
        fill:white;
      }
    }
  }

`;