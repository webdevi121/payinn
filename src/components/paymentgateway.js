import React from "react"

const PaymentGateWayLogos = props => {
  return (
    <React.Fragment>
      <div className="mt-20">
        <div className="theme-container">
          <div className="flex items-center justify-center space-x-10 opacity-30">
            <div>
              <img
                src="https://admin.payinn.infusion121.com/wp-content/uploads/2023/03/stripe.png"
                alt=""
                className="h-[60px]"
              />
            </div>
            <div>
              <img
                src="https://admin.payinn.infusion121.com/wp-content/uploads/2023/03/square.png"
                alt=""
                className="h-[60px]"
              />
            </div>
            <div>
              <img
                src="https://admin.payinn.infusion121.com/wp-content/uploads/2023/03/paypal.png"
                alt=""
                className="h-[60px]"
              />
            </div>
            <div>
              <img
                src="https://admin.payinn.infusion121.com/wp-content/uploads/2023/03/checkout.png"
                alt=""
                className="h-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PaymentGateWayLogos
