import styled from "styled-components";

export const ProductInfoCardWrapper = styled.div`
  
  
  position: relative;
  
  .product-data-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    .name{
      font-size: 14px;
      margin-top: 8px;
    }
    .brand{
      font-size: 16px;
      font-weight: 200;
      margin-top: 16px;
      text-align: center;
    }
    

    .product-image{
      max-width: 100%;
      height: auto;
      
    }

    .price{
      font-size: 24px;
      font-weight: bold;
      margin-top: 16px;
    }
    
    .k-carousel{
      .nav-dots-container{
        display: none;
      }
    }
  }
  
  button.k-btn{
    &:hover{
      .filled{
        fill: rgb(71, 48, 54) !important;
      }
    }
  }
  .backing{
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
`;




export const CTAButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;