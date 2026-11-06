
/* =====================================================
   MAVALIU TECHNOLOGY
   SERVICIO DE CONTACTO

   RESPONSABILIDADES:
   - Conectarse con el backend Express
   - Enviar solicitudes mediante fetch
   - Procesar las respuestas del servidor
   - Gestionar errores de comunicación
===================================================== */

/* =====================================================
   CONFIGURACIÓN DE API
===================================================== */
console.log("API MAVALIU:", import.meta.env.VITE_API_URL);

const API_URL = (
  import.meta.env.VITE_API_URL || ""
).trim().replace(/\/+$/, "");

/* =====================================================
   ENVIAR SOLICITUD DE CONTACTO
===================================================== */

export async function enviarSolicitudContacto(datos) {

  // Validar configuración del backend
  if (!API_URL) {
    throw new Error(
      "El servicio de contacto aún no está configurado."
    );
  }

  try {

    /* ===============================================
       PETICIÓN HTTP AL BACKEND
    =============================================== */

    const response = await fetch(
      `${API_URL}/api/contacto`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(datos),
      }
    );

    /* ===============================================
       PROCESAR RESPUESTA
    =============================================== */

    let resultado = {};

    try {
      resultado = await response.json();
    } catch {
      throw new Error(
        "El servidor devolvió una respuesta no válida."
      );
    }

    /* ===============================================
       VALIDAR RESPUESTA
    =============================================== */

    if (!response.ok) {
      throw new Error(
        resultado.message ||
        "No fue posible enviar la solicitud."
      );
    }

    return resultado;

  } catch (error) {

    console.error(
      "[MAVALIU] Error en servicio de contacto:",
      error
    );

    if (error instanceof TypeError) {
      throw new Error(
        "No fue posible establecer conexión con el servidor. Verifica que el backend esté funcionando."
      );
    }

    throw error;
  }
}
