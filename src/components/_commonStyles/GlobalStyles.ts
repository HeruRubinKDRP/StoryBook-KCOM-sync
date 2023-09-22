import {createGlobalStyle, css} from "styled-components";

export const FontFace = css`
  @font-face {
    font-family: 'Mark OT';
    src: url('/fonts/MarkOT-Bold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Mark OT';
    src: url('/fonts/MarkOT.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }
  `;


const GlobalStyleKCOM = createGlobalStyle`
  #storybook-root{
    min-height: 100vh;
    min-width: 100vw;
  }
  
  body, #__next {
    margin: 0 !important;
    padding: 0 !important;
    font-family: sans-serif;
    height: 100vh;
  }
  
  *{
    font-family: 'Mark OT',sans-serif;
  }
  @font-face {
    font-family: 'Mark OT';
    src: url('/fonts/MarkOT-Bold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Mark OT';
    src: url('/fonts/MarkOT.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  :root {
    --step--6: clamp(0.30rem, calc(0.16rem + 0.8vw), 0.75rem);
    --step--5: clamp(0.40rem, calc(0.20rem + 1.01vw), 0.98rem);
    --step--4: clamp(0.48rem, calc(0.22rem + 1.30vw), 1.23rem);
    --step--3: clamp(0.58rem, calc(0.25rem + 1.67vw), 1.54rem);
    --step--2: clamp(0.69rem, calc(0.27rem + 2.13vw), 1.92rem);
    --step--1: clamp(0.83rem, calc(0.29rem + 2.73vw), 2.40rem);
    --step-0: clamp(1.00rem, calc(0.30rem + 3.48vw), 3.00rem);
    --step-1: clamp(1.20rem, calc(0.31rem + 4.43vw), 3.75rem);
    --step-2: clamp(1.44rem, calc(0.31rem + 5.65vw), 4.69rem);
    --step-3: clamp(1.73rem, calc(0.29rem + 7.18vw), 5.86rem);
    --step-4: clamp(2.07rem, calc(0.25rem + 9.13vw), 7.32rem);
    --step-5: clamp(2.49rem, calc(0.17rem + 11.59vw), 9.15rem);
    
    /* spacing */
    --space-3xs: clamp(0.25rem, calc(0.08rem + 0.87vw), 0.75rem);
    --space-2xs: clamp(0.50rem, calc(0.15rem + 1.74vw), 1.50rem);
    --space-xs: clamp(0.75rem, calc(0.23rem + 2.61vw), 2.25rem);
    --space-s: clamp(1.00rem, calc(0.30rem + 3.48vw), 3.00rem);
    --space-m: clamp(1.50rem, calc(0.46rem + 5.22vw), 4.50rem);
    --space-l: clamp(2.00rem, calc(0.61rem + 6.96vw), 6.00rem);
    --space-xl: clamp(3.00rem, calc(0.91rem + 10.43vw), 9.00rem);
    --space-2xl: clamp(4.00rem, calc(1.22rem + 13.91vw), 12.00rem);
    --space-3xl: clamp(6.00rem, calc(1.83rem + 20.87vw), 18.00rem);

    /* One-up pairs */
    --space-line: clamp(0.1rem, calc(0.04rem + 0.76vw), 0.63rem);
    --space-tiny: clamp(0.19rem, calc(0.04rem + 0.76vw), 0.63rem);
    --space-small: clamp(0.31rem, calc(0.12rem + 0.98vw), 0.88rem);
    --space-medium: clamp(0.31rem, calc(0.12rem + 0.98vw), 1.25rem);
    --space-3xs-2xs: clamp(0.25rem, calc(-0.18rem + 2.17vw), 1.50rem);
    --space-2xs-xs: clamp(0.50rem, calc(-0.11rem + 3.04vw), 2.25rem);
    --space-xs-s: clamp(0.75rem, calc(-0.03rem + 3.91vw), 3.00rem);
    --space-s-m: clamp(1.00rem, calc(-0.22rem + 6.09vw), 4.50rem);
    --space-m-l: clamp(1.50rem, calc(-0.07rem + 7.83vw), 6.00rem);
    --space-l-xl: clamp(2.00rem, calc(-0.43rem + 12.17vw), 9.00rem);
    --space-xl-2xl: clamp(3.00rem, calc(-0.13rem + 15.65vw), 12.00rem);
    --space-2xl-3xl: clamp(4.00rem, calc(-0.87rem + 24.35vw), 18.00rem);
    
    //GRID//
    --grid-max-width: 186.00rem;
    --grid-gutter: var(--space-s-l, clamp(1.00rem, calc(0.40rem + 3.01vw), 6.00rem));
    --grid-columns: 12;
  }

`;

export default GlobalStyleKCOM;
