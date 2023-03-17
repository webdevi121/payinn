import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Cta from "./cta"

const AboutDavid = props => {
  return (
    <React.Fragment>
      <div className="relative min-h-[50vh] overflow-x-clip bg-transparent bg-theme-light py-20">
        <div className="theme-container relative">
          <div className="absolute -top-16 right-0 h-[45rem] w-[35rem] bg-theme-primary opacity-20 blur-[120px]"></div>
          <div className="flex flex-col items-center space-y-10 space-y-reverse lg:flex-row lg:space-x-14 xl:space-x-52">
            <div className="layout order-2 lg:order-1">
              <h2 className="mb-5 text-4xl font-bold">{props.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.content,
                }}
              />
            </div>
            <div className="flex flex-row items-center space-x-10 text-center lg:order-2 lg:flex-col lg:space-y-5 lg:space-x-0">
              <div className="h-[auto] w-[200px] overflow-hidden rounded-full lg:h-[350px] lg:w-[350px]">
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
