exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result2 = await graphql(`
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

  const pageTemplate = require.resolve(`./src/templates/pages.js`)

  // Handle errors
  if (result2.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result2.data.allWpPage.edges.forEach(page => {
    createPage({
      path: page.node.slug,
      component: pageTemplate,
      context: {
        slug: page.node.slug,
      },
    })
  })
}
