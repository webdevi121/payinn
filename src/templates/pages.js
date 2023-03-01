import React from "react"
import { graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import Faq from "components/faq"

const Pages = ({ data }) => {
  const item = data.wpPage

  return (
    <React.Fragment>
      <Layout>
        <Seo
          title={item.acfSeoData.seoTitle}
          description={item.acfSeoData.seoDescription}
        />
        <div className="sir-container">
          <div className="space-y-5 text-left">
            <div>Page Template test</div>
            <div>Page Template test</div>
            <div>Page Template test</div>
            <div>Page Template test</div>
            <div>Page Template test</div>
            <div>Page Template test</div>
            <h1 className="text-primary text-3xl font-bold">{item.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
          </div>
          <div className="mt-10">
            <Faq />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Pages

export const query = graphql`
  query ($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      id
      slug
      title
      content
      acfSeoData {
        seoDescription
        seoTitle
      }
    }
  }
`
