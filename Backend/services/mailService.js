
import { mailTransporter } from "../config/mail.js";

/* =====================================================
   MAVALIU TECHNOLOGY
   UTILIDADES PARA CORREO
===================================================== */

function escaparHTML(valor = "") {
  return String(valor).replace(
    /[&<>"']/g,
    (caracter) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[caracter]
  );
}

const nombresServicios = {
  "consultoria-tic": "Consultorías TIC",
  "analitica-datos": "Analítica de Datos",
  "plataformas-web-cloud":
    "Plataformas Web y Cloud",
  "infraestructura-ti": "Infraestructura TI",
  "seguridad-informatica":
    "Seguridad Informática",
  "gestion-calidad": "Gestión de Calidad",
  "normativa-gubernamental":
    "Normativa Gubernamental",
  otro: "Otro servicio o consulta general",
};

/* =====================================================
   ENVIAR NOTIFICACIÓN CORPORATIVA
===================================================== */

export async function enviarCorreoContacto(datos) {
  const {
    nombre,
    organizacion,
    correo,
    telefono,
    servicio,
    mensaje,
  } = datos;

  const nombreSeguro = escaparHTML(nombre);
  const organizacionSegura = escaparHTML(
    organizacion || "No indicada"
  );
  const correoSeguro = escaparHTML(correo);
  const telefonoSeguro = escaparHTML(
    telefono || "No indicado"
  );
  const servicioSeguro = escaparHTML(
    nombresServicios[servicio] || servicio
  );
  const mensajeSeguro = escaparHTML(mensaje)
    .replace(/\n/g, "<br>");

  const html = `
    <div style="
      font-family:Arial,sans-serif;
      max-width:680px;
      margin:auto;
      color:#334155;
    ">
      <div style="
        background:#25366F;
        color:#FFFFFF;
        padding:30px;
      ">
        <h1 style="margin:0;font-size:24px;">
          MAVALIU Technology
        </h1>
        <p style="margin-bottom:0;">
          Nueva solicitud de contacto
        </p>
      </div>

      <div style="padding:30px;background:#F8FAFC;">
        <h2 style="color:#25366F;">
          Información del solicitante
        </h2>

        <p><strong>Nombre:</strong> ${nombreSeguro}</p>
        <p><strong>Organización:</strong> ${organizacionSegura}</p>
        <p><strong>Correo:</strong> ${correoSeguro}</p>
        <p><strong>Teléfono:</strong> ${telefonoSeguro}</p>
        <p><strong>Servicio:</strong> ${servicioSeguro}</p>

        <h3 style="color:#25366F;">
          Descripción de la solicitud
        </h3>

        <div style="
          background:#FFFFFF;
          padding:20px;
          border-left:4px solid #3D4FCD;
          overflow-wrap:anywhere;
        ">
          ${mensajeSeguro}
        </div>
      </div>

      <div style="
        padding:20px;
        text-align:center;
        background:#E9EDFF;
        font-size:12px;
      ">
        Mensaje generado desde el formulario
        de contacto de MAVALIU Technology.
      </div>
    </div>
  `;

  const texto = [
    "NUEVA SOLICITUD - MAVALIU TECHNOLOGY",
    `Nombre: ${nombre}`,
    `Organización: ${organizacion || "No indicada"}`,
    `Correo: ${correo}`,
    `Teléfono: ${telefono || "No indicado"}`,
    `Servicio: ${nombresServicios[servicio] || servicio}`,
    "",
    "Mensaje:",
    mensaje,
  ].join("\n");

  return mailTransporter.sendMail({
    from: {
      name: "MAVALIU Technology - Sitio Web",
      address: process.env.MAIL_FROM,
    },

    to: process.env.MAIL_TO,

    replyTo: correo,

    subject:
      `Nueva solicitud web - ${nombresServicios[servicio] || "Contacto"}`,

    text: texto,
    html,
  });
}
