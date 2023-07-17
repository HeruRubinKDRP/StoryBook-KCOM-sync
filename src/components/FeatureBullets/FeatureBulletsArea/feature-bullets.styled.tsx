import styled from "styled-components";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";

export const FeatureBulletsStyled = styled.section`
  --colorDarkRoast: ${colorNameToValue("dark-roast")}; 
   --colorSepia: ${colorNameToValue("sepia")};
  align-items: center;
  .icon{
    min-width: 3rem;
  }
  h3, .icon.chevron-right{

    user-select: none;
    color: var(--colorDarkRoast)
  }
  h3{
    margin-left: 1rem;
  }
  .icon.chevron-right{
    margin-left: auto;
    margin-top: 0.25rem;
    padding: 0.5rem;
    background-color: white;
    border-radius: 0.5rem;
  }

  .nav-container{
    .chevron-right, .chevron-left{

      .filled{
        fill:white;
      }
    }
  }
  :empty{
   margin: 0;
  }
  &.small-container{
    .header-area, .header{
      padding: 0;
    }
    .header{
      text-align: center;
    }
    .feature-bullet-container{
      margin: 1rem;
      cursor: pointer;
      width: 9rem;
      height: 9rem;
      background-color: rgba(255,255,255,0.75);
      border: 1px solid var(--colorSepia);
      border-radius: 0.5rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon{
        padding-top: 1rem;
        width: 100% !important;
        height: 40% !important;
      }
      .feature-name{
        font-size: 1rem;
        text-align: center;
        margin-left: 0;
        width: 100%;
        margin-top: auto;
        margin-bottom: 0.75rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
      .icon.chevron-right{
        display: none;
      }
    }
  }
  &.medium-container{
    .feature-name{
      margin-right: 0.5rem;
      font-size: 1rem !important;
    }
    .feature-bullet-container{
      .icon{
        max-width: 4rem;
        max-height: 4rem;

        width: 100% !important;
        height: 40% !important;

        &.close{
          height:1.5rem !important;
          width: 1.5rem !important;
          margin-top: 5px;
        }

        &.chevron-right{
          height: 3rem !important;
          width: 1rem !important;
          padding: 1rem;
          margin-left: auto;
          margin-top: 0 !important
        }

      }
    }
  }

  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  justify-content: space-evenly; 
  height: 100%;
  .nav-dots-container{
    display: none;
  }

  .feature-bullet-container{
    margin: 1rem;
    cursor:pointer;
    width: 30%;
  }

  .left, .right{
    background-color: var(--colorDarkRoast) !important;
    border-radius: 100vw !important;
    margin: 1rem !important;
    .filled{
      fill : white;
    }
  }

  .feature-details-container{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--colorDarkRoast);
    padding: 2rem 20%;
  }

  .features-carousel-container{
    height: 100%;
  }

`;