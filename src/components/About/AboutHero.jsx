
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ChevronRight,
  CircuitBoard,
} from "lucide-react";

import { about } from "../../data/about";

import "./About.css";

/* =====================================================
   MAVALIU TECHNOLOGY
   HERO INSTITUCIONAL
===================================================== */

export default function AboutHero() {
  return (
    <section className="mavaliu-about-hero">
      <div className="container">
        <nav
          className="mavaliu-about-breadcrumb"
          aria-label="Ruta de navegación"
        >
          <Link to="/">Inicio</Link>
          <ChevronRight size={16} />
          <span aria-current="page">Nosotros</span>
        </nav>

        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="mavaliu-about-hero-content">
              <span className="mavaliu-about-eyebrow">
                <CircuitBoard size={18} />
                {about.etiqueta}
              </span>

              <h1>{about.titulo}</h1>

              <p>{about.introduccion}</p>

              <div className="mavaliu-about-hero-actions">
                <Link
                  to="/#soluciones"
                  className="mavaliu-about-primary-btn"
                >
                  Conoce nuestras soluciones
                  <ArrowUpRight size={19} />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="mavaliu-about-hero-visual">
              <div className="mavaliu-about-orbit orbit-one" />
              <div className="mavaliu-about-orbit orbit-two" />

              <div className="mavaliu-about-logo-card">
                <img
                  src="/images/Logo PNG.png"
                  alt="Logotipo MAVALIU Technology"
                />
              </div>

              <div className="mavaliu-about-visual-caption">
                INNOVACIÓN · TECNOLOGÍA · CONSULTORÍA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
