import { useTranslation } from "react-i18next";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { solutionImages, solutionLinks } from "@/mocks/homeMedia";

type SolutionItem = { title: string; text: string };

export default function SolutionsSection() {
  const { t } = useTranslation();
  const items = t("solutions.items", { returnObjects: true }) as SolutionItem[];

  return (
    <section id="solutions" className="scroll-mt-24 bg-background-100/70 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t("solutions.eyebrow")}
            title={t("solutions.title")}
            subtitle={t("solutions.subtitle")}
          />
        </Reveal>

        <div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-product-shop
        >
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-background-200 bg-background-50 transition-colors hover:border-primary-300">
                <div className="flex h-[180px] w-full items-center justify-center bg-background-100 p-6">
                  <img
                    src={solutionImages[index]}
                    alt={item.title}
                    title={`TeleRay ${item.title}`}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-base font-semibold text-foreground-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-foreground-600 md:text-sm">
                    {item.text}
                  </p>
                  <a
                    href={solutionLinks[index]}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-primary-700 transition-colors hover:text-primary-600"
                  >
                    {t("solutions.knowMore")}
                    <i className="ri-arrow-right-line" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}