
/* =====================================================
   MAVALIU TECHNOLOGY
   FOOTER CORPORATIVO
===================================================== */

import { Link } from "react-router-dom";

import {
  Mail,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

import { services } from "../../data/services";

import "./Footer.css";

/* =====================================================
   CONFIGURACIÓN INSTITUCIONAL
===================================================== */

const PORTAFOLIO_DESARROLLADOR =
  "https://portafolio-sm.vercel.app/";

const CORREO_EMPRESA = "gerencia@mavaliu.com";

const navegacion = [
  { nombre: "Inicio", ruta: "/" },
  { nombre: "Nosotros", ruta: "/nosotros" },
  { nombre: "Experiencia", ruta: "/experiencia" },
  { nombre: "Contáctanos", ruta: "/contacto" },
];

/* =====================================================
   COMPONENTE PRINCIPAL
===================================================== */

export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="mavaliu-footer">

      {/* ============================================
          CONTENIDO PRINCIPAL
      ============================================= */}

      <div className="mavaliu-footer-main">
        <div className="container">

          <div className="row g-5">

            {/* INFORMACIÓN CORPORATIVA */}

            <div className="col-lg-4 col-md-6">

              <div className="mavaliu-footer-brand">

                <Link
                  to="/"
                  className="mavaliu-footer-logo"
                  aria-label="MAVALIU Technology - Inicio"
                >
                  <img
                    src="/images/Logo PNG.png"
                    alt="MAVALIU Technology"
                  />
                </Link>

                <p>
                  Soluciones tecnológicas,
                  consultoría especializada,
                  analítica de datos e
                  infraestructura TI para
                  organizaciones públicas
                  y privadas.
                </p>

                <Link
                  to="/nosotros"
                  className="mavaliu-footer-about-link"
                >
                  Conoce nuestra empresa
                  <ArrowUpRight size={17} />
                </Link>

              </div>

            </div>

            {/* NAVEGACIÓN */}

            <div className="col-lg-2 col-md-6">

              <div className="mavaliu-footer-column">

                <h3>Navegación</h3>

                <ul>
                  {navegacion.map((item) => (
                    <li key={item.ruta}>
                      <Link to={item.ruta}>
                        <ChevronRight size={15} />
                        {item.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>

            </div>

            {/* SOLUCIONES */}

            <div className="col-lg-3 col-md-6">

              <div className="mavaliu-footer-column">

                <h3>Nuestras soluciones</h3>

                <ul>
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link to={service.ruta}>
                        <ChevronRight size={15} />
                        {service.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>

            </div>

            {/* CONTACTO */}

            <div className="col-lg-3 col-md-6">

              <div className="mavaliu-footer-column">

                <h3>Contacto corporativo</h3>

                <p className="mavaliu-footer-contact-description">
                  Estamos disponibles para
                  conocer las necesidades
                  tecnológicas de tu organización.
                </p>

                <a
                  href={`mailto:${CORREO_EMPRESA}`}
                  className="mavaliu-footer-email"
                >
                  <Mail size={19} />
                  <span>{CORREO_EMPRESA}</span>
                </a>

                <Link
                  to="/contacto"
                  className="mavaliu-footer-contact-btn"
                >
                  Contáctanos
                  <ArrowUpRight size={17} />
                </Link>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ============================================
          FRANJA INFERIOR
      ============================================= */}

      <div className="mavaliu-footer-bottom">
        <div className="container">

          <div className="mavaliu-footer-bottom-content">

            {/* DERECHOS DE LA EMPRESA */}

            <div className="mavaliu-footer-copyright">
              <span>
                © {anioActual} MAVALIU Technology.
                Todos los derechos reservados.
              </span>
            </div>

            {/* CRÉDITO DEL DESARROLLADOR */}

            <div className="mavaliu-footer-developer">

              <span>Desarrollado por</span>

              <a
                href={PORTAFOLIO_DESARROLLADOR}
                target="_blank"
                rel="noopener noreferrer"
                title="Visitar el portafolio de Steven Marin"
                aria-label="Portafolio de Steven Marin, desarrollador web"
              >
                Steven Marin
                <ExternalLink size={14} />
              </a>

            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}
