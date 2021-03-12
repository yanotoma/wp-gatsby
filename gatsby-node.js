const path = require('path');

exports.createPages = async gatsbyUtilities => {
  const posts = await getWpPosts(gatsbyUtilities);
  // If there are no posts in WordPress, don't do anything
  if (!posts.length) {
    return;
  }

  // If there are posts, create pages for them
  await createIndividualBlogPostPages(posts, gatsbyUtilities);
};

const createIndividualBlogPostPages = async (posts, gatsbyUtilities) => {
  Promise.all(
    posts.map(({ post }) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: post.uri,

        // use the blog post template as the page component
        component: path.resolve('./src/layouts/BlogpostLayout.js'),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: post.id,
        },
      })
    )
  );
};

const getWpPosts = async ({ graphql, reporter }) => {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
          }
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    );
    return;
  }

  return graphqlResult.data.allWpPost.edges;
};
