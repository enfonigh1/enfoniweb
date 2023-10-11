import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide,  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import img1 from "../assets/images/asantewaa.svg";
import img2 from "../assets/images/financial derrick.svg";
import img3 from "../assets/images/lady.svg";
import img4 from "../assets/images/michael abuah.svg";
import img5 from "../assets/images/greysuit.svg";
import img6 from "../assets/images/franka.jpg";
import img7 from "../assets/images/alhaji.jpg";
import "../style.css";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
// import "swiper/css/lazy";

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-8"
        centeredSlides={true}
      >
        <SwiperSlide>
          <img src={img1} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" className="rounded-2xl" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
