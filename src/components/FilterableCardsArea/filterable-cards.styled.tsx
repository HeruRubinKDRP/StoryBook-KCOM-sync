import styled from "styled-components";
import {ctaColorStyles} from "../_commonStyles/common.styled";

export const FilterableCardsStyled = styled.div`

  ${ctaColorStyles};
  
  .messaging-container{
    h1{
      &.Medium{
        font-size: 3vw !important;
        line-height: 3vw !important;}
    }
  }
  position: relative;
  .content-container{
    .section-front-center{
      padding: 4rem 10% !important;
    }
  }

  .expand-collapse{
    .content-area{
      padding-top: 4rem !important;
    }
  }

  .filters-menu-container{
    position: sticky;
    z-index: 200;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(8px);
    .k-btn{
      margin-right: 1rem;
      border-color: var(--colorMediumRoast) !important;
      &.active{
        background-color: var(--colorMediumRoast) !important;
        &:hover{
          label{
            color: var(--colorMediumRoast) !important;
          }
        }
        label{
          color: white !important;
        }
      }
      label{
        color: var(--colorMediumRoast) !important;;
      }
    }
    .filter-label{
      font-weight: 600;
      margin-right: 0.5rem;
    }
  }

  .filterable-cards-area{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .filters-menu-container{
      display: flex;
      padding: 1rem;
    }

    .key-value-content-container{
      margin: 0 0 1vw;
      label{
        color: var(--colorDarkRoast) !important;
        font-weight: 400;
      }
    }




    &.small-container{
      .highlight-card-container{
        .image-container{
          height:70vw!important;
          width:70vw!important;
        }
        margin-bottom: 2rem;
        margin-right: 4.5%;
        margin-left: 4.5%;
        width:70vw !important;
        min-height: 70vw !important;
        min-width: 70vw !important;
        max-width: 70vw !important;

        h3{
          font-size: 0.75rem !important;
        }
        h2{
          font-size: 1.25rem !important;
        }
        .key-value-content-container{
          label{
            font-size: 0.75rem !important;
          }
          .icon{
            height: 0.75rem !important;
            width: 0.75rem !important;
            svg{
              margin-bottom: 0.75rem;
            }
          }
        }
        .title-area{
          margin-bottom: 3rem;
        }
      }
    }

    &.medium-container{
      .highlight-card-container{
        .image-container{
          height:40vw!important;
          width:40vw!important;
        }
        width:40vw!important;
        min-height: 40vw!important;
        min-width: 40vw!important;
        max-width: 40vw!important;
        margin-bottom: 2.5rem;
        margin-left: 4.12%;
        margin-right: 4.12%;
        .title-area{
          margin-bottom: 3rem;
        }
      }
    }
    &.medium-large-container{
      .highlight-card-container{
        .image-container{
          height:20vw!important;
          width:20vw!important;
        }
        width:20vw!important;
        min-height: 20vw!important;
        min-width: 20vw!important;
        max-width: 20vw!important;
        margin-bottom: 2.5rem;
        margin-left: 4.12%;
        margin-right: 4.12%;
        .title-area{
          margin-bottom: 3rem;
        }
      }
    }



    &.large-container{
      justify-content: center;
      .highlight-card-container{
        .image-container{
          height:20vw!important;
          width:20vw!important;
        }
        width:20vw!important;
        min-height: 20vw!important;
        min-width: 20vw!important;
        max-width: 20vw!important;
        margin-bottom: 3.5rem;
        margin-left: 2.5%;
        margin-right: 2.5%;
        .title-area{
          margin-bottom: 3rem;
        }
        .key-value-content-container{
          margin-top: auto;
        }
      }
    }
  }
  
`;