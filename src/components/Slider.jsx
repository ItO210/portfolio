
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css"


// import required modules
import {Navigation, Autoplay} from "swiper";

export default function Slider() {

    const slides = portfolio.map(project => (
        <PortfolioItem
        imgUrl={project.imgUrl}
        title={project.title}
        stack={project.stack}
        link={project.link}
        />
    ));

    return (
        <div className="flex h-screen align-center justify-center">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    navigation=  {true}
                    modules={[Navigation, Autoplay]}
                    autoplay= {
                    {delay: 5000,
                    disableOnInteraction: true}
                    }
                    centeredSlides={true}
                    className="swiper"
                >

                    <SwiperSlide className="flex items-center justify-center">{slides[0]}</SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">{slides[1]}</SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">{slides[2]}</SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">{slides[0]}</SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">{slides[1]}</SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">{slides[2]}</SwiperSlide>

                </Swiper>
        </div>
    );
    }
