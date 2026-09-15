import { useTranslation } from "react-i18next";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { dicomImage } from "@/mocks/homeMedia";

export default function IntegrationExperts() {
  const { t } = useTranslation();
  const dicomPoints = t("integrations.dicomPoints", { returnObjects: true }) as string[];
  const hl7Points = t("integrations.hl7Points", { returnObjects: true }) as string[];

  const blocks = [
    { title: t("integrations.dicomTitle"), points: dicomPoints },
    { title: t("integrations.hl7Title"), points: hl7Points },
  ];

  return (
    <section id="integrations" className="scroll-mt-24 bg-background-50 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t("integrations.eyebrow")}
            title={t("integrations.title")}
            subtitle={t("integrations.subtitle")}
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            {blocks.map((block, blockIndex) => (
              <Reveal key={block.title} delay={blockIndex * 100}>
                <div>
                  <h3 className="flex items-center gap-3 font-heading text-lg font-semibold text-foreground-950 md:text-xl">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                      <i
                        className={blockIndex === 0 ? "ri-image-2-line" : "ri-file-list-3-line"}
                        aria-hidden="true"
                      />
                    </span>
                    {block.title}
                  </h3>
                  <ul className="mt-5 space-y-3 border-l border-background-200 pl-5">
                    {block.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <i className="ri-checkbox-circle-fill mt-0.5 text-base text-accent-500" aria-hidden="true" />
                        <span className="text-sm text-foreground-700 md:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-lg border border-background-200 bg-background-100">
                <img
                  src={dicomImage}
                  alt={t("integrations.imageAlt")}
                  title="TeleRay DICOM, HL7 and FHIR integration"
                  className="h-[300px] w-full object-cover object-top md:h-[420px]"
                />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {["DICOM", "HL7", "FHIR"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-secondary-100 px-3 py-2 text-center text-xs font-semibold text-secondary-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}