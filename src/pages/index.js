import React from 'react';
import Post from '../components/Post';
import PrimaryLayout from '../layouts/PrimaryLayout';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

const IndexPage = ({ data }) => {
  const posts = data.allWpPost.nodes;

  return (
    <PrimaryLayout>
      <SEO />
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          excerpt={post.excerpt}
          image={post.featuredImage?.node.localFile}
          readMore={`post/${post.slug}`}
        />
      ))}
    </PrimaryLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query GetWpPosts {
    allWpPost {
      nodes {
        slug
        title
        excerpt

        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000, quality: 100)
              }
            }
          }
        }
      }
    }
  }
`;
