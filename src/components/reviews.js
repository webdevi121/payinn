import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { UserCircleIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import "swiper/css";
import "swiper/css/pagination";

const Reviews = (props) => {
  return (
    <React.Fragment>
      <div className="sir-container">
        <div className="custom-controller z-30 sm:flex justify-end mb-10 space-x-3 text-white hidden">
          <button className="swiper-button-prev">
            <ChevronLeftIcon className="currentColor stroke-1 inline-block h-8 w-8" />
          </button>
          <button className="swiper-button-next">
            <ChevronRightIcon className="currentColor stroke-1 inline-block h-8 w-8" />
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
              <div className="space-y-5 rounded-2xl text-black bg-sir-lightGray p-7 text-left">
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
  );
};

export default Reviews;
