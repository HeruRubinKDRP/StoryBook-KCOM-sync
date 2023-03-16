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
      height: 50% !important
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
  
  .video-container{
    position: relative;
    video{
      position: relative;
    }
    
    
    
    .video-controls{
      position: absolute;
      display: flex;
      right: 2%;
      top: 2%;
      z-index: 100;
      .volume-button{
                
      }      
      .k-btn{
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        padding: 0.75rem 1rem;
        .icon{
          width: 3vh !important;
          height: 3vh !important;
        }
      }
    } 
    
    .play-toggle-button, .play-again-button{
      z-index: 90;
      inset: 0;
      position: absolute;
      border-radius: 0;
      height: 100% !important;
      border: 0 !important;
      &.paused{
        background-color: rgba(0,0,0,0.5) !important; 
        .filled{
          fill: rgba(255,255,255,0.75);
          filter: drop-shadow(1px 2px 3px rgba(0,0,0,0.65));
        }
      }
      &.playing{
        background-color: transparent !important;
      } 
    }

    .icon{
      width: 100% !important;
      height: 100% !important;
      display: flex;
      justify-content: center;
      margin: 0 !important;
    }
    
  }
  max-width: 1300px;
  height: 80vh;
  min-height: 400px;
  margin: 0 auto;
  background-color: #e7e4df;
  box-shadow: 2px 6px 12px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  .contents-menu-btn {
    height: auto !important;
    padding: 0.5rem;

    label {
      font-size: 1rem;
      line-height: 1.15rem;
      white-space: normal;
      text-align: left;
    }
  }

  .Title {
    font-size: 2.5rem;
  }

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
    overflow: hidden;
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
    padding: 1rem; 
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 2rem;
      text-align: justify;
    }

    margin: 2%;
  }

  h1 {
    font-size: 2rem;
    padding-bottom: 1rem;
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

    .k-btn {
      background-color: transparent !important;
      padding: 1.5rem 0;
      transition: transform 0.5s ease-in-out;
      border-radius: 0 !important;

      .expander {
        right: calc(100% - 0.75rem) !important;
        top: 50% !important;
        bottom: 50% !important;
        left: 0 !important;
      }

      &:hover, &.selected {
        transform: scale(1.1);

        .expander {
          top: 4% !important;
          bottom: 4% !important;
          border-radius: 0.15rem;
        }
      }

      &.selected {
        label {
          font-weight: 600;
          font-size: 1rem !important;
          transform: scale(1.05);

        }
      }

      label {
        color: white !important;
        text-align: left;
        font-size: 1rem !important;
        white-space: normal;
        margin-left: 1.5rem;
      }
    }
  }
`