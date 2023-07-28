import styled from "styled-components";

export const SocialVideoStyled = styled.div`
  position: relative;
  min-width: 20%;
  border-radius: 1rem;
  overflow: hidden;
  display: inline-flex;
  .is-playing-controls{
    position: absolute;
    inset: 0;
    z-index: 1;
  }
  .play-control{
    position: absolute;
    z-index: 12;
    top: 50%;
    left: 50%;
    width: 20%;
    transform: translateX(-50%) translateY(-50%);
    .play-icon{
      filter: drop-shadow(1px 1px 4px black);
      .filled{
        fill : white;
      }
    }
  }
  .image-preview, video{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  video{
    pointer-events: none;
  }

`;