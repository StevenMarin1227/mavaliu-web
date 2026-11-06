
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

import { slides } from "../../data/slides";
import "./HeroCarousel.css";

/* =====================================================
   MAVALIU TECHNOLOGY
   HERO CAROUSEL CORPORATIVO
===================================================== */

const INTERVALO = 6000;

export default function HeroCarousel() {

  /* =====================================================
     ESTADOS
  ===================================================== */

  const [activeIndex, setActiveIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const [reducedMotion, setReducedMotion] = useState(false);

  const [imageErrors, setImageErrors] = useState({});

  const totalSlides = slides.length;

  /* =====================================================
     PREFERENCIAS DE ACCESIBILIDAD
  ===================================================== */

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const actualizarPreferencia = () => {
      setReducedMotion(media.matches);
    };

    actualizarPreferencia();

    media.addEventListener(
      "change",
      actualizarPreferencia
    );

    return () => {
      media.removeEventListener(
        "change",
        actualizarPreferencia
      );
    };
  }, []);

  /* =====================================================
     REPRODUCCIÓN AUTOMÁTICA CADA 6 SEGUNDOS
  ===================================================== */

  useEffect(() => {

    if (
      isPaused ||
      reducedMotion ||
      totalSlides <= 1
    ) {
      return;
    }

    const interval = window.setInterval(() => {

      setActiveIndex((prevIndex) => {
        return (prevIndex + 1) % totalSlides;
      });

    }, INTERVALO);

    return () => {
      window.clearInterval(interval);
    };

  }, [isPaused, reducedMotion, totalSlides]);

  /* =====================================================
     NAVEGACIÓN ENTRE DIAPOSITIVAS
  ===================================================== */

  const cambiarSlide = (index) => {
    if (totalSlides <= 1) return;

    setActiveIndex(
      (index + totalSlides) % totalSlides
    );
  };

  const siguiente = () => {
    cambiarSlide(activeIndex + 1);
  };

  const anterior = () => {
    cambiarSlide(activeIndex - 1);
  };

  /* =====================================================
     PAUSAR Y REANUDAR
  ===================================================== */

  const alternarReproduccion = () => {
    setIsPaused((prev) => !prev);
  };

  /* =====================================================
     MANEJO DE ERRORES DE IMÁGENES
  ===================================================== */

  const registrarErrorImagen = (id, ruta) => {

    console.error(
      `[MAVALIU] Error al cargar imagen: ${ruta}`
    );

    setImageErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  /* =====================================================
     VALIDACIÓN DE DIAPOSITIVAS
  ===================================================== */

  if (totalSlides === 0) {
    return null;
  }

  /* =====================================================
     RENDERIZADO PRINCIPAL
  ===================================================== */

  return (
    <section
      className="mavaliu-hero"
      aria-label="Soluciones tecnológicas MAVALIU"
      aria-roledescription="carrusel"
    >

      {/* ================================================
          CONTENEDOR DE DIAPOSITIVAS
      ================================================= */}

      <div className="mavaliu-hero-slides">

        {slides.map((slide, index) => {

          const isActive = index === activeIndex;

          return (
            <article
              key={slide.id}
              className={`mavaliu-hero-slide ${
                isActive ? "is-active" : ""
              }`}
              aria-hidden={!isActive}
              inert={!isActive}
              aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${totalSlides}`}
            >

              {/* ========================================
                  IMAGEN DEL CARRUSEL
              ========================================= */}

              {!imageErrors[slide.id] ? (

                <img
                  src={slide.imagen}
                  alt={slide.alt}
                  className="mavaliu-hero-image"
                  loading={
                    index === 0 ? "eager" : "lazy"
                  }
                  fetchPriority={
                    index === 0 ? "high" : "auto"
                  }
                  decoding="async"
                  onError={() =>
                    registrarErrorImagen(
                      slide.id,
                      slide.imagen
                    )
                  }
                />

              ) : (

                <div
                  className="mavaliu-hero-image-fallback"
                  role="img"
                  aria-label="Fondo tecnológico corporativo"
                />

              )}

              {/* ========================================
                  DEGRADADO CORPORATIVO
              ========================================= */}

              <div className="mavaliu-hero-overlay" />

              {/* ========================================
                  CONTENIDO DEL SLIDE
              ========================================= */}

              <div className="container mavaliu-hero-container">

                <div className="mavaliu-hero-content">

                  {/* Etiqueta superior */}

                  <span className="mavaliu-hero-eyebrow">

                    <span className="mavaliu-hero-line" />

                    {slide.etiqueta}

                  </span>

                  {/* Título principal */}

                  {index === 0 ? (

                    <h1 className="mavaliu-hero-title">
                      {slide.titulo}
                    </h1>

                  ) : (

                    <h2 className="mavaliu-hero-title">
                      {slide.titulo}
                    </h2>

                  )}

                  {/* Descripción */}

                  <p className="mavaliu-hero-description">
                    {slide.descripcion}
                  </p>

                  {/* ====================================
                      BOTONES COMERCIALES
                  ===================================== */}

                  <div className="mavaliu-hero-actions">

                    <Link
                      to={slide.enlacePrincipal}
                      className="mavaliu-hero-btn-primary"
                      tabIndex={isActive ? 0 : -1}
                    >
                      {slide.botonPrincipal}

                      <ArrowRight size={19} />
                    </Link>

                    <Link
                      to={slide.enlaceSecundario}
                      className="mavaliu-hero-btn-secondary"
                      tabIndex={isActive ? 0 : -1}
                    >
                      {slide.botonSecundario}
                    </Link>

                  </div>

                </div>

              </div>

            </article>
          );
        })}

      </div>

      {/* ================================================
          CONTROLES INFERIORES DEL CARRUSEL
      ================================================= */}

      <div className="mavaliu-hero-bottom">

        <div className="container mavaliu-hero-bottom-inner">

          {/* ============================================
              INDICADORES DE DIAPOSITIVAS
          ============================================= */}

          <div
            className="mavaliu-hero-indicators"
            aria-label="Seleccionar diapositiva"
          >

            {slides.map((slide, index) => (

              <button
                key={slide.id}
                type="button"
                className={`mavaliu-hero-indicator ${
                  index === activeIndex
                    ? "is-active"
                    : ""
                }`}
                onClick={() => cambiarSlide(index)}
                aria-label={`Ir a diapositiva ${index + 1}: ${slide.etiqueta}`}
                aria-current={
                  index === activeIndex
                    ? "true"
                    : undefined
                }
              />

            ))}

          </div>

          {/* ============================================
              NAVEGACIÓN Y REPRODUCCIÓN
          ============================================= */}

          <div className="mavaliu-hero-controls">

            {/* Contador */}

            <span className="mavaliu-hero-counter">

              {String(activeIndex + 1).padStart(2, "0")}

              <span> / </span>

              {String(totalSlides).padStart(2, "0")}

            </span>

            {/* Botón anterior */}

            <button
              type="button"
              className="mavaliu-hero-control"
              onClick={anterior}
              aria-label="Diapositiva anterior"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Botón siguiente */}

            <button
              type="button"
              className="mavaliu-hero-control"
              onClick={siguiente}
              aria-label="Siguiente diapositiva"
            >
              <ChevronRight size={20} />
            </button>

            {/* Botón pausar/reanudar */}

            <button
              type="button"
              className="mavaliu-hero-control"
              onClick={alternarReproduccion}
              aria-label={
                isPaused
                  ? "Reanudar reproducción"
                  : "Pausar reproducción"
              }
              aria-pressed={isPaused}
            >

              {isPaused ? (
                <Play size={17} />
              ) : (
                <Pause size={17} />
              )}

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
