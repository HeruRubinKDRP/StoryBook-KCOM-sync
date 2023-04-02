import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 10000;
  background-color: rgba(0,0,0,0.5);
  backdrop-filter: grayscale(1) blur(3px);
  .add-to-cart-journey-small{
    top: 0;
  }
  .brewer-quickshop-container{
     top: 50%;
    transform: translateY(-50%);
  }
  .beverage-quickshop-container{
    transform: translateY(-50%);
    top: 50%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .pacifier{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    .loading-graphic{
      width: auto;
      height: auto;
      display: flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

`