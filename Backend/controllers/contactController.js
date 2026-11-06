
import { contactSchema } from "../utils/validateContact.js";

import {
  enviarCorreoContacto,
} from "../services/mailService.js";

/* =====================================================
   MAVALIU TECHNOLOGY
   CONTROLADOR DE CONTACTO
===================================================== */

export async function crearSolicitudContacto(req, res, next) {
  try {
    const validacion = contactSchema.safeParse(
      req.body
    );

    if (!validacion.success) {
      return res.status(400).json({
        success: false,
        message:
          "Verifica los datos ingresados en el formulario.",
        errors: validacion.error.flatten().fieldErrors,
      });
    }

    await enviarCorreoContacto(validacion.data);

    return res.status(200).json({
      success: true,
      message:
        "La solicitud fue procesada y enviada al servidor de correo.",
    });
  } catch (error) {
    next(error);
  }
}
