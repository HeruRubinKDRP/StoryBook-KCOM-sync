import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const SeoItemStyled = styled.article`

  --colorDarkRoast: ${colorNameToValue("dark-roast")}; 
  --colorMediumRoast : ${colorNameToValue("medium-roast")};
  
  padding: 4rem 10% 8rem 10%;
  .button-area{
    button.k-btn.secondary{
      border-color: white !important;
    }
  }
  p, h2{
    color: var(--colorDarkRoast);
  }
  p{
    font-size: 1rem;
  }
  h2{
    margin-bottom: 1rem;
  }
  h1.seo-main-title{
    color : var(--colorMediumRoast);
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }
  section{
    margin-bottom: 1.5rem;
  }

`;