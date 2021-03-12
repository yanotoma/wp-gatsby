import React from 'react';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import Theme from './src/components/Theme';

export const wrapRootElement = ({ element }) => {
  return (
    <div className="main-content">
      <Header />
      <main>{element}</main>
      <Footer />
    </div>
  );
};

export const wrapPageElement = ({ element }) => {
  return <Theme>{element}</Theme>;
};
