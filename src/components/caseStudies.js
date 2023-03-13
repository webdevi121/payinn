import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

const CaseStudies = props => {
  return (
    <React.Fragment>
      <div className="relative min-h-[50vh] bg-theme-secondary py-20 text-white">
        <div className="theme-container">
          <div className="">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                el: ".swiper-pagination",
                type: "bullets",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                320: {
                  slidesPerView: "auto",
                  spaceBetween: 15,
                  navigation: false,
                },
                768: {
                  slidesPerView: 1,
                  pagination: false,
                },
                1024: {
                  slidesPerView: 1,
                  pagination: false,
                },
              }}
            >
              {props.list?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex space-x-20">
                    <div className="layout">
                      <h2 className="mb-10 text-4xl font-bold text-theme-primary">
                        {item.caseStudiesTitle}
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.caseStudiesDescription,
                        }}
                      />
                      <div className="mt-12">
                        <div className="flex space-x-5">
                          {item.graphRepeater?.map((item, index) => (
                            <div
                              key={index}
                              className="flex w-full flex-col items-center rounded-lg bg-white/10 p-3"
                            >
                              <div className="flex space-x-3">
                                <div className="text-3xl font-bold">
                                  {item.graphValue}
                                </div>
                                <div>
                                  <GatsbyImage
                                    image={getImage(item.imageGraph)}
                                    alt="Illustration"
                                  />
                                </div>
                              </div>
                              <div className="text-sm">{item.smallText}</div>
                            </div>
                          ))}
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
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CaseStudies
