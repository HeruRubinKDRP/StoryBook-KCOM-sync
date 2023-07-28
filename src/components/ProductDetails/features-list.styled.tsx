import styled from "styled-components";

export const FeaturesListStyled = styled.ul`
  list-style: none;
  text-align: center;
  font-size: 1.25rem;
  .bullet-point{
    .icon{
      height: 3rem;
      width: 4rem;
    }
    .feature-title{
      font-weight: 600;
      color: #473036;
      font-size: 1.25rem;
    }
    .feature-description{
      font-size: 1rem;
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }

`;