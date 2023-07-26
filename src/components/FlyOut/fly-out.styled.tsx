import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const FlyOutStyled = styled.div`
  @keyframes openFlyOut {
    from {margin-top: -100%}
    to {margin-top: 0}
  }

  @keyframes tempDisable{
    from {pointer-events: none}
    to{pointer-events: all}
  }

  --colorSepia : ${colorNameToValue("sepia")};
  
  background-color: var(--colorSepia);
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1rem;
  text-align: center;
  overflow: hidden;
  .fly-out-content{
    animation-name: openFlyOut;
    animation-duration: 0.5s;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    align-content: center;
    justify-content: center;
    .k-btn{
      animation-name: tempDisable;
      animation-duration: 0.75s;
    }
  }

`;