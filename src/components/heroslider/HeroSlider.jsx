import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';


import slide1  from "../../assets/slides/slide1.png";
import  slide2  from "../../assets/slides/slide2.png";
import  slide3  from "../../assets/slides/slide3.png";
import  slide4 from "../../assets/slides/slide4.png";
import slide5  from "../../assets/slides/slide5.png";
import  slide6  from "../../assets/slides/slide6.png";
import  slide7 from "../../assets/slides/slide7.png";
function HeroSlider() {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];
  
  return (
    <>
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide style={{width: '100%'}}>
            <img src={slide} alt="" className=""/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HeroSlider;
