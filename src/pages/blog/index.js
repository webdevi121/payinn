import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "components/layout"
import Seo from "components/seo"

const blogPage = ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <Seo
          title="Headless Base"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <div className="sir-container">
          <div className="mb-10 space-y-3 text-center">
            <h1 className="text-4xl font-bold">{data.wpPage.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.allWpPost.edges.map(({ node }) => (
              <div
                key={node.databaseId}
                className="rounded-lg border border-solid p-3"
              >
                <div className="space-y-3">
                  <Link
                    to={`/${node.slug}`}
                    className="text-sir-secondary"
                    alt={node.title}
                  >
                    {node.featuredImage ? (
                      <div className="overflow-hidden rounded-lg">
                        <GatsbyImage
                          image={getImage(node.featuredImage.node.gatsbyImage)}
                          alt={node.title}
                        />
                      </div>
                    ) : null}
                    <h2 className="text-xl font-bold">{node.title}</h2>
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    className="line-clamp-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default blogPage

export const query = graphql`
  {
    allWpPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          slug
          databaseId
          link
          excerpt
          content
          featuredImage {
            node {
              gatsbyImage(quality: 100, width: 326, placeholder: BLURRED)
            }
          }
        }
      }
    }
    wpPage(slug: { eq: "blog" }) {
      title
      content
    }
  }
`
