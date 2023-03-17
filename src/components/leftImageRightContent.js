import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Cta from "./cta"

const LeftImageRightContent = props => {
  return (
    <React.Fragment>
      <div className="min-h-[50vh] overflow-x-clip py-20">
        <div className="theme-container relative">
          <div className="absolute -top-16 right-0 h-[45rem] w-[35rem] bg-theme-primary opacity-20 blur-[120px]"></div>
          <div className="relative grid grid-flow-row items-center gap-10 lg:grid-flow-col xl:grid-cols-2">
            <div className="xl:pr-14">
              <GatsbyImage image={props.image} alt="Illustration" />
            </div>
            <div className="layout">
              <h2 className="mb-5 text-4xl font-bold">{props.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: props.content }} />
              {props.buttonLabel ? (
                <div className="mt-10">
                  <Cta />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LeftImageRightContent
