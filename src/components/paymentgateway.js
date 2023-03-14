import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PaymentGateWay = props => {
  return (
    <React.Fragment>
      <div>
        <div className="theme-container">
          <div className="flex items-center justify-center space-x-10 opacity-30">
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
