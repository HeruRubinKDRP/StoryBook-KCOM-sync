import styled from "styled-components";

export const RecipeInstructionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .positioner{
    width: 60%;
  }

  &.small-container {
    width: 100%;
    .title-area {
      flex-direction: column !important;
      align-items: center;
      justify-content: center;
      justify-items: center;
      h3{
        margin-top: 1rem;
      }
    }
    .image-container {

    }

    .highlight-card-container {
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-bottom: 5rem;
    }
  }

  .highlight-card-container {
    flex-direction: row;
    margin-bottom: 3rem;
    .image-container {

    }

    .title-area {
      display: inline-flex;
      flex-direction: row;
      justify-content: flex-start;
      margin: auto 2rem;
      width: 50%;
      min-width: 14rem;
      h3 {
        &.Medium {
          font-size: 3rem;
          font-weight: 400;
        }
      }

      h2 {
        margin: auto 0 auto 1rem;

      }
    }
  }


`;