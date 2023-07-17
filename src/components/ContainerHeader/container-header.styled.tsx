import styled from "styled-components";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";

export const ContainerHeaderStyled = styled.div`
  .container-title{
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 2;
    p{
      height: auto;
      display: flex;
      align-items: center;
      margin-left: 0.25rem;
    }
    svg{
      width:2rem;
      height:2rem;
    }
    .filled{
      fill:${colorNameToValue("dark-roast")};
    }
    .highlight{
      fill: ${colorNameToValue("sepia")};
      stroke: ${colorNameToValue("dark-roast")};
      stroke-width: 2px;
    }
    display: flex;
    font-family: "Mark OT",sans-serif;
    font-weight: 600;
    color: ${colorNameToValue("dark-roast")};
    padding: 0.25rem 1rem 0.25rem 1rem;
    align-content: center;
    justify-content: center;
  }

  .section-title{
    background-color: ${colorNameToValue("dark-roast")};
    color: white;
    padding: 0.25rem 1rem 0.25rem 1rem;
    border-radius: 0.25rem 0.25rem 0 0 !important;

  }
  .container-header{
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    overflow: hidden;
    .top-area{
      height: auto;
      position: relative;
      overflow: visible;
      margin-left: -0.1rem;
      margin-right: -0.4rem;

      .section-title{
        .chevron-right {
          width: 0.5rem;
          height: 1rem;
        }
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
      }
    }

    .tiles-section{
      padding: 0.1rem;
      border: 1px solid ${colorNameToValue("dark-roast")};
      border-radius: 0.25rem;
      margin-bottom: 0.5rem;
      .k-btn{

      }
    }
    .item{
      margin-bottom: 0.5rem;
      &:last-child{
        margin-bottom: 0.1rem;
      }
      &:first-child{
        margin-top: 0.1rem;
      }
    }

  }
`
