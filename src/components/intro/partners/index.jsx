"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import "./styles.sass";
import "swiper/css";

const PartnersSlider = () => {
  const PartnersSlideImages = [
    { id: 1, img: "/after.png", alt: "after" },
    { id: 2, img: "/base.png", alt: "base" },
    { id: 3, img: "/maze.png", alt: "maze" },
    { id: 4, img: "/after.png", alt: "after" },
    { id: 5, img: "/base.png", alt: "base" },
    { id: 6, img: "/maze.png", alt: "maze" },
  ];
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 100 }}
        freeMode={true}
        modules={[Autoplay]}
        speed={1200}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          420: {
            slidesPerView: 3,
          },
          577: {
            slidesPerView: 3,
          },
          911: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >
        {PartnersSlideImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='imagesBlock'>
              <img
                src={item.img}
                alt={item.alt}
                className='img'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersSlider;
