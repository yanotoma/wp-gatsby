const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    // Generate slug for each md file
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts',
    });

    // Create the fiel with the slug value
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allWpPost {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    result.data.allWpPost.nodes.forEach(node => {
      createPage({
        path: `post/${node.slug}`,
        component: path.resolve('./src/layouts/BlogpostLayout.js'),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
