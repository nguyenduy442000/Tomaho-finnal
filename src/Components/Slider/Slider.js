import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/react";

// import required modules
import { Navigation } from "swiper";
import './slider.scss';
const Slider = () => {
  return (
    <div className='c-slider'>
    <Swiper loop={true} navigation={true} modules={[Navigation]}  className="mySwiper">
    <SwiperSlide><img src="https://cdnb.artstation.com/p/assets/images/images/031/459/013/large/malte-resenberger-loosmann-food-01final.jpg?1603708315" alt='no slide'/></SwiperSlide>
    <SwiperSlide><img src="https://cdna.artstation.com/p/assets/images/images/038/049/194/large/adam-kenyon-pizza001.jpg?1622035861" alt='no slide'/></SwiperSlide>
    <SwiperSlide><img src="https://cdnb.artstation.com/p/assets/images/images/017/156/637/large/thomas-chamberlain-keen-hottupottu.jpg?1554848363" alt='no slide'/></SwiperSlide>
    
  </Swiper>
    </div>
   
  )
}

export default Slider;