
import { Router } from "express";

import {
  crearSolicitudContacto,
} from "../controllers/contactController.js";

import {
  contactLimiter,
} from "../middleware/contactLimiter.js";

/* =====================================================
   MAVALIU TECHNOLOGY
   RUTAS DEL FORMULARIO
===================================================== */

const router = Router();

router.post(
  "/",
  contactLimiter,
  crearSolicitudContacto
);

export default router;
