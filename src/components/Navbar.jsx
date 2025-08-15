"use client";

import Link from "next/link";
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-row justify-between items-center shadow-md bg-blue-950 w-full z-top h-50">
      <div className="p-10">
        <h1 className="text-xl font-bold"><a href="/about">Dana Merino</a></h1>
      </div>

      <button className="text-2xl sm:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`absolute top-50 right-20 flex-col bg-blue-950 sm:flex sm:flex-row sm:top-0 ${isOpen ? "flex" : "hidden"} no-underline`}>
        <Link href="/"><div className="hover:bg-blue-900 h-50 p-8 items-center">
          Inicio
        </div></Link>
        <Link href="/about"><div className="hover:bg-blue-900 h-50 p-8">
          Sobre Mí
        </div></Link>
        <Link href="/projects"><div className="hover:bg-blue-900 h-50 p-8">
          Proyectos
        </div></Link>
        <Link href="/tecnologias"><div className="hover:bg-blue-900 h-50 p-8">
          Tecnologías
        </div></Link>
      </div>
    </nav>
    
  );
}