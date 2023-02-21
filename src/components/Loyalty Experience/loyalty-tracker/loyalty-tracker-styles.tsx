import styled from "styled-components";
import {colorNameToValue} from "../../_utilities/color-name-to-value/colorNameToValue";
import {absoluteStretch} from "../../_utilities/common-styles/common-styles";
import {LOYALTY_TRACKER_WIDTH} from "./loyalty-tracker";

export const LoyaltyTrackerStyled = styled.div`
  //overall container
  width: 100%;

  @keyframes barGrow {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  .title{
    color: ${colorNameToValue("medium-roast")};
    margin-bottom: 3%;
    margin-left: -2vw;
    font-size: ${props => props.theme.widthX * 0.015}px;
  }

  * {
    user-select: none;
  }

  .loyalty-data-container {
    display: flex;
    flex-direction: row;
    border: 1px solid ${colorNameToValue("medium-roast")};
    border-radius: 1vw;
    overflow: hidden;
  }

  .potential-amount-bar{
      background: linear-gradient(180deg, rgba(238,238,238,0.62) 0%, rgba(233,233,233,0.32) 29.35%, rgba(219,219,219,0.22) 77.46%, #D8D8D8 100%);
  }
  .potential-marker{
    box-shadow: 0px 0px 10px 6px rgb(255 255 255 / 90%)
  }

  .progress-area{

  }

  @keyframes progressBarIntro {
    0% {
      width: 100%;
    }

    100% {
      width: 70%;
    }
  }

  @keyframes rewardsAreaIntro {
    0% {
      width: 0;
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    100% {
      width: 30%;
      opacity: 1;
    }
  }

  @keyframes rewardsAreaIntroSmall {
    0% {
      height: 0;
      opacity: 0;
      position: absolute;

    }
    1% {
      height: 1%;
      opacity: 0;
      position: relative;

    }
    100% {
      height: 30%;
      opacity: 1;
      position: relative;
      padding: 4vw;
    }
  }

  @keyframes progressBarIntroSmall {
    0% {
      height: 100%;
    }

    100% {
      height: 70%;
    }
  }

  @keyframes displayNoneToFlex {
    0% {
      display: none
    }
    100% {
      display: flex
    }
  }

  @keyframes fadeIntro {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  }

  @keyframes bounceIntro {
    0% {
      opacity: 0;
      transform: scale(0.5);

    }
    80% {
      opacity: 1;
      transform: scale(1.25);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .next-reward {
    animation: fadeIntro 0.5s ease-in forwards;
    opacity: 0;
    animation-delay: 3.5s;
    position: relative;

    .next-reward-label {
      margin-top: 0.5vw;
    }

    .divider.horizontal {
      width: 100%;
      height: 0.125vw;
      background-color: ${colorNameToValue("sepia")};
    }
  }

  .rewards-count-area {
    animation: fadeIntro 0.5s ease-in forwards;
    opacity: 0;
    animation-delay: 2.5s;
  }

  .rewards-graphics {
    animation: bounceIntro 0.5s ease-in-out forwards;
    opacity: 0;
    animation-delay: 3s;
  }

  .progress-bar-area {
    flex-direction: column;
    width: 100%;
    padding: 1vw 4vw 4vw 4vw;
    animation: progressBarIntro 1.5s ease-in-out forwards;
    animation-delay: 2s;

  }

  .rewards-area {
    width: 0;
    opacity: 0;
    animation: rewardsAreaIntro 1.5s ease-in-out forwards;
    animation-delay: 2s;
  }

  // Small area
  &.small-loyalty {
    .rewards-area {
      width: 100%;
      height: 1%;
      position: absolute;
      opacity: 0;
      padding: 0;
      animation: rewardsAreaIntroSmall 1.5s ease-in-out forwards;
      animation-delay: 2s;
    }

    .progress-bar-area {
      height: 100%;

      animation: progressBarIntroSmall 1.5s ease-in-out forwards;
      animation-delay: 2s;
    }

    .main-points {
      font-size: 15vw;
      line-height: 13vw;
      height: 11vw;
    }

    .points, .max-points {
      font-size: 3vw !important;
    }

    .next-reward-label {
      font-size: 2.5vw !important;
    }

  }

  .rewards-count-label-area {
    display: flex;
    flex-direction: column;
   // margin-left: 0.5vw;
    margin-left: ${props => props.theme.widthX * 0.015}px;

    .expiring {
      //font-size: 1vw;
      font-size:  ${props => props.theme.widthX * 0.0125}px;
      white-space: nowrap;
    }
  }


  //data readout
  //data readout
  .data-area-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .data-area {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .points-counter-area {
      display: flex;
      flex-direction: row;
    }

    h2, label, p {
      color: ${colorNameToValue("dark-roast")};
    }

    .points-label {
      display: flex;
      flex-direction: column;
      //margin-left: 1vw;
      margin-left: ${props => props.theme.widthX * 0.01}px;
      justify-content: flex-end;

      label {
        //font-size: 2vw;
        font-size: ${props => props.theme.widthX * 0.02}px;
      }

      .points {
        font-weight: 800;
      }
    }
  }

  //tracker bar area
  //tracker bar area
  .highlight-points {
    font-weight: 800;
    color: rgba(239, 128, 38, 1);
  }

  .next-reward {
    //font-size: 1.5vw;
    font-size: ${props => props.theme.widthX * 0.015}px;
    width: 100%;
    text-align: left;
    //padding-top: 1vw;
    padding-top: ${props => props.theme.widthX * 0.01}px;
  }

  .tracker-area {
   // height: 10vw;
    height: ${props => props.theme.widthX * 0.1}px;
   // border-radius: 1vw;
    border-radius: ${props => props.theme.widthX * 0.01}px;

    .tracker-numbers-axis {
      display: flex;
      align-content: flex-start;
      justify-content: space-between;
      //margin-top: 1vw;
      margin-top: ${props => props.theme.widthX * 0.01}px;

      label {
       //font-size: 1.5vw;
        font-size: ${props => props.theme.widthX * 0.015}px;
      }

      .max-end {
       // margin-right: 5vw;
        margin-right: ${props => props.theme.widthX * 0.05}px;
        transform: translateX(50%);
      }
    }
  }

  .tracker-bar {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .life-bar-container {
      padding: 0.5vw;
      background: linear-gradient(0deg, rgba(51, 39, 41, 1) 0%, rgba(82, 65, 69, 1) 20%, rgba(82, 65, 69, 1) 50%, rgba(82, 65, 69, 1) 80%, rgba(51, 39, 41, 1) 100%);

    }

    .life-bar {
      background-color: transparent !important;

      .bar-fill {

        animation: barGrow 1.5s ease-in-out;

        .pointer-up {
          right: -1.25vw;
          bottom: -3vw;
          height: 2.5vw;
          width: 2.5vw;
        }

        .glow-effect {
          inset: 0;
          filter: drop-shadow(0px 0px 11px rgba(246, 181, 73, 1));
          background: linear-gradient(90deg, rgba(239, 128, 38, 1) 0%, rgba(246, 181, 73, 1) 100%);
          border-radius: 100vw 0 0 100vw;
          height: 100%;
        }
      }
    }
  }

  .icon-present {
    width: 100%;
    height: 100%;
  }

  .main-points {
    //font-size: 10vw;
    font-size: ${props => props.theme.widthX * 0.1}px;
    font-weight: 100;
    line-height: ${props => props.theme.widthX * 0.075}px;
    display: inline-block;
    align-items: flex-end;
    height: ${props => props.theme.widthX * 0.075}px;
  }

  //rewards bubble


  .rewards-bubble {
    //width: 10vw;
    width:  ${props => props.theme.widthX * 0.1}px;
   // min-width: 10vw;
    min-width:  ${props => props.theme.widthX * 0.1}px;
    //max-width: 10vw;
    max-width:  ${props => props.theme.widthX * 0.1}px;
    background-color: #332729;
    border-radius: 100vw;
    margin-top: 0;
    //padding: 2vw;
    padding:  ${props => props.theme.widthX * 0.02}px;
    //height: 10vw;
    height:  ${props => props.theme.widthX * 0.1}px;

    max-height:  ${props => props.theme.widthX * 0.1}px;
    //max-height: 10vw;

   // min-width: 10vw;
    min-width:  ${props => props.theme.widthX * 0.1}px;

    //margin-left: -2vw;
    margin-left: ${props => -(props.theme.widthX * 0.02)}px;

    position: relative;
    .fader{
      position: absolute;
      height: 33%;
      width: 30%;
      left: -30%;
      top: 33%;
      background: linear-gradient(270deg,rgba(51,39,41,0.4) 0%, rgba(51,39,41,1) 50%, rgba(51,39,41,0) 100%);
      }
    .icon-present {
      .filled {
        fill: rgba(246, 181, 73, 1);
      }
    }

    .inner-bubble {
      background-color: white;
      border-radius: 100vw;
      padding: 1.5vw;
      box-shadow: 0 0 1vw 0 rgb(0 0 0 / 75%) inset;
      ${absoluteStretch("0.5vw", "0.5vw", "0.5vw", "0.5vw")}
    }

  }

  // REWARDS AREA
  .rewards-area {
    background: linear-gradient(90deg, ${colorNameToValue("faintWarm")} 0%, white 100%);
    border-left: 1px solid ${colorNameToValue("light-roast")};
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;

    .rewards-graphics {
      .k-btn {
        label {
          //font-size: 1.5vw;
          font-size: ${props => props.theme.widthX * 0.015}px;
        }
      }
    }

    .rewards-count-area {
      //width: 65%;
      display: flex;
      align-items: center;
      justify-content: center;

      .rewards-count {
        font-size: 8vw;
        font-weight: 600;
      }

      .rewards-label {
        font-size: 2vw;
      }
    }

    .icon-present {
      .filled {
        fill: ${colorNameToValue("dark-roast")};
      }
    }
  }

  //SIZE Variations
  // Tiny

  &.tiny-loyalty {
    .loyalty-data-container{
      border: none;
    }
    .rewards-bubble{
      width: 5vw;
      max-width: 5vw;
      padding: 1vw;
      height: 5vw;
      max-height: 10vw;
      min-width: 5vw;
      margin-left: -2vw;
      position: relative;
      .inner-bubble{
        padding: 0.5vw;
      }
    }

    .life-bar-container.KCOM{
      height: 2vw;
    }

    .progress-bar-area{
      padding: 0.5vw;
    }

    .data-area-container {
      display: none
    }

    .progress-bar-area {
      animation: none;
    }

    .rewards-area {
      display: none;
      animation: none;
    }
  }

  //SMALL
  &.small-loyalty {
    .progress-bar-area {
      width: 100%;
    }

    .next-reward{
      font-size: 2vw;
    }

    .loyalty-data-container {
      overflow: hidden;
      flex-direction: column;
      align-items: center;
    }

    .rewards-graphics {
      .k-btn {
        label {
          font-size: 3vw;
        }
      }
    }

    .rewards-content-area {

      .rewards-label {
        margin-left: 1.5vw;
        font-size: 4vw;
      }
    }

    .rewards-area {
      width: 100%;
      padding: 4vw;
    }
  }
`
