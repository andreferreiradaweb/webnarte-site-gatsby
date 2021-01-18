import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    --font: 'montserrat', sans-serif;
    --font-color: #78828d;
    --button-color: #5bb8ea;
    --blue-light: #2222ff;
    --blue-dark: #1c0051;
    --white: #f9f9f9;
    font-family: 'open-sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 200;
    color: #f9f9f9;
    outline: none;
  }  

  strong {
    font-size: 18px;
  }

  h1 {
    font-family: 'montserrat', sans-serif;
    font-weight: bold;
    font-size: 70px;
  }

  img {
    max-width: 100%;
  }
`
