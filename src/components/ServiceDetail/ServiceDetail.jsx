
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Network,
  ChartNoAxesCombined,
  Cloud,
  Server,
  ShieldCheck,
  ClipboardCheck,
  Landmark,
} from "lucide-react";

import "./ServiceDetail.css";

/* =====================================================
   MAVALIU TECHNOLOGY
   DETALLE CORPORATIVO DE SERVICIOS
===================================================== */

const iconos = {
  Network,
  ChartNoAxesCombined,
  Cloud,
  Server,
  ShieldCheck,
  ClipboardCheck,
  Landmark,
};

export default function ServiceDetail({ service }) {
  const Icono = iconos[service.icono] || Network;

  return (
    <main className="mavaliu-service-page">

      {/* ============================================
          HERO CORPORATIVO
      ============================================= */}

      <section className="mavaliu-detail-hero">
        <div className="container">

          {/* Breadcrumb */}

          <nav
            className="mavaliu-detail-breadcrumb"
            aria-label="Ruta de navegación"
          >
            <Link to="/">Inicio</Link>

            <ChevronRight size={15} />

            <Link to="/#soluciones">
              Soluciones
            </Link>

            <ChevronRight size={15} />

            <span aria-current="page">
              {service.titulo}
            </span>
          </nav>

          <div className="row align-items-center g-5">

            <div className="col-lg-8">

              <span className="mavaliu-detail-eyebrow">
                SOLUCIONES MAVALIU TECHNOLOGY
              </span>

              <h1 className="mavaliu-detail-title">
                {service.titulo}
              </h1>

              <p className="mavaliu-detail-description">
                {service.descripcion}
              </p>

              <div className="mavaliu-detail-actions">

                <Link
                  to="/contacto"
                  className="mavaliu-detail-btn-primary"
                >
                  Solicitar asesoría
                  <ArrowUpRight size={19} />
                </Link>

                <Link
                  to="/#soluciones"
                  className="mavaliu-detail-btn-secondary"
                >
                  Explorar soluciones
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            <div className="col-lg-4">

              <div className="mavaliu-detail-visual">
                <div className="mavaliu-detail-visual-ring">

                  <Icono
                    size={92}
                    strokeWidth={1.2}
                  />

                </div>

                <span>
                  MAVALIU
                  <strong> TECHNOLOGY</strong>
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================
          PRESENTACIÓN DEL SERVICIO
      ============================================= */}

      <section className="mavaliu-detail-overview">
        <div className="container">

          <div className="row g-5 align-items-start">

            <div className="col-lg-5">

              <span className="mavaliu-detail-section-label">
                NUESTRO ENFOQUE
              </span>

              <h2>
                Tecnología y conocimiento
                al servicio de tu organización
              </h2>

              <p>
                En MAVALIU Technology desarrollamos
                soluciones orientadas a las
                necesidades de nuestros clientes,
                integrando experiencia, innovación
                y acompañamiento especializado.
              </p>

              <p>
                Nuestra propuesta busca fortalecer
                las capacidades organizacionales
                mediante herramientas y servicios
                tecnológicos que aporten valor
                a los procesos institucionales
                y empresariales.
              </p>

            </div>

            <div className="col-lg-7">

              <div className="mavaliu-detail-capabilities">

                <div className="mavaliu-detail-capabilities-header">

                  <div className="mavaliu-detail-capabilities-icon">
                    <Icono size={28} />
                  </div>

                  <div>
                    <span>PORTAFOLIO ESPECIALIZADO</span>
                    <h3>
                      Capacidades del servicio
                    </h3>
                  </div>

                </div>

                <div className="mavaliu-detail-capabilities-grid">

                  {service.capacidades.map(
                    (capacidad, index) => (

                      <div
                        key={`${service.id}-${index}`}
                        className="mavaliu-detail-capability"
                      >
                        <CheckCircle2 size={19} />
                        <span>{capacidad}</span>
                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================
          SERVICIOS DESTACADOS
      ============================================= */}

      <section className="mavaliu-detail-highlights">
        <div className="container">

          <div className="mavaliu-detail-highlights-heading">

            <span className="mavaliu-detail-section-label">
              CAPACIDADES PRINCIPALES
            </span>

            <h2>
              ¿Cómo podemos acompañarte?
            </h2>

            <p>
              Conoce algunas de las capacidades
              que hacen parte de esta línea
              de servicios.
            </p>

          </div>

          <div className="row g-4">

            {service.destacados.map(
              (destacado, index) => (

                <div
                  className="col-md-4"
                  key={destacado}
                >

                  <article className="mavaliu-detail-highlight-card">

                    <span className="mavaliu-detail-highlight-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="mavaliu-detail-highlight-icon">
                      <CheckCircle2 size={27} />
                    </div>

                    <h3>{destacado}</h3>

                  </article>

                </div>

              )
            )}

          </div>

        </div>
      </section>

      {/* ============================================
          LLAMADO A LA ACCIÓN COMERCIAL
      ============================================= */}

      <section className="mavaliu-detail-contact">
        <div className="container">

          <div className="mavaliu-detail-contact-box">

            <div>

              <span>
                CONSTRUYAMOS SOLUCIONES
              </span>

              <h2>
                ¿Tu organización necesita
                este servicio?
              </h2>

              <p>
                Nuestro equipo puede conocer
                tus necesidades y explorar
                alternativas tecnológicas
                para tu proyecto.
              </p>

            </div>

            <Link
              to="/contacto"
              className="mavaliu-detail-contact-btn"
            >
              Contactar a MAVALIU
              <ArrowRight size={19} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
