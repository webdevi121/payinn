import React from "react"
import { getImage } from "gatsby-plugin-image"
import LeftImageRightContent from "./leftImageRightContent"
import RightImageLeftContent from "./rightImageLeftContent"
import BannerSection from "./bannerSection"
import CustomerJourney from "./customerjourney"
import AboutDavid from "./about"
import CaseStudies from "./caseStudies"
import PaymentGateWay from "./paymentGateway"
import CtaFooter from "./ctaFooter"
import Faq from "./faq"

const Pages = props => {
  const data = props.data
  return (
    <React.Fragment>
      {data.wpPage.acfPageSections.sectionContent
        ? data.wpPage.acfPageSections.sectionContent.map((node, index) => (
            <div key={index}>
              {node.bannerHeadingTitle ? (
                <BannerSection
                  title={node.bannerHeadingTitle}
                  content={node.bannerDescription}
                  buttonLabel={
                    node.bannerButtonLabel ? node.bannerButtonLabel : null
                  }
                  bannerButtonLink={
                    node.bannerButtonLink ? node.bannerButtonLink.url : null
                  }
                  thumbnail={getImage(node.bannerThumbnail.gatsbyImage)}
                  backgroundImage={getImage(
                    node.bannerFullWidthBackground.gatsbyImage
                  )}
                />
              ) : null}

              {node.rightContent ? (
                <LeftImageRightContent
                  title={node.sectionTitle}
                  content={node.rightContent}
                  image={getImage(node.leftImage.gatsbyImage)}
                  buttonLabel={node.buttonLabel ? node.buttonLabel : null}
                  buttonLink={node.buttonLink ? node.buttonLink.url : null}
                />
              ) : null}

              {node.paymentLogosRepeater ? (
                <PaymentGateWay list={node.paymentLogosRepeater} />
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
              {node.journeyRepeater ? (
                <CustomerJourney
                  title="Your Customer's Journey"
                  list={node.journeyRepeater}
                />
              ) : null}
              {node.aboutHeadingTitle ? (
                <AboutDavid
                  title={node.aboutHeadingTitle}
                  content={node.aboutContent}
                  image={getImage(node.aboutUsThumbnail.gatsbyImage)}
                />
              ) : null}
              {node.caseStudiesRepeater ? (
                <CaseStudies
                  title="Case Studies"
                  list={node.caseStudiesRepeater}
                />
              ) : null}
              {node.faqRepeater ? <Faq list={node.faqRepeater} /> : null}
            </div>
          ))
        : null}

      <CtaFooter />
    </React.Fragment>
  )
}

export default Pages
