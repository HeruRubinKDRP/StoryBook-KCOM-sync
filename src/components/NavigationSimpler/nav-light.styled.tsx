import styled from "styled-components";
import {NavItem} from "./NavLight";
import {colorNameToValue} from "../_utilities/color-name-to-value/colorNameToValue";
interface MenuContainerProps {
    isMobile: boolean;
    showChildren: NavItem | null;
    isVisible: boolean;
}

export const MenuContainer = styled.div<MenuContainerProps>`
  position: fixed;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 100 !important;
  display: flex;
  flex-direction: row;
 
  a{
    text-decoration: none;
  }
  .main-items{
    width: auto;
  }
  .child-items{
    width: 100%;
  }
  
  .child-item{
    text-decoration: none;
    color: ${colorNameToValue("dark-roast")};
    font-size: var(--step--1);  // Update this to your desired mobile font size
  }
  
  .main-items, .child-items {
    display: flex;
    flex-direction: column;
    margin-top: 8rem;
    .main-item, .child-item{
      padding: var(--space-2xs) var(--space-s);
    }
     .main-item{
      font-size: var(--step-1);
    }
    .child-item{
      font-size: var(--step--1);
    }
  }
  
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
          props.isVisible
                  ? "translateX(0)"
                  : "translateX(100%)"};
  @media (max-width: 767px) {
    width: 100%;
    & .main-item {
      width: 100%;
      font-size: var(--step-1);  // Update this to your desired mobile font size
    } 
    & .child-item {
      width: 100%;  
    }
  }

   
`;


export const NavLightStyled = styled.div`
  z-index: 10000;
  position: fixed;
  width: 100%;
  .close{
    padding: 1rem;
  }
  .menu-container {
    width: initial;
    position: fixed;
    border-radius: 100px;
    height: 54px;
    top: 1.5rem;
    left: 1.5rem;
    box-shadow: 0 2px 6px #02022b33;
    display: flex;
    background-color: #ffffff;
    padding: 0 1rem 0 1rem;
    z-index: 1000 !important;
    transition: transform 0.3s ease-in-out;
    &:hover {
      background-color: var(--colorLightCTA);
    }
    .logo {
      padding: 1rem;
    }

    .icon-menu {
      padding: 1rem;
    }
  } 

`;



export const MainItem = styled.div`
  padding: 16px;
  cursor: pointer;
  &:hover{
    background-color: var(--colorLightCTA);
  }
  @media (min-width: 768px) {
    border-right: 1px solid #ccc;
  }
`;

export const ChildItem = styled.div`
  padding: 6rem 16px;
  cursor: pointer;  
  &:hover{
    background-color: var(--colorLightCTA);
  }
  @media (min-width: 768px) {
    border-left: 1px solid #ccc;
  }
`;

export const BackButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;