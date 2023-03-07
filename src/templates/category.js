import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"

const CategoryPage = ({ data }) => {
  const item = data.wpCategory
  const postItem = data.allWpPost.edges
  return (
    <React.Fragment>
      <Layout>
        <Seo title="title" description="description" />
        <div className="sir-container">
          <div className="mb-10">
            <h1 className="text-3xl font-bold">Category {item.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
          <div>
            <h2 className="text-xl font-bold">
              List of post in {item.name} category
            </h2>
            <ul className="space-y-3">
              {postItem.map(({ node }) => (
                <div
                  key={node.id}
                  className="rounded-lg border border-solid p-3"
                >
                  <div className="space-y-3">
                    <Link
                      to={`/${node.slug}`}
                      className="text-sir-secondary"
                      alt={node.title}
                    >
                      <h2 className="text-xl font-bold">{node.title}</h2>
                    </Link>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default CategoryPage

export const query = graphql`
  query ($slug: String!) {
    wpCategory(slug: { eq: $slug }) {
      name
      description
    }
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
    ) {
      edges {
        node {
          title
          id
          slug
        }
      }
    }
  }
`
