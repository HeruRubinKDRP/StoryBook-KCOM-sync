import styled from "styled-components";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";

export const ClassicCardStyled = styled.div`
  font-family: "Mark OT", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
  width: auto;
  border: none;
  background-color: rgb(255, 255, 255);
  overflow: visible;
  border-radius: 8px;
  --colorDarkRoast: ${colorNameToValue("dark-roast")} !important;
  --colorMediumRoast: ${colorNameToValue("medium-roast")} !important;
  position: relative;
   
  z-index: 1;
  .brand-name {
    font-size: 0.8em;
  }

  .box-count-title {
    margin-bottom: 2px;
    text-align: center ;
    color: var(--colorMediumRoast);
  }

  .rating {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 4px 8px 4px;
  }

  .product-name {
    color: rgb(51, 51, 51);
    font-weight: 600;
    overflow: hidden;
    margin-bottom: 4px;
    line-height: 20px;
    min-height: 0;
    font-size: 18px;
    letter-spacing: 0;
  }
  
  .fader, .backing{
    border-radius: 8px;
    z-index: 0;
    position: absolute;
  }
  
  .fader{ 
    inset:  0 -5px calc(50%) -5px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  }
  
  .backing {    
    inset: calc(50%) 0 0 0;
    background: linear-gradient(0deg, rgba(245, 241, 234, 1) 0%, rgba(255, 255, 255, 1) 100%);
   
  }

  a {
    text-decoration: none;
  }
  
  .k-btn{
    label{
      font-weight: 600;
    }
  }

  .container-classic {
    width: 100%;

    .front {
      position: relative;
      z-index: 1;

      .front-top {
        border-width: 0 !important; 

        .variant-selection-menu-container {
          .toggle-item-container {
            .k-btn {
              padding: 4px 20px;
              label{
                font-weight: 200;
              }
            }
          }
        }

        .purchase-options-explainer {
          
          padding: 0 20px;
          .box-count-section {
            text-align: center;
            margin: 20px 0 20px 0;
          }
        }
      }
    }

  }

  .ratings-overall-container {
    height: 20px !important;
  }

  // CTA section
  &.always-show-cta {
    border: none !important;
  }
  border: 1px solid transparent;
  border-width: 0 1px 1px 1px !important;
  &:hover, &.always-show-cta {
    
    border: solid ${colorNameToValue("dark-roast")};
    z-index: 10000000;
    
    //.container-classic { 
    //  position: absolute;
    //  inset: 0;
    //}
    .card-bottom-content { 
      height: auto;
      opacity: 1;
      
      transform: translateY(100%);
    }

    .btn-box {
      height: 2rem !important;
      pointer-events: all;
    }
  }
  @keyframes disable {
    from {
      opacity: 0;
      transform: translateY(100%);
      pointer-events: none;
    }
    to {
      opacity: 1;
      transform: translateY(0%);
      pointer-events: auto;
    }
  }


  .card-bottom-content {
    overflow: visible;
    transition: opacity 0.15s 0.05s ease-in, height 0.25s 0.1s ease-in, transform 0.45s 0.15s ease-in;
    transform: translateY(50%);
    height: 1px;
    opacity: 0;
    pointer-events: none;
    padding: 10px 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    

    .btn-box {
      transition: height 0.5s ease-in-out;
      height: 0.1rem !important;
      margin-top: 6px;
      pointer-events: auto;
      animation: disable 0.5s none;
      box-shadow: 0px 3px 6px rgb(0 0 0 / 25%);
    }
  }

  // prevent input or selection

  * {
    user-select: none;
  }

  .divider-horizontal {
    width: 100%;
    height: 1px;
    background-color: ${colorNameToValue("sepia")};
    margin: 10px 0;
  }

  .program-logo {
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-top: -2.5px;
  }


  .secondary-price {
    display: flex;
    color: ${colorNameToValue("dark-roast")} !important;

  }

  .btn-box {
    background: white;
    border: 2px solid rgb(241, 190, 72) !important;
    color: ${colorNameToValue("dark-roast")};
    font-size: 14px;
    width: 100%;
    max-height: 2rem !important;
    height: 100% !important;
    justify-content: center;
    border-radius: 4px !important;
    transition: color 0.5s ease-in;

    .expander {
      border-radius: 4px !important
    }

    &:hover {
      color: white;
      border: 1px solid ${colorNameToValue("dark-roast")} !important;

      .expander {
        background-color: ${colorNameToValue("dark-roast")};
      }
    }
  }
}

.top-content {
  text-decoration: none;
  cursor: pointer;
  line-height: 20px;
  margin-bottom: 7px;
  overflow: hidden;

  img {
    display: inline-block;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    position: relative;
    z-index: 2;
    max-height: 212px;
    font-size: 10px;
    color: rgb(51, 51, 51);
    width: 100%;
    object-fit: contain;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.25));
    padding: 6px;
  }
}

.container-classic {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  font-size: 0.8em;
  margin: 0;
  perspective: 2400px;
  transition: all 0s ease 0s, all 0.4s ease 0s;
  height: 100% !important;
  padding: 0 16px 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}


.variant-selection-menu-container {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;

  .k-toggle-container {
    .toggle-item {
      border: 1px solid ${colorNameToValue("sepia-light")} !important;
      cursor: pointer;
      width: 22.8%;
      border-radius: 3px !important;
      position: relative;
      padding: 0 1px;
      height: 28px;
      font-weight: 400;
      font-size: 14px;
      line-height: 11px;
      letter-spacing: 0;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      flex: 1 1 auto;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      display: flex;
      -webkit-line-clamp: 1;
      overflow: hidden;
      background-color: transparent !important;

      label {
        color: var(--colorMediumRoast);
      }

      &:hover {
        .expander {
          border-radius: 0;
        }
      }

      &.toggle-selected {
        border: 1px solid ${colorNameToValue("dark-roast")} !important;
        background-color: white !important;
        color: ${colorNameToValue("dark-roast")} !important;
        font-weight: 600 !important;
        overflow: visible;
        box-shadow: inset 0px 1px 6px rgb(0 0 0 / 25%);

        label {
          color: var(--colorDarkRoast) !important;
        }

        .expander {
          bottom: -4px;
          left: 0;
          right: 0;
          top: 100%;
          background-color: var(--colorDarkRoast);
        }
      }
    }
  }
}


.front {
  position: static;
  display: flex;
  flex-direction: column;
  text-align: left;
  transition: none 0s ease 0s;
  float: none;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  justify-content: space-between;

  .inner { 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    flex: 1; 
    
  }

  .pricing-group {
    display: flex;
    flex-direction: row;
    color: ${colorNameToValue("dark-roast")};

    .price {

      color: ${colorNameToValue("discount")};
    }


  }

  .price-amount {
    font-size: 1.5em;
    font-weight: 600;

    &.per-pod {
      font-weight: 200;
      margin-left: 8px;
    }
  }

  .program-group {
    display: flex;
    flex-direction: column;
    padding: 8px 0 0 0;
    color: ${colorNameToValue("dark-roast")};
    margin-bottom: 2px;

    .deal-banner {
      color: white;
      font-size: 1em;
      flex-grow: 1;
      margin-right: -8px;
      margin-left: 6px;
      display: flex;
      align-items: center;
      line-height: 0;
      color: var(--colorDarkRoast);

      p {
        border-left: 1px solid grey;
        line-height: 12px;
        padding-left: 7px;
      }
    }
  }
}

.front-top {
  padding: 20px 0 0;
  border-width: 2px 2px 0;
  border-top-style: solid;
  border-right-style: solid;
  border-left-style: solid;
  border-top-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-image: initial;
  border-bottom-style: initial;
  border-bottom-color: initial;
  height: auto;
  -webkit-box-flex: 1;
  flex-grow: 1;

  label {
    line-height: 14px;
    height: 14px;
  }


  a {
    cursor: pointer;
    text-decoration: none;
  }

 

  .brand-name, .product-name, .box-count-title {
    text-align: center;
  }

  

  


  .oz-peel-badge {
    background-color: #4C9E45 !important;
    color: white;

    padding: 3px 10px 4px 9px;
    border-radius: 3px;
    font-size: 10px;
    line-height: 13px;

    min-width: 92px;
    display: inline-block;
    letter-spacing: 1px;
    position: absolute;
    top: 4px;
    left: 2px;
    text-align: left;
    cursor: default;
    z-index: 100;

    &:before {
      content: "";
      position: absolute;
      width: 5px;
      height: 10px;
      background-color: rgb(255, 255, 255);
      right: -2px;
      top: 2px;
      transform: rotate(35deg);
    }

    &:after {
      content: "";
      position: absolute;
      width: 5px;
      height: 10px;
      background-color: rgb(255, 255, 255);
      right: -2px;
      bottom: 2px;
      transform: rotate(-35deg);
    }
  }

  .badge {
    line-height: 14px;
    height: 18px;
  }




`;
