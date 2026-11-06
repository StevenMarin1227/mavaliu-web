
/* =====================================================
   MAVALIU TECHNOLOGY
   MANEJO CENTRALIZADO DE ERRORES
===================================================== */

export function errorHandler(err, req, res, next) {
  console.error(
    "[MAVALIU API]",
    err.message
  );

  if (err.type === "entity.too.large") {
    return res.status(413).json({
      success: false,
      message:
        "La solicitud supera el tamaño permitido.",
    });
  }

  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "El contenido JSON no es válido.",
    });
  }

  return res.status(500).json({
    success: false,
    message:
      "No fue posible procesar la solicitud. Inténtalo más tarde.",
  });
}
