
/* =====================================================
   MAVALIU TECHNOLOGY
   PUNTO DE ENTRADA PRINCIPAL
===================================================== */

import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

/* =====================================================
   BOOTSTRAP
===================================================== */

import "bootstrap/dist/css/bootstrap.min.css";

/* =====================================================
   ESTILOS GENERALES
===================================================== */

import "./styles/global.css";
import "./styles/variables.css";

/* =====================================================
   COMPONENTE PRINCIPAL
===================================================== */

import App from "./App.jsx";

/* =====================================================
   INICIALIZACIÓN DE REACT
===================================================== */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
