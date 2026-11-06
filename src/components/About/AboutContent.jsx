
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Building2,
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Users,
  Gem,
  Handshake,
  Layers3,
  Cpu,
  CheckCircle2,
} from "lucide-react";

import { about } from "../../data/about";

/* =====================================================
   MAVALIU TECHNOLOGY
   CONTENIDO INSTITUCIONAL
===================================================== */

const valueIcons = {
  heart: HeartHandshake,
  shield: ShieldCheck,
  users: Users,
  gem: Gem,
};

const proposalIcons = {
  handshake: Handshake,
  layers: Layers3,
  target: Target,
  cpu: Cpu,
};

export default function AboutContent() {
  return (
    <>
      {/* ============================================
          QUIÉNES SOMOS
      ============================================= */}

      <section className="mavaliu-about-intro">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <div className="mavaliu-about-intro-visual">
                <div className="mavaliu-about-intro-icon">
                  <Building2 size={76} strokeWidth={1.3} />
                </div>

                <div className="mavaliu-about-intro-badge">
                  MAVALIU TECHNOLOGY
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <span className="mavaliu-about-section-label">
                {about.quienesSomos.etiqueta}
              </span>

              <h2 className="mavaliu-about-section-title">
                {about.quienesSomos.titulo}
              </h2>

              {about.quienesSomos.parrafos.map(
                (parrafo, index) => (
                  <p
                    className="mavaliu-about-paragraph"
                    key={index}
                  >
                    {parrafo}
                  </p>
                )
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ============================================
          MISIÓN Y VISIÓN
      ============================================= */}

      <section className="mavaliu-about-purpose">
        <div className="container">
          <div className="mavaliu-about-centered-heading">
            <span className="mavaliu-about-section-label">
              DIRECCIÓN ESTRATÉGICA
            </span>

            <h2 className="mavaliu-about-section-title">
              Nuestro propósito empresarial
            </h2>

            <p>
              Los principios que orientan nuestra
              gestión y proyección organizacional.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-lg-6">
              <article className="mavaliu-about-purpose-card">
                <div className="mavaliu-about-purpose-icon">
                  <Target size={30} />
                </div>

                <h3>{about.mision.titulo}</h3>
                <p>{about.mision.descripcion}</p>
              </article>
            </div>

            <div className="col-lg-6">
              <article className="mavaliu-about-purpose-card">
                <div className="mavaliu-about-purpose-icon">
                  <Eye size={30} />
                </div>

                <h3>{about.vision.titulo}</h3>
                <p>{about.vision.descripcion}</p>
              </article>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================
          VALORES CORPORATIVOS
      ============================================= */}

      <section className="mavaliu-about-values">
        <div className="container">
          <div className="mavaliu-about-centered-heading">
            <span className="mavaliu-about-section-label">
              NUESTRA IDENTIDAD
            </span>

            <h2 className="mavaliu-about-section-title">
              Valores que nos representan
            </h2>

            <p>
              Cuatro modelos de valores que expresan
              nuestra cultura y compromiso empresarial.
            </p>
          </div>

          <div className="row g-4">

            {about.valores.map((valor) => {
              const Icono =
                valueIcons[valor.icono] || Gem;

              return (
                <div
                  className="col-md-6 col-xl-3"
                  key={valor.id}
                >
                  <article className="mavaliu-about-value-card">
                    <div className="mavaliu-about-value-icon">
                      <Icono size={27} />
                    </div>

                    <h3>{valor.nombre}</h3>

                    <p>{valor.subtitulo}</p>

                    <ul>
                      {valor.principios.map(
                        (principio) => (
                          <li key={principio}>
                            <CheckCircle2 size={15} />
                            {principio}
                          </li>
                        )
                      )}
                    </ul>
                  </article>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ============================================
          PROPUESTA DE VALOR
      ============================================= */}

      <section className="mavaliu-about-proposal">
        <div className="container">
          <div className="mavaliu-about-centered-heading">
            <span className="mavaliu-about-section-label">
              NUESTRA PROPUESTA DE VALOR
            </span>

            <h2 className="mavaliu-about-section-title">
              ¿Por qué MAVALIU Technology?
            </h2>

            <p>
              Un enfoque que integra tecnología,
              conocimiento y acompañamiento
              para las organizaciones.
            </p>
          </div>

          <div className="row g-4">

            {about.propuestaValor.map((item) => {
              const Icono =
                proposalIcons[item.icono] || Target;

              return (
                <div
                  className="col-md-6 col-xl-3"
                  key={item.titulo}
                >
                  <article className="mavaliu-about-proposal-card">
                    <div className="mavaliu-about-proposal-icon">
                      <Icono size={27} />
                    </div>

                    <h3>{item.titulo}</h3>
                    <p>{item.descripcion}</p>
                  </article>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ============================================
          LLAMADO A LA ACCIÓN
      ============================================= */}

      <section className="mavaliu-about-contact">
        <div className="container">
          <div className="mavaliu-about-contact-box">

            <div>
              <span>CONSTRUYAMOS EL FUTURO DIGITAL</span>

              <h2>
                Transformemos juntos los desafíos
                de tu organización
              </h2>

              <p>
                Conoce cómo nuestras soluciones
                tecnológicas pueden contribuir
                al desarrollo de tus proyectos.
              </p>
            </div>

            <Link
              to="/contacto"
              className="mavaliu-about-contact-btn"
            >
              Contactar a MAVALIU
              <ArrowRight size={19} />
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}
