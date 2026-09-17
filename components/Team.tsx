import PlaceholderImage from "./PlaceholderImage";
import Section from "./Section";

const TEAM = [
  {
    name: "Katia Vandekerckhove",
    role: "Dirección de Nutrika",
    bio: "Al frente de Nutrika, impulsa un enfoque de nutrición cercano y consciente, pensado para acompañarte en cada paso.",
  },
  {
    name: "Alicia Garralón Domínguez",
    role: "Nutricionista especializada en microbiota de la piel y obesidad",
    bio: "Ayuda a entender qué le pasa a tu cuerpo por dentro para que se note también por fuera.",
  },
];

export default function Team() {
  return (
    <Section id="equipo" tone="white" title="Equipo">
      <div className="mx-auto grid grid-cols-1 gap-8 sm:max-w-2xl sm:grid-cols-2">
        {TEAM.map((member) => (
          <article key={member.name} className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl">
              <PlaceholderImage
                alt={`Foto de ${member.name}, ${member.role}`}
                variant="portrait"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
              <p className="text-sm font-medium text-coral-strong">{member.role}</p>
              <p className="mt-2 text-sm text-navy/80">{member.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
