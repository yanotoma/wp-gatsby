import React from 'react';
import { navigate } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Test = () => {
  return (
    <div>
      <Header title="Header of our test page" />
      <h1>This is a test page!</h1>
      <button onClick={() => navigate('/')}>Navigate to HomePage</button>
      <Footer />
    </div>
  );
};

export default Test;
