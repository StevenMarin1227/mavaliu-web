
import {
  Mail,
  Building2,
  ShieldCheck,
  ArrowUpRight,
  MessagesSquare,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <aside className="mavaliu-contact-info">

      <div className="mavaliu-contact-info-heading">
        <span>CONTACTO CORPORATIVO</span>
        <h2>Estamos para escucharte</h2>
        <p>
          Nuestro equipo puede conocer tus
          necesidades y orientar tu solicitud
          hacia las soluciones de nuestro portafolio.
        </p>
      </div>

      <div className="mavaliu-contact-info-list">

        {/* CORREO */}

        <div className="mavaliu-contact-info-item">
          <div className="mavaliu-contact-info-icon">
            <Mail size={23} />
          </div>

          <div>
            <span>Correo institucional</span>
            <a href="mailto:gerencia@mavaliu.com">
              gerencia@mavaliu.com
            </a>
          </div>
        </div>

        {/* SECTORES */}

        <div className="mavaliu-contact-info-item">
          <div className="mavaliu-contact-info-icon">
            <Building2 size={23} />
          </div>

          <div>
            <span>Orientación comercial</span>
            <strong>
              Organizaciones públicas y privadas
            </strong>
          </div>
        </div>

        {/* DATOS PERSONALES */}

        <div className="mavaliu-contact-info-item">
          <div className="mavaliu-contact-info-icon">
            <ShieldCheck size={23} />
          </div>

          <div>
            <span>Tratamiento de información</span>
            <strong>
              Gestión responsable de solicitudes
              y datos personales
            </strong>
          </div>
        </div>

      </div>

      {/* CONTACTO DIRECTO */}

      <div className="mavaliu-contact-direct">
        <MessagesSquare size={31} />

        <h3>¿Prefieres escribirnos directamente?</h3>

        <p>
          También puedes comunicarte con
          MAVALIU mediante nuestro correo
          institucional.
        </p>

        <a href="mailto:gerencia@mavaliu.com">
          Escribir un correo
          <ArrowUpRight size={18} />
        </a>
      </div>

    </aside>
  );
}
