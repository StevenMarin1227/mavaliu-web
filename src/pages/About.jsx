
import { useEffect } from "react";

import AboutHero from "../components/About/AboutHero";
import AboutContent from "../components/About/AboutContent";

import "../components/About/About.css";

/* =====================================================
   MAVALIU TECHNOLOGY
   PÁGINA INSTITUCIONAL NOSOTROS
===================================================== */

export default function About() {
  useEffect(() => {
    document.title =
      "Nosotros | MAVALIU Technology";
  }, []);

  return (
    <main className="mavaliu-about-page">
      <AboutHero />
      <AboutContent />
    </main>
  );
}
