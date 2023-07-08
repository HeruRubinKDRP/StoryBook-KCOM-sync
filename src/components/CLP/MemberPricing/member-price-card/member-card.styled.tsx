import styled from "styled-components";
import {colorNameToValue} from "../../../_utilities/color-name-to-value/colorNameToValue";

export const MemberCardStyled = styled.div`
  
  --colorDiscount: ${colorNameToValue("discount")};
  background-color: white;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  
  .options-container{
    display: flex;
    gap: 4px;
  }
  .pod-info{
    display: flex;
    flex-direction: column;
  }

  .product-name{
    font-size: 18px;
    font-weight: 600;
  }

  .brand{
    font-size: 12px;
  }
.final-price{
  color: var(--colorDiscount);
  .label{
    font-size: 12px;
    position: absolute;
  }
}
  .price{
    display: flex;
    
    .dollar{
      font-size: 48px;
      font-weight: 600;
    }
    .dollar, .cents, .currency{
      line-height: 1;
    }
  }

  .member-price-display{
    display: flex;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  .strike-through{
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    position: relative;
    font-size: 18px;
    margin-left: 12px;
    .striker{
      height: 1px;
      width: 100%;
      background-color: grey;
      position: absolute;
      top: 50%;
    }
  }

  .ratings-overall-container{
    height: 18px;
  }
  
  //Subscription config
  .subscription-configuration{
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .drop-down{
    .k-btn{
      width: 3rem !important;
      height: 3rem !important;
      padding: 0.75rem !important;
    }
  }
  .drop-down-container{
    width: 100%;
    .selection-label{
      width: 100%;
    }

    .drop-down{
      display: flex;
      flex-direction: row-reverse;
      width: 100%;
      justify-content: space-between;
    }
  }

  .drop-down-item{
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    .icon.icon-checkmark {
      height: 1rem;
      width: 1rem;
      margin-left: 0.5rem;
    }
  }
  
  &.mobile{
    .pod-info{
      flex-direction: row;
    }
    .product-image{
      width: 40%;
      margin-right: 12px;
      img{
       width: 100%; 
      }
    }
  }
  
`;