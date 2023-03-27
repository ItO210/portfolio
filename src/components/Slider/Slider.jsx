
import React from "react";
import Portfolio from "./Slides/Portfolio";
// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";
import portfolio from "../../data/portfolio";
import PortfolioItem from "../PortfolioItem";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css"


// import required modules
import {Keyboard, Navigation, Autoplay} from "swiper";

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
        <div className="flex items-center justify-center h-screen w-full p-8">
            <div className="flex flex-col w-full overflow-hidden items-center justify-center h-screen">
                <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        loop={true}
                        navigation={true}
                        modules={[Keyboard, Navigation, Autoplay]}
                        keyboard={{
                            enabled: true
                          }}
                        autoplay= {{
                            delay: 5000,
                            disableOnInteraction: true
                        }}
                        centeredSlides={true}
                    >
                        <SwiperSlide>{Portfolio}</SwiperSlide>
                        <SwiperSlide>{Portfolio}</SwiperSlide>
                        <SwiperSlide>{Portfolio}</SwiperSlide>
                        <SwiperSlide>{Portfolio}</SwiperSlide>
                        <SwiperSlide>{Portfolio}</SwiperSlide>
                        <SwiperSlide>{Portfolio}</SwiperSlide>
                    </Swiper>
            </div>
        </div>

    );
    }
