// /app/proyectos/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { proyectos } from '@/data/proyectos';
import { getProjectImages } from '../_images.server';
import ProjectSlide from '@/components/ProjectSlider';

// Pre-render estático de todos los slugs
export function generateStaticParams() {
  return proyectos.map(p => ({ slug: p.link }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = proyectos.find(p => p.link === slug);
  if (!project) return {};
  return {
    title: project.nombre,
    description: project.descripcion,
    openGraph: {
      title: project.nombre,
      description: project.descripcion,
      images: [], // puedes poner una portada si quieres
    },
  };
}

export default function ProyectoPage({ params }) {
  const project = proyectos.find(p => p.link === params.slug);
  if (!project) return notFound();

  const images = getProjectImages(project.link); // rutas públicas /projects/slug/xxx.jpg

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/3">
          <div className="mb-4 aspect-video relative rounded-lg border bg-white">
            <Image src={project.img} alt={project.nombre} fill className="object-contain p-4" />
          </div>

          <h1 className="text-2xl font-semibold mb-2">{project.nombre}</h1>
          <p className="text-gray-700 mb-4">{project.descripcion}</p>

          <div className="mb-4">
            <h3 className="font-medium mb-1">Herramientas</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {project.herramientas.map(h => <li key={h}>{h}</li>)}
            </ul>
          </div>

          {project.key_words?.length > 0 && (
            <div className="mb-4">
              <h3 className="font-medium mb-1">Palabras clave</h3>
              <div className="flex flex-wrap gap-2">
                {project.key_words.map(k => (
                  <span key={k} className="text-xs bg-gray-100 px-2 py-1 rounded">{k}</span>
                ))}
              </div>
            </div>
          )}
        </aside>

        <section className="lg:w-2/3">
          {/* Si ya tienes ProjectSlide, pásale las rutas públicas */}
          {images.length > 0 ? (
            <ProjectSlide images={images} />
          ) : (
            <div className="text-sm text-gray-500 border rounded p-6">
              ¡Aún no hay imágenes para este proyecto :0!
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
