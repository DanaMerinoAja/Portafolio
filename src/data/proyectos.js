import amaro from '@/assets/proyectos/amaro-header.png';
import cuentasLogo from '@/assets/proyectos/cuentas_logo.png';
import heartLogo from '@/assets/proyectos/heart_alarm_logo_full.png';
import marketing from '@/assets/proyectos/marketing_herramientas_digitales.png';
import glasard from '@/assets/proyectos/logo-glasard-actualizado.png';
import buses from '@/assets/proyectos/buses.png'
import andina from '@/assets/proyectos/andina_sac.png'
import innova from '@/assets/proyectos/innov_logo.png'
import soygaia from '@/assets/proyectos/soy-gaialogo.png'

export const proyectos = [
    {
        "id":0,
        "nombre":"HeartAlarm",
        "descripcion":"App para monitoreo de frecuencia cardiaca",
        "herramientas":["Android Studio", "Java", "Python", "Arduino IDE", "C++"],
        "key_words":["Servidor", "Tiempo real"],
        "categoria":"desarrollo",
        "img":heartLogo,
        "link":"heartalarm"
    },
    {
        "id":1,
        "nombre":"BusFlow",
        "descripcion":"Aún en desarrollo, este proyecto pretende implementar una solución informativa para los usuarios del transporte público de Cajamarca basada en OneBusAway.",
        "herramientas":["Firebase", "Android Studio", "JavaScript"],
        "key_words":["App móvil", "Firebase", "OneBusAway", "OBA"],
        "categoria":"desarrollo",
        "img":buses,
        "link":"busflow"
    },
    {
        "id":2,
        "nombre":"Soy Gaia - Sistema de recompensas para clientes",
        "descripcion":"Se agregó un módulo al sitio web de Soy Gaia para otorgar recompensas por compras a los clientes y un panel de administración.",
        "herramientas":["Angular", "Quarkus", "Postgree", "PGadmin"],
        "key_words":["Base de datos", "Sitio web", "Microservicios", "Servicios"],
        "categoria":"desarrollo",
        "img":soygaia,
        "link":"soygaia"
    },
    {
        "id":3,
        "nombre":"Glasard Perú - Pedidos",
        "descripcion":"Implementación de una app en React Native para la gestión de entregas y pedidos. Aún en desarrollo: conversión de audio → texto → registro en base de datos.",
        "herramientas":["Firebase", "React Native"],
        "key_words":["App móvil", "Firebase Hosting", "Firebase Firestore"],
        "categoria":"desarrollo",
        "img":glasard,
        "link":"glasard-pedidos"
    },
    {
        "id":4,
        "nombre":"Mi Mercadito - Cuentas",
        "descripcion":"Una app android para gestionar cuentas de crédito de los clientes de una bodega.",
        "herramientas":["Android Studio", "Java"],
        "key_words":["Servidor", "Tiempo real"],
        "categoria":"desarrollo",
        "img":cuentasLogo,
        "link":"mi-mercadito-cuentas"
    },
    {
        "id":5,
        "nombre":"Programa de emprendimiento con herramientas digitales",
        "descripcion":"Un programa de capacitación dirigido a niños de 4to grado de primaria en el que se enseñó los fundamentos del marketing y el uso de herramientas de diseño digital (Canva).",
        "herramientas":["PMBOK", "Project", "Canva", "Marketing"],
        "key_words":["Servidor", "Tiempo real"],
        "categoria":"gestion",
        "img":marketing,
        "link":"emprendimiento"
    },
    {
        "id":6,
        "nombre":"Universal Andina - Web",
        "descripcion":"Se diseñó un sitio web para la empresa Universal Andina SAC.",
        "herramientas":["Astro"],
        "key_words":["Sitio web"],
        "categoria":"desarrollo",
        "img":andina,
        "link":"universal-andina"
    },
    {
        "id":7,
        "nombre":"Amaro Café - Web",
        "descripcion":"Se diseñó un sitio web de prueba para la cafetería Amaro Café.",
        "herramientas":["Firebase", "React.js"],
        "key_words":["Sitio web", "Firebase Hosting"],
        "categoria":"desarrollo",
        "img":amaro,
        "link":"amaro-cafe"
    },
    {
        "id":8,
        "nombre":"Innova Foods - Web",
        "descripcion":"Se diseñó un sitio web de para la empresa InnovaFoods en Wix.",
        "herramientas":["Wix"],
        "key_words":["Sitio web", "Wix"],
        "categoria":"desarrollo",
        "img":innova,
        "link":"innova-foods"
    }
]