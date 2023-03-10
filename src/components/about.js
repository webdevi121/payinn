import React from "react"
import { Link } from "gatsby"
import Button from "./ui/button"

const AboutDavid = props => {
  return (
    <React.Fragment>
      <div className="relative min-h-[50vh] bg-transparent py-20">
        <div className="theme-container">
          <div className="flex items-center space-x-52">
            <div className="layout">
              <h2 className="mb-5 text-4xl font-bold">{props.title}</h2>
              <div>
                <p>
                  David is a seasoned Payments Industry Professional with over
                  20 years’ experience in developing and deploying technology to
                  solve complex client problems.
                </p>
                <p>
                  As an Institutional Banker, he developed and implemented
                  groundbreaking solutions for Government and many of
                  Australia’s largest companies. His experience extends to
                  commercial, legal and technical negotiations.
                </p>
                <p>
                  Clients include whole of State Government banking mandates,
                  Australia’s largest ticketing agency, Australia’s largest Toll
                  Road operator, Federal Government departments, Private Health
                  Insurance funds and Australia’s premier sporting stadium.
                </p>
                <p>
                  David is a foundation team member and shareholder in Fintech
                  company DataMesh, who have developed and certified a cloud
                  based Merchant Acquiring switch and proprietary android EFTPOS
                  terminal software and are actively deploying solutions in
                  market. Servicing a suite of Institutional clients and major
                  Australian Banks, DataMesh works with retailers and acquirers
                  to enhance their relationships and capabilities.
                </p>
                <p>
                  Now an independent consultant, David advises on the full
                  spectrum of Transaction Banking, including Payments (inward
                  and outward) and Liquidity Management for major enterprises
                  requiring specialist advice and knowledge.
                </p>
                <p>
                  His experience has included senior customer facing roles at
                  ANZ and Commonwealth Bank and the world of Fintech. Holding a
                  degree in eCommerce, David has lectured Information Systems
                  for Business at Deakin University’s Faculty of Business and
                  Law as part of their MBA / MPA programs.
                </p>
              </div>
            </div>
            <div className="space-y-5 text-center">
              <div className="h-[350px] w-[350px] overflow-hidden rounded-full">
                <img
                  src="https://admin.payinn.infusion121.com/wp-content/uploads/2023/03/david.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-medium">David Lorem Ipsum</h3>
                  <div>Founder & CO</div>
                </div>
                <div>
                  <Link to="https://au.linkedin.com/">
                    <img
                      src="https://admin.payinn.infusion121.com/wp-content/uploads/2023/03/linkedin-logo.png"
                      alt=""
                      width="82"
                      className="inline-block"
                    />
                  </Link>
                </div>
                <div>
                  <Button name="Get Started" link="/contact/" />
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
