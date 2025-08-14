"use client"
import Image from "next/image";
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Proyecto = ({proyecto})=>{
    const [isActive, setIsActive] = useState(false);
    return(
        <div className='p-2'>
            <div className='flex flex-row items-center h-auto w-full bg-indigo-900 p-4' onClick={()=>setIsActive(!isActive)} >
                <h3 className={`${isActive ? "titulo":""}`}>{proyecto.nombre}</h3>
                <button className='block place-self-end'><IoIosArrowDown/></button>
            </div>
            <div className={`${(isActive) ? "block":"hidden"} p-3 rounded-xs border-solid border-indigo-950`}>
                <ul className="flex flex-row gap-20">
                    {proyecto.herramientas.map((item, index)=>(
                        <li key={index} className=" text-xs">{item}</li>
                    ))}
                </ul>
                <p>{proyecto.descripcion}</p>
                {/*
                <ul className="flex flex-row gap-20">
                    {proyecto.key_words.map((item, index)=>(
                        <li key={index} className="text-xs">{item}</li>
                    ))}
                </ul>
                 */}
                
            </div>
        </div>
        
    )
}

export default Proyecto;