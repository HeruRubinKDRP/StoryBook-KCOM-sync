import styled from "styled-components";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";

export const MemberPricingMessagingStyled = styled.div`
  --colorSpicedRed: ${colorNameToValue("perks-spiced-red")};
  --buttonLarge: 1.25rem;
  --buttonMedium: 1 rem;
  --buttonSmall: 0.75rem;

  --FontSizeLarge: 1.25rem;
  --FontSizeMedium: 1rem;
  --FontSizeSmall: 0.75rem;

  --spacingLarge: 1rem;
  --spacingMedium: 0.75rem;
  --spacingSmall: 0.5rem;
  --spacingTiny: 0.25rem;
  

  .perks-logo-small {
    margin-left: 0.3rem;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: -6px;

    .filled {
      fill: var(--colorSpicedRed);
    }
  }

  .pricing-info {
    display: inline-flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
    
    span{
      font-size: var(--FontSizeSmall);
    }
  }
    .info-link {
      text-decoration: underline;
      color: var(--colorSpicedRed);

      :hover {
        background-color: var(--colorSpicedRed);
        color: white;
        padding: 0.2rem;
        border-radius: 0.2rem;
      }
    }



`