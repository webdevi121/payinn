import React from "react"

const PaymentGateWay = props => {
  return (
    <React.Fragment>
      <div className="overflow-x-clip bg-theme-light">
        <div className="theme-container">
          <div className="flex items-center justify-center space-x-2 opacity-30 sm:space-x-10 lg:flex">
            {props.list?.map((item, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={item.paymentLogo.publicUrl}
                  alt=""
                  className="m-auto w-full object-contain xl:h-[60px] xl:w-auto"
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
