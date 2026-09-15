type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "default" | "inverted";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "default",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isInverted = tone === "inverted";

  return (
    <div className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}`}>
      {eyebrow ? (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
            isInverted
              ? "bg-background-50/15 text-background-50"
              : "bg-primary-100 text-primary-800"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${isInverted ? "bg-accent-400" : "bg-accent-500"}`} />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-4 font-heading text-2xl font-semibold leading-tight tracking-tight md:text-4xl ${
          isInverted ? "text-background-50" : "text-foreground-950"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-sm leading-relaxed md:text-base ${
            isInverted ? "text-background-100/85" : "text-foreground-600"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}