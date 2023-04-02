import styled from 'styled-components'
export const ProductInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  &.mobile-dimension {
    flex-direction: column;
  }
  
  .productImage{
     
    }
  .productImage img {
    max-width: 90%;
    max-height: 200px;
    object-fit: contain;
  }
  .productContent{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .brandName{
    font-family: "Mark OT",sans-serif;
    font-weight: bold;
    font-size: 12px;
    color: #777676;
  }
  .productName{
    font-family: "Mark OT",sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: #2d2926;
  }
  .productCountSize{
    font-family: "Mark OT",sans-serif;
    font-weight: normal;
    font-size: 14px;
    color: #333;
  }
  .productQuantity{
    font-family: "Mark OT",sans-serif;
    font-weight: normal;
    font-size: 14px;
    color: #777676;
  }
  .price{
    display: flex;
    align-items: baseline;
  }
  .productSalePrice{
    font-family: "Mark OT",sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #d1150c;
    padding: 0 10px 0 0;
  }
  .productPrice{
    font-family: "Mark OT",sans-serif;
    font-weight: normal;
    font-size: 16px;
    color: #333;
    text-decoration-line: line-through;
    padding: 0 10px 0 0;
  }
    `