import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../review.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ReviewCard from "./ReviewCard";

export default function ReviewCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <p>Pra</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Man</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
