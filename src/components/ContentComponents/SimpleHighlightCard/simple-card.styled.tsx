import styled from "styled-components";

export const SimpleCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
  width: auto;

  &.center{
    align-content: center;
    align-items: center;
    text-align: center;
  }
  .features-list{
    margin-top: auto;
  }
  img{
    height: 100%;
  }
  &:last-child{

  }
  h2{
    display: inline-flex;
    font-size: 1rem;
    &.Large{
      font-size: 1.5rem;
    }
  }

  h3{
    &.Small{
      font-size: 1rem;
    }
  }

  .image-container{
    .bg-image-container{
      width: 100%;
      height:100%
    }
  }

  .image-container, .title-area{
    display: flex;
  }
  h2, .image-container, .title-area{
    &:empty{
      display: none;
    }
  }

  .title-area{
    margin-top: 1rem;
    flex-direction: column;
  }
  &.center{
    align-content: center;
    align-items: center;
    .image-container, .title-area{
      justify-content: center;
      align-items: center;
    }
  }

  &.left{
    align-content: flex-start;
    .image-container, .title-area{
      justify-content: flex-start;
    }
  }

  &.right{
    align-content: flex-end;
    .image-container, .title-area{
      justify-content: flex-end;
    }
  }

  .image-container{
    overflow: hidden;
    display: flex;
    min-height: 12rem;
    min-width: 12rem;
    width: auto;
    &.circle{
      border-radius: 100vw;
      flex-grow: 1;
    }

    &.rounded-rectangle{
      border-radius: 1rem;
    }

  }

`
