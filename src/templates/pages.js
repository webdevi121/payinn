import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PageSection from "../components/pageSection"

const Pages = ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <Seo
          title={data.wpPage.acfSeoData?.seoTitle}
          description={data.wpPage.acfSeoData?.seoDescription}
          image={data.wpPage.acfSeoData.socialThumbnail?.sourceUrl}
          uri={data.wpPage.uri}
        />
        <PageSection data={data} />
      </Layout>
    </React.Fragment>
  )
}

export default Pages

export const query = graphql`
  query ($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      uri
      acfSeoData {
        seoTitle
        seoDescription
        socialThumbnail {
          sourceUrl
        }
      }
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
          ... on WpPage_Acfpagesections_SectionContent_TwoColumnsContent {
            twoColumnsLeftContent
            twoColumnsRightContent
            twoColumnsSectionTitle
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
            journeyLayout
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
                gatsbyImage(placeholder: BLURRED, height: 60, layout: FIXED)
              }
            }
          }
          ... on WpPage_Acfpagesections_SectionContent_FaqLayout {
            faqRepeater {
              questionField
              answerField
            }
          }
        }
      }
    }
  }
`
