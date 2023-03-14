import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Cta from "./cta"

const AboutDavid = props => {
  return (
    <React.Fragment>
      <div className="relative min-h-[50vh] bg-transparent py-20">
        <div className="theme-container">
          <div className="flex items-center space-x-52">
            <div className="layout">
              <h2 className="mb-5 text-4xl font-bold">{props.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.content,
                }}
              />
            </div>
            <div className="space-y-5 text-center">
              <div className="h-[350px] w-[350px] overflow-hidden rounded-full">
                <GatsbyImage image={props.image} alt="Illustration" />
              </div>
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-medium">David Lorem Ipsum</h3>
                  <div>Founder & CO</div>
                </div>
                <div>
                  <a href="https://au.linkedin.com/">
                    <img
                      src="https://admin.payinn.infusion121.com/wp-content/uploads/2023/03/linkedin-logo.png"
                      alt=""
                      width="82"
                      className="inline-block"
                    />
                  </a>
                </div>
                <div>
                  <Cta />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AboutDavid
