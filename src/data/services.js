
/* =====================================================
   MAVALIU TECHNOLOGY
   PORTAFOLIO OFICIAL DE SERVICIOS
===================================================== */

export const services = [
  {
    id: 1,
    slug: "consultoria-tic",
    titulo: "Consultorías TIC",
    descripcion:
      "Acompañamos a las organizaciones en la evaluación, optimización y fortalecimiento de sus recursos tecnológicos mediante consultoría especializada, auditorías y soporte técnico.",
    resumen:
      "Consultoría, auditorías y acompañamiento tecnológico.",
    icono: "Network",
    ruta: "/soluciones/consultoria-tic",
    destacados: [
      "Consultoría tecnológica",
      "Auditorías de infraestructura",
      "Mantenimiento y outsourcing",
    ],
    capacidades: [
      "Consultoría TI y energía",
      "Auditorías tecnológicas internas y externas",
      "Auditorías de infraestructura TI y energía",
      "Renting de equipos",
      "Outsourcing",
      "Mantenimiento de hardware y software",
      "Auditorías de seguridad informática",
      "Charlas, capacitaciones y cursos de herramientas TI",
    ],
  },
  {
    id: 2,
    slug: "analitica-datos",
    titulo: "Analítica de Datos y Big Data",
    descripcion:
      "Convertimos información en conocimiento mediante herramientas de analítica, inteligencia artificial y tecnologías orientadas al aprovechamiento estratégico de los datos.",
    resumen:
      "Analítica avanzada e inteligencia de datos.",
    icono: "ChartNoAxesCombined",
    ruta: "/soluciones/analitica-datos",
    destacados: [
      "Analytics y Big Data",
      "Machine Learning e IA",
      "IoT y Smart Cities",
    ],
    capacidades: [
      "Analytics",
      "Smart Cities",
      "Internet de las Cosas (IoT)",
      "Machine Learning",
      "Inteligencia Artificial",
    ],
  },
  {
    id: 3,
    slug: "plataformas-web-cloud",
    titulo: "Plataformas Web y Cloud",
    descripcion:
      "Implementamos soluciones web y servicios en la nube para facilitar la operación digital, conectividad y disponibilidad de los recursos tecnológicos de las organizaciones.",
    resumen:
      "Desarrollo web y servicios tecnológicos en la nube.",
    icono: "Cloud",
    ruta: "/soluciones/plataformas-web-cloud",
    destacados: [
      "Desarrollo de páginas web",
      "AWS y Microsoft Azure",
      "Hosting y dominios",
    ],
    capacidades: [
      "Cloud Computing AWS y Azure",
      "Servidores en la nube",
      "Desarrollo de páginas web",
      "Servicios de correo electrónico",
      "Almacenamiento en la nube",
      "Hosting",
      "Dominios",
    ],
  },
  {
    id: 4,
    slug: "infraestructura-ti",
    titulo: "Infraestructura TI",
    descripcion:
      "Diseñamos, suministramos, instalamos y mantenemos infraestructura tecnológica que fortalece la conectividad, las comunicaciones y la operación de las organizaciones.",
    resumen:
      "Infraestructura, redes y conectividad empresarial.",
    icono: "Server",
    ruta: "/soluciones/infraestructura-ti",
    destacados: [
      "Redes LAN, WAN y Wi-Fi",
      "Cableado estructurado",
      "CCTV y centros de cómputo",
    ],
    capacidades: [
      "Diseño, suministro, instalación y mantenimiento de CCTV",
      "Networking LAN, WAN y Wi-Fi",
      "Cableado estructurado",
      "Plantas telefónicas análogas, digitales e IP",
      "Identificación y certificación de puntos de red",
      "Mantenimiento de centros de cómputo y racks",
    ],
  },
  {
    id: 5,
    slug: "seguridad-informatica",
    titulo: "Seguridad Informática",
    descripcion:
      "Ofrecemos soluciones de protección tecnológica orientadas a fortalecer la seguridad de redes, aplicaciones y sistemas de información.",
    resumen:
      "Protección de redes, aplicaciones y sistemas.",
    icono: "ShieldCheck",
    ruta: "/soluciones/seguridad-informatica",
    destacados: [
      "Seguridad perimetral NGFW",
      "WAF y protección DDoS",
      "Antivirus y Sandboxing",
    ],
    capacidades: [
      "NGFW - Seguridad perimetral",
      "Web Application Firewall (WAF)",
      "Protección frente a ataques DDoS",
      "Antivirus",
      "Sandboxing",
    ],
  },
  {
    id: 6,
    slug: "gestion-calidad",
    titulo: "Sistemas de Gestión de Calidad",
    descripcion:
      "Apoyamos el fortalecimiento de los sistemas de gestión mediante auditorías, análisis de riesgos y estrategias de mejoramiento continuo.",
    resumen:
      "Calidad, riesgos y mejoramiento continuo.",
    icono: "ClipboardCheck",
    ruta: "/soluciones/gestion-calidad",
    destacados: [
      "Auditorías internas",
      "Planes de mejoramiento",
      "Sistemas de gestión y MIPG",
    ],
    capacidades: [
      "Auditorías internas",
      "Planes de mejoramiento",
      "Análisis de riesgos",
      "Sistemas de gestión de calidad",
      "Políticas MIPG",
    ],
  },
  {
    id: 7,
    slug: "normativa-gubernamental",
    titulo: "Normativa Gubernamental",
    descripcion:
      "Brindamos acompañamiento en el uso de plataformas y herramientas relacionadas con los procesos de gestión y reporte de información de las entidades públicas.",
    resumen:
      "Acompañamiento en plataformas de gestión estatal.",
    icono: "Landmark",
    ruta: "/soluciones/normativa-gubernamental",
    destacados: [
      "SECOP II y TVEC",
      "SIA Observa y SIA Contraloría",
      "Certificaciones de calidad",
    ],
    capacidades: [
      "SIA Observa",
      "SIA Contraloría",
      "SECOP II",
      "Tienda Virtual del Estado Colombiano (TVEC)",
      "Certificaciones de calidad",
    ],
  },
];

export const obtenerServicioPorSlug = (slug) => {
  return services.find(
    (service) => service.slug === slug
  );
};
