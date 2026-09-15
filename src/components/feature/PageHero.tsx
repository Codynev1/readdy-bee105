import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.45) 0, transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.35) 0, transparent 45%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1280px] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-background-50/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-background-50">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-5 font-heading text-2xl font-semibold leading-tight tracking-tight text-background-50 md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-background-100/85 md:text-base">
              {intro}
            </p>
          ) : null}
          {primaryCta || secondaryCta ? (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {primaryCta ? (
                <a
                  href={primaryCta.href}
                  className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-accent-600 sm:w-auto"
                >
                  {primaryCta.label}
                </a>
              ) : null}
              {secondaryCta ? (
                <a
                  href={secondaryCta.href}
                  className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md border border-background-50/40 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-background-50/10 sm:w-auto"
                >
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </section>
  );
}