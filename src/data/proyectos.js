import amaro from '@/assets/proyectos/amaro-header.png';
import cuentasLogo from '@/assets/proyectos/cuentas_logo.png';
import heartLogo from '@/assets/proyectos/heart_alarm_logo_full.png';
import marketing from '@/assets/proyectos/marketing_herramientas_digitales.png';

export const proyectos = [
    {
        "id":0,
        "nombre":"HeartAlarm",
        "descripcion":"App para monitoreo de frecuencia cardiaca",
        "herramientas":["Android Studio", "Java", "Python", "Arduino IDE", "C++"],
        "key_words":["Servidor", "Tiempo real"],
        "categoria":"desarrollo",
        "img":heartLogo
    },
    {
        "id":1,
        "nombre":"Mi Mercadito - Cuentas",
        "descripcion":"Una app android para gestionar cuentas de crédito de los clientes de una bodega.v",
        "herramientas":["Android Studio", "Java", "Firebase", "Python"],
        "key_words":["Servidor", "Tiempo real"],
        "categoria":"desarrollo",
        "img":cuentasLogo
    },
    {
        "id":2,
        "nombre":"Programa de emprendimiento con herramientas digitales",
        "descripcion":"Programa de capacitaciones paraUn programa de capacitación dirigido a niños de 4to grado de primaria en el que se enseñó los fundamentos del marketing y el uso de herramientas de diseño digital (Canva).",
        "herramientas":["PMBOK", "Project", "Firebase", "Python"],
        "key_words":["Servidor", "Tiempo real"],
        "categoria":"gestion",
        "img":marketing
    },
    {
        "id":3,
        "nombre":"Soy Gaia - Sistema de recompensas para clientes",
        "descripcion":"Se agregó un módulo al sitio web de Soy Gaia para otorgar recompensas por compras a los clientes.",
        "herramientas":["Angular", "Quarkus", "Postgree", "PGadmin"],
        "key_words":["Base de datos", "Sitio web", "Microservicios"],
        "categoria":"desarrollo",
        "img":marketing
    },
    {
        "id":4,
        "nombre":"Amaro Café - Web",
        "descripcion":"Se diseñó un sitio web de prueba para la cafetería Amaro Café.",
        "herramientas":["Firebase", "React.js"],
        "key_words":["Sitio web", "Firebase Hosting"],
        "categoria":"desarrollo",
        "img":amaro
    }
]