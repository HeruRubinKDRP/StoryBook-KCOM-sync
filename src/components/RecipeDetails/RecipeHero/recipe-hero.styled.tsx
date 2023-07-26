import styled from "styled-components";

export const RecipeHeroStyled = styled.div`
  font-family: "Mark OT", sans-serif;
  display: flex;
  height: 70vh;
  .features-area{
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  }
  .key-value-content-container{
    align-items: center;
    border-right: 1px solid $sepia;
    &:last-child{
      border-right: 0;
    }
    flex-grow: 1;
    h2 label{
      font-size: 4rem;
    }
  }

  &.small-container{
    flex-direction: column-reverse;
    .content-area{
      text-align: center;
      padding: 1rem 2rem 3rem 1rem;
    }
    .content-container{
      height: 100% !important;
    }
  }
  &.large-container{
    flex-direction: row;
    .content-area{
      flex-basis: 50%;
      padding: 5% 2rem;
      h1{
        font-size: 3.5rem;
        line-height: 3.75rem;
        padding-bottom: 1rem;
      }
      p{
        font-size: 1.5rem;
        line-height: 1.75rem;
      }
    }
  }

  .small-container{
    flex-direction: column;
  }

`;