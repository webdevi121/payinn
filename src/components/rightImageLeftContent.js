import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import PaymentGateWayLogos from "./paymentgateway"
import Button from "./ui/button"

const RightImageLeftContent = props => {
  return (
    <React.Fragment>
      <div className="min-h-[50vh] py-20">
        <div className="theme-container">
          <div className="grid grid-cols-2 items-center gap-10">
            <div className="layout">
              <h2 className="mb-5 text-4xl font-bold">{props.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: props.content }} />
              {props.buttonLabel ? (
                <div className="mt-10">
                  <Button
                    name={props.buttonLabel}
                    link={props.buttonLink}
                    title={props.buttonTitle}
                  />
                </div>
              ) : null}
            </div>
            <div className="pl-14">
              <GatsbyImage image={props.image} alt="Illustration" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RightImageLeftContent
