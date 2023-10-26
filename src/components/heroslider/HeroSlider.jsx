import React, { useEffect, useRef, useState } from 'react';
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
import axios from 'axios';
function HeroSlider() {

  const [data, setData] = useState([])
  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get("https://cdn.contentful.com/spaces/eiay889h63d6/entries?access_token=_ER0elHI8f-x6bMEay5J_14Ku1T-wa4pXfUcBaoF6Po&content_type=images")
      setData(response?.data?.includes?.Asset)
      console.log(response)
    }
    fetchImages()
  }, [])

  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];
  
  return (
    <div className="hero-slider-container md:h-[32rem] h-[13rem]">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="hero-slider"
      >
        {data.map((slide) => (
          <SwiperSlide className='hero-slider-slide'>
             <img src={slide?.fields?.file?.url} alt={slide?.fields?.title} className=""/>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
  );
}

export default HeroSlider;
