import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/SEO';
import Theme from '../components/Theme';
import innertext from 'innertext';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogpostLayout = ({ data }) => {
  const { title, content, excerpt } = data.wpPost;
  const keywords = !!data.wpPost.categories.nodes
    ? data.wpPost.categories.nodes.map(node => node.name).join(',')
    : '';
  const image = !!data.wpPost.featuredImage
    ? getImage(data.wpPost.featuredImage.node.localFile)
    : null;

  return (
    <Theme>
      <SEO
        title={innertext(title)}
        description={innertext(excerpt)}
        keywords={keywords}
        image={data.wpPost.featuredImage?.node.localFile.url}
      />
      <div className="container">
        <div className="row justify-content-md-center">
          <div>
            {!!image && <GatsbyImage image={image} alt={title} />}

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
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 1000, quality: 100)
            }
          }
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
