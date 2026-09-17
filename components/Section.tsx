import type { ReactNode } from "react";

type SectionTone = "white" | "cream";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: SectionTone;
  titleAction?: ReactNode;
  children?: ReactNode;
  className?: string;
};

const TONE_STYLES: Record<SectionTone, string> = {
  white: "bg-white",
  cream: "bg-cream",
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  tone = "white",
  titleAction,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-24 ${TONE_STYLES[tone]} ${className}`.trim()}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 sm:px-8">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          {eyebrow ? (
            <span className="text-sm font-semibold uppercase tracking-wide text-coral-strong">
              {eyebrow}
            </span>
          ) : null}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl font-semibold text-navy sm:text-4xl">{title}</h2>
            {titleAction}
          </div>
          {description ? (
            <p className="max-w-2xl text-base text-navy/80 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
