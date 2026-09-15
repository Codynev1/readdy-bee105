import { useTranslation } from "react-i18next";
import Reveal from "@/components/base/Reveal";
import { trustedBadges } from "@/mocks/homeMedia";

export default function TrustedBadges() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-background-200 bg-background-100/70 py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <Reveal>
          <h2 className="text-center font-heading text-lg font-semibold text-foreground-950 md:text-xl">
            {t("trusted.title")}
          </h2>
          <p className="mt-2 text-center text-xs text-foreground-600 md:text-sm">
            {t("trusted.subtitle")}
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-center gap-6 sm:grid-cols-3">
          {trustedBadges.map((badge, index) => (
            <Reveal key={badge.name} delay={index * 90}>
              <a
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex h-20 items-center justify-center rounded-lg border border-background-200 bg-background-50 px-6 transition-colors hover:border-primary-300"
              >
                <img
                  src={badge.image}
                  alt={badge.name}
                  title={`TeleRay on ${badge.name}`}
                  className="max-h-12 w-auto object-contain"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}