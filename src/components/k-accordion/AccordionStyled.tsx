import styled, {Interpolation} from 'styled-components';

export const AccordionContainer = styled.div<{dynamicStyles : Interpolation<any>}>`
  ${props => props.dynamicStyles}
    --fontSmall: calc(var(--overallWidth) * 0.01);
    --fontMedium: calc(var(--overallWidth) * 0.02);
    --fontLarge: calc(var(--overallWidth) * 0.03);
  
    --spacingTiny: calc(var(--overallWidth) * 0.005);
    --spacingSmall: calc(var(--overallWidth) * 0.0075);
  
  display: flex;
  flex-direction: column;
  .expand-collapse {
    font-size: var(--fontMedium);
    font-weight: 200;
  }
`;

export const AccordionItem = styled.div<{overallHeight : number}>`
  border: 1px solid #ddd;
  border-radius: 4px; 
  margin-bottom: 8px;
  overflow: hidden;
  height: 100%; 
  --documentHeight: ${props => props.overallHeight + 'px'};

  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  
  .expand-collapse{
    background-color: red;
    display: flex;
    align-items: center;
    padding: 16px;
    .icon.chevron-right{
      transform: rotate(0deg);
      transition: transform 0.3s ease-in-out;
      height: var(--fontLarge);
      width: var(--fontLarge);
      padding: var(--spacingSmall);
      display: flex;
      align-items: center;
    }
  }

  .accordion-content-item {
    .accordion-content{
      max-height: 0;
      transition: max-height 0.5s ease-in-out;
    }
    background-color: #a59898;
    height: auto;
    overflow: hidden;
    
  }

  &.closed {
    .accordion-content-item {
      .accordion-content {
        max-height: 0;
        animation: slideDown 1s ease-in-out reverse;
      }
    }

  
  }

  &.accordion-item-open {
    .expand-collapse{
      .icon.chevron-right{
        transform: rotate(90deg);
      }
    }
    .accordion-content-item { 
      .accordion-content {
        animation: slideDown 1s ease-in-out forwards;
        max-height: var(--documentHeight);
      }
    }

    background-color: #fff;
  }

`;

export const AccordionButton = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 0;
  text-align: left;
  width: 100%;
`;