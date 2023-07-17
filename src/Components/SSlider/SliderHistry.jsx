import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import profile from "../../assets/profile.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "../..//App.css"

// import required modules
import { Pagination } from 'swiper';
import History from '../History';

export default function SliderHistory() {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <History title="sharif_khal..." img={profile}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="sharif_khal..." img={profile}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="sharif_khal..." img={profile}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="sharif_khal..." img={profile}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="sharif_khal..." img={profile}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="sharif_khal..." img={profile}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="sharif_khal..." img={profile}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="sharif_khal..." img={profile}></History>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
