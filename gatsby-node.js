const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/pages.js`)
  const result = await graphql(`
    query {
      allWpPage(filter: { acfPageData: { pageTemplate: { eq: "default" } } }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  result.data.allWpPage.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
