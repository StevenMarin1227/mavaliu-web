
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  CalendarDays,
  BriefcaseBusiness,
  FolderOpen,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

import {
  projects,
  projectCategories,
} from "../../data/projects";

/* =====================================================
   TARJETA DE PROYECTO
===================================================== */

function ProjectCard({ project }) {
  const categoria = projectCategories.find(
    (item) => item.id === project.categoria
  );

  return (
    <article className="mavaliu-exp-project-card">

      {/* IMAGEN DEL PROYECTO */}

      <div className="mavaliu-exp-project-image">

        {project.imagen ? (
          <img
            src={project.imagen}
            alt={`Imagen del proyecto ${project.titulo}`}
            loading="lazy"
          />
        ) : (
          <div className="mavaliu-exp-project-placeholder">
            <BriefcaseBusiness size={50} />
          </div>
        )}

        <span className="mavaliu-exp-project-category">
          {categoria?.nombre || "Tecnología"}
        </span>

      </div>

      {/* CONTENIDO */}

      <div className="mavaliu-exp-project-body">

        <div className="mavaliu-exp-project-meta">
          <span>
            <Building2 size={15} />
            {project.cliente}
          </span>

          {project.fechaInicio && (
            <span>
              <CalendarDays size={15} />
              {project.fechaInicio.substring(0, 4)}
            </span>
          )}
        </div>

        <h3>{project.titulo}</h3>

        <p>{project.descripcion}</p>

        {/* ALCANCE DEL PROYECTO */}

        {project.alcance?.length > 0 && (
          <ul className="mavaliu-exp-project-scope">

            {project.alcance.slice(0, 3).map(
              (item, index) => (
                <li key={index}>
                  <CheckCircle2 size={16} />
                  {item}
                </li>
              )
            )}

          </ul>
        )}

        {/* ENLACE A EVIDENCIA PÚBLICA */}

        {project.enlace && (
          <a
            href={project.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="mavaliu-exp-project-link"
          >
            Ver referencia del proyecto
            <ExternalLink size={17} />
          </a>
        )}

      </div>

    </article>
  );
}

/* =====================================================
   LISTADO Y FILTROS DE PROYECTOS
===================================================== */

export default function ExperienceProjects() {
  const [categoriaActiva, setCategoriaActiva] =
    useState("todos");

  const proyectosFiltrados = useMemo(() => {
    if (categoriaActiva === "todos") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.categoria === categoriaActiva
    );
  }, [categoriaActiva]);

  return (
    <>
      {/* ============================================
          INTRODUCCIÓN A LA EXPERIENCIA
      ============================================= */}

      <section className="mavaliu-exp-intro">
        <div className="container">

          <div className="mavaliu-exp-intro-content">

            <span className="mavaliu-exp-section-label">
              NUESTRA TRAYECTORIA
            </span>

            <h2>
              Soluciones que conectan
              tecnología y necesidades reales
            </h2>

            <p>
              MAVALIU Technology dispone de un
              portafolio especializado en
              consultoría TIC, analítica de datos,
              plataformas digitales, infraestructura,
              seguridad informática y gestión
              organizacional.
            </p>

            <p>
              En esta sección reuniremos
              experiencias empresariales
              verificadas, presentando sus
              alcances, características y
              resultados cuando exista
              información autorizada para
              publicación.
            </p>

          </div>

        </div>
      </section>

      {/* ============================================
          PORTAFOLIO DE PROYECTOS
      ============================================= */}

      <section
        className="mavaliu-exp-projects"
        id="proyectos"
      >
        <div className="container">

          <div className="mavaliu-exp-section-heading">

            <span className="mavaliu-exp-section-label">
              PORTAFOLIO DE EXPERIENCIA
            </span>

            <h2>Proyectos y experiencias</h2>

            <p>
              Explora las experiencias registradas
              según nuestras líneas de servicios.
            </p>

          </div>

          {/* FILTROS */}

          <div
            className="mavaliu-exp-filters"
            role="group"
            aria-label="Filtrar proyectos por servicio"
          >

            {projectCategories.map((categoria) => (

              <button
                key={categoria.id}
                type="button"
                className={`mavaliu-exp-filter ${
                  categoriaActiva === categoria.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setCategoriaActiva(categoria.id)
                }
                aria-pressed={
                  categoriaActiva === categoria.id
                }
              >
                {categoria.nombre}
              </button>

            ))}

          </div>

          {/* RESULTADOS */}

          {proyectosFiltrados.length > 0 ? (

            <div className="row g-4">

              {proyectosFiltrados.map(
                (project) => (

                  <div
                    className="col-md-6 col-xl-4"
                    key={project.id}
                  >
                    <ProjectCard project={project} />
                  </div>

                )
              )}

            </div>

          ) : (

            <div className="mavaliu-exp-empty">

              <div className="mavaliu-exp-empty-icon">
                <FolderOpen size={42} />
              </div>

              <h3>
                {projects.length === 0
                  ? "Portafolio de proyectos en preparación"
                  : "No hay proyectos publicados en esta categoría"}
              </h3>

              <p>
                {projects.length === 0
                  ? "Estamos organizando la información verificable de nuestra experiencia empresarial para presentarla en este espacio."
                  : "Puedes explorar otras categorías para conocer las experiencias disponibles."}
              </p>

              {categoriaActiva !== "todos" && (
                <button
                  type="button"
                  className="mavaliu-exp-reset"
                  onClick={() =>
                    setCategoriaActiva("todos")
                  }
                >
                  Ver todas las categorías
                  <ArrowRight size={17} />
                </button>
              )}

            </div>

          )}

        </div>
      </section>

      {/* ============================================
          CONTACTO COMERCIAL
      ============================================= */}

      <section className="mavaliu-exp-contact">
        <div className="container">

          <div className="mavaliu-exp-contact-box">

            <div>
              <span>
                TU PRÓXIMO PROYECTO COMIENZA AQUÍ
              </span>

              <h2>
                Construyamos soluciones
                para tu organización
              </h2>

              <p>
                Conoce nuestras capacidades
                y conversemos sobre las
                necesidades tecnológicas
                de tu proyecto.
              </p>
            </div>

            <Link
              to="/contacto"
              className="mavaliu-exp-contact-btn"
            >
              Solicitar asesoría
              <ArrowUpRight size={19} />
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}
