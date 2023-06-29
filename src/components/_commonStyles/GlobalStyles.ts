import { createGlobalStyle} from "styled-components";


const GlobalStyleKCOM = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
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

`;

export default GlobalStyleKCOM;
