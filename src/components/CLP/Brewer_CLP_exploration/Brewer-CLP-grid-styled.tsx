import styled from "styled-components";

export const BrewerCLPStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  grid-gap: 30px;
  flex-grow: 1;
  margin: 0 20px;

  .invisible-button {
    height: 100%;
    width: 100%;
    inset: 0;
    z-index: 100;
    background-color: transparent;
    padding: 1px;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 /*   border: 1px solid #ccc;*/
    box-shadow: inset 0px -20px 20px 0px rgb(0 0 0 / 5%);
    border-radius: 12px;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      label{
        color:#3B2B2F;
        font-weight: bold;
      }
      transform: scale(1.03);
      .expander {
        background-color: antiquewhite !important;
        inset: 0 !important;
        opacity: 1 !important;
    }
  }

  .pricing{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 0;
  justify-content: space-evenly;
}
  .catalog-grid-item {
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .product-card {
    width: 100%;
    margin: 0;
    border-radius: 15px;
/*    border: 1px solid #ddd;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }

  .product-image{
    height: 350px;
    width: 100%;
    background-color: #f4f4f4;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: background-size 5s ease-in-out;
    border-radius: 12px 12px 0 0
  }
  .product-image:hover {
    background-size: cover;
    border-radius: 12px 12px 0 0;
  }
//BottomPart
  .bottom-part{
    padding: 15px;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
    .best-value{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .best-value-label{
      color: #fff;
      font-size: 12px;
      display: inline-block;
      padding: 2px 0 2px 4px;
      background-color: #00889F;
      white-space: nowrap;
      position: relative;
      margin-right: 12px;
    }

    .best-value-label::after {
      content: "";
      position: absolute;
      top: 0;
      left: 100%;
      width: 0;
      border-top: 9px solid transparent;
      border-bottom: 9px solid transparent;
      border-left: 9px solid #00889F;
    }
    .ksk{
      width: 50%;
      border-right: #CCB3A3 1px solid;
    }
    .onetime{
      width: 50%
    }
    .ksk-title{
      font-family: MarkOT;
      font-weight: 400;
      font-size: 12px;
      color: #0d8296;
    }
    .ksk-price{
      display: inline-block;
      white-space: nowrap; /* Prevent text from wrapping */
      font-size: 16px;
      font-weight: 600;
      color:#0d8296;
    }
    .onetime-title{
      font-family: MarkOT;
      font-weight: 400;
      font-size: 12px;
      color: #333;
    }
    .one-time-price{
      font-size: 16px;
      font-weight: 600;
    }
    .product-name{
      font-family: MarkOT;
      font-weight: bold;
      font-size: 16px;
      color: #333333;
      height: 50px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  }
`


