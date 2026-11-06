
import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
  Network,
  ChartNoAxesCombined,
  Cloud,
  Server,
  ShieldCheck,
  ClipboardCheck,
  Landmark,
} from "lucide-react";

import { services } from "../../data/services";

import "./Navbar.css";

/* =====================================================
   MAVALIU TECHNOLOGY
   NAVBAR CORPORATIVO CON MEGA MENÚ
===================================================== */

/* Mapa de iconos del portafolio */

const iconos = {
  Network,
  ChartNoAxesCombined,
  Cloud,
  Server,
  ShieldCheck,
  ClipboardCheck,
  Landmark,
};

export default function Navbar() {

  /* =====================================================
     ESTADOS
  ===================================================== */

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);

  const solucionesActivas =
    location.pathname.startsWith("/soluciones");

  /* =====================================================
     DETECTAR SCROLL
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     CERRAR MENÚS AL CAMBIAR DE RUTA
  ===================================================== */

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  /* =====================================================
     CERRAR AL HACER CLIC FUERA
  ===================================================== */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }

      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, []);

  /* =====================================================
     CERRAR CON TECLA ESCAPE
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =====================================================
     FUNCIONES DE NAVEGACIÓN
  ===================================================== */

  const cerrarMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const alternarMenu = () => {
    setMenuOpen((prev) => !prev);
    setDropdownOpen(false);
  };

  const alternarSoluciones = () => {
    setDropdownOpen((prev) => !prev);
  };

  /* =====================================================
     RENDERIZADO
  ===================================================== */

  return (
    <header
      ref={navbarRef}
      className={`mavaliu-header ${
        scrolled ? "mavaliu-header-scrolled" : ""
      }`}
    >
      <nav
        className="navbar navbar-expand-lg mavaliu-navbar"
        aria-label="Navegación principal"
      >
        <div className="container">

          {/* ============================================
              LOGOTIPO
          ============================================= */}

          <Link
            to="/"
            className="navbar-brand mavaliu-brand"
            onClick={cerrarMenus}
            aria-label="MAVALIU Technology - Inicio"
          >
            <img
              src="/images/Logo PNG.png"
              alt="MAVALIU Technology"
              className="mavaliu-logo"
            />
          </Link>

          {/* ============================================
              BOTÓN MÓVIL
          ============================================= */}

          <button
            className="mavaliu-toggler d-lg-none"
            type="button"
            onClick={alternarMenu}
            aria-expanded={menuOpen}
            aria-controls="mavaliu-menu"
            aria-label={
              menuOpen ? "Cerrar menú" : "Abrir menú"
            }
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

          {/* ============================================
              NAVEGACIÓN PRINCIPAL
          ============================================= */}

          <div
            id="mavaliu-menu"
            className={`collapse navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto align-items-lg-center mavaliu-nav-list">

              {/* INICIO */}

              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  onClick={cerrarMenus}
                  className={({ isActive }) =>
                    `nav-link mavaliu-nav-link ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Inicio
                </NavLink>
              </li>

              {/* NOSOTROS */}

              <li className="nav-item">
                <NavLink
                  to="/nosotros"
                  onClick={cerrarMenus}
                  className={({ isActive }) =>
                    `nav-link mavaliu-nav-link ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Nosotros
                </NavLink>
              </li>

              {/* ========================================
                  MEGA MENÚ DE SOLUCIONES
              ========================================= */}

              <li
                className="nav-item mavaliu-mega-dropdown"
                ref={dropdownRef}
              >

                <button
                  type="button"
                  className={`nav-link mavaliu-nav-link mavaliu-dropdown-toggle ${
                    solucionesActivas ? "active" : ""
                  }`}
                  onClick={alternarSoluciones}
                  aria-expanded={dropdownOpen}
                  aria-controls="mavaliu-mega-menu"
                >
                  Soluciones

                  <ChevronDown
                    size={16}
                    className={
                      dropdownOpen ? "rotate" : ""
                    }
                  />
                </button>

                {dropdownOpen && (

                  <div
                    id="mavaliu-mega-menu"
                    className="mavaliu-mega-menu"
                  >

                    {/* Encabezado */}

                    <div className="mavaliu-mega-header">

                      <div>
                        <span className="mavaliu-mega-eyebrow">
                          PORTAFOLIO MAVALIU
                        </span>

                        <h3>
                          Nuestras soluciones
                        </h3>

                        <p>
                          Tecnología y consultoría
                          para transformar organizaciones.
                        </p>
                      </div>

                      <span className="mavaliu-mega-count">
                        {String(services.length).padStart(2, "0")}
                        {" "}SERVICIOS
                      </span>

                    </div>

                    {/* Servicios dinámicos */}

                    <div className="mavaliu-mega-grid">

                      {services.map((service) => {

                        const Icono =
                          iconos[service.icono] || Network;

                        return (

                          <Link
                            key={service.id}
                            to={service.ruta}
                            className="mavaliu-mega-item"
                            onClick={cerrarMenus}
                          >

                            <span className="mavaliu-mega-icon">
                              <Icono
                                size={21}
                                strokeWidth={1.8}
                              />
                            </span>

                            <span className="mavaliu-mega-item-content">

                              <strong>
                                {service.titulo}
                              </strong>

                              <small>
                                {service.resumen}
                              </small>

                            </span>

                            <ArrowUpRight
                              size={16}
                              className="mavaliu-mega-arrow"
                            />

                          </Link>

                        );
                      })}

                    </div>

                    {/* Pie del menú */}

                    <div className="mavaliu-mega-footer">

                      <span>
                        Soluciones especializadas
                        para el sector público y privado.
                      </span>

                      <Link
                        to="/contacto"
                        onClick={cerrarMenus}
                      >
                        Solicitar asesoría
                        <ArrowRight size={16} />
                      </Link>

                    </div>

                  </div>

                )}

              </li>

              {/* EXPERIENCIA */}

              <li className="nav-item">
                <NavLink
                  to="/experiencia"
                  onClick={cerrarMenus}
                  className={({ isActive }) =>
                    `nav-link mavaliu-nav-link ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Experiencia
                </NavLink>
              </li>

              {/* CONTACTO */}

              <li className="nav-item mavaliu-contact-item">
                <Link
                  to="/contacto"
                  onClick={cerrarMenus}
                  className="mavaliu-contact-btn"
                >
                  Contáctanos
                  <ArrowUpRight size={17} />
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
