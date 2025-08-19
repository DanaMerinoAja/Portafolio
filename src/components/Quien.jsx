import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import foto from "@/assets/foto_dana_2.jpg";

export default function Quien() {
  return (
    /* antes: bg-white text-blue-950 */
    <div className="flex flex-col gap-3 bg-background text-foreground p-5 md:flex-row">
      <div className="flex flex-col sm:flex-row items-center">
        <Image
          src={foto}
          alt="Mi foto"
          width={200}
          height={500}
          priority
          /* antes: 'borde-teal-100' tenía typo; usamos el anillo/borde de la paleta */
          className="border-4 border-ring/30 rounded-2xl"
        />
        <p className="m-10">
          Soy estudiante de últimos ciclos de Ingeniería de Sistemas, con interés en
          <strong> desarrollo de software y el análisis de datos</strong>. Apasionada por{" "}
          <strong>el aprendizaje, la tecnología y la innovación</strong>, con habilidades en
          desarrollo web, bases de datos y modelado de sistemas.{" "}
          <strong>Proactiva, organizada y con gran apertura para trabajar en equipo.</strong>{" "}
          Experiencia en proyectos reales aplicando metodologías ágiles (SCRUM) y herramientas
          de desarrollo moderno.
        </p>
      </div>

      {/* Iconos con la nueva paleta */}
      <div className="flex flex-row justify-center md:flex-col gap-20 justify-items-center">
        <a href="mailto:dsmerinoh@gmail.com" className="text-2xl text-destructive hover:text-destructive/80">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/51986784460" className="text-2xl text-success hover:text-success/80">
          <FaWhatsapp />
        </a>
        <a href="https://linkedin.com/in/dana-sofía-merino-huaripata-ba840b224" className="text-2xl text-accent hover:text-accent/80">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
