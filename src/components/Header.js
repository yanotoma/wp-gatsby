import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ContainerLayout from '../layouts/ContainerLayout';

const HeaderStyles = styled.header`
  padding: 1rem 0;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    display: block;

    &:hover {
      color: #ccc;
    }
  }

  nav {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  .site-name {
    h1 {
      margin: 0;
      font-size: 2rem;
      width: auto;
    }

    span {
      font-weight: 100;
      font-size: 0.8rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    column-gap: 10px;
    /* grid-auto-columns: auto; */
    grid-template-columns: ${({ linksLength }) =>
      `repeat(${linksLength}, auto)`};
  }
`;

const Header = ({ title }) => {
  const links = [
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <HeaderStyles linksLength={links.length}>
      <ContainerLayout>
        <nav>
          <Link to="/" className="site-name">
            <h1>PAGE</h1>
            <span>description</span>
          </Link>

          <div>
            <ul>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </ContainerLayout>
    </HeaderStyles>
  );
};

export default Header;
