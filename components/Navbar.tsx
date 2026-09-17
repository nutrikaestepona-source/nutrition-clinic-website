"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

const NAV_LINKS = [
  { id: "nutricion", label: "Nutrición" },
  { id: "psicologia", label: "Psicología" },
  { id: "acupuntura", label: "Acupuntura" },
  { id: "equipo", label: "Equipo" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-24 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className="shrink-0" aria-label="Nutrika — inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/logo-normal.svg" alt="Nutrika" className="h-14 w-auto sm:h-16" />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.filter((link) => link.id !== "contacto").map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={activeId === link.id ? "true" : undefined}
              className={`text-base font-medium transition-colors ${
                activeId === link.id
                  ? "text-coral-strong"
                  : "text-navy hover:text-coral-strong"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contacto" variant="primary">
            Pedir cita
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy md:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className="flex flex-col gap-1 border-t border-navy/10 bg-white px-6 py-4 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMenuOpen(false)}
              aria-current={activeId === link.id ? "true" : undefined}
              className={`rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                activeId === link.id
                  ? "bg-coral-strong/10 text-coral-strong"
                  : "text-navy hover:bg-navy/5"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#contacto"
            variant="primary"
            className="mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Pedir cita
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
