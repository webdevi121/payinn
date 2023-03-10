import React from "react"
import { Link } from "gatsby"
import Button from "./ui/button"

const CaseStudies = props => {
  return (
    <React.Fragment>
      <div className="relative min-h-[50vh] bg-theme-secondary py-20 text-white">
        <div className="theme-container">
          <div className="flex items-center space-x-10">
            <div className="layout">
              <h2 className="mb-5 text-4xl font-bold text-theme-primary">
                {props.title}
              </h2>
              <div>
                <h3 className="text-2xl font-medium">
                  Utility Company Seeks To Reduce Merchant Acquiring Costs
                </h3>
                <p>
                  A Mid-range utility company with inward card payments of $500m
                  p.a. Prides itself on simple, competitive pricing. They sought
                  to reduce their Merchant Acquiring costs, but in order to do
                  so with their brand promise, do so without surcharging their
                  customers a payment fee.
                </p>
                <p>
                  We arranged a new Acquirer who can route Visa and Mastercard
                  Debit Card transactions via EFTPOS for significant fee
                  savings. The transition to the new Acquirer was smooth and
                  invisible to their customers. The client saved .020% on a
                  $500m for a bottom line benefit of ~$1M .p.a.
                </p>
              </div>
              <div>
                <div className="flex flex-col items-center rounded-lg bg-white/10 p-3">
                  <div className="flex space-x-3">
                    <div className="text-3xl font-bold">29%</div>
                    <div>
                      <svg
                        width="55"
                        height="30"
                        viewBox="0 0 55 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_8_219)">
                          <path
                            d="M47.5906 0.00426574C49.4915 0.00426574 51.3924 0.000111765 53.2934 0.0056504C54.5316 0.00980437 54.9929 0.49305 54.9929 1.77663C54.9956 5.1815 54.9874 8.58776 54.9983 11.9926C55.001 12.6642 54.8527 13.225 54.2105 13.5393C53.522 13.8758 52.945 13.6542 52.4157 13.1654C51.2604 12.0979 50.0821 11.0552 48.9527 9.95996C48.6016 9.61933 48.4193 9.66779 48.0927 9.96965C43.1751 14.5252 38.2425 19.0627 33.3208 23.6127C31.6077 25.1967 30.0918 25.1926 28.3665 23.5905C25.6097 21.0303 22.8365 18.4894 20.0879 15.9209C19.7436 15.5997 19.564 15.5651 19.1953 15.9084C14.5335 20.2369 9.8458 24.5349 5.18264 28.8619C4.256 29.7218 3.26948 30.2577 1.99585 29.8755C1.02839 29.5847 0.299044 28.9962 0.0636409 27.9522C-0.159516 26.9622 0.199712 26.1812 0.935858 25.5027C6.4345 20.4363 11.9168 15.3504 17.41 10.2784C18.8905 8.91177 20.458 8.94223 21.9371 10.313C24.7796 12.9467 27.6344 15.5678 30.4715 18.2097C30.7804 18.4964 30.96 18.5158 31.2825 18.2181C35.581 14.2358 39.889 10.2646 44.2092 6.30723C44.5576 5.98737 44.5181 5.83506 44.1943 5.54844C43.054 4.53348 41.9437 3.48253 40.8088 2.46203C40.3135 2.01617 39.972 1.51077 40.2468 0.833676C40.5135 0.177348 41.0878 -0.00127289 41.7504 0.00149642C43.699 0.00980437 45.6448 0.00426574 47.5906 0.00426574Z"
                            fill="#45CDF5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_8_219">
                            <rect width="55" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm">Revenue From New Channels</div>
                </div>
              </div>
            </div>
            <div className="space-y-5 text-center">
              <div className="h-[500px] w-[500px] opacity-50">
                <img
                  src="https://admin.payinn.infusion121.com/wp-content/uploads/2023/03/hand-token.png"
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CaseStudies
