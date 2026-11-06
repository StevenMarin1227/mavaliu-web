
import { z } from "zod";

/* =====================================================
   MAVALIU TECHNOLOGY
   VALIDACIÓN DEL FORMULARIO
===================================================== */

export const contactSchema = z.object({
  nombre: z.string()
    .trim()
    .min(2, "El nombre es demasiado corto.")
    .max(120),

  organizacion: z.string()
    .trim()
    .max(150)
    .optional()
    .default(""),

  correo: z.string()
    .trim()
    .email("Correo electrónico inválido.")
    .max(254),

  telefono: z.string()
    .trim()
    .max(30)
    .optional()
    .default(""),

  servicio: z.enum([
    "consultoria-tic",
    "analitica-datos",
    "plataformas-web-cloud",
    "infraestructura-ti",
    "seguridad-informatica",
    "gestion-calidad",
    "normativa-gubernamental",
    "otro",
  ]),

  mensaje: z.string()
    .trim()
    .min(10, "El mensaje es demasiado corto.")
    .max(3000),

  aceptaPolitica: z.literal(true),
}).strict();
