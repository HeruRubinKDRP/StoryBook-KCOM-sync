import styled from "styled-components";
import {ctaColorStyles} from "../_commonStyles/common.styled";


export interface iEyeBrowBannerStyled {
    overallHeight: string;
}
export const EyebrowBannerStyled = styled.div<iEyeBrowBannerStyled>`
 ${ctaColorStyles};
  width: 100%;
  display: flex;
  height: ${props => props.overallHeight};
  position: relative;
  overflow: hidden;
  gap: 1rem;
  *{
    box-sizing: border-box;
  }
  
  &.dark-roast{
    .eb-slide-content{
        background-color: var(--colorDarkRoast);
        height: 100%;
      *{
        color: white;
      }
    }
  }
  .eb-slide-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    border-radius: 1rem;
    padding: 8%;
    *{
      user-select: none;
    }
  }
  &.mobile{
    .eyebrow-slide{
     
    }
  }
  
  
  .k-carousel{
    background-color: transparent !important;
  }
  .nav-dots-container.bottom{
    bottom: 0 !important;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    backdrop-filter: none !important;
    .nav-dot{
      height: 0.5rem;
      width: 0.5rem;
      &.selected{
        height: 0.75rem;
        width: 0.75rem;
      }
    }
    .selected{
        background-color: var(--colorDarkRoast) !important;
    }
  }
  .nav-container{
    pointer-events: none;
    .right, .left{
      pointer-events: all;
      width: 1.5rem !important;
      height: 100% !important;
      display: flex;
      align-items: center;
      margin: 0;
      border: none;
      .icon{
        padding: 20%;
      }
    }
  }
`;



export const EyeBrowSlideStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: transform 0.5s;
  margin: 1.5rem 0;
 
  .fine-print-area{
    display: flex;
    margin-top: 0.5rem;
  }
  h1,p{
    margin: 0.5rem 1.5rem;
  }
  h1{
    font-size: 1.5rem;
    text-align: center;
  }
  p{
    font-size: 1.25rem;
    font-weight: 200;
    text-align: center;
  }
  .fine-print-area{
    gap: 0.25rem;
    *{
      font-size: 0.65rem;
    }
  }
  .fine-print{
    
    font-weight: 200;
  }
`;