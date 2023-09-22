import styled from "styled-components";
import {ctaColorStyles} from "../_commonStyles/common.styled";


export interface iEyeBrowBannerStyled {
    overallHeight: string;
}

export const DisclaimerStyled = styled.div`
  padding: 5% 15%;
`

export const EyebrowBannerStyled = styled.div<iEyeBrowBannerStyled>`
 ${ctaColorStyles};
  width: 100%;
  display: flex;
  height: ${props => props.overallHeight};
  position: relative;
  overflow: hidden;
  gap: var(--space-tiny);
  
  *{
    box-sizing: border-box;
  }
  h1, p{
    text-align: left;
  }
   
  .text-area{
    display: flex;
    flex-direction: column;
    p{
      font-size: var(--step--6);
    }
  }

  &.mobile{
    .eb-slide-content{
      border-radius: 100vw;
      width: 85%;
    }
  }
  //Color modes
  &.dark-roast{
    background-color: var(--colorDarkRoast);
    &.mobile{
      background-color: transparent;
      .right, .left{
        flex-direction: column;
        .icon{
          padding: 45% 20%;
        }
      }
      .eb-slide-content{ 
        
        background-color: var(--colorDarkRoast);
        padding: var(--space-line) var(--space-3xs);
      }
    }
    .eyebrow-slide{
      position: relative;
      &:last-child{
        .divider{
          display: none;
        }
      }
    }
    .divider{
      border-right: 1px solid white;
      height: auto;
      width: 2px;
      position: absolute;
      right: 0;
      top: var(--space-small);
      bottom: var(--space-small);
      opacity: 1;
    }
    .eb-slide-content{
        
        height: 100%;
      *{
        color: white;
      }
    }
  }

  &.light-roast{
    .eb-slide-content{
      background-color: var(--colorLightRoast);
      height: 100%;
      *{
        color: var(--colorDarkRoast)
      }
    }
  }
  
  &.latte{
    .eb-slide-content{
      background-color: var(--colorLatte);
      height: 100%;
      *{
        color: var(--colorDarkRoast)
      }
    }
  }

  &.sepia{
    .eb-slide-content{
      background-color: var(--colorSepia);
      height: 100%;
      *{
        color: var(--colorDarkRoast)
      }
    }
  }
  
  &.Bold-CTA{
    .eb-slide-content{
      background-color: var(--colorBoldCTA);
      height: 100%;
      *{
        color: var(--colorDarkRoast)
      }
    }
  }
  
  &.secondaryGold{
    .eb-slide-content{
      background-color: var(--colorSecondaryGold);
      height: 100%;
      *{
        color: var(--colorDarkRoast)
      }
    }
  }
  
  &.OK-Status{
    .eb-slide-content{
      background-color: var(--colorOKStatus);
      height: 100%;
      *{
        color: white;
      }
    }
  }
  
  &.faintWarm{
    .eb-slide-content{
      background-color: var(--colorLightCTA);
      height: 100%;
      *{
        color: var(--colorDarkRoast)
      }
    }
  }
  
  &.white{
    
    &.mobile{
      .eb-slide-content{
        border: 1px solid var(--colorDarkRoast);
      }
    }
    .eyebrow-slide{
      position: relative;
      &:last-child{
       .divider{
         display: none;
       }
      }
    }
    h1{
      text-align: right;
    }
    .fine-print-area{
      margin: 0;
    }
    .divider{
      border-right: 1px solid var(--colorDarkRoast);
      height: 100%;
      width: 2px;
      position: absolute;
        right: 0;
      top: 0;
      bottom: 0;
        opacity: 1;
    }
  }
  
  //---*** end colors
  
  .divider{
    opacity: 0;
  }
  .eb-slide-content{
    cursor: pointer;
    pointer-events: all;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    border-radius: 1rem;
    padding: 0 var(--space-line);
    transition: transform 0.5s ease-in-out;
    &:hover{
      transform: scale(1.05);
    }
    *{
      user-select: none;
    }
  }
  &.mobile{
    .right, .left{
      border: 0 !important;
    }
    .k-carousel{
      padding-bottom: var(--step-1);
    }
     
    .eyebrow-slide{
     p{
       font-size: var(--step--4) !important;
       text-align: center;
     }
    }
  }
  
  
  .k-carousel{
    background-color: transparent !important;
    width: 100%;
    .drag-container, .slides-container, .slider{
        width: 100%;
    }
    
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
  margin: calc(var(--space-tiny) * 0.5) 0;
 .message{
   a{
     white-space: nowrap;
   }
 }
  .fine-print-area{
    display: flex;
    margin-top: 0.5rem;
  }
     h1, p{
       text-align: left;
       white-space: normal;
     }
  
  h1{
    font-size: var(--step--5) !important;
    margin: 0 0 0 var(--space-line);
    flex-basis: 40%;
  }
  p{
    font-size:  var(--step--6);
    font-weight: 200;
    margin: var(--space-tiny) var(--space-small);
  }
  .fine-print-area{
    gap: var(--space-tiny);
    align-content: center;
    flex-wrap: wrap;
    *{
      font-size: 0.65rem;
      display: inline-flex;
      align-items: center;
    }
  }
  .fine-print{
    cursor: pointer;
    text-decoration: underline;
    :hover{
      background-color: var(--colorDarkRoast);
      color: white;
      padding: 4px 8px;
      border-radius: 0.25rem;
    }
    font-weight: 200;
  }
`;