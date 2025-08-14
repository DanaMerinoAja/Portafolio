"use client"
import { herramientas } from "@/data/herramientas";
import { useRef } from "react";

export default function Herramientas() {
  return(
    <div className="overflow-x-auto w-full hide-scrollbar md:scrollbar-thin md:scroll-smooth">
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