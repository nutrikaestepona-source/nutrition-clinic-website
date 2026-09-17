import type { SVGProps } from "react";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.2h2.7l.4-3.2h-3.1V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1C15.9 3 14.9 3 13.7 3c-2.4 0-4 1.5-4 4.1v2.5H7v3.2h2.7V21h3.8Z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { name: "Instagram", href: "#", Icon: InstagramIcon },
  { name: "Facebook", href: "#", Icon: FacebookIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/logo-normal.svg"
            alt="Nutrika"
            className="h-9 w-auto brightness-0 invert"
          />

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-3 border-t border-white/15 pt-6 text-sm text-white/80 sm:grid-cols-3 sm:gap-6">
          <p>Avenida de los Reales, nº 21, Local 4B, Estepona, Málaga, CP 29680</p>
          <p>
            <a href="tel:+34686126889" className="hover:text-white hover:underline">
              686 12 68 89
            </a>
            {" / "}
            <a href="tel:+34952635903" className="hover:text-white hover:underline">
              952 63 59 03
            </a>
          </p>
          <p>
            <a href="mailto:infonutrika.estepona@gmail.com" className="hover:text-white hover:underline">
              infonutrika.estepona@gmail.com
            </a>
          </p>
        </div>

        <p className="text-sm text-white/80">
          Lunes a jueves 9:30–13:30 y 16:00–19:00 · Viernes y sábado 9:30–13:00 · Domingo cerrado
        </p>

        <p className="text-xs text-white/60">
          © {year} Nutrika. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
