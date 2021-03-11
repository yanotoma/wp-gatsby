import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const theme = {};

const GlobalStyles = createGlobalStyle`
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
      <div className="main-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Theme;
