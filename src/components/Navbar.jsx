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
        <div className="hover:bg-blue-900 h-50 p-8 items-center">
          <Link href="/">Inicio</Link>
        </div>
        <div className="hover:bg-blue-900 h-50 p-8">
          <Link href="/about">Sobre Mí</Link>
        </div>
        <div className="hover:bg-blue-900 h-50 p-8">
          <Link href="/projects">Proyectos</Link>
        </div>
        <div className="hover:bg-blue-900 h-50 p-8">
          <Link href="/tecnologias">Tecnologías</Link>
        </div>
      </div>
    </nav>
    
  );
}