// /app/proyectos/[slug]/_images.server.ts
import fs from 'node:fs';
import path from 'node:path';

export function getProjectImages(slug) {
  const dir = path.join(process.cwd(), 'public', 'projects', slug);
  console.log("Dirección: ", dir);

  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
   console.log("Dirección2: ", dir);
  // filtra solo imágenes básicas
  const allow = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);
  return files
    .filter(f => allow.has(path.extname(f).toLowerCase()))
    .sort() // para orden ascendente 01,02,03...
    .map(f => path.posix.join('/projects', slug, f));
}
