import { useTranslation } from "react-i18next";
import Reveal from "@/components/base/Reveal";
import { coverageMapImage } from "@/mocks/homeMedia";

export default function GoodCompany() {
  const { t } = useTranslation();

  return (
    <section id="company" className="scroll-mt-24 bg-background-50 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-800">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              {t("company.eyebrow")}
            </span>
            <h2 className="mt-4 font-heading text-2xl font-semibold leading-tight tracking-tight text-foreground-950 md:text-4xl">
              {t("company.title")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-600 md:text-base">
              {t("company.subtitle")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-5 py-2.5 text-xs font-semibold text-accent-800 md:text-sm">
              <i className="ri-star-fill text-accent-500" aria-hidden="true" />
              {t("company.badgeReviews")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-secondary-100 px-5 py-2.5 text-xs font-semibold text-secondary-900 md:text-sm">
              <i className="ri-shield-star-line text-secondary-700" aria-hidden="true" />
              {t("company.badgePatents")}
            </span>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-12 overflow-hidden rounded-lg border border-background-200 bg-background-100/60 p-4 md:p-8">
            <img
              src={coverageMapImage}
              alt={t("company.mapAlt")}
              title="TeleRay connected care sites across the United States"
              className="mx-auto h-auto w-full max-w-4xl object-contain"
            />
            <p className="mt-6 text-center text-xs leading-relaxed text-foreground-600 md:text-sm">
              {t("company.mapCaption")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}