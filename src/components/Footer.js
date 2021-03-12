import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ContainerLayout from '../layouts/ContainerLayout';

const FooterStyles = styled.footer`
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-top: 1px solid white;
  margin-top: 1rem;

  span {
    font-size: 0.7rem;
  }
`;

const Footer = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(query);

  return (
    <FooterStyles>
      <ContainerLayout>
        <span>
          {author} © {new Date().getFullYear()}
        </span>
      </ContainerLayout>
    </FooterStyles>
  );
};

export default Footer;

const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;
