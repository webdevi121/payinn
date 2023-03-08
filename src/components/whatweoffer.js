import React from "react"

const WhatWeOffer = props => {
  return (
    <React.Fragment>
      <div className="min-h-[50vh] py-20">
        <div className="theme-container">
          <div className="grid grid-cols-2 items-center">
            <div>
              <img
                src="https://admin.payinn.infusion121.com/wp-content/uploads/2023/03/whatWeOfferImage.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="mb-5 text-4xl font-bold">What We Offer</h2>
              <ul className="space-y-3">
                <li className="flex space-x-3">
                  <svg viewBox="0 0 26 27" width="26" height="27">
                    <g>
                      <path
                        fill="var(--primary-color)"
                        d="M11,16.5l-4-3.5l-1,1.1l4.5,4c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2L21,8L20,7L11,16.5z"
                      />
                      <path
                        fill="var(--primary-color)"
                        d="M23,0H3C1.3,0,0,1.3,0,3v21c0,1.7,1.3,3,3,3h20c1.7,0,3-1.3,3-3V3C26,1.3,24.7,0,23,0z M24.5,24,c0,0.8-0.7,1.5-1.5,1.5H3c-0.8,0-1.5-0.7-1.5-1.5V3c0-0.8,0.7-1.5,1.5-1.5h20c0.8,0,1.5,0.7,1.5,1.5V24z"
                      />
                    </g>
                  </svg>
                  <span>
                    Merchants can have the ability to offer customers PAY BY
                    CRYPTO at your eCommerce checkout
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WhatWeOffer
