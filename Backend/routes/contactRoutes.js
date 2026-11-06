
/* =====================================================
   MAVALIU TECHNOLOGY
   RUTAS DE CONTACTO

   RESPONSABILIDADES:
   - Definir los endpoints del formulario
   - Aplicar limitación de solicitudes
   - Conectar las rutas con el controlador
===================================================== */

/* =====================================================
   IMPORTACIONES
===================================================== */

import { Router } from "express";

import { procesarContacto } from "../controllers/contactController.js";

import { contactLimiter } from "../middleware/contactLimiter.js";

/* =====================================================
   INICIALIZAR ROUTER
===================================================== */

const router = Router();

/* =====================================================
   POST /api/contacto

   Recibe las solicitudes enviadas desde
   el formulario web de MAVALIU Technology.
===================================================== */

router.post(
  "/",
  contactLimiter,
  procesarContacto
);

/* =====================================================
   EXPORTAR RUTAS
===================================================== */

export default router;
