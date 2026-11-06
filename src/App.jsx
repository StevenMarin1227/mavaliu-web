
/* =====================================================
   MAVALIU TECHNOLOGY
   CONFIGURACIÓN PRINCIPAL DE LA APLICACIÓN
===================================================== */

import { useEffect } from "react";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

/* =====================================================
   COMPONENTES GLOBALES
===================================================== */

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

/* =====================================================
   PÁGINAS
===================================================== */

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";

/* =====================================================
   ESTILOS GLOBALES
===================================================== */

import "./styles/variables.css";
import "./styles/global.css";

/* =====================================================
   CONTROL DE SCROLL
===================================================== */

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(
        hash.substring(1)
      );

      const scrollToSection = () => {
        const element = document.getElementById(id);

        if (!element) return false;

        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return true;
      };

      if (scrollToSection()) return;

      const timeout = window.setTimeout(
        scrollToSection,
        100
      );

      return () => window.clearTimeout(timeout);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
}

/* =====================================================
   APLICACIÓN PRINCIPAL
===================================================== */

export default function App() {
  return (
    <div className="app-layout">

      <ScrollToTop />

      {/* NAVBAR CORPORATIVO */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <div className="app-content">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/nosotros"
            element={<About />}
          />

          <Route
            path="/contacto"
            element={<Contact />}
          />


          <Route
            path="/soluciones/:slug"
            element={<ServicePage />}
          />

          <Route
            path="/experiencia"
            element={<Experience />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </div>

      <Footer />

    </div>
  );
}
