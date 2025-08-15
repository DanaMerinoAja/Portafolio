"use client"
import { herramientas } from "@/data/herramientas";
import { useRef } from "react";

export default function Herramientas() {
  return(
    <div className="overflow-x-auto w-full sm:scrollbar-thin mt-10 mb-15 bg-blue-900/30">
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