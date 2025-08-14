"use client"
import { herramientas } from "@/data/herramientas";
import { useRef } from "react";

export default function Herramientas() {
    const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    slider.style.cursor = "grabbing";
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    const mouseMove = (e) => {
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const mouseUp = () => {
      slider.style.cursor = "grab";
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };
    return(
        <div ref={scrollRef} onMouseDown={handleMouseDown} className="overflow-x-auto w-full hide-scrollbar scrollbar-thin">
          <ul className="flex flex-row gap-40">
            {herramientas.map((herramienta, index) => (
              <li key={index} className="w-150 p-10 items-center text-center hover:bg-indigo-600 rounded-full">
                <a href={herramienta.href} className="no-underline">
                {herramienta.logo}
                  <p className="no-underline">{herramienta.nombre}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
    )
}