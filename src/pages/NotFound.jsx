
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="container d-flex flex-column align-items-center justify-content-center text-center py-5"
      style={{ minHeight: "65vh" }}
    >
      <span
        className="fw-bold"
        style={{
          fontSize: "6rem",
          color: "#3d4fcd",
          lineHeight: 1,
        }}
      >
        404
      </span>

      <h1
        className="fw-bold mt-4"
        style={{ color: "#25366f" }}
      >
        Página no encontrada
      </h1>

      <p
        className="mt-3 mb-4"
        style={{
          maxWidth: "500px",
          color: "#64748b",
          lineHeight: 1.8,
        }}
      >
        La página que estás buscando no existe
        o todavía no se encuentra disponible.
        Puedes regresar al inicio y explorar
        nuestras soluciones tecnológicas.
      </p>

      <Link
        to="/"
        className="btn d-inline-flex align-items-center gap-2 px-4 py-3 text-white"
        style={{ background: "#3d4fcd" }}
      >
        <Home size={18} />
        Volver al inicio
        <ArrowLeft size={17} />
      </Link>
    </main>
  );
}
