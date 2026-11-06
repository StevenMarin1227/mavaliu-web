
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Network,
  ChartNoAxesCombined,
  Cloud,
  Server,
  ShieldCheck,
  ClipboardCheck,
  Landmark,
} from "lucide-react";

import { services } from "../../data/services";

import "./SolutionsSection.css";

/* =====================================================
   MAPA DE ICONOS
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

/* =====================================================
   TARJETA DE SERVICIO
===================================================== */

function ServiceCard({ service, index }) {
  const Icono = iconos[service.icono] || Network;

  return (
    <article className="mavaliu-service-card">

      {/* Encabezado de la tarjeta */}
      <div className="mavaliu-service-card-header">

        <div className="mavaliu-service-icon">
          <Icono size={29} strokeWidth={1.8} />
        </div>

        <span className="mavaliu-service-number">
          {String(index + 1).padStart(2, "0")}
        </span>

      </div>

      {/* Título */}
      <h3 className="mavaliu-service-title">
        {service.titulo}
      </h3>

      {/* Descripción */}
      <p className="mavaliu-service-description">
        {service.descripcion}
      </p>

      {/* Capacidades principales */}
      <ul className="mavaliu-service-features">

        {service.destacados.map((destacado) => (
          <li key={destacado}>

            <Check size={16} />

            <span>{destacado}</span>

          </li>
        ))}

      </ul>

      {/* Enlace al servicio */}
      <div className="mavaliu-service-card-footer">

        <Link
          to={service.ruta}
          className="mavaliu-service-link"
          aria-label={`Conocer más sobre ${service.titulo}`}
        >
          Conocer servicio
          <ArrowUpRight size={18} />
        </Link>

      </div>

    </article>
  );
}

/* =====================================================
   SECCIÓN PRINCIPAL DE SOLUCIONES
===================================================== */

export default function SolutionsSection() {
  return (
    <section
      className="mavaliu-solutions-section"
      id="soluciones"
      aria-labelledby="mavaliu-solutions-title"
    >

      <div className="container">

        {/* ============================================
            ENCABEZADO DE SECCIÓN
        ============================================= */}

        <div className="mavaliu-solutions-heading">

          <span className="mavaliu-solutions-eyebrow">
            <span className="mavaliu-solutions-line" />
            NUESTRO PORTAFOLIO
          </span>

          <h2
            id="mavaliu-solutions-title"
            className="mavaliu-solutions-title"
          >
            Soluciones tecnológicas que
            generan valor
          </h2>

          <p className="mavaliu-solutions-description">
            En MAVALIU Technology integramos
            conocimiento, tecnología y consultoría
            especializada para acompañar la
            transformación de organizaciones
            públicas y privadas.
          </p>

        </div>

        {/* ============================================
            CUADRÍCULA DE SERVICIOS
        ============================================= */}

        <div className="mavaliu-solutions-grid">

          {services.map((service, index) => (

            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />

          ))}

        </div>

        {/* ============================================
            LLAMADO A LA ACCIÓN
        ============================================= */}

        <div className="mavaliu-solutions-cta">

          <div className="mavaliu-solutions-cta-content">

            <span className="mavaliu-solutions-cta-label">
              ¿TIENES UN PROYECTO EN MENTE?
            </span>

            <h3>
              Construyamos juntos tu próxima
              solución tecnológica
            </h3>

            <p>
              Cuéntanos las necesidades de tu
              organización y exploremos cómo
              MAVALIU puede acompañarte.
            </p>

          </div>

          <Link
            to="/contacto"
            className="mavaliu-solutions-cta-button"
          >
            Hablemos de tu proyecto
            <ArrowRight size={19} />
          </Link>

        </div>

      </div>

    </section>
  );
}
