import styled from 'styled-components'
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";


export const TabNavStyles = styled.div` 
  
  --colorDarkRoast : ${colorNameToValue("dark-roast")};
  
  .TabCta, .Title{
    z-index: 1000000;
  }
  .TabCta {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 2vw;
    position: sticky;
    bottom: 0;
    background-color: var(--colorDarkRoast);
  }
  .buttons-container {
    .false {
      display: none;
    }
    .true {
      display: flex;
    }
  }

  .NextCTA {
    width: 15vw;
   
    button {
      position: relative;
      border: 3px solid rgba(241, 190, 72, 1) !important;
      border-radius: 25px;
      width: 100%;
      height: 50px;
      padding: 10px;
      font-size: 1.25rem !important;
      font-family: 'MarkOT-Bold', serif !important;
      label {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center; 
      }
      .icon{
        height : 1.25rem !important;
        margin-left: 0.5rem;
        .filled{
          fill: #3b2b2f;
        }
      }
      &:active {
        .expander {
          background-color: #aa8066 !important;
        }
      }
      &:hover {
        border: 3px solid #e7e4df !important;
        label {
          color: #fff;
          svg {
            fill: #fff;
          }
        }
        .expander {
          opacity: 1;
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
          background-color: #3b2b2f;
          border-radius: 25px;
        }
      }
      .expander {
        z-index: 0;
        position: absolute;
        height: 100%;
        width: 0;
        top: 0;
        left: 50%;
        color: #3b2b2f;
        transition: all 0.2s ease-in, opacity 0.2s ease-in,
          background-color 0.2s ease-in;
        background-color: #ffffff;
        transform-origin: center;
        /*opacity: 0;*/
      }
    }
  }

  .selected {
    color: #e7e4df;
    font-size: 1.75rem !important;
    font-family: 'MarkOT-Bold', serif !important;
    border-left: 7px solid #e7e4df;
    transform: scale(1.05);
    pointer-events: none;
    padding-left: 16px !important;
  }
  .Title {
    color: #eadecf;
    font-size: 3vw;
    padding: 2vw;
    font-weight: 600;    
    width: 100%;
    position: sticky;
    top: 0;
    background-color: var(--colorDarkRoast);
  }
  .ExpandMenu {
    button {
      color: #fff;
      display: flex;
      justify-content: left;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 10px;
      background-color: transparent;
      text-align: left;
      border: 0;
      font-size: 1.5rem !important;
      font-family: 'MarkOT-Bold', serif !important;
      
      svg {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        fill: #e7e4df;
        height: 40px;
        width: 40px;
        padding: 10px;
        box-shadow: inset 0px 0px 8px 5px rgb(0 0 0 / 45%);
        border-radius: 20px;
        .filled {
          fill: white !important;
        }
      }
    }
    &:hover, &:focus {
      svg {
        .filled{
          fill: ${colorNameToValue("dark-roast")} !important;
        }
      }
    }
  }
  .expand-menu-container {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .expand-menu-container.open {
    max-height: 100vh;
  }
`