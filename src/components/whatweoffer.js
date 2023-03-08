import React from "react"

const WhatWeOffer = props => {
  return (
    <React.Fragment>
      <div className="min-h-[50vh] py-20">
        <div className="theme-container">
          <div className="grid grid-cols-2 items-center gap-10">
            <div className="pr-14">
              <img
                src="https://admin.payinn.infusion121.com/wp-content/uploads/2023/03/whatWeOfferImage.png"
                alt=""
              />
            </div>
            <div className="layout">
              <h2 className="mb-5 text-4xl font-bold">What We Offer</h2>
              <ul className="space-y-3">
                <li>
                  Merchants can have the ability to offer customers PAY BY
                  CRYPTO at your eCommerce checkout
                </li>
                <li>
                  Customers use their existing crypto holdings (BTC, ETH or
                  USDT) to transact.
                </li>
                <li>
                  Instant / Real time approvals, receive funds same day / next
                  day
                </li>
                <li>
                  Wallet agnostic – works with a Hot Wallet from major Crypto
                  Exchanges, without the need for your customers to register
                </li>
                <li>Simple API integration</li>
                <li>
                  In-country funds settled in multiple jurisdictions and settled
                  in these currencies – AUD /USD / BTC / ETH / USDT.
                </li>
                <li>No cost to you, the Merchant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WhatWeOffer
