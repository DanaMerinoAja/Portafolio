"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    /* antes: bg-blue-950 z-top h-50 -> usa z-50 y altura estándar */
    <nav className="flex flex-row justify-between items-center shadow-md bg-card text-[color:inherit] w-full z-1000 h-16">
      <div className="p-10">
        <h1 className="font-bold">
          <Link href="/about">Dana Merino</Link>
        </h1>
      </div>

      <button className="text-2xl sm:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* antes: bg-blue-950; hover:bg-blue-900 */}
      <div
        className={`absolute top-12 right-20 flex-col bg-card sm:flex sm:flex-row sm:static ${
          isOpen ? "flex" : "hidden"
        } no-underline`}
      >
        <Link href="/">
          <div className="hover:bg-muted h-12 px-8 flex items-center">Inicio</div>
        </Link>
        <Link href="/about">
          <div className="hover:bg-muted h-12 px-8 flex items-center">Sobre Mí</div>
        </Link>
        <Link href="/projects">
          <div className="hover:bg-muted h-12 px-8 flex items-center">Proyectos</div>
        </Link>
        <ThemeToggle></ThemeToggle>
      </div>
    </nav>
  );
}