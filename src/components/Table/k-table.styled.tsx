import styled from "styled-components";

export const KTableStyled = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;

  .row{
    &:first-child{
      position: sticky;
      top: 0;
      z-index: 10;
    }
    min-width: 600px;
    display: flex;
    &.stacked{
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      .cell{
        width: 100% !important;
      }
    }
    &.standard{
      flex-direction: row;
    }
    &:last-child{
      border-bottom: 0;
    }
    .cell{
      position: relative;
      &.full-row-header{
        right: 0;
        left: 0;
        flex-direction: row;
        height: 2rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        .text-area{
          width: 100%;
          position: relative;
          flex-direction: row;
          label{
            font-size: 1.5rem;
            font-weight: bold;
            color: $medium-roast;
            margin: 0 0.75rem 0 0.75rem;
          }
        }
        .before, .after{
          background-color: $medium-roast;
          height: 1px;
          flex-grow: 1;
          margin-top: 0.75rem;
        }
        .before{
          left: 0;
        }
        .after{
          right:0;
        }

      }
      &.header{
        font-weight: 600;
        position: sticky;
        top: 0;
        .text-area{
          font-size: 1.5rem;
        }
      }
      .text-area{
        height: 100%;
        font-size: 1.25rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: $dark-roast;
      }

      .cell-header{
        font-size: 1.5rem;
        line-height: 1.25rem;
        margin: 1rem 1rem 0.5rem 1rem;
        align-self: stretch;
        display: inline;
        font-weight: normal;
      }
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-between;
      align-items: center;
      text-align: center;
    }
  }
`;