import { useTranslation } from "react-i18next";
import Reveal from "@/components/base/Reveal";
import { platformVideoUrl } from "@/mocks/homeMedia";

const featureIcons = [
  "ri-lock-2-line",
  "ri-device-line",
  "ri-scan-2-line",
];

export default function OverviewSection() {
  const { t } = useTranslation();

  const features = [1, 2, 3].map((index) => ({
    icon: featureIcons[index - 1],
    title: t(`overview.feature${index === 1 ? "One" : index === 2 ? "Two" : "Three"}Title`),
    text: t(`overview.feature${index === 1 ? "One" : index === 2 ? "Two" : "Three"}Text`),
  }));

  return (
    <section id="overview" className="scroll-mt-24 bg-background-50 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-800">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                {t("overview.eyebrow")}
              </span>
              <h2 className="mt-4 font-heading text-2xl font-semibold leading-tight tracking-tight text-foreground-950 md:text-4xl">
                {t("overview.title")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                {t("overview.body")}
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 90}>
                  <div className="flex items-start gap-4 rounded-lg border border-background-200 bg-background-100/60 p-4 md:p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                      <i className={`${feature.icon} text-xl`} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground-950 md:text-base">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-foreground-600 md:text-sm">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-lg border border-background-200 bg-foreground-950">
                <div className="relative aspect-video w-full">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={platformVideoUrl}
                    title={t("overview.videoTitle")}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-primary-50 p-4">
                  <p className="font-heading text-lg font-bold text-primary-800">99.99%</p>
                  <p className="mt-1 text-xs text-foreground-600">Platform uptime across connected sites</p>
                </div>
                <div className="rounded-lg bg-accent-50 p-4">
                  <p className="font-heading text-lg font-bold text-accent-700">2 weeks</p>
                  <p className="mt-1 text-xs text-foreground-600">Typical EMR implementation timeline</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}