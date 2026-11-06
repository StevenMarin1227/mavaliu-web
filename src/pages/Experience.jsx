
import { useEffect } from "react";

import ExperienceHero from "../components/Experience/ExperienceHero";

import ExperienceProjects from "../components/Experience/ExperienceProjects";

import "../components/Experience/Experience.css";

/* =====================================================
   MAVALIU TECHNOLOGY
   PÁGINA DE EXPERIENCIA EMPRESARIAL
===================================================== */

export default function Experience() {
  useEffect(() => {
    document.title =
      "Experiencia | MAVALIU Technology";
  }, []);

  return (
    <main className="mavaliu-exp-page">

      {/* HERO INSTITUCIONAL */}
      <ExperienceHero />

      {/* PROYECTOS Y EXPERIENCIA */}
      <ExperienceProjects />

    </main>
  );
}
