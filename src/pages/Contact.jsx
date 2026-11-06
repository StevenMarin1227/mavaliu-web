
import { useEffect } from "react";

import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";

import "../components/Contact/Contact.css";

/* =====================================================
   MAVALIU TECHNOLOGY
   PÁGINA DE CONTACTO
===================================================== */

export default function Contact() {
  useEffect(() => {
    document.title =
      "Contáctanos | MAVALIU Technology";
  }, []);

  return (
    <main className="mavaliu-contact-page">

      <ContactHero />

      <section className="mavaliu-contact-main">
        <div className="container">
          <div className="row g-4 align-items-start">

            <div className="col-lg-7">
              <ContactForm />
            </div>

            <div className="col-lg-5">
              <ContactInfo />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
