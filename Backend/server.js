
/* =====================================================
   MAVALIU TECHNOLOGY
   SERVIDOR PRINCIPAL - API REST

   Backend: Node.js + Express
   Hosting: Render
   Correo: Resend API
===================================================== */

import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";

import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

/* =====================================================
   INICIALIZAR EXPRESS
===================================================== */

const app = express();

const PORT = process.env.PORT || 3001;

app.disable("x-powered-by");

/* =====================================================
   CONFIGURACIÓN DE PROXY - RENDER
===================================================== */

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

/* =====================================================
   SEGURIDAD
===================================================== */

app.use(helmet());

/* =====================================================
   CONFIGURACIÓN CORS
===================================================== */

const origenesPermitidos = (
  process.env.FRONTEND_URL || "http://localhost:5173"
)
  .split(",")
  .map((origen) => origen.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {

      // Permitir solicitudes sin encabezado Origin
      // (por ejemplo, pruebas desde herramientas HTTP).
      if (!origin) {
        return callback(null, true);
      }

      if (origenesPermitidos.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error("Origen no autorizado por CORS.")
      );
    },

    methods: ["GET", "POST"],

    allowedHeaders: [
      "Content-Type",
    ],
  })
);

/* =====================================================
   PROCESAMIENTO JSON
===================================================== */

app.use(
  express.json({
    limit: "20kb",
  })
);

/* =====================================================
   RUTA DE SALUD
===================================================== */

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    success: true,
    service: "MAVALIU Technology API",
    status: "online",
  });
});

/* =====================================================
   RUTAS DE CONTACTO
===================================================== */

app.use("/api/contacto", contactRoutes);

/* =====================================================
   RUTA NO ENCONTRADA
===================================================== */

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "La ruta solicitada no existe.",
  });
});

/* =====================================================
   MANEJO GLOBAL DE ERRORES
===================================================== */

app.use(errorHandler);

/* =====================================================
   INICIAR SERVIDOR
===================================================== */

app.listen(PORT, "0.0.0.0", () => {

  console.log(
    `[MAVALIU] API disponible en puerto ${PORT}`
  );

  console.log(
    "[MAVALIU] Proveedor de correo: Resend API"
  );

});
