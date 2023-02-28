import * as React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"
import Seo from "components/seo"
import ContactForm from "components/contact"

const contactUs = ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <Seo
          title={data.wpPage.acfSeoData.seoTitle}
          description={data.wpPage.acfSeoData.seoDescription}
        />
        <div className="container">
          <div className="mb-10 space-y-3 text-center">
            <h1 className="text-4xl font-bold">{data.wpPage.title}</h1>
          </div>
          <ContactForm />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default contactUs

export const query = graphql`
  {
    wpPage(slug: { eq: "contact-us" }) {
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
