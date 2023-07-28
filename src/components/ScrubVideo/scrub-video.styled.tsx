import styled from "styled-components";

export const ScrubVideoStyled = styled.div`
  .video-background{
    width: 100% !important;
    height: 90vh !important;
    object-fit: contain;
    margin-top: 10vh;
  }

  .scrub-video-container{
    position: relative;
    .scrub-heading-area{
      position: absolute;
      left: 1rem;
      top: 1rem;
      z-index: 1000;
      background-color: rgba(255,255,255,0.7);
      padding: 0.75rem 1.25rem;
      backdrop-filter: blur(8px) brightness(1.75);
      border-radius: 0.5rem;
    }
  }

`;