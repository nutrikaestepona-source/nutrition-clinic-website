import Button from "./Button";
import PlaceholderImage from "./PlaceholderImage";
import Section from "./Section";
import ShareSectionLink from "./ShareSectionLink";

type ServiceSectionProps = {
  id: string;
  tone: "white" | "cream";
  title: string;
  paragraphs: string[];
  ctaLabel: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  specialist?: { name: string; role: string };
};

export default function ServiceSection({
  id,
  tone,
  title,
  paragraphs,
  ctaLabel,
  imageAlt,
  imagePosition = "right",
  specialist,
}: ServiceSectionProps) {
  return (
    <Section
      id={id}
      tone={tone}
      title={title}
      titleAction={<ShareSectionLink sectionId={id} label={title} />}
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div
          className={`overflow-hidden rounded-2xl ${
            imagePosition === "left" ? "md:order-1" : "md:order-2"
          }`}
        >
          <PlaceholderImage alt={imageAlt} />
        </div>

        <div
          className={`flex flex-col gap-4 ${
            imagePosition === "left" ? "md:order-2" : "md:order-1"
          }`}
        >
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base text-navy/80 sm:text-lg">
              {paragraph}
            </p>
          ))}

          {specialist ? (
            <p className="text-sm">
              <span className="font-semibold text-navy">{specialist.name}</span>
              <span className="block text-navy/80">{specialist.role}</span>
            </p>
          ) : null}

          <div>
            <Button href="#contacto" variant="primary">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
