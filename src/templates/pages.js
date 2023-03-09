import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import BannerSection from "../components/bannerSection"

const Pages = ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <Seo
          title="Building Inspection Reports"
          description="Building Inspection Report Made Easy, Best for vehicle inspection report, rental inspection checklist, house inspection checklist and inspection report template. Try it FREE!"
        />
        <BannerSection />
        <PageSection data={data} />
      </Layout>
    </React.Fragment>
  )
}

export default Pages

export const query = graphql`
  query ($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      acfPageSections {
        sectionContent {
          ... on WpPage_Acfpagesections_SectionContent_LeftImageRightContent {
            rightContent
            sectionTitle
            leftImage {
              gatsbyImage(quality: 100, placeholder: BLURRED, height: 557)
            }
            buttonLabel
            buttonLink {
              url
            }
          }
          ... on WpPage_Acfpagesections_SectionContent_RightImageLeftContent {
            leftContent
            sectionTitle2
            rightImage {
              gatsbyImage(quality: 100, placeholder: BLURRED, height: 557)
            }
            buttonLabel2
            buttonLink2 {
              url
            }
          }
          ... on WpPage_Acfpagesections_SectionContent_CustomerJourney {
            journeyRepeater {
              stageTitle
              stageDescription
            }
          }
        }
      }
    }
  }
`
