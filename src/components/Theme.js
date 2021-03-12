import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

const theme = {};

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background: black;
    color: white;
    font-family: Montserrat, sans-serif;
  }

  .main-content {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
`;

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
