
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";

import SolutionsSection from "../components/SolutionsSection/SolutionsSection.jsx";

/* =====================================================
   MAVALIU TECHNOLOGY
   PÁGINA PRINCIPAL
===================================================== */

export default function Home() {
  return (
    <main>

      {/* ============================================
          HERO CAROUSEL
      ============================================= */}

      <HeroCarousel />

      {/* ============================================
          PRESENTACIÓN INSTITUCIONAL
      ============================================= */}

      <section className="container py-5">

        <div className="row justify-content-center">

          <div className="col-lg-9 text-center py-4">

            <span
              className="fw-bold text-uppercase"
              style={{
                color: "var(--mavaliu-primary)",
                letterSpacing: "2px",
                fontSize: "0.85rem",
              }}
            >
              Bienvenidos a MAVALIU Technology
            </span>

            <h2
              className="fw-bold mt-3"
              style={{
                color: "var(--mavaliu-dark)",
              }}
            >
              Innovación tecnológica para
              transformar organizaciones
            </h2>

            <p className="text-muted mt-4">
              En MAVALIU Technology acompañamos
              a organizaciones públicas y privadas
              mediante soluciones de tecnología,
              analítica de datos, infraestructura TI,
              seguridad informática, consultoría
              y gestión institucional.
            </p>

          </div>

        </div>

      </section>

      {/* ============================================
          PORTAFOLIO DE SERVICIOS
      ============================================= */}

      <SolutionsSection />

    </main>
  );
}
