import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/SEO';
import Theme from '../components/Theme';
import innertext from 'innertext';

const BlogpostLayout = ({ data }) => {
  const { title, content, excerpt } = data.wpPost;
  const keywords = !!data.wpPost.categories.nodes
    ? data.wpPost.categories.nodes.map(node => node.name).join(',')
    : '';
  const image = data.wpPost.featuredImage?.node.sourceUrl;

  return (
    <Theme>
      <SEO
        title={innertext(title)}
        description={innertext(excerpt)}
        keywords={keywords}
        image={image}
      />
      <div className="container">
        <div className="row justify-content-md-center">
          <div>
            {/* <img src={image} alt="title"></img> */}
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </Theme>
  );
};

export default BlogpostLayout;

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      content
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`;
