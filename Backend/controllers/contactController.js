
/* =====================================================
   MAVALIU TECHNOLOGY
   CONTROLADOR DE CONTACTO

   RESPONSABILIDADES:
   - Recibir solicitudes del formulario web
   - Validar información mediante Zod
   - Enviar notificaciones utilizando Resend API
   - Gestionar respuestas y errores
===================================================== */

/* =====================================================
   IMPORTACIONES
===================================================== */

import { contactSchema } from "../utils/validateContact.js";

import { enviarCorreoContacto } from "../services/mailService.js";

/* =====================================================
   PROCESAR SOLICITUD DE CONTACTO
===================================================== */

export async function procesarContacto(req, res, next) {

  try {

    /* ===============================================
       1. VALIDAR LOS DATOS RECIBIDOS
    =============================================== */

    const validacion = contactSchema.safeParse(
      req.body
    );

    /* ===============================================
       2. GESTIONAR ERRORES DE VALIDACIÓN
    =============================================== */

    if (!validacion.success) {

      const errores = {};

      validacion.error.issues.forEach((issue) => {

        const campo =
          issue.path.join(".") || "general";

        if (!errores[campo]) {
          errores[campo] = [];
        }

        errores[campo].push(issue.message);

      });

      return res.status(400).json({
        success: false,
        message:
          "Los datos del formulario no son válidos.",
        errors: errores,
      });

    }

    /* ===============================================
       3. OBTENER INFORMACIÓN VALIDADA
    =============================================== */

    const datosContacto = validacion.data;

    /* ===============================================
       4. ENVIAR CORREO MEDIANTE RESEND
    =============================================== */

    await enviarCorreoContacto(datosContacto);

    /* ===============================================
       5. RESPUESTA EXITOSA
    =============================================== */

    return res.status(200).json({
      success: true,
      message:
        "Tu solicitud ha sido enviada correctamente. Nuestro equipo se pondrá en contacto contigo.",
    });

  } catch (error) {

    /* ===============================================
       6. MANEJO GLOBAL DE ERRORES
    =============================================== */

    console.error(
      "[MAVALIU] Error procesando contacto:",
      error.message
    );

    next(error);

  }

}
