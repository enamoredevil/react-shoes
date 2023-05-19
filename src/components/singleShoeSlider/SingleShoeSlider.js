import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import "./singleShoeSlider.scss";

const SingleShoeSlider = ({ images, title }) => {
  const slides = images.map((item) => {
    return (
      <SwiperSlide key={item} className="single-shoe-slide">
        <img src={item} alt={title} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        className="single-shoe-slider"
        modules={[Navigation, EffectCoverflow]}
        spaceBetween={75}
        slidesPerView={1}
        effect="coverflow"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <button className="swiper-button-prev"></button>
        {slides}
        <button className="swiper-button-next"></button>
      </Swiper>
    </>
  );
};

export default SingleShoeSlider;
