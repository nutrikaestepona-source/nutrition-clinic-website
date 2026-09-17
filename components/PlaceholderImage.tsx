type PlaceholderVariant = "landscape" | "portrait";

type PlaceholderImageProps = {
  alt: string;
  variant?: PlaceholderVariant;
  className?: string;
};

const VIEWBOX: Record<PlaceholderVariant, string> = {
  landscape: "0 0 4 3",
  portrait: "0 0 3 4",
};

const ASPECT: Record<PlaceholderVariant, string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
};

export default function PlaceholderImage({
  alt,
  variant = "landscape",
  className = "",
}: PlaceholderImageProps) {
  const isPortrait = variant === "portrait";

  return (
    <svg
      role="img"
      aria-label={alt}
      viewBox={VIEWBOX[variant]}
      className={`w-full h-auto bg-cream ${ASPECT[variant]} ${className}`.trim()}
    >
      <circle cx={isPortrait ? 1.5 : 1.3} cy="1.5" r="0.9" fill="#ED6974" opacity="0.35" />
      <rect
        x={isPortrait ? 0.4 : 2}
        y={isPortrait ? 2.3 : 0.5}
        width={isPortrait ? 2.2 : 1.7}
        height={isPortrait ? 1.3 : 2}
        rx={isPortrait ? 0.6 : 0.3}
        fill="#213A76"
        opacity="0.12"
      />
    </svg>
  );
}
