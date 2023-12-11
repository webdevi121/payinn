import { graphql } from "gatsby"

export const fragmentSeo = graphql`
  fragment SeoPage on WpPage {
    seo {
      title
      metaDesc
      canonical
      opengraphDescription
      opengraphUrl
      opengraphPublisher
      opengraphPublishedTime
      opengraphModifiedTime
      opengraphType
      opengraphImage {
        sourceUrl
      }
    }
  }
`
