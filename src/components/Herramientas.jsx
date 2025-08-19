"use client";

import { herramientas } from "@/data/herramientas";
import Link from "next/link";

export default function Herramientas() {
  return (
    /* antes: bg-blue-900/30 */
    <div className="overflow-x-auto w-full scrollbar-thin mt-10 mb-15 bg-primary/10">
      <ul className="flex flex-row">
        {herramientas.map((herramienta, index) => (
          <Link key={index} href={herramienta.href}>
            {/* antes: hover:bg-indigo-600 */}
            <li className="flex flex-col p-10 items-center text-center rounded-full transition-colors hover:bg-primary hover:text-primary-foreground text-6xl">
              {herramienta.logo}
              <p>{herramienta.nombre}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}