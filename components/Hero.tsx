import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/imago-coral.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-28 z-0 h-[26rem] w-auto opacity-10 sm:h-[34rem] md:-right-16"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center sm:px-8 sm:py-28">
        <span className="rounded-full border border-coral-strong/30 bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-coral-strong">
          nutrición consciente
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold text-navy sm:text-5xl">
          Cuidamos de ti, por dentro y por fuera
        </h1>

        <p className="max-w-2xl text-base text-navy/80 sm:text-lg">
          En Nutrika combinamos nutrición, psicología y acupuntura en un solo
          enfoque, pensado para que cuides tu cuerpo y tu bienestar sin
          complicarte.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button href="#contacto" variant="primary">
            Pedir cita
          </Button>
          <Button href="#equipo" variant="secondary">
            Conoce al equipo
          </Button>
        </div>
      </div>
    </section>
  );
}
