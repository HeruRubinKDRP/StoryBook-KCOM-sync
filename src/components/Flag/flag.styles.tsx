import styled from "styled-components";
import {ctaColorStyles} from "../_commonStyles/common.styled";

export const FlagStyled = styled.div`
  padding: 0.5rem 1rem;
  display: inline-flex;
  width: auto;
  position: relative;
  ${ctaColorStyles};
  label {
    z-index: 1;
  }
  
  &.round-top{
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &.dark-roast {
    background-color: var(--colorDarkRoast);
    label{
      color: white;
    }
    .stroked {
      stroke: white;
      stroke-width: 0.5px;
      fill: none;
    }
  }

  .stroked {
    stroke-width: 0.5px;
    fill: none;
  }

  &.medium-grey{
    background-color: var(--colorMediumGrey);
    label{
      color : white !important;
    }
    .filled{
      fill: var(--colorSecondaryGold);
    }

    .stroked{
      stroke : white;
    }
  }

  &.secondaryGold{
    background-color: var(--colorSecondaryGold);
    label{
      color: var(--colorText) !important;
    }
    .filled{
      fill: var(--colorSecondaryGold);
    }
    .stroked{
      stroke: var(--colorText);
    }
  }

  &.OK-Status{
    background-color: var(--colorOKStatus);
    label{
      color:white;
    }
    .filled{
      fill :var(--colorOKStatus);
    }
    .stroked{
      stroke : white;
    }
  }

  &.Primary-CTA{
    background-color: var(--colorCTAPrimary);
    label{
      color : var(--colorText) !important;
    }
    .stroked{
      stroke : white;
    }
    .filled{
      fill : var(--colorCTAPrimary);
    }
  }

  &.Bold-CTA{
    background-color: var(--colorBoldCTA);
    .filled{
      fill : var(--colorBoldCTA);
    }
    label{
      color : var(--colorText) !important;
    }
    .stroked{
      stroke : white;
    }
  }

  &.discount{
    background-color: var(--colorDiscount);
    .filled{
      fill: var(--colorDiscount);
    }
    label{
      color: white !important;
    }
    .stroked{
      stroke : white;
    }
  }

  &.sepia{
    background-color: var(--colorSepia);
    label{
      color : var(--colorDarkRoast) !important;
    }
    .filled{
      fill : var(--colorSepia);
    }
    .stroked{
      stroke : var(--colorDarkRoast);
    }
  }

  &.white{
    background-color: white;
    svg{
      filter: drop-shadow(3px 3px 5px #00000073);
    }
    .filled{
      fill : white;

    }
    .stroked{
      stroke : var(--colorDarkRoast);
    }
    label{
      color : var(--colorDarkRoast) !important;
    }
  }

  &.medium-roast{
    background-color: var(--colorMediumRoast);
    label{
      color : white;
    }
    .filled{
      fill : var(--colorMediumRoast);
    }
    .stroked{
      stroke : white;
    }
  }

  &.latte{
    background-color: var(--colorLatte);
    label{
      color: var(--colorDarkRoast) !important;
    }
    .stroked{
      stroke: var(--colorDarkRoast);
    }

    .filled{
      fill: var(--colorLatte);
    }
  }

  &.light-roast {
    background-color: var(--colorLightRoast);
    .stroked{
      stroke : white;
    }
    .filled{
      fill: var(--colorLightRoast);
    }
  }
  
  &.latte70{
    background-color: var(--colorLatte70);
    label{
      color: var(--colorDarkRoast) !important;
    }
  }
  
  &.latteMed{
    background-color: var(--colorLatteMed);
    label{
      color: var(--colorDarkRoast) !important;
    }
  }
  
  &.sepia70{
    background-color: var(--colorSepia70);
    label{
      color: var(--colorDarkRoast) !important;
    }
  }

  &.KSK {
    background-color: var(--colorKSK);
    color: white;

    .stroked {
      stroke: white;
    }

    .filled {
      fill: var(--colorKSK);
    }
  }

  .square {

  }

  &.circle-flag {
    background-color: transparent !important;
    padding: 0.5rem 0.25rem;
  }

  &.banner {

  }

  .adornment {
    position: absolute;
  }

  .squared-curved {
    display: inline-flex;
    border-radius: 0.5rem 0 0 0;
    inset: 0 0 0 0;
  }

  .tri-bot-l{
    position: absolute;
    bottom: -1rem;
    top: 100%;
    left: 0;
    right: calc(100% - 1rem);
    filter: brightness(0.65);
  }

  .simple-banner, .banner-protrude{
    inset: 0 -2rem 0 100%;
    .banner-tail{
      height: 100%;
    }
  }

  .circle-banner {
    inset: -1rem;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  &.alternating-sharp-round {
    border-radius: 0.5rem 0 0.5rem 0;
  }

  &.curved-rect {
    border-radius: 0.5rem
  }

  label {
    &.heavy {
      font-weight: 800;
    }

    &.regular {
      font-weight: 400;
    }

    &.bold {
      font-weight: 600;
    }

    &.light {
      font-weight: lighter;
    }

  }
`;