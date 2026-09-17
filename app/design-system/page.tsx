"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ShareSectionLink from "@/components/ShareSectionLink";

function ColorSwatch({
  name,
  hex,
  className,
}: {
  name: string;
  hex: string;
  className: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-16 w-full rounded-lg ${className}`} />
      <p className="text-sm font-medium text-navy">{name}</p>
      <p className="text-xs text-navy/60">{hex}</p>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Section
          id="ds-colores"
          tone="white"
          eyebrow="Marca"
          title="Colores y tipografía"
          description="Poppins (300–600), coral de marca, coral fuerte (accesible para texto/botones), navy y cream."
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <ColorSwatch name="coral" hex="#ED6974" className="bg-coral" />
            <ColorSwatch name="coral-strong" hex="#D23949" className="bg-coral-strong" />
            <ColorSwatch name="navy" hex="#213A76" className="bg-navy" />
            <ColorSwatch name="cream" hex="#F7F5F2" className="border border-navy/10 bg-cream" />
          </div>
        </Section>

        <Section
          id="ds-botones"
          tone="cream"
          eyebrow="Botones"
          title="Button"
          description="Variantes primary y secondary, como enlace (href) o como acción (onClick)."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#ds-botones" variant="primary">
              Primary (href)
            </Button>
            <Button variant="primary" onClick={() => alert("click primary")}>
              Primary (onClick)
            </Button>
            <Button href="#ds-botones" variant="secondary">
              Secondary (href)
            </Button>
            <Button variant="secondary" onClick={() => alert("click secondary")}>
              Secondary (onClick)
            </Button>
          </div>
        </Section>

        <Section
          id="ds-secciones"
          tone="white"
          eyebrow="Contenedor"
          title="Section"
          description="Este mismo bloque es un ejemplo de Section con tono blanco; el de arriba y el de abajo usan tono cream."
        >
          <p className="text-navy/70">
            Eyebrow, título, descripción y children configurables, con fondo alterno según la
            prop &quot;tone&quot;.
          </p>
        </Section>

        <Section
          id="ds-compartir"
          tone="cream"
          eyebrow="Compartir"
          title="ShareSectionLink"
          description="Copia la URL actual + #id-de-sección al portapapeles y muestra un tooltip 2 segundos."
        >
          <div className="flex items-center gap-3 text-navy">
            <span>Sección de ejemplo</span>
            <ShareSectionLink sectionId="ds-compartir" label="ejemplo" />
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
