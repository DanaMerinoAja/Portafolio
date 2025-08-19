'use client'

import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";

export function ThemeToggle(){

    const [isDark, setIsDark] = useState(false);
    return (
        <button
        onClick={() => {document.documentElement.classList.toggle('dark'); setIsDark(!isDark)}}
        className="px-3 py-2 rounded bg-primary text-primary-foreground"
        >
            {isDark ? <MdDarkMode/> : <CiLight/>}
        </button>
    );
};

export default ThemeToggle;