import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BannerSection = props => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(isFrontPage: { eq: true }) {
        acfHomepage {
          ctaLink
          ctaText
          headingText
          headingTitle
          bannerThumbnail {
            gatsbyImage(quality: 100, width: 580, placeholder: BLURRED)
          }
          bannerBackgroundImage {
            gatsbyImage(
              quality: 100
              height: 500
              placeholder: BLURRED
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  `)

  const item = data.wpPage

  return (
    <React.Fragment>
      <div className="relative flex h-[60vh] items-center bg-theme-secondary text-white">
        {item.acfHomepage.bannerBackgroundImage ? (
          <div className="absolute bottom-0 left-0 w-full opacity-40">
            <GatsbyImage
              image={getImage(
                item.acfHomepage.bannerBackgroundImage.gatsbyImage
              )}
              alt=""
            />
          </div>
        ) : null}
        <div className="theme-container relative">
          <div className="grid grid-cols-2 items-center gap-10 space-y-7 text-left">
            <div className="space-y-7">
              <h2 className="mb-3 font-bold lg:text-7xl">
                {item.acfHomepage.headingTitle}
              </h2>
              <p>{item.acfHomepage.headingText}</p>
              <div>
                <Link to="">
                  <button className="h-12 w-auto rounded-2xl bg-theme-primary px-7 py-2 text-base font-bold text-white">
                    <div className="flex justify-center">
                      <div>{item.acfHomepage.ctaText}</div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            {item.acfHomepage.bannerThumbnail ? (
              <div className="ml-auto overflow-hidden rounded-lg">
                <GatsbyImage
                  image={getImage(item.acfHomepage.bannerThumbnail.gatsbyImage)}
                  alt=""
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BannerSection
