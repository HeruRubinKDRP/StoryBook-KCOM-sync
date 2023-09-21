import styled, {Interpolation} from 'styled-components';
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const AccordionContainer = styled.div`
 
    --fontSmall: 0.75rem;
    --fontMedium: 1rem;
    --fontLarge: 1.5rem;
  
    --spacingTiny: 0.25rem;
    --spacingSmall: 0.25rem;
  --colorKSK: ${colorNameToValue("KSK")};
  --colorOK: ${colorNameToValue("OK-Status")};
  --colorDiscount: ${colorNameToValue("discount")};
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorMediumRoast: ${colorNameToValue("medium-roast")};
  --colorLightRoast: ${colorNameToValue("light-roast")};
  --colorFaded: ${colorNameToValue("latteMed")};
  --colorSepia: ${colorNameToValue("sepia")};
  --colorCTA: ${colorNameToValue("secondaryGold")};
  width: 100%;
  user-select: none;
  *{
    user-select: none;
  }
  
  display: flex;
  flex-direction: column;
  .expand-collapse {
    font-size: var(--fontMedium);
    font-weight: 200;
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  .expand-collapse{
    background-color: white;
    display: flex;
    align-items: center;
    padding: 16px;
    .icon.chevron-right{
      transform: rotate(0deg);
      transition: transform 0.3s ease-in-out;
      height: var(--fontLarge);
      width: var(--fontLarge);
      padding: var(--spacingSmall);
      display: flex;
      align-items: center;
    }
  }

  .accordion-content-item {
    .accordion-content{
      max-height: 0;
      transition: max-height 0.5s ease-in-out;
    }
    background-color: #a59898;
    height: auto;
    overflow: hidden;

  } 

  .accordion-item{
    border-bottom: 1px solid var(--colorSepia);
    display: flex;
    flex-direction: column;
    &.closed {
      .accordion-content-item {
        .accordion-content {
          max-height: 0;
          animation: slideDown 0.5s ease-in reverse;
        }
      }
    }

    &.open {
      .expand-collapse{
        .icon.chevron-right{
          transform: rotate(90deg);
        }
      }
      .accordion-content-item {
        .accordion-content {
          animation: slideDown 0.25s ease-in forwards;
          max-height: var(--overallHeight);
        }
      }

      background-color: #fff;
    }
  }

  
  
`;



export const AccordionButton = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 0;
  text-align: left;
  width: 100%;
`;