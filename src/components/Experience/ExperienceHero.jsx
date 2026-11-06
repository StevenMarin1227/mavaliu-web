
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ChevronRight,
  BriefcaseBusiness,
  ShieldCheck,
  Network,
  ChartNoAxesCombined,
} from "lucide-react";

import "./Experience.css";

/* =====================================================
   MAVALIU TECHNOLOGY
   HERO DE EXPERIENCIA EMPRESARIAL
===================================================== */

export default function ExperienceHero() {
  return (
    <section className="mavaliu-exp-hero">
      <div className="container">

        {/* RUTA DE NAVEGACIÓN */}

        <nav
          className="mavaliu-exp-breadcrumb"
          aria-label="Ruta de navegación"
        >
          <Link to="/">Inicio</Link>

          <ChevronRight size={16} />

          <span aria-current="page">
            Experiencia
          </span>
        </nav>

        <div className="row align-items-center g-5">

          {/* CONTENIDO PRINCIPAL */}

          <div className="col-lg-7">

            <span className="mavaliu-exp-eyebrow">
              <BriefcaseBusiness size={18} />
              EXPERIENCIA EMPRESARIAL
            </span>

            <h1>
              Experiencia que respalda
              soluciones tecnológicas
            </h1>

            <p>
              Conoce nuestro espacio de experiencia,
              donde presentamos proyectos,
              implementaciones y servicios
              tecnológicos desarrollados para
              organizaciones públicas y privadas.
            </p>

            <div className="mavaliu-exp-hero-actions">

              <a
                href="#proyectos"
                className="mavaliu-exp-primary-btn"
              >
                Explorar proyectos
                <ArrowUpRight size={19} />
              </a>

              <Link
                to="/#soluciones"
                className="mavaliu-exp-secondary-btn"
              >
                Nuestras soluciones
              </Link>

            </div>

          </div>

          {/* ELEMENTO VISUAL TECNOLÓGICO */}

          <div className="col-lg-5">

            <div className="mavaliu-exp-visual">

              <div className="mavaliu-exp-visual-main">
                <BriefcaseBusiness
                  size={80}
                  strokeWidth={1.3}
                />
              </div>

              <div className="mavaliu-exp-floating exp-floating-one">
                <Network size={24} />
              </div>

              <div className="mavaliu-exp-floating exp-floating-two">
                <ChartNoAxesCombined size={24} />
              </div>

              <div className="mavaliu-exp-floating exp-floating-three">
                <ShieldCheck size={24} />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
