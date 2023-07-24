import styled from "styled-components";

export const HeaderAreaStyled = styled.div`
  .header-area{
    &.medium-roast{
      .before,.after{
        background-color: $medium-roast !important;
      }
      .title-label{
        color: $medium-roast !important;
      }
    }

    &.dark-roast{
      .before,.after{
        background-color: $dark-roast !important;
      }

      .title-label{
        color: $dark-roast !important;
      }
    }
  }



  .header-area{
    display: flex;

    &.align-left{
      .header{
        align-items: flex-start;
        .before{
          flex-grow: 0!important;
        }
      }
    }

    &.align-right{
      .header{
        align-content: flex-end;
        .after{
          flex-grow: 0!important;
        }
      }
    }

    .header{
      display: flex;
      &.medium-light{
        width: 100%;
        .title-label{
          font-size: 1.5rem;
          font-weight: 400;
        }
        .before, .after{
          display: none;
        }
      }
      &.line-through{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        .before, .after{
          height: 1px;
          background-color: $text;
          flex-grow: 1;
          margin-top: 5px;
        }
        .before{
          background-color: $text;
          margin-right: 0.5rem;
        }
        .after{
          margin-left: 0.5rem;
        }
      }
    }
  }

`;