/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby-Bootstrap',
    description: 'This is the description of our website',
    keyworeds: 'gatsby, gatsbyjs project, gatsby bootstrap',
    image: '/static/gatsby.jpg',
    url: 'https://www.gatsbyjs.org',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://wp-react.yanotoma.com/graphql`,
        html: {
          useGatsbyImage: true,
          imageMaxWidth: 1024,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Bootstrap`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#FFFF`,
        theme_color: `#FFFF`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
