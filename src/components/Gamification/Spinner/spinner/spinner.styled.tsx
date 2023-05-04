import styled from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";

export interface iSpinnerStyle{
    width: number;
    height: number;
}

export const  SpinnerStyled = styled.div<iSpinnerStyle>`
  --outerWidth: ${props => props.width}px;
  --outerHeight: ${props => props.height}px;
  cursor: grab;
  &:active{
    cursor: grabbing;
  }
  
  //dark colors
  --colorDarkRoast: ${colorNameToValue("dark-roast")};
  --colorMediumRoast: ${colorNameToValue("medium-roast")};
  --colorText: ${colorNameToValue("text")};
  
  //light colors
  --colorLightRoast: ${colorNameToValue("light-roast")};
  --colorLatte: ${colorNameToValue("latte")};
  --colorFaintWarm: ${colorNameToValue("faintWarm")};
  
  width: var(--outerWidth);
  height: var(--outerHeight);
  border-radius: 100vw;
  margin: auto;
  position: relative;

  filter: drop-shadow(1px 1px 10px rgba(0,0,0,0.25));
  .inner-ring{
    position: absolute;
    inset: 0;
    border-radius: 100vw;
    border: 3px solid black;
    z-index: 100;
    pointer-events: none;
    box-shadow: inset 20px 20px 60px #bebebeab, -20px -20px 60px #ffffffba
  }
  .center-dot{
    background-color: var(--colorDarkRoast);
    border-radius: 100vw;
    position: absolute;
    height: 10%;
    width: 10%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 0 0.5rem rgba(0,0,0,0.5));
  }
  
  .spinner-outer {
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    border: 1px solid black;
    border-radius: 200vw;
    width: calc(var(--outerWidth) * 2);
    height: calc(var(--outerWidth) * 2);
    overflow: hidden;
  }
  
  .pointer{
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);   
    z-index: 10000;
    height: 10%;
    width: 10%;
    border-radius: 5%;
    overflow: visible;
    svg{
      overflow: visible;
    }
    .filled{      
      stroke: rgba(255,255,255,0.5);      
      filter: drop-shadow(0 0 0.5rem rgba(0,0,0,0.5));
    }
  }
  
  .promo-contents{
    position: absolute;
    top: 50%;
    right: 15%;
    transform: translateY(-50%);
  }

  .promo-item {
    border: 1px solid black;
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%);
    pointer-events: none;
    &.promo0 {
      p, h2, h3, label{
        color: white !important;
      }      
      background-color: var(--colorDarkRoast);      
    }

    &.promo1 {
      p, h2, h3, label{
        color: var(--colorDarkRoast) !important;
      }      
      background-color: var(--colorLightRoast);     
    }

    &.promo1 {
      p, h2, h3, label{
        color: white !important;  
      }      
      background-color: var(--colorMediumRoast);
    }

    &.promo2 {
      p, h2, h3, label{
        color: var(--colorDarkRoast) !important;  
      }
      
      background-color: var(--colorLatte)   
    } 

    &.promo3 {      
     p, h2, h3, label{
       color: var(--colorDarkRoast) !important;
     }
      background-color: var(--colorLightRoast);
    }

    &.promo4 {
      p, h2, h3, label{
        color: var(--colorDarkRoast) !important;  
      }      
      background-color: var(--colorFaintWarm);
    }

    &.promo5 {
      p, h2, h3, label{
        color: white !important;
      }
      background-color: #342525;
    }

    &.promo6 {
      p, h2, h3, label{
        color: white !important;
      }
      background-color: #cbbfa6;
    }


  }

`