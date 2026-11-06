
import { Link } from "react-router-dom";

import {
  ChevronRight,
  MessagesSquare,
  ArrowUpRight,
} from "lucide-react";

import "./Contact.css";

/* =====================================================
   MAVALIU TECHNOLOGY
   HERO DE CONTACTO CORPORATIVO
===================================================== */

export default function ContactHero() {
  return (
    <section className="mavaliu-contact-hero">
      <div className="container">

        <nav
          className="mavaliu-contact-breadcrumb"
          aria-label="Ruta de navegación"
        >
          <Link to="/">Inicio</Link>
          <ChevronRight size={16} />
          <span aria-current="page">Contáctanos</span>
        </nav>

        <div className="row align-items-center g-5">

          <div className="col-lg-8">
            <span className="mavaliu-contact-eyebrow">
              <MessagesSquare size={18} />
              ESTAMOS PARA ACOMPAÑARTE
            </span>

            <h1>
              Hablemos de tu próximo
              proyecto tecnológico
            </h1>

            <p>
              En MAVALIU Technology queremos
              conocer las necesidades de tu
              organización y explorar soluciones
              que contribuyan a sus objetivos.
            </p>

            <a
              href="#formulario-contacto"
              className="mavaliu-contact-hero-btn"
            >
              Enviar una solicitud
              <ArrowUpRight size={19} />
            </a>
          </div>

          <div className="col-lg-4">
            <div className="mavaliu-contact-hero-visual">
              <div className="mavaliu-contact-hero-circle">
                <MessagesSquare
                  size={90}
                  strokeWidth={1.2}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
