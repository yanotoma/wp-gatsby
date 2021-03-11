import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <span className="text-dark">
          © Gatsby-Bootstrap Project {new Date().getFullYear()}
        </span>
      </div>
    </FooterStyles>
  );
};

export default Footer;
