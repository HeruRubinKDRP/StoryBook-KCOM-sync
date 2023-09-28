import styled from "styled-components";

export const BigAcrossStyled = styled.section`
  width: 100%;
  min-height: 240px;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  display: flex;
  margin-bottom: var(--space-medium);
  h1{
    font-size: var(--step--1);
    margin-bottom: var(--space-line);
  }
  p{
    font-size: var(--step--3);
    margin: var(--space-line) 0;
  }
  
  .message-area {
    width: 50%;
    z-index: 100;
    position: relative;
    padding: 1rem 1rem 1rem 1.5rem;
  }

  .image-spacer {
    width: 1px;
    opacity: 0;
  }

  .image-area {
    width: 50%;
    position: relative;
    z-index: 0;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;