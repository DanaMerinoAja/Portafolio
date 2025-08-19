import Herramientas from "../../components/Herramientas";
import Proyecto from "../../components/Proyecto";
import { proyectos } from "../../data/proyectos";

export default function Projects() {
  return (
    <main className="p-20">
      <h1 className="titulo">Mis Proyectos</h1>

      <div className="mt-4 p-8 bg-primary/15">
        <p>
          Aquí están algunos proyectos en los que he trabajado. Algunos los he
          liderado y otros los he desarrollado por mi cuenta, pero en cada uno he
          obtenido y aplicado nuevo conocimiento.
        </p>
      </div>

      <div className="">
        {proyectos.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>

      <Herramientas />
    </main>
  );
}