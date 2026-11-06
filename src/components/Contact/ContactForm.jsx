
/* =========================================================
   MAVALIU TECHNOLOGY
   COMPONENTE: FORMULARIO DE CONTACTO

   FUNCIONALIDADES:
   - Captura de solicitudes comerciales
   - Selector dinámico de servicios
   - Validación de campos obligatorios
   - Autorización de tratamiento de datos
   - Integración con backend mediante fetch
   - Manejo de estados y errores
   - Confirmación de envío
========================================================= */

import { useState } from "react";

import {
  Send,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";

/* =========================================================
   DATOS Y SERVICIOS
========================================================= */

import { services } from "../../data/services";

import {
  enviarSolicitudContacto,
} from "../../services/contactService";

/* =========================================================
   ESTADO INICIAL DEL FORMULARIO
========================================================= */

const initialForm = {
  nombre: "",
  organizacion: "",
  correo: "",
  telefono: "",
  servicio: "",
  mensaje: "",
  aceptaPolitica: false,
};

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

export default function ContactForm() {

  /* =======================================================
     ESTADOS
  ======================================================= */

  const [form, setForm] = useState(initialForm);

  const [estado, setEstado] = useState("idle");

  const [mensajeEstado, setMensajeEstado] =
    useState("");

  /* =======================================================
     ACTUALIZAR CAMPOS
  ======================================================= */

  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setForm((prev) => ({
      ...prev,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

    // Limpiar mensajes anteriores
    if (estado !== "idle") {
      setEstado("idle");
      setMensajeEstado("");
    }
  };

  /* =======================================================
     ENVIAR FORMULARIO
  ======================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Evitar solicitudes duplicadas
    if (estado === "loading") {
      return;
    }

    // Validar autorización de datos personales
    if (!form.aceptaPolitica) {
      setEstado("error");

      setMensajeEstado(
        "Debes autorizar el tratamiento de tus datos personales."
      );

      return;
    }

    // Validar mensaje
    if (form.mensaje.trim().length < 10) {
      setEstado("error");

      setMensajeEstado(
        "La descripción de tu solicitud debe contener al menos 10 caracteres."
      );

      return;
    }

    setEstado("loading");
    setMensajeEstado("");

    try {

      /* ===============================================
         PREPARAR DATOS PARA EL BACKEND
      =============================================== */

      const datosEnviar = {
        nombre: form.nombre.trim(),

        organizacion:
          form.organizacion.trim(),

        correo:
          form.correo.trim(),

        telefono:
          form.telefono.trim(),

        servicio:
          form.servicio,

        mensaje:
          form.mensaje.trim(),

        aceptaPolitica:
          form.aceptaPolitica,
      };

      /* ===============================================
         CONSUMIR API DE CONTACTO
      =============================================== */

      await enviarSolicitudContacto(datosEnviar);

      /* ===============================================
         ENVÍO EXITOSO
      =============================================== */

      setEstado("success");

      setMensajeEstado(
        "Tu solicitud fue enviada correctamente. Gracias por contactar a MAVALIU Technology."
      );

      // Limpiar formulario
      setForm({ ...initialForm });

    } catch (error) {

      /* ===============================================
         ERROR DE ENVÍO
      =============================================== */

      console.error(
        "Error al enviar formulario:",
        error
      );

      setEstado("error");

      setMensajeEstado(
        error.message ||
        "No fue posible enviar tu solicitud. Inténtalo nuevamente."
      );
    }
  };

  /* =======================================================
     RENDERIZADO
  ======================================================= */

  return (
    <div
      className="mavaliu-contact-form-card"
      id="formulario-contacto"
    >

      {/* ===================================================
          ENCABEZADO DEL FORMULARIO
      =================================================== */}

      <div className="mavaliu-contact-form-heading">

        <span>
          FORMULARIO DE CONTACTO
        </span>

        <h2>
          Cuéntanos sobre tu proyecto
        </h2>

        <p>
          Completa el siguiente formulario
          y comparte las necesidades
          tecnológicas de tu organización.
          Nuestro equipo podrá conocer
          tu solicitud y orientarte.
        </p>

      </div>

      {/* ===================================================
          FORMULARIO
      =================================================== */}

      <form onSubmit={handleSubmit}>

        <div className="row g-4">

          {/* ===============================================
              NOMBRE COMPLETO
          =============================================== */}

          <div className="col-md-6">

            <label htmlFor="contact-nombre">
              Nombre completo *
            </label>

            <input
              id="contact-nombre"
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              autoComplete="name"
              minLength={2}
              maxLength={120}
              required
            />

          </div>

          {/* ===============================================
              EMPRESA O ENTIDAD
          =============================================== */}

          <div className="col-md-6">

            <label htmlFor="contact-organizacion">
              Empresa o entidad
            </label>

            <input
              id="contact-organizacion"
              type="text"
              name="organizacion"
              value={form.organizacion}
              onChange={handleChange}
              placeholder="Nombre de tu organización"
              autoComplete="organization"
              maxLength={150}
            />

          </div>

          {/* ===============================================
              CORREO ELECTRÓNICO
          =============================================== */}

          <div className="col-md-6">

            <label htmlFor="contact-correo">
              Correo electrónico *
            </label>

            <input
              id="contact-correo"
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="correo@empresa.com"
              autoComplete="email"
              maxLength={254}
              required
            />

          </div>

          {/* ===============================================
              TELÉFONO
          =============================================== */}

          <div className="col-md-6">

            <label htmlFor="contact-telefono">
              Teléfono de contacto
            </label>

            <input
              id="contact-telefono"
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="+57 300 000 0000"
              autoComplete="tel"
              maxLength={30}
            />

          </div>

          {/* ===============================================
              SERVICIO DE INTERÉS

              CORRECCIÓN:
              El slug se obtiene desde service.ruta.

              Ejemplo:
              /soluciones/analitica-datos

              Resultado:
              analitica-datos
          =============================================== */}

          <div className="col-12">

            <label htmlFor="contact-servicio">
              Servicio de interés *
            </label>

            <select
              id="contact-servicio"
              name="servicio"
              value={form.servicio}
              onChange={handleChange}
              required
            >

              <option value="">
                Selecciona una solución
              </option>

              {services.map((service) => {

                // Obtener identificador del servicio
                const slug = service.ruta
                  .split("/")
                  .filter(Boolean)
                  .pop();

                return (
                  <option
                    key={service.id}
                    value={slug}
                  >
                    {service.titulo}
                  </option>
                );
              })}

              <option value="otro">
                Otro servicio o consulta general
              </option>

            </select>

          </div>

          {/* ===============================================
              DESCRIPCIÓN DE LA SOLICITUD
          =============================================== */}

          <div className="col-12">

            <label htmlFor="contact-mensaje">
              Describe tu solicitud *
            </label>

            <textarea
              id="contact-mensaje"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos qué necesita tu organización, qué tipo de proyecto deseas desarrollar o qué servicio necesitas..."
              rows={6}
              minLength={10}
              maxLength={3000}
              required
            />

          </div>

          {/* ===============================================
              AUTORIZACIÓN DE DATOS PERSONALES
          =============================================== */}

          <div className="col-12">

            <label className="mavaliu-contact-privacy">

              <input
                type="checkbox"
                name="aceptaPolitica"
                checked={form.aceptaPolitica}
                onChange={handleChange}
                required
              />

              <span>
                Autorizo el tratamiento de mis
                datos personales para gestionar
                y responder esta solicitud,
                conforme a la política de
                tratamiento de datos personales
                de MAVALIU Technology.
              </span>

            </label>

          </div>

          {/* ===============================================
              MENSAJES DE CONFIRMACIÓN Y ERROR
          =============================================== */}

          {estado !== "idle" &&
            estado !== "loading" && (

              <div className="col-12">

                <div
                  className={`mavaliu-contact-alert ${estado}`}
                  role="status"
                  aria-live="polite"
                >

                  {estado === "success" ? (
                    <CheckCircle2 size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}

                  <span>
                    {mensajeEstado}
                  </span>

                </div>

              </div>
            )}

          {/* ===============================================
              BOTÓN ENVIAR
          =============================================== */}

          <div className="col-12">

            <button
              type="submit"
              className="mavaliu-contact-submit"
              disabled={estado === "loading"}
            >

              {estado === "loading" ? (

                <>
                  <LoaderCircle
                    size={19}
                    className="mavaliu-contact-spinner"
                  />

                  Enviando solicitud...
                </>

              ) : (

                <>
                  Enviar solicitud
                  <Send size={19} />
                </>

              )}

            </button>

          </div>

        </div>

      </form>

    </div>
  );
}
