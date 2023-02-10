
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

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
        <>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >

            <SwiperSlide>{slides[0]}</SwiperSlide>
            <SwiperSlide>{slides[1]}</SwiperSlide>
            <SwiperSlide>{slides[2]}</SwiperSlide>
            <SwiperSlide>{slides[0]}</SwiperSlide>
            <SwiperSlide>{slides[1]}</SwiperSlide>
            <SwiperSlide>{slides[2]}</SwiperSlide>

        </Swiper>
        </>
    );
    }
