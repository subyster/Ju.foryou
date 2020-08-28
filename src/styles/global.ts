import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --background: #F0F5F9;
    --dark1: #031426;
    --secondary: #7CA3CB;
    --primary: #5085B9;
    --dark-primary: #094074;
    --light-primary: #C4D6E8;
    --red: #F50049;
    --light-red: #FFD6E2;
    --green: #127929;
    --light-green: #DCFAE2;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  *, input, button {
    border: 0;
    font: 1.6rem Roboto, sans-serif;
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
