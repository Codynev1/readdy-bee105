import { useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { whyDoctorsImage, whyPatientsImage } from "@/mocks/homeMedia";

type Audience = "doctors" | "patients";

export default function WhyTeleRay() {
  const { t } = useTranslation();
  const [audience, setAudience] = useState<Audience>("doctors");

  const isDoctors = audience === "doctors";
  const points = (
    t(isDoctors ? "why.doctorsPoints" : "why.patientsPoints", { returnObjects: true }) as string[]
  ).slice();
  const title = t(isDoctors ? "why.doctorsTitle" : "why.patientsTitle");
  const image = isDoctors ? whyDoctorsImage : whyPatientsImage;

  return (
    <section id="why-teleray" className="scroll-mt-24 bg-background-50 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t("why.eyebrow")}
            title={t("why.title")}
            align="center"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex justify-center">
            <div
              className="inline-flex items-center gap-1 rounded-full border border-background-200 bg-background-100 p-1"
              role="tablist"
              aria-label={t("why.eyebrow")}
            >
              <button
                type="button"
                role="tab"
                aria-selected={isDoctors}
                onClick={() => setAudience("doctors")}
                className={`cursor-pointer whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                  isDoctors
                    ? "bg-primary-500 text-background-50"
                    : "text-foreground-700 hover:text-primary-700"
                }`}
              >
                {t("why.doctorsTab")}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={!isDoctors}
                onClick={() => setAudience("patients")}
                className={`cursor-pointer whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                  !isDoctors
                    ? "bg-primary-500 text-background-50"
                    : "text-foreground-700 hover:text-primary-700"
                }`}
              >
                {t("why.patientsTab")}
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal key={`${audience}-text`}>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
                {title}
              </h3>
              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
                      <i className="ri-check-line text-sm" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-foreground-700 md:text-base">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://teleray.io/sign-up-exchange-user"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600"
                >
                  {t("why.freeAccount")}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-foreground-300 bg-background-50 px-6 py-3 text-sm font-semibold text-foreground-900 transition-colors hover:border-primary-400 hover:text-primary-800"
                >
                  {t("why.requestDemo")}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} key={`${audience}-image`}>
            <div className="overflow-hidden rounded-lg border border-background-200 bg-background-100">
              <img
                src={image}
                alt={`${title} using the TeleRay platform`}
                title="TeleRay virtual care for providers and patients"
                className="h-[280px] w-full object-cover object-top md:h-[380px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}