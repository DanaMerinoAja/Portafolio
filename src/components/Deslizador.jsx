"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { proyectos } from "@/data/proyectos";

export default function Deslizador() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="relative z-0"
      >
        {proyectos.map((imageInfo, index) => (
          <SwiperSlide
            key={index}
            /* antes: bg-white md:min-h-400 (clase inválida) */
            className="bg-background md:min-h-[400px]"
          >
            <Link href="/projects">
              <Image
                src={imageInfo.img}
                alt={`Slide ${index}`}
                width={300}
                height={300}
                className="block m-auto"
              />
              <div className="absolute bottom-0 h-10 w-full bg-primary/80 text-primary-foreground p-5 pb-25">
                <h3 className="font-bold">{imageInfo.nombre}</h3>
                <p>{imageInfo.descripcion}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}