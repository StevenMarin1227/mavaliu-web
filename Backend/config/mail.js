
import nodemailer from "nodemailer";

/* =====================================================
   MAVALIU TECHNOLOGY
   CONFIGURACIÓN SMTP - COLOMBIAHOSTING
===================================================== */

const SMTP_PORT = Number(
  process.env.SMTP_PORT || 465
);

const SMTP_SECURE =
  process.env.SMTP_SECURE === "true";

/* =====================================================
   TRANSPORTE DE CORREO
===================================================== */

export const mailTransporter =
  nodemailer.createTransport({
    host: process.env.SMTP_HOST,

    port: SMTP_PORT,

    secure: SMTP_SECURE,

    requireTLS: !SMTP_SECURE,

    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },

    tls: {
      rejectUnauthorized: true,
    },

    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });

/* =====================================================
   VERIFICACIÓN SMTP
===================================================== */

export async function verificarSMTP() {
  try {
    await mailTransporter.verify();

    console.log(
      "[MAVALIU] Conexión SMTP establecida."
    );

    return true;
  } catch (error) {
    console.error(
      "[MAVALIU] Error SMTP:",
      error.message
    );

    return false;
  }
}
