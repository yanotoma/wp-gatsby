import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, image }) => {
  const {
    site: {
      siteMetadata: {
        defaultTitle,
        defaultDescription,
        defaultKeywords,
        defaultUrl,
        defaultImage,
      },
    },
  } = useStaticQuery(query);

  const seoTitle = title || defaultTitle;
  const seoConfig = {
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: image || `${defaultUrl}${defaultImage}`,
  };

  return (
    <Helmet>
      <title>{seoTitle}</title>
      {Object.keys(seoConfig).map(seo => (
        <meta name={seo} content={seoConfig[seo]} key={seo} />
      ))}
    </Helmet>
  );
};

export default SEO;

export const query = graphql`
  query GetDefaultMetadata {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultKeywords: keyworeds
        defaultImage: image
        defaultUrl: url
      }
    }
  }
`;
