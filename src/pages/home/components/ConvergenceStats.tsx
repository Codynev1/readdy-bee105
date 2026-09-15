import { useTranslation } from "react-i18next";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import ProgressBar from "./ProgressBar";
import StatCounter from "./StatCounter";
import { nurseIconImage } from "@/mocks/homeMedia";

type Counter = { value: number; suffix: string; label: string };
type Bar = { label: string; value: number };

export default function ConvergenceStats() {
  const { t } = useTranslation();
  const counters = t("stats.counters", { returnObjects: true }) as Counter[];
  const notes = t("stats.notes", { returnObjects: true }) as string[];
  const nurseBars = t("stats.nurseBars", { returnObjects: true }) as Bar[];
  const vacancyBars = t("stats.vacancyBars", { returnObjects: true }) as Bar[];

  return (
    <section id="stats" className="scroll-mt-24 bg-background-100/70 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t("stats.eyebrow")}
            title={t("stats.title")}
            subtitle={t("stats.subtitle")}
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {counters.map((counter, index) => (
            <Reveal key={counter.label} delay={index * 80}>
              <StatCounter value={counter.value} suffix={counter.suffix} label={counter.label} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <ul className="mt-8 grid grid-cols-1 gap-4 rounded-lg border border-background-200 bg-background-50 p-6 md:grid-cols-2">
            {notes.map((note) => (
              <li key={note} className="flex items-start gap-3">
                <i className="ri-record-circle-line mt-0.5 text-sm text-accent-500" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-foreground-700">{note}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-background-200 bg-background-50 p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground-950">
                {t("stats.nurseTitle")}
              </h3>
              <div className="mt-6 space-y-5">
                {nurseBars.map((bar) => (
                  <ProgressBar key={bar.label} label={bar.label} value={bar.value} />
                ))}
              </div>

              <div className="mt-7 flex items-start gap-4 rounded-lg bg-primary-50 p-4">
                <div className="w-16 h-14 shrink-0 flex items-center justify-center">
                  <img
                    src={nurseIconImage}
                    alt="Healthcare worker under pressure"
                    title="Nurse burnout in healthcare"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <ProgressBar
                    label={t("stats.nurseHighlightBarLabel")}
                    value={Number(t("stats.nurseHighlightValue"))}
                    showValue={false}
                    tone="accent"
                  />
                  <p className="mt-2 text-xs leading-relaxed text-foreground-600">
                    {t("stats.nurseHighlightText")}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-foreground-600">
                {t("stats.residentText")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-lg border border-background-200 bg-background-50 p-6">
              <h3 className="font-heading text-base font-semibold leading-snug text-foreground-950 md:text-lg">
                {t("stats.vacancyTitle")}
              </h3>
              <div className="mt-6 space-y-4">
                {vacancyBars.map((bar) => (
                  <ProgressBar key={bar.label} label={bar.label} value={bar.value} tone="accent" />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}