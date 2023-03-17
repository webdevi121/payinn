import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PaymentGateWay = props => {
  return (
    <React.Fragment>
      <div className="overflow-x-clip">
        <div className="theme-container">
          <div className="grid grid-cols-2 items-center justify-center space-x-10 opacity-30 md:grid-cols-3 lg:flex">
            {props.list?.map((item, index) => (
              <div key={index}>
                <GatsbyImage
                  image={getImage(item.paymentLogo)}
                  alt="Illustration"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PaymentGateWay
