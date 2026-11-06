
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { obtenerServicioPorSlug } from "../data/services";

import ServiceDetail from "../components/ServiceDetail/ServiceDetail";

import NotFound from "./NotFound";

/* =====================================================
   MAVALIU TECHNOLOGY
   PÁGINA DINÁMICA DE SERVICIOS
===================================================== */

export default function ServicePage() {
  const { slug } = useParams();

  const service = obtenerServicioPorSlug(slug);

  useEffect(() => {
    if (service) {
      document.title =
        `${service.titulo} | MAVALIU Technology`;
    } else {
      document.title =
        "Servicio no encontrado | MAVALIU Technology";
    }

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug, service]);

  if (!service) {
    return <NotFound />;
  }

  return <ServiceDetail service={service} />;
}
