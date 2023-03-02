import styled from 'styled-components'
export const UserTrainingStyled = styled.div`
  &.mobile-dimensions {
    min-width: 90vw;
    max-width: 90vw;
    height: 90vh;
    .user-training-content {
      display: flex;
      width: 100%;
      flex-direction: column;
    }
    .user-training-imagery-container {
    }
    .ExpandMenu {
      flex-basis: 70%;
    }
    .NextCTA {
      flex-basis: 29%;
    }
    .Title {
      display: none;
    }
    .tab-nav-container {
      flex-direction: column-reverse;
      justify-content: flex-end;
      width: 100%;
      height: 100%;
    }
    .buttons-container {
      width: 100%;
      border-radius: 0px 0px 12px 12px;
      overflow: visible;
    }
    .user-training-container {
      width: 100%;
    }
    .user-training-imagery {
      border-radius: 12px 12px 0 0;
    }
    .TabCta {
      box-shadow: inset 0px 19px 8px 5px rgb(0 0 0 / 25%);
      border-radius: 0 0 12px 12px;
    }
    .true {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &.extra-large-dimensions,
  &.large-dimensions,
  &.medium-dimensions {
    min-width: 75vw;
    .ExpandMenu {
      display: none;
    }
    .true,
    .false {
      display: flex !important;
      flex-direction: column;
      align-items: flex-start;
    }
    .expand-menu-container {
      max-height: fit-content;
      overflow: visible;
    }
    .user-training-imagery {
      border-radius: 0 12px 0 0;
    }
  }
  max-width: 1300px;
  height: 80vh;
  min-height: 400px;
  margin: 0 auto;
  background-color: #e7e4df;
  box-shadow: 2px 6px 12px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  .user-training-content {
    width: 67%;
    height: inherit;
    overflow-y: auto;
  }

  .tab-nav-container {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .buttons-container {
    .NextCTA {
      button {
        border: none;
      }
    }
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #3b2b2f;
    border-radius: 12px 0 0 12px;
    overflow-y: auto;
  }

  .user-training-imagery-container {
    position: relative;
    height: 60%;
    max-height: 60%;
    width: 100%;
  }
  .user-training-imagery {
    /*position: absolute;*/
    inset: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .user-training-text {
    /*background-color: #13bba4;*/
    font-size: 1.4rem;
    margin: 2%;
  }
  h1 {
    font-size: 3rem;
    padding-bottom: 3rem;
  }
  h3 {
    font-size: medium;
    font-weight: normal;
  }
  .menu-contents {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2vw;
  }
`