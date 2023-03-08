import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import Mailchimp from "components/mailchimp"

const DetailPage = ({ data }) => {
  const item = data.wpPost

  return (
    <React.Fragment>
      <Layout>
        <Seo
          title={item.acfSeoData.seoTitle}
          description={item.acfSeoData.seoDescription}
        />
        <div className="theme-container">
          <div className="flex space-x-3">
            <div className="space-y-5 text-left">
              <div className="mb-6 text-center text-4xl">
                General Detail Page
              </div>
              <h1 className="text-primary text-3xl font-bold">{item.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Categories</h2>
              <ul>
                {console.log(data.allWpCategory)}
                {data.allWpCategory.edges.map(({ node }) => (
                  <li key={node.id}>
                    <Link to={node.uri}>{node.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="broder-t mt-10 pt-5">
            <Mailchimp />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default DetailPage

export const query = graphql`
  query ($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      slug
      id
      link
      content
      acfSeoData {
        seoDescription
        seoTitle
      }
    }
    allWpCategory(filter: { count: { gt: 0 } }) {
      edges {
        node {
          uri
          name
          slug
          id
        }
      }
    }
  }
`
