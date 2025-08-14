import Herramientas from "../../components/Herramientas";
import Proyecto from "../../components/Proyecto";
import { proyectos } from "../../data/proyectos";

export default function Projects() {
  
    return (
      <main className="p-20">
        <h1 className="titulo">Mis Proyectos</h1>
        <Herramientas></Herramientas>
        <div>
          <p className="mt-4">Aquí están algunos proyectos en los que he trabajado, tanto durante la universidad como fuera de ella.</p>
          <div>
            {proyectos.map((proyecto)=>(
                <Proyecto key={proyecto.id} proyecto={proyecto}/>
            ))}
          </div>
        </div>
      </main>
    );
  }
  