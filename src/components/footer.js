import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      wpMenu(locations: { eq: PRIMARY }) {
        menuItems {
          nodes {
            label
            uri
            id
          }
        }
      }
      wp {
        acfOptionsGlobalOptions {
          acfOptions {
            footerAddress
            shortDescription
            footerEmail
          }
        }
      }
      file {
        ctime(formatString: "Y")
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const options = data.wp.acfOptionsGlobalOptions.acfOptions
  const currentDate = data.file.ctime
  const siteName = data.site.siteMetadata.title

  return (
    <React.Fragment>
      <footer>
        <div className="bg-theme-secondary py-20 text-sm text-white">
          <div className="theme-container">
            <div className="grid grid-cols-3 space-x-7 border-t border-white/10 py-10">
              <div>
                <div className="mb-5">
                  <Link to={`/`}>
                    <svg
                      width="153"
                      height="63"
                      viewBox="0 0 153 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M56.8963 42V20.1818H65.5043C67.1591 20.1818 68.5689 20.4979 69.7337 21.13C70.8984 21.755 71.7862 22.625 72.397 23.7401C73.0149 24.848 73.3239 26.1264 73.3239 27.5753C73.3239 29.0242 73.0114 30.3026 72.3864 31.4105C71.7614 32.5185 70.8558 33.3814 69.6697 33.9993C68.4908 34.6172 67.0632 34.9261 65.3871 34.9261H59.9006V31.2294H64.6413C65.5291 31.2294 66.2606 31.0767 66.8359 30.7713C67.4183 30.4588 67.8516 30.0291 68.1356 29.4823C68.4268 28.9283 68.5724 28.2926 68.5724 27.5753C68.5724 26.8509 68.4268 26.2188 68.1356 25.679C67.8516 25.1321 67.4183 24.7095 66.8359 24.4112C66.2535 24.1058 65.5149 23.9531 64.62 23.9531H61.5092V42H56.8963Z"
                        fill="#06B2E5"
                      />
                      <path
                        d="M80.4616 42.309C79.4176 42.309 78.4872 42.1278 77.6704 41.7656C76.8537 41.3963 76.2074 40.853 75.7315 40.1357C75.2628 39.4112 75.0284 38.5092 75.0284 37.4297C75.0284 36.5206 75.1953 35.7571 75.5291 35.1392C75.8629 34.5213 76.3175 34.0242 76.8927 33.6477C77.468 33.2713 78.1214 32.9872 78.853 32.7955C79.5916 32.6037 80.3658 32.4688 81.1754 32.3906C82.1271 32.2912 82.8942 32.1989 83.4766 32.1136C84.0589 32.0213 84.4815 31.8864 84.7443 31.7088C85.0071 31.5313 85.1385 31.2685 85.1385 30.9205V30.8565C85.1385 30.1818 84.9254 29.6598 84.4993 29.2905C84.0803 28.9212 83.4837 28.7365 82.7095 28.7365C81.8927 28.7365 81.2429 28.9176 80.7599 29.2798C80.277 29.6349 79.9574 30.0824 79.8011 30.6222L75.6037 30.2813C75.8168 29.2869 76.2358 28.4276 76.8608 27.7031C77.4858 26.9716 78.2919 26.4105 79.2791 26.0199C80.2734 25.6222 81.424 25.4233 82.7308 25.4233C83.6399 25.4233 84.5099 25.5298 85.3409 25.7429C86.179 25.956 86.9212 26.2862 87.5675 26.7337C88.2209 27.1811 88.7358 27.7564 89.1122 28.4595C89.4886 29.1555 89.6768 29.9901 89.6768 30.9631V42H85.3729V39.7308H85.245C84.9822 40.2422 84.6307 40.6932 84.1903 41.0838C83.75 41.4673 83.2209 41.7692 82.603 41.9894C81.9851 42.2024 81.2713 42.309 80.4616 42.309ZM81.7614 39.1769C82.429 39.1769 83.0185 39.0455 83.5298 38.7827C84.0412 38.5128 84.4425 38.1506 84.7337 37.696C85.0249 37.2415 85.1705 36.7266 85.1705 36.1513V34.4148C85.0284 34.5071 84.8331 34.5923 84.5845 34.6705C84.343 34.7415 84.0696 34.809 83.7642 34.8729C83.4588 34.9297 83.1534 34.983 82.848 35.0327C82.5426 35.0753 82.2656 35.1144 82.017 35.1499C81.4844 35.228 81.0192 35.3523 80.6214 35.5227C80.2237 35.6932 79.9148 35.924 79.6946 36.2152C79.4744 36.4993 79.3643 36.8544 79.3643 37.2805C79.3643 37.8984 79.5881 38.3707 80.0355 38.6974C80.4901 39.0171 81.0653 39.1769 81.7614 39.1769Z"
                        fill="#06B2E5"
                      />
                      <path
                        d="M95.4137 48.1364C94.8384 48.1364 94.2986 48.0902 93.7944 47.9979C93.2972 47.9126 92.8853 47.8026 92.5586 47.6676L93.5813 44.2798C94.114 44.4432 94.5934 44.532 95.0195 44.5462C95.4528 44.5604 95.8256 44.4609 96.1381 44.2479C96.4577 44.0348 96.717 43.6726 96.9158 43.1612L97.1822 42.4688L91.3121 25.6364H96.0849L99.4727 37.6534H99.6431L103.063 25.6364H107.868L101.507 43.7685C101.202 44.6492 100.787 45.4162 100.261 46.0696C99.7425 46.7301 99.0856 47.2379 98.2901 47.593C97.4947 47.9553 96.5359 48.1364 95.4137 48.1364Z"
                        fill="#06B2E5"
                      />
                      <path
                        d="M114.888 20.1818V42H110.275V20.1818H114.888Z"
                        fill="#06B2E5"
                      />
                      <path
                        d="M123.137 32.5398V42H118.598V25.6364H122.923V28.5234H123.115C123.477 27.5717 124.085 26.8189 124.937 26.2649C125.789 25.7038 126.823 25.4233 128.037 25.4233C129.173 25.4233 130.164 25.6719 131.009 26.169C131.855 26.6662 132.512 27.3764 132.98 28.2997C133.449 29.2159 133.683 30.3097 133.683 31.581V42H129.145V32.3906C129.152 31.3892 128.896 30.608 128.378 30.0469C127.86 29.4787 127.146 29.1946 126.237 29.1946C125.626 29.1946 125.086 29.326 124.617 29.5888C124.156 29.8516 123.793 30.2351 123.531 30.7394C123.275 31.2365 123.144 31.8367 123.137 32.5398Z"
                        fill="#06B2E5"
                      />
                      <path
                        d="M141.799 32.5398V42H137.26V25.6364H141.586V28.5234H141.777C142.14 27.5717 142.747 26.8189 143.599 26.2649C144.451 25.7038 145.485 25.4233 146.699 25.4233C147.836 25.4233 148.826 25.6719 149.672 26.169C150.517 26.6662 151.174 27.3764 151.642 28.2997C152.111 29.2159 152.346 30.3097 152.346 31.581V42H147.807V32.3906C147.814 31.3892 147.559 30.608 147.04 30.0469C146.522 29.4787 145.808 29.1946 144.899 29.1946C144.288 29.1946 143.748 29.326 143.279 29.5888C142.818 29.8516 142.456 30.2351 142.193 30.7394C141.937 31.2365 141.806 31.8367 141.799 32.5398Z"
                        fill="#06B2E5"
                      />
                      <path
                        d="M39.483 13.4556C39.4842 12.9714 39.3111 12.8748 38.8683 12.9054C36.1574 13.0925 33.9115 14.1881 32.1875 16.2644C31.8041 16.7254 31.5605 16.7132 31.0943 16.3892C28.3611 14.4877 25.3138 13.3419 21.9982 13.0154C16.6295 12.4847 11.7222 13.7283 7.46294 17.0825C2.71639 20.8194 0.246653 25.7595 0.0735111 31.7194C-0.0724223 36.6864 0.0438298 41.6596 0.042593 46.6315V61.4824C0.042593 63.1552 0.0425931 63.1552 1.71093 62.8348C6.35236 61.9434 9.40707 58.3129 9.4318 53.6504C9.44046 52.2038 9.43057 50.7572 9.43551 49.3107C9.43799 48.5892 9.51714 48.5488 10.1689 48.9084C11.669 49.735 13.2347 50.4222 14.9117 50.7829C23.2312 52.5682 30.0715 50.1373 35.3845 43.5904C37.8802 40.515 39.2727 36.887 39.4051 33.0107C39.6277 26.4993 39.4657 19.9744 39.483 13.4556ZM19.7374 42.2282C14.0633 42.2319 9.42686 37.6023 9.44541 31.8906C9.46148 26.6436 13.6898 22.0397 19.7535 22.0458C25.8345 22.0519 30.0282 26.712 30.0356 31.92C30.0443 37.5069 25.3299 42.2233 19.7374 42.2282Z"
                        fill="#FDFEFE"
                      />
                      <path
                        d="M39.5287 4.80189C39.2801 6.59696 38.5356 8.09734 36.8648 8.99365C33.6048 10.7423 29.7462 8.52532 29.6374 4.85569C29.881 3.85177 30.0381 2.83073 30.7158 1.9711C31.6767 0.754412 32.9716 0.0341811 34.4557 0.00116542C36.0028 -0.0342958 37.3212 0.742184 38.3241 1.96376C39.0081 2.79771 39.1391 3.85055 39.5287 4.80189Z"
                        fill="#06B2E5"
                      />
                      <path
                        d="M39.483 13.4556C39.4842 12.9714 39.3111 12.8748 38.8683 12.9054C36.1574 13.0925 33.9115 14.1881 32.1875 16.2644C31.8041 16.7254 31.5605 16.7132 31.0943 16.3892C28.3611 14.4877 25.3138 13.3419 21.9982 13.0154C16.6295 12.4847 11.7222 13.7283 7.46294 17.0825C2.71639 20.8194 0.246653 25.7595 0.0735111 31.7194C-0.0724223 36.6864 0.0438298 41.6596 0.042593 46.6315V61.4824C0.042593 63.1552 0.0425931 63.1552 1.71093 62.8348C6.35236 61.9434 9.40707 58.3129 9.4318 53.6504C9.44046 52.2038 9.43057 50.7572 9.43551 49.3107C9.43799 48.5892 9.51714 48.5488 10.1689 48.9084C11.669 49.735 13.2347 50.4222 14.9117 50.7829C23.2312 52.5682 30.0715 50.1373 35.3845 43.5904C37.8802 40.515 39.2727 36.887 39.4051 33.0107C39.6277 26.4993 39.4657 19.9744 39.483 13.4556ZM19.7374 42.2282C14.0633 42.2319 9.42686 37.6023 9.44541 31.8906C9.46148 26.6436 13.6898 22.0397 19.7535 22.0458C25.8345 22.0519 30.0282 26.712 30.0356 31.92C30.0443 37.5069 25.3299 42.2233 19.7374 42.2282Z"
                        fill="#06B2E5"
                      />
                    </svg>
                  </Link>
                </div>
                <div>{options.shortDescription}</div>
              </div>
              <div>
                <h2 className="mb-3 text-lg font-bold">Contact Us</h2>
                <div className="space-y-3">
                  <div>{options.footerAddress}</div>
                  <div>
                    <a href={`mailto:${options.footerEmail}`}>
                      {options.footerEmail}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-3 text-lg font-bold">Links</h2>
                <div className="flex flex-col space-y-2">
                  {data.wpMenu.menuItems.nodes.map(item => (
                    <Link key={item.id} to={item.uri}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center border-t border-white/10 py-5">
              <div>
                Copyright ©{currentDate} {siteName}. All rights reserved.
              </div>
              <div className="ml-auto">
                <Link to="https://infusion121.com" target="_blank">
                  <img
                    src="https://admin.payinn.infusion121.com/wp-content/uploads/2023/03/i121-logo.png"
                    alt=""
                    width="130"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
