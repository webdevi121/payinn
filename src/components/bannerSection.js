import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Button from "./ui/button"

const BannerSection = props => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-[80vh] items-center bg-theme-secondary text-white">
        {props.backgroundImage ? (
          <div className="absolute bottom-0 left-0 w-full opacity-40">
            <GatsbyImage image={props.backgroundImage} alt="Illustration" />
          </div>
        ) : null}
        <div className="theme-container relative">
          <div className="grid grid-cols-2 items-center gap-10 space-y-7 text-left">
            <div className="layout space-y-7">
              <h2 className="mb-3 font-bold lg:text-7xl">{props.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: props.content }} />
              {props.buttonLabel ? (
                <div className="mt-10">
                  <Button
                    name={props.buttonLabel}
                    link={props.bannerButtonLink}
                  />
                </div>
              ) : null}
            </div>
            {props.thumbnail ? (
              <div className="ml-auto overflow-hidden rounded-lg">
                <GatsbyImage image={props.thumbnail} alt="Illustration" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BannerSection
