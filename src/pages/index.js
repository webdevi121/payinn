import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Seo from "components/seo"
import Layout from "components/layout"
import LeftImageRightContent from "../components/leftImageRightContent"
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
                content={node.rightContent}
                image={getImage(node.leftImage.gatsbyImage)}
                buttonLabel={node.buttonLabel}
                buttonLink={node.buttonLink.url}
                buttonTitle={node.buttonLink.title}
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
            leftImage {
              gatsbyImage(quality: 100, placeholder: BLURRED, height: 557)
            }
            buttonLabel
            buttonLink {
              url
              title
            }
          }
        }
      }
    }
  }
`
