import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #faf5f5;
    -webkit-font-smoothing: antialiased;
  }

  *, input, button {
    border: 0;
    font: 16px Roboto, sans-serif;
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  :root {
    --white: #fff;
    --background: #faf5f5;
    --dark1: #500A0F;
    --pink-ju: #FFC2DF;
    --purple-ju: #C6ADFF;
    --dark-purple-ju: #8B12C4;
    --red: #F50049;
    --green: #127929;
  }
`;
