
/* =====================================================
   MAVALIU TECHNOLOGY
   BASE DE DATOS DE EXPERIENCIA EMPRESARIAL
===================================================== */

/*
  Registrar únicamente proyectos ejecutados
  o experiencias acreditables de MAVALIU.

  No incluir información confidencial ni
  contratos sin autorización de publicación.
*/

/* =====================================================
   CATEGORÍAS DEL PORTAFOLIO
===================================================== */

export const projectCategories = [
  {
    id: "todos",
    nombre: "Todos",
  },
  {
    id: "consultoria-tic",
    nombre: "Consultorías TIC",
  },
  {
    id: "analitica-datos",
    nombre: "Analítica de Datos",
  },
  {
    id: "plataformas-web-cloud",
    nombre: "Plataformas Web y Cloud",
  },
  {
    id: "infraestructura-ti",
    nombre: "Infraestructura TI",
  },
  {
    id: "seguridad-informatica",
    nombre: "Seguridad Informática",
  },
  {
    id: "gestion-calidad",
    nombre: "Gestión de Calidad",
  },
  {
    id: "normativa-gubernamental",
    nombre: "Normativa Gubernamental",
  },
];

/* =====================================================
   PROYECTOS VERIFICADOS
===================================================== */

export const projects = [];

/*
  MODELO PARA REGISTRAR PROYECTOS:

  {
    id: 1,
    slug: "nombre-del-proyecto",
    titulo: "Nombre del proyecto",
    cliente: "Nombre de la entidad o empresa",
    sector: "Público",
    categoria: "analitica-datos",
    fechaInicio: "2026-01-01",
    fechaFin: "2026-06-30",
    numeroContrato: "Número verificable",
    valor: null,
    descripcion:
      "Descripción general del proyecto.",
    alcance: [
      "Actividad realizada",
      "Servicio implementado",
    ],
    resultados: [
      "Resultado acreditable",
    ],
    tecnologias: [
      "React",
      "Python",
    ],
    imagen: "/images/projects/proyecto.jpg",
    enlace: "",
    destacado: false,
  }
*/

/* =====================================================
   CONSULTAS Y FILTROS
===================================================== */

export const obtenerProyectosPorCategoria = (
  categoria = "todos"
) => {
  if (categoria === "todos") {
    return projects;
  }

  return projects.filter(
    (project) => project.categoria === categoria
  );
};

export const obtenerProyectoPorSlug = (slug) => {
  return projects.find(
    (project) => project.slug === slug
  );
};

export const obtenerProyectosDestacados = () => {
  return projects.filter(
    (project) => project.destacado === true
  );
};
