import React from "react"
import { graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import PageSection from "../components/pageSection"

const Homepage = ({ data }) => {
  const item = data.wpPage
  return (
    <React.Fragment>
      <Layout>
        <Seo
          title={item.seo.title}
          description={
            item.seo.metaDesc
              ? item.seo.metaDesc
              : item.seo.opengraphDescription
          }
          image={item.seo.opengraphImage?.sourceUrl}
          url={item.seo.opengraphUrl}
          publishedTime={item.seo.opengraphPublishedTime}
          publisher={item.seo.opengraphPublisher}
          modifiedTime={item.seo.opengraphModifiedTime}
          type={item.seo.opengraphType}
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
      uri
      ...SeoPage
      acfPageSections {
        sectionContent {
          ... on WpPage_Acfpagesections_SectionContent_BannerSection {
            bannerHeadingTitle
            bannerDescription
            animationText
            animationTextTwo
            bannerThumbnail {
              gatsbyImage(quality: 100, width: 580, placeholder: BLURRED)
            }
            bannerFullWidthBackground {
              gatsbyImage(
                quality: 100
                height: 500
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
            }
          }
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
            journeySectionTitle
            sectionSubTextJourney
            journeyLayout
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
                  placeholder: BLURRED
                )
              }
              graphRepeater {
                graphValue
                smallText
                imageGraph {
                  gatsbyImage(width: 55, placeholder: BLURRED, height: 30)
                }
              }
            }
          }
          ... on WpPage_Acfpagesections_SectionContent_AboutUs {
            aboutContent
            aboutHeadingTitle
            ceoName
            companyPosition
            linkedinUrl
            aboutUsThumbnail {
              gatsbyImage(width: 357, height: 357, placeholder: BLURRED)
            }
          }
          ... on WpPage_Acfpagesections_SectionContent_PaymentGateways {
            paymentLogosRepeater {
              paymentLogo {
                publicUrl
                gatsbyImage(quality: 100, placeholder: BLURRED, height: 60)
              }
            }
          }
        }
      }
    }
  }
`
