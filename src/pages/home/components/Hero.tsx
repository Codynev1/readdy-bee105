import { useTranslation } from "react-i18next";
import Reveal from "@/components/base/Reveal";

type StatItem = { value: string; label: string };

export default function Hero() {
  const { t } = useTranslation();

  const stats: StatItem[] = [
    { value: t("hero.statOneValue"), label: t("hero.statOneLabel") },
    { value: t("hero.statTwoValue"), label: t("hero.statTwoLabel") },
    { value: t("hero.statThreeValue"), label: t("hero.statThreeLabel") },
  ];

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden bg-background-50">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-primary-200/40 blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-[360px] w-[360px] rounded-full bg-accent-100/60 blur-3xl" />
        <div className="absolute bottom-[-140px] left-1/3 h-[320px] w-[320px] rounded-full bg-secondary-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 pb-14 pt-16 md:px-6 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-background-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
              <i className="ri-heart-pulse-line text-sm text-accent-500" aria-hidden="true" />
              {t("hero.eyebrow")}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-heading text-3xl font-bold leading-[1.1] tracking-tight text-foreground-950 sm:text-4xl md:text-6xl">
              {t("hero.titleLine1")}
              <span className="mt-2 block bg-gradient-to-r from-primary-700 via-primary-500 to-accent-500 bg-clip-text text-transparent">
                {t("hero.titleLine2")}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-foreground-600 md:text-base">
              {t("hero.subtitle")}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground-900">
              <i className="ri-shield-check-line text-base text-primary-600" aria-hidden="true" />
              {t("hero.badge")}
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="#why-teleray"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-7 py-3.5 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600"
              >
                {t("hero.patients")}
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </a>
              <a
                href="#why-teleray"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-foreground-300 bg-background-50 px-7 py-3.5 text-sm font-semibold text-foreground-900 transition-colors hover:border-primary-400 hover:text-primary-800"
              >
                {t("hero.providers")}
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={340}>
          <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-background-200 bg-background-50 px-5 py-5 text-center"
              >
                <dt className="font-heading text-2xl font-bold text-primary-700 md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-foreground-600 md:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}