import type { SVGProps } from "react";
import Button from "./Button";
import Section from "./Section";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.34-.5.05-.98.24-3.3-.7-2.79-1.13-4.6-3.98-4.74-4.17-.14-.19-1.13-1.5-1.13-2.87 0-1.36.71-2.03.97-2.31.24-.26.53-.32.7-.32h.5c.16 0 .38-.03.58.44.24.57.8 1.97.87 2.11.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.29-.12.56.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.86.27.14.45.2.51.32.07.12.07.68-.17 1.35Z" />
    </svg>
  );
}

const INPUT_CLASSES =
  "rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-navy placeholder:text-navy/50 focus:border-coral-strong focus:outline-none";

export default function Contact() {
  return (
    <Section id="contacto" tone="cream" title="Contacto">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <dl className="flex flex-col gap-4">
            <div>
              <dt className="text-sm font-semibold text-coral-strong">Dirección</dt>
              <dd className="text-base text-navy/80">
                Avenida de los Reales, nº 21, Local 4B, Estepona, Málaga, CP 29680
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-coral-strong">Teléfono</dt>
              <dd className="text-base text-navy/80">
                <a href="tel:+34686126889" className="underline-offset-2 hover:text-coral-strong hover:underline">
                  686 12 68 89
                </a>
                {" / "}
                <a href="tel:+34952635903" className="underline-offset-2 hover:text-coral-strong hover:underline">
                  952 63 59 03
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-coral-strong">Email</dt>
              <dd className="text-base text-navy/80">
                <a
                  href="mailto:infonutrika.estepona@gmail.com"
                  className="underline-offset-2 hover:text-coral-strong hover:underline"
                >
                  infonutrika.estepona@gmail.com
                </a>
              </dd>
            </div>
          </dl>

          <div>
            <h3 className="text-sm font-semibold text-coral-strong">Horario</h3>
            <table className="mt-2 w-full max-w-xs border-collapse text-sm text-navy/80">
              <tbody>
                <tr className="border-t border-navy/10">
                  <td className="py-2 pr-4 font-medium text-navy">Lunes a jueves</td>
                  <td className="py-2">9:30–13:30 y 16:00–19:00</td>
                </tr>
                <tr className="border-t border-navy/10">
                  <td className="py-2 pr-4 font-medium text-navy">Viernes y sábado</td>
                  <td className="py-2">9:30–13:00</td>
                </tr>
                <tr className="border-t border-navy/10">
                  <td className="py-2 pr-4 font-medium text-navy">Domingo</td>
                  <td className="py-2">Cerrado</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Button
              href="https://wa.me/34686126889"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Escríbenos por WhatsApp
            </Button>

            <Button
              href="https://www.doctoralia.es/katia-vandekerckhove/dietista-nutricionista/estepona#address-id=238523&is-online-only=false&filters%5Bspecializations%5D%5B%5D=49"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Reservar cita online
            </Button>
          </div>
        </div>

        <form
          action="mailto:infonutrika.estepona@gmail.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-4 rounded-2xl bg-white p-6 sm:p-8"
        >
          <h3 className="text-lg font-semibold text-navy">Escríbenos</h3>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-sm font-medium text-navy">
              Nombre
            </label>
            <input
              id="contact-name"
              name="Nombre"
              type="text"
              required
              className={INPUT_CLASSES}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-sm font-medium text-navy">
              Email
            </label>
            <input
              id="contact-email"
              name="Email"
              type="email"
              required
              className={INPUT_CLASSES}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-sm font-medium text-navy">
              Mensaje
            </label>
            <textarea
              id="contact-message"
              name="Mensaje"
              rows={4}
              required
              className={INPUT_CLASSES}
            />
          </div>

          <Button type="submit" variant="secondary" className="self-start">
            Enviar mensaje
          </Button>
        </form>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl">
        <iframe
          src="https://www.google.com/maps?q=Avenida+de+los+Reales,+21,+Local+4B,+Estepona,+M%C3%A1laga,+29680&output=embed"
          width="100%"
          height="320"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Nutrika en Estepona"
        />
      </div>
    </Section>
  );
}
