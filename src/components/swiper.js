import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

const Swiper = props => {
  return (
    <React.Fragment>
      <div className="sir-container">
        <div className="custom-controller z-30 mb-10 hidden justify-end space-x-3 text-white sm:flex">
          <button className="swiper-button-prev">
            <ChevronLeftIcon className="currentColor inline-block h-8 w-8 stroke-1" />
          </button>
          <button className="swiper-button-next">
            <ChevronRightIcon className="currentColor inline-block h-8 w-8 stroke-1" />
          </button>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
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
              slidesPerView: 2,
              pagination: false,
            },
            1024: {
              slidesPerView: 3,
              pagination: false,
            },
          }}
        >
          {props.list.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-sir-lightGray space-y-5 rounded-2xl p-7 text-left text-black">
                <div className="flex items-center space-x-3">
                  <UserCircleIcon className="h-12 w-12 text-gray-300" />
                  <div className="font-bold ">{item.reviewName}</div>
                </div>
                <p>{item.reviewMessage}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </React.Fragment>
  )
}

export default Swiper
