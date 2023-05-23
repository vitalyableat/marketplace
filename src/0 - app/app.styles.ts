import { createGlobalStyle } from 'styled-components';

export const AppStyles = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    font-family: 'Mulish', sans-serif;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
  }
`;
