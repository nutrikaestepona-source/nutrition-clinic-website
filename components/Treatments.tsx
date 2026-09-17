import Section from "./Section";

const TREATMENTS = [
  {
    title: "Microbiota intestinal",
    description:
      "El equilibrio de las bacterias de tu intestino influye en tu digestión, tu energía y tu ánimo. Te ayudamos a cuidarlo desde la alimentación.",
  },
  {
    title: "Intolerancias alimentarias",
    description:
      "Identificamos qué alimentos no te sientan bien y te acompañamos para que comer deje de ser un problema.",
  },
  {
    title: "Obesidad",
    description:
      "Trabajamos contigo un cambio de hábitos realista y sostenible, sin dietas milagro ni prohibiciones imposibles.",
  },
  {
    title: "Microbiota de la piel",
    description:
      "La salud de tu piel también empieza por dentro. Cuidamos el equilibrio que hay detrás de muchos problemas cutáneos.",
  },
  {
    title: "Patologías en general",
    description:
      "Acompañamos otras patologías desde la nutrición, como apoyo a tu tratamiento médico habitual.",
  },
];

export default function Treatments() {
  return (
    <Section id="que-tratamos" tone="white" title="¿Qué tratamos?">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TREATMENTS.map((item) => (
          <article
            key={item.title}
            className="flex flex-col gap-3 rounded-2xl border border-navy/10 bg-cream p-6"
          >
            <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
            <p className="text-sm text-navy/80">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
