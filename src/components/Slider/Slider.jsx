import React from "react";
import Portfolio from "./Slides/Portfolio";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import Project1 from "./Slides/Project1";
import Project2 from "./Slides/Project2";
import Project3 from "./Slides/Project3";
// import required modules
import { Keyboard, Navigation, Autoplay } from "swiper";

export default function Slider() {
  return (
    <div className="flex items-center justify-center h-screen w-full p-8">
      <div className="flex flex-col w-full overflow-hidden items-center justify-center h-screen">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          navigation={true}
          modules={[Keyboard, Navigation, Autoplay]}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          centeredSlides={true}
        >
          <SwiperSlide>{Project1}</SwiperSlide>
          <SwiperSlide>{Project2}</SwiperSlide>
          <SwiperSlide>{Project3}</SwiperSlide>
          <SwiperSlide>{Project1}</SwiperSlide>
          <SwiperSlide>{Project2}</SwiperSlide>
          <SwiperSlide>{Project3}</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
