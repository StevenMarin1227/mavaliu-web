
/* =====================================================
   MAVALIU TECHNOLOGY
   SERVICIO DE CORREO ELECTRÓNICO

   Proveedor: Resend
   Protocolo: HTTPS
   Compatible con Render Free
===================================================== */

import { Resend } from "resend";

/* =====================================================
   CONFIGURACIÓN
===================================================== */

const RESEND_API_KEY = process.env.RESEND_API_KEY;

const MAIL_FROM =
  process.env.MAIL_FROM || "gerencia@mavaliu.com";

const MAIL_TO =
  process.env.MAIL_TO || "gerencia@mavaliu.com";

/* =====================================================
   NOMBRES DE SERVICIOS
===================================================== */

const nombresServicios = {
  "consultoria-tic": "Consultoría TIC",
  "analitica-datos": "Analítica de Datos y Big Data",
  "plataformas-web-cloud": "Plataformas Web y Cloud",
  "infraestructura-ti": "Infraestructura TI",
  "seguridad-informatica": "Seguridad Informática",
  "gestion-calidad": "Gestión de Calidad",
  "normativa-gubernamental": "Normativa Gubernamental",
  otro: "Otro servicio",
};

/* =====================================================
   PROTECCIÓN DE CONTENIDO HTML
===================================================== */

function escaparHTML(valor = "") {
  return String(valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* =====================================================
   ENVIAR CORREO DE CONTACTO
===================================================== */

export async function enviarCorreoContacto(datos) {

  if (!RESEND_API_KEY) {
    throw new Error(
      "RESEND_API_KEY no está configurada."
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const {
    nombre,
    organizacion,
    correo,
    telefono,
    servicio,
    mensaje,
  } = datos;

  const nombreServicio =
    nombresServicios[servicio] || servicio;

  /* ===================================================
     ASUNTO
  =================================================== */

  const asunto =
    `Nueva solicitud comercial - MAVALIU Technology`;

  /* ===================================================
     CONTENIDO EN TEXTO PLANO
  =================================================== */

  const texto = `
NUEVA SOLICITUD DE CONTACTO
MAVALIU TECHNOLOGY

Nombre: ${nombre}
Organización: ${organizacion || "No especificada"}
Correo: ${correo}
Teléfono: ${telefono || "No especificado"}
Servicio: ${nombreServicio}

MENSAJE:
${mensaje}

--------------------------------------------------
Este mensaje fue enviado desde el formulario
de contacto de MAVALIU Technology.
`;

  /* ===================================================
     CONTENIDO HTML
  =================================================== */

  const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>

      <body style="
        margin: 0;
        padding: 30px 15px;
        background-color: #f4f6fb;
        font-family: Arial, sans-serif;
        color: #25366f;
      ">

        <div style="
          max-width: 650px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e4e8f2;
        ">

          <div style="
            background-color: #3d4fcd;
            padding: 28px;
            color: #ffffff;
          ">
            <h1 style="
              margin: 0;
              font-size: 23px;
            ">
              MAVALIU Technology
            </h1>

            <p style="
              margin: 8px 0 0;
              font-size: 14px;
            ">
              Nueva solicitud de contacto
            </p>
          </div>

          <div style="padding: 30px;">

            <p style="
              font-size: 15px;
              line-height: 1.6;
            ">
              Se ha recibido una nueva solicitud
              comercial desde el sitio web corporativo.
            </p>

            <h2 style="
              font-size: 17px;
              color: #3d4fcd;
            ">
              Información del solicitante
            </h2>

            <table style="
              width: 100%;
              border-collapse: collapse;
              font-size: 14px;
            ">

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Nombre:</strong>
                </td>
                <td>
                  ${escaparHTML(nombre)}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Organización:</strong>
                </td>
                <td>
                  ${escaparHTML(
                    organizacion || "No especificada"
                  )}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Correo:</strong>
                </td>
                <td>
                  ${escaparHTML(correo)}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Teléfono:</strong>
                </td>
                <td>
                  ${escaparHTML(
                    telefono || "No especificado"
                  )}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Servicio:</strong>
                </td>
                <td>
                  ${escaparHTML(nombreServicio)}
                </td>
              </tr>

            </table>

            <h2 style="
              font-size: 17px;
              color: #3d4fcd;
              margin-top: 25px;
            ">
              Descripción de la solicitud
            </h2>

            <div style="
              padding: 18px;
              background-color: #edf0ff;
              border-radius: 8px;
              font-size: 14px;
              line-height: 1.7;
              white-space: pre-wrap;
              overflow-wrap: anywhere;
            ">${escaparHTML(mensaje)}</div>

            <p style="
              margin-top: 25px;
              font-size: 13px;
              color: #667085;
            ">
              Para responder al solicitante,
              utiliza la opción Responder
              de tu correo electrónico.
            </p>

          </div>

          <div style="
            background-color: #f4f6fb;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #667085;
          ">
            MAVALIU Technology
            <br />
            Notificación automática del sitio web
          </div>

        </div>

      </body>
    </html>
  `;

  /* ===================================================
     ENVÍO MEDIANTE RESEND
  =================================================== */

  try {

    const { data, error } =
      await resend.emails.send({
        from: `MAVALIU Technology <${MAIL_FROM}>`,
        to: [MAIL_TO],
        replyTo: correo,
        subject: asunto,
        text: texto,
        html,
      });

    if (error) {
      console.error(
        "[MAVALIU] Error de Resend:",
        error
      );

      throw new Error(
        "El proveedor de correo rechazó la solicitud."
      );
    }

    if (!data?.id) {
      throw new Error(
        "Resend no confirmó la aceptación del correo."
      );
    }

    console.log(
      "[MAVALIU] Correo aceptado por Resend:",
      data.id
    );

    return {
      success: true,
      messageId: data.id,
    };

  } catch (error) {

    console.error(
      "[MAVALIU] Error al enviar correo:",
      error.message
    );

    throw error;
  }
}
