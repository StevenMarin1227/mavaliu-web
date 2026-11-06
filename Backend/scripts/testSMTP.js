
import "dotenv/config";

import {
  mailTransporter,
} from "../config/mail.js";

/* =====================================================
   MAVALIU TECHNOLOGY
   PRUEBA DE CONEXIÓN SMTP
===================================================== */

async function probarSMTP() {
  try {
    console.log(
      "Verificando conexión con ColombiaHosting..."
    );

    await mailTransporter.verify();

    console.log(
      "Conexión SMTP y autenticación correctas."
    );

    const resultado =
      await mailTransporter.sendMail({
        from: {
          name: "MAVALIU Technology",
          address: process.env.MAIL_FROM,
        },

        to: process.env.MAIL_TO,

        subject:
          "Prueba de correo - MAVALIU Technology",

        text:
          "Esta es una prueba de envío desde el backend de MAVALIU Technology.",

        html: `
          <div style="font-family:Arial,sans-serif;">
            <h2 style="color:#25366F;">
              MAVALIU Technology
            </h2>

            <p>
              El backend ha realizado una
              prueba de envío mediante SMTP.
            </p>

            <p>
              Servidor de correo:
              ColombiaHosting
            </p>
          </div>
        `,
      });

    console.log(
      "Mensaje aceptado por el servidor SMTP."
    );

    console.log(
      "ID del mensaje:",
      resultado.messageId
    );

    console.log(
      "Destinatarios aceptados:",
      resultado.accepted
    );
  } catch (error) {
    console.error(
      "No fue posible completar la prueba SMTP:",
      error.message
    );

    process.exitCode = 1;
  } finally {
    mailTransporter.close();
  }
}

probarSMTP();
