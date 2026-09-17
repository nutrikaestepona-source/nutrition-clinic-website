"use client";

import { useState } from "react";

type ShareSectionLinkProps = {
  sectionId: string;
  label?: string;
  className?: string;
};

export default function ShareSectionLink({
  sectionId,
  label,
  className = "",
}: ShareSectionLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      return;
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const ariaLabel = label
    ? `Copiar enlace directo a la sección de ${label}`
    : "Copiar enlace directo a esta sección";

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={handleClick}
        aria-label={ariaLabel}
        className={`flex h-8 w-8 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy/10 ${className}`.trim()}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 10.5 19 5m0 0h-4.5M19 5v4.5M10.5 13.5 5 19m0 0h4.5M5 19v-4.5"
          />
        </svg>
      </button>

      {copied ? (
        <span
          role="status"
          className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy px-2.5 py-1 text-xs font-medium text-white shadow-md"
        >
          Enlace copiado
        </span>
      ) : null}
    </span>
  );
}
