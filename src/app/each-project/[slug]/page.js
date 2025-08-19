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

export default async function ProyectoPage({ params }) {
  const { slug } = await params
  const project = proyectos.find(p => p.link === slug)
  if (!project) return notFound()

  const images = getProjectImages(project.link); // rutas públicas /projects/slug/xxx.jpg

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
    <div className="flex flex-col lg:flex-row gap-8">
      <aside className="lg:w-1/3">
        <div className="mb-4 aspect-video relative rounded-lg border border-border bg-card">
          <Image src={project.img} alt={project.nombre} fill className="object-contain p-4" />
        </div>

        <h1 className="text-2xl font-semibold mb-2 text-foreground">{project.nombre}</h1>
        <p className="mb-4 text-muted-foreground">{project.descripcion}</p>

        <div className="mb-4">
          <h3 className="font-medium mb-1 text-foreground">Herramientas</h3>
          <ul className="list-disc pl-5 text-sm text-muted-foreground">
            {project.herramientas.map(h => <li key={h}>{h}</li>)}
          </ul>
        </div>

        {project.key_words?.length > 0 && (
          <div className="mb-4">
            <h3 className="font-medium mb-1 text-foreground">Palabras clave</h3>
            <div className="flex flex-wrap gap-2">
              {project.key_words.map(k => (
                <span key={k} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                  {k}
                </span>
              ))}
            </div>
          </div>
        )}
      </aside>

      <section className="lg:w-2/3">
        {images.length > 0 ? (
          <ProjectSlide images={images} />
        ) : (
          <div className="text-sm text-muted-foreground border border-border rounded p-6">
            ¡Aún no hay imágenes para este proyecto :0!
          </div>
        )}
      </section>
    </div>
  </main>

  );
}
