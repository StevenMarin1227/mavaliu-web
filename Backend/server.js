
/* =====================================================
   MAVALIU TECHNOLOGY
   SERVIDOR PRINCIPAL API
===================================================== */

import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";

import contactRoutes from "./routes/contactRoutes.js";

import {
  errorHandler,
} from "./middleware/errorHandler.js";

import {
  verificarSMTP,
} from "./config/mail.js";

/* =====================================================
   CONFIGURACIÓN
===================================================== */

const app = express();

const PORT = Number(process.env.PORT || 3001);

const origenesPermitidos = (
  process.env.FRONTEND_URL || "http://localhost:5173"
)
  .split(",")
  .map((origen) => origen.trim())
  .filter(Boolean);

/* =====================================================
   SEGURIDAD
===================================================== */

app.disable("x-powered-by");

app.use(helmet());

app.use(
  cors({
    origin(origin, callback) {
      if (
        !origin ||
        origenesPermitidos.includes(origin)
      ) {
        return callback(null, true);
      }

      return callback(
        new Error("Origen no autorizado por CORS.")
      );
    },

    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
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
   HEALTH CHECK
===================================================== */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "MAVALIU Technology API",
    status: "online",
  });
});

/* =====================================================
   RUTAS
===================================================== */

app.use("/api/contacto", contactRoutes);

/* =====================================================
   RUTA NO ENCONTRADA
===================================================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada.",
  });
});

/* =====================================================
   MANEJO DE ERRORES
===================================================== */

app.use(errorHandler);

/* =====================================================
   INICIO DEL SERVIDOR
===================================================== */

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `[MAVALIU] API disponible en puerto ${PORT}`
  );

  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASSWORD
  ) {
    verificarSMTP().catch((error) => {
      console.error(
        "[MAVALIU] Error de conexión SMTP:",
        error.message
      );
    });
  } else {
    console.warn(
      "[MAVALIU] Configuración SMTP incompleta."
    );
  }
});
