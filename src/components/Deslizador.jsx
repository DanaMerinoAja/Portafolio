"use client"; // Importante para Next.js 13+

import cuentasLogo from '@/assets/proyectos/cuentas_logo.png';
import heartLogo from '@/assets/proyectos/heart_alarm_logo_full.png';
import marketing from '@/assets/proyectos/marketing_herramientas_digitales.png';
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  {
    src: heartLogo, 
    title: "HeartAlarm", 
    desc: "App para monitoreo de frecuencia cardiaca"
  }, 
  {
    src: marketing, 
    title: "Programa de Emprendimiento con Herramientas Digitales", 
    desc: "Un programa de capacitación dirigido a niños de 4to grado de primaria en el que se enseñó los fundamentos del marketing y el uso de herramientas de diseño digital (Canva)."
  }, 
  {
    src: cuentasLogo,
    title: "Mi Mercadito - Cuentas",
    desc: "Una app android para gestionar cuentas de crédito de los clientes de una bodega."
  }
];

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
        loop={true}
        className="relative z-0"
      >
        {images.map((imageInfo, index) => (
          <SwiperSlide key={index} className='bg-white md:min-h-400'>
            <Image
                src={imageInfo.src}
                alt={`Slide ${index}`}
                width={300}
                height={300}
                className='block m-auto'
              />
            <div className="absolute bottom-0 h-min w-full bg-blue-900/70 text-white p-10 pb-30">
              <h3 className="font-bold">{imageInfo.title}</h3>
              <p >{imageInfo.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}