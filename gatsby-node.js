exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result1 = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

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

  const result3 = await graphql(`
    query {
      allWpCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const postTemplate = require.resolve(`./src/templates/detail-page.js`)
  const pageTemplate = require.resolve(`./src/templates/pages.js`)
  const categoryTemplate = require.resolve(`./src/templates/category.js`)

  // Handle errors
  if (result1.errors || result2.errors || result3.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result1.data.allWpPost.edges.forEach(post => {
    createPage({
      path: post.node.slug,
      component: postTemplate,
      context: {
        slug: post.node.slug,
      },
    })
  })

  result2.data.allWpPage.edges.forEach(page => {
    createPage({
      path: page.node.slug,
      component: pageTemplate,
      context: {
        slug: page.node.slug,
      },
    })
  })
  result3.data.allWpCategory.edges.forEach(category => {
    createPage({
      path: `/category/${category.node.slug}`,
      component: categoryTemplate,
      context: {
        slug: category.node.slug,
      },
    })
  })
}
