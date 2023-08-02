import styled from "styled-components";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";

export const PriceCentricDisplayStyled = styled.div`
  flex-direction: column;
  display: flex;
  --colorSpicedRed: ${colorNameToValue("perks-spiced-red")};
  
  .price {
    display: flex;

    .dollar {
      font-size: 36px;
      font-weight: 600;
    }

    .dollar, .cents, .currency {
      line-height: 1;
    }
  }
  
  .main-pricing{
    display: flex;
    flex-direction: row;
  }
  
  .pricing-info{
    display: inline-flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;   
   color: var(--colorSpicedRed);
    .info-link{
      text-decoration: underline;
      :hover{
        background-color: var(--colorSpicedRed);
        color: white;
        padding: 0.2rem;
        border-radius: 0.2rem;
      }
    }
    
    
    .perks-logo-small{
      margin-left: 0.3rem;
      width: 1.5rem;
      height: 1.5rem;
      margin-top: -6px;
        .filled{
          fill: var(--colorSpicedRed);
        }
    }
  }
  
.currency{
  font-size: 0.75rem;
}
`;