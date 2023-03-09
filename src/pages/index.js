import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Seo from "components/seo"
import Layout from "components/layout"
import LeftImageRightContent from "../components/leftImageRightContent"
import RightImageLeftContent from "../components/rightImageLeftContent"
import BannerSection from "../components/bannerSection"

const Homepage = ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <Seo
          title="Building Inspection Reports"
          description="Building Inspection Report Made Easy, Best for vehicle inspection report, rental inspection checklist, house inspection checklist and inspection report template. Try it FREE!"
        />
        <BannerSection />
        {data.wpPage.acfPageSections.sectionContent.map((node, index) => (
          <div key={index}>
            {node.rightContent ? (
              <LeftImageRightContent
                title={node.section_title}
                content={node.rightContent}
                image={getImage(node.leftImage.gatsbyImage)}
                buttonLabel={node.buttonLabel}
                buttonLink={node.buttonLink.url}
              />
            ) : null}

            {node.leftContent ? (
              <RightImageLeftContent
                title={node.sectionTitle2}
                content={node.leftContent}
                image={getImage(node.rightImage.gatsbyImage)}
                buttonLabel={node.buttonLabel2 ? node.buttonLabel2 : null}
                buttonLink={node.buttonLink2 ? node.buttonLink2.url : null}
              />
            ) : null}
          </div>
        ))}
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
        }
      }
    }
  }
`
