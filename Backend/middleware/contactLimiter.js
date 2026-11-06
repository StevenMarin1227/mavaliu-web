
import { rateLimit } from "express-rate-limit";

/* =====================================================
   MAVALIU TECHNOLOGY
   LIMITADOR DE SOLICITUDES DE CONTACTO
===================================================== */

export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  limit: 5,

  standardHeaders: "draft-7",
  legacyHeaders: false,

  message: {
    success: false,
    message:
      "Has realizado demasiadas solicitudes. Inténtalo nuevamente en 15 minutos.",
  },
});
