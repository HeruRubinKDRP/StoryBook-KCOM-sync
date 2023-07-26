import styled from "styled-components";
import {ctaColorStyles} from "../../_commonStyles/common.styled";

export const ContentStoriesContainerStyled = styled.div`

  //color variables
  ${ctaColorStyles}
  
  .content-dummy{
    height: 30vh;
    background-color: #b6b6b6;
    margin: 1rem;
  }

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: var(--colorDarkRoast);
  position: relative;
  &.hero-image-only{
    .small{
      .story-thumb{
        display: none;
      }
    }
  }

  &.small-container{

    .content-story-item{
      margin: 0 1rem;
    }

    h1{
      font-size: 1.75rem;
    }
    .small{
      .story-thumb{
        height: 8rem;
      }
    }
    .hero{
      .story-thumb{
        height: 30vh;
      }
    }
  }

  h1{
    border-bottom: 1px solid var(--colorSepia);
    width: 100%;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    font-size: 2.5rem;
    margin: 0 1rem;
    z-index: 1;
    background-color: white;
  }

  .content-story-item{
    margin: 1rem;
    &.small{
      flex-basis: 45%;
      flex-grow: 1;
      flex-shrink: 1;
      width: calc(45% - 2rem);
    }
  }
}

.content-story-item{
  position : relative;
  overflow: hidden;
  padding: 1rem 1rem 2rem 1rem;
  border-radius: 1.5rem;
  cursor: pointer;
  &.hero{
    width: 100%;
  }
  .hover-panel{
    position: absolute;
    inset: 0;
    background-color: var(--colorSepia);
    z-index: -1;
    display: none;
  }
  &:active{
    box-shadow: inset 2px 1px 15px 0 rgba(0,0,0,0.25);
  }
  &:hover{
    .hover-panel{
      display: inline-flex;

    }

    h1, h2, p{
      text-decoration: underline;
    }

    .story-thumb{
      animation: hoverBGscale 0.5s forwards;
      border-radius: 1em;
    }
  }
  .tags{
    margin-top: 0.5rem;
  }
  p{
    color: var(--colorText);
  }
  h2{
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--colorDarkRoast);
  }
  .tag-item{
    text-transform: uppercase;
    user-select: none;
    color: var(--colorMediumRoast);
    font-weight: 600;
    font-size: 0.75rem;
    margin-right: 0.5rem;
    &:last-child{
      margin-right: 0;
    }
  }
  .story-thumb{
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1rem;
    &.hero{

      height: 50vh;
      min-height: 24rem;
    }
    &.small{
      height: 12rem;
    }
    &.hero{

    }
  

`;