"use client";

import Link from "next/link";

const Proyecto = ({ proyecto }) => {
  return (
    <div className="p-2">
      <Link href={"/each-project/" + proyecto.link}>
        {/* antes: bg-blue-900/40 */}
        <div className="flex flex-col items-center bg-primary/20 p-8 rounded-lg text-center">
          <h3 className="titulo">{proyecto.nombre}</h3>
          <ul className="flex flex-row gap-8">
            {/* antes: bg-blue-400/30 */}
            {proyecto.herramientas.map((item, index) => (
              <li key={index} className="p-2 bg-primary/10 rounded-full text-xs">
                {item}
              </li>
            ))}
          </ul>

          <p>{proyecto.descripcion}</p>
        </div>
      </Link>
    </div>
  );
};

export default Proyecto;