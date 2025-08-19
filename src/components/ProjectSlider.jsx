"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectSlide({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt={`slide-${i}`} className="w-full h-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
