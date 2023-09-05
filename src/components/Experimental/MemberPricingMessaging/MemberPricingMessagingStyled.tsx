import styled from "styled-components";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";

export const MemberPricingMessagingStyled = styled.div`
  --colorSpicedRed: ${colorNameToValue("perks-spiced-red")};
  --buttonLarge: 1.25rem;
  --buttonMedium: 1rem;
  --buttonSmall: 0.75rem;

  --FontSizeLarge: 1.25rem;
  --FontSizeMedium: 1rem;
  --FontSizeSmall: 0.75rem;

  --spacingLarge: 1rem;
  --spacingMedium: 0.75rem;
  --spacingSmall: 0.5rem;
  --spacingTiny: 0.25rem;


  position: relative !important;


  .perks-logo-small {
    margin-left: 0.3rem;
    width: 1rem;
    height: 1rem;
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
    width: 100%;

    span {
      font-size: var(--FontSizeSmall);
    }
  }

  .info-link {
    text-decoration: underline;
    color: var(--colorSpicedRed);
    padding: 0.2rem;
    position: relative;
    display: inline-flex;
    align-items: center;

    :hover {
      background-color: var(--colorSpicedRed);
      color: white;
      padding: 0.2rem;
      border-radius: 0.2rem;
      .filled{
        fill:white;
      }
    }
  }

  /*  .perks-tooltip {
      position: absolute;
      background-color: #ffffff;
      color: #3B2B2F;
      !*color: var(--colordark-roast);*!
      padding: 1rem;
      border-radius: 5px;
      marginTop: 2rem;
      fontSize: 1rem;
      z-index: 10000;
      box-shadow: 0px 0px var(--spacingTiny) 0 rgb(0 0 0 / 30%);
      border: 2px solid var(--colorSpicedRed);
  
    }
      .perks-tooltip::before {
        content: "";
        position: absolute;
        top: -10px; !* Adjust as necessary *!
        left: 50%;
        transform: translateX(-50%);
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent var(--colorSpicedRed) transparent;
      }*/

  .perks-tooltip {
    position: absolute;
    background-color: #ffffff;
    color: #3B2B2F;
    padding: 1rem;
    border-radius: 5px;
    margin-top: 10px;
    top: 100%;
    font-size: 1rem;
    z-index: 10000;
    box-shadow: 0px 0px var(--spacingTiny) 0 rgb(0 0 0 / 30%);
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    /*
    border: 2px solid var(--colorSpicedRed);
    */
  }

  .tooltip-caret {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 12px;
    border-style: solid;
    border-color: transparent transparent white transparent;
    z-index: 1000000;
    top: 10px;
  }

`

