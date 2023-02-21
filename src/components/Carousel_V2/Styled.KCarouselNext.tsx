import styled, {keyframes} from "styled-components";

export interface iBrewerQuickShopStyled{
    fadeIn : boolean;
    fadeOut : boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;


export const Slide = styled.div<iBrewerQuickShopStyled>`
  animation: ${(props: any) =>
    props.fadeIn ? fadeIn : fadeOut} 1s ease-in-out;
  display: flex;
  flex-basis: 100%;
  flex-shrink: 0;
  height: 100%;
  opacity: ${(props: any) => (props.fadeIn ? 1 : 0)};
  position: absolute;
  width: 100%;
`;


export const KCarouselContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  
  .nav-menu-items{
    position: absolute;
    z-index: 100;
    right: 0;
    left: 0;
    transform: translateY(-50%);
    top: 50%;
  }
  
  .slide-item{
    width: 100%;
    height: 100%;
    div{
      width: 100%;
    }
  }
`;