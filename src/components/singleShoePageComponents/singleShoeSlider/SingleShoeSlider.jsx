import React from "react";

import { useSelector } from "react-redux";
import { singleShoeSelector } from "../../../redux/slices/singleShoeSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./singleShoeSlider.scss";

const SingleShoeSlider = () => {
  const { shoe } = useSelector(singleShoeSelector);

  const { images, title } = shoe;

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
        modules={[Navigation, EffectFade, Pagination]}
        spaceBetween={75}
        slidesPerView={1}
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "fraction",
          clickable: true,
        }}
      >
        <button className="swiper-button-prev"></button>
        {slides}
        <button className="swiper-button-next"></button>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
};

export default SingleShoeSlider;
