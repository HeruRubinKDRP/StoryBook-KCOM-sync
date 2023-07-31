import styled from "styled-components";


export interface iEyeBrowBannerStyled {
    height: string;
}
export const EyebrowBannerStyled = styled.div<{ height: string }>`
  width: 100%;
  display: flex;
  height: ${props => props.height};
  position: relative;
  overflow: hidden;
`;

export const EyeBrowSlideStyled = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.5s;
  h1{
    font-size: 1.5rem;
    text-align: center;
  }
  p{
    font-size: 1rem;
    font-weight: 200;
    text-align: center;
  }
  .fine-print{
    font-size: 0.75rem;
    font-weight: 200;
  }
`;