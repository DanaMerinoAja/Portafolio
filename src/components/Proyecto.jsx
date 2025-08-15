"use client"
import Image from "next/image";
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Proyecto = ({proyecto})=>{
    const [isActive, setIsActive] = useState(false);
    return(
        <div className='p-2'>
            <div className='flex flex-row items-center justify-between h-auto w-full bg-blue-900/40 p-8' onClick={()=>setIsActive(!isActive)} >
                <h3 className={`${isActive ? "titulo":"font-semibold"}`}>{proyecto.nombre}</h3>
                <button className='block place-self-end bg-blue-900/60 p-4 rounded-tr-lg rounded-bl-lg'><IoIosArrowDown/></button>
            </div>
            <div className={`${(isActive) ? "block":"hidden"} p-3 rounded-xs border-solid border-indigo-950`}>
                <ul className="flex flex-row gap-20">
                    {proyecto.herramientas.map((item, index)=>(
                        <li key={index} className=" text-xs">{item}</li>
                    ))}
                </ul>
                <p>{proyecto.descripcion}</p>
            </div>
        </div>
        
    )
}

export default Proyecto;