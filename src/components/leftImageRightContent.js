import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Cta from "./cta"

const LeftImageRightContent = props => {
  return (
    <React.Fragment>
      <div className="min-h-[50vh] py-20">
        <div className="theme-container">
          <div className="grid grid-cols-2 items-center gap-10">
            <div className="pr-14">
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
