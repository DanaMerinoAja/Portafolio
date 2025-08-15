import foto from '@/assets/foto_dana_2.jpg';
import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Quien(){
    return (
        <div className="flex flex-col gap-3 bg-white text-blue-950 p-5 md:flex-row">
            <div className='flex flex-col sm:flex-row items-center'>
              <Image
                src={foto}
                alt="Mi foto"
                width={200}
                height={500}
                priority
                className='border-4 borde-teal-100 rounded-2xl'
              />
              <p className="m-10">Soy estudiante de últimos ciclos de Ingeniería de Sistemas, con interés en 
                <strong> desarrollo de software y el análisis de datos</strong>. Apasionada por <strong>
                  el aprendizaje, la tecnología y la innovación</strong>, con habilidades en desarrollo web, bases de datos y modelado de sistemas. <strong>Proactiva, organizada y con gran apertura para trabajar en equipo.</strong> Experiencia en proyectos reales aplicando metodologías ágiles (SCRUM) y herramientas de desarrollo moderno.</p>
            </div>
            <div className="flex flex-row justify-center md:flex-col gap-20 justify-items-center">
              <a href="mailto:dsmerinoh@gmail.com" className="text-2xl text-red-500 hover:text-red-700">
                <FaEnvelope />
              </a>
              <a href="https://wa.me/51986784460" className="text-2xl text-green-500 hover:text-green-700">
                <FaWhatsapp />
              </a>
              <a href="https://linkedin.com/in/dana-sofía-merino-huaripata-ba840b224" className="text-2xl text-blue-500 hover:text-blue-700">
                <FaLinkedin />
              </a>
            </div>
          </div>
    )
}