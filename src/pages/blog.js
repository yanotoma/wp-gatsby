import React from 'react';
import PostCard from '../components/PostCard';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import ContainerLayout from '../layouts/ContainerLayout';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';

const BlogPageStyles = styled.div`
  .blog-page {
    &__container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

const BlogPage = ({ data }) => {
  const posts = data.allWpPost.nodes;

  return (
    <ContainerLayout>
      <SEO />
      <BlogPageStyles>
        <PageTitle>Blog</PageTitle>
        <div className="blog-page__container">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              date={post.date}
              image={post.featuredImage?.node.localFile}
              link={post.uri}
            />
          ))}
        </div>
      </BlogPageStyles>
    </ContainerLayout>
  );
};

export default BlogPage;

export const query = graphql`
  query GetWpPosts {
    allWpPost {
      nodes {
        slug
        title
        uri

        date(fromNow: true)

        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 500, quality: 100, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
