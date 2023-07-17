import styled from "styled-components";

export const BooleanToggleStyled = styled.div`
  background-color: #473036;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 0.5rem;
  user-select: none;
  .toggle-label{
    font-size: 0.75rem;
    font-weight: bold;
    color: $text;
    margin-left: 0.5rem;
  }
  .check-mark-container{
    position: relative;
    border: 1px solid $text;
    border-radius: 0.25rem;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    .icon-checkmark{
      animation: expandElement 0.5s forwards ease-in-out;
      position: absolute;
      top: -4px;
      bottom: 0;
      left: 0;
      right: -5px;
    }
  }
  &.dark-bg{
    background-color: $dark-roast;
    label{
      color: white;
    }
    .filled{
      fill : white;
    }
    border: 1px solid $sepia;
    border-radius: 0.25rem;
  }
  &.no-bg{
    background-color: transparent;
    border: 0;
  }
  &.white{
    background-color: white;
    border: 1px solid $sepia;
    border-radius: 0.25rem;
  }

`
