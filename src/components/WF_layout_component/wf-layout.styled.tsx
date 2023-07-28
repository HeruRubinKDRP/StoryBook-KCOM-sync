import styled from "styled-components";

export const WFlayoutStyled = styled.div`
  .demo{
    padding: 2rem;
  }

  .wf-container{
    &.rounded{
      .secondary-items > div:first-child{
        margin-bottom: 0.5rem;
      }
      .secondary-items{
        margin-left: 1rem;

      }
      .main-hero, .secondary-items > div{
        border-radius: 0.5rem;
        overflow: hidden;

      }
    }
    &.small{
      .main-section{
        .main-hero{
          width: 100%;
        }
      }
      .extra-item{
        overflow: hidden;
        border-radius: 1rem;
        .cta-pos{
          display: none;
        }
        h1{
          font-size: 1rem !important;
          line-height: 1rem !important;
        }
        p{
          font-size: 0.75rem;
        }
      }
    }
    &.large{

      .width-between-200-and-399, .width-between-400-and-599{
        h1{
          font-size: 1.5rem;
          line-height: 1.5rem;
        }
        p{

        }
      }
    }
    .main-section{
      display: flex;
      flex-direction: row;
      height: 60vh;
      .main-hero{
        width: 70%;
      }
      .secondary-items{
        width: 30%;
        display: flex;
        flex-direction: column;

        .content-item{
          height: 100%;
        }
      }
    }
    .lower-items{
      width: 100%;
      overflow-x: hidden;
      flex-wrap: nowrap;
      padding: 1rem 0 1rem 0;
      justify-content: center;
      display: flex;
      &.scrollable{
        justify-content: flex-start;
      }
      .draggable-container{
        white-space: nowrap;
        width: auto;
        display: flex;
        flex-direction: row;
      }
      .extra-item{
        height: 10rem;
        width: 27rem;
        flex-shrink: 0;
        margin-right: 1rem;
        border-radius: 1rem;
        overflow: hidden;
      }
    }
  }

`;