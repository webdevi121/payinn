import React from "react"
import { graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import PageSection from "../components/pageSection"

const Homepage = ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <Seo
          title="Building Inspection Reports"
          description="Building Inspection Report Made Easy, Best for vehicle inspection report, rental inspection checklist, house inspection checklist and inspection report template. Try it FREE!"
        />
        <PageSection data={data} />
      </Layout>
    </React.Fragment>
  )
}

export default Homepage

export const query = graphql`
  {
    wpPage(slug: { eq: "homepage" }) {
      acfPageSections {
        sectionContent {
          ... on WpPage_Acfpagesections_SectionContent_BannerSection {
            bannerHeadingTitle
            bannerDescription
            bannerButtonLabel
            bannerButtonLink {
              url
            }
            bannerThumbnail {
              gatsbyImage(quality: 100, width: 580, placeholder: NONE)
            }
            bannerFullWidthBackground {
              gatsbyImage(
                quality: 100
                height: 500
                placeholder: NONE
                layout: FULL_WIDTH
              )
            }
          }
          ... on WpPage_Acfpagesections_SectionContent_LeftImageRightContent {
            rightContent
            sectionTitle
            leftImage {
              gatsbyImage(quality: 100, placeholder: NONE, height: 557)
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
              gatsbyImage(quality: 100, placeholder: NONE, height: 557)
            }
            buttonLabel2
            buttonLink2 {
              url
            }
          }
          ... on WpPage_Acfpagesections_SectionContent_CustomerJourney {
            journeySectionTitle
            sectionSubTextJourney
            journeyRepeater {
              stageTitle
              stageDescription
            }
          }
          ... on WpPage_Acfpagesections_SectionContent_CaseStudies {
            switchViewCaseStudies
            caseStudiesRepeater {
              caseStudiesTitle
              caseStudiesDescription
              caseStudiesThumbnail {
                gatsbyImage(
                  width: 500
                  quality: 100
                  height: 500
                  placeholder: NONE
                )
              }
              graphRepeater {
                graphValue
                smallText
                imageGraph {
                  gatsbyImage(width: 55, placeholder: NONE, height: 30)
                }
              }
            }
          }
          ... on WpPage_Acfpagesections_SectionContent_AboutUs {
            aboutContent
            aboutHeadingTitle
            aboutUsThumbnail {
              gatsbyImage(width: 357, height: 357, placeholder: NONE)
            }
          }
          ... on WpPage_Acfpagesections_SectionContent_PaymentGateways {
            paymentLogosRepeater {
              paymentLogo {
                gatsbyImage(placeholder: NONE, height: 60, layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`
