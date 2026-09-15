import Reveal from "@/components/base/Reveal";

type CtaBandProps = {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  contactLabel?: string;
  contactHref?: string;
};

export default function CtaBand({
  title = "Get in Touch",
  body = "To enroll or for general information, please contact us today.",
  primaryLabel = "Schedule a Demo",
  primaryHref = "/contact",
  contactLabel = "Contact Us",
  contactHref = "/contact",
}: CtaBandProps) {
  return (
    <section className="bg-background-100 py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <Reveal>
          <div className="rounded-lg border border-background-200 bg-background-50 px-6 py-12 text-center md:px-12">
            <h2 className="font-heading text-2xl font-semibold leading-tight text-foreground-950 md:text-3xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground-600 md:text-base">
              {body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={primaryHref}
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600 sm:w-auto"
              >
                {primaryLabel}
              </a>
              <a
                href={contactHref}
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md border border-foreground-300 bg-background-50 px-6 py-3 text-sm font-semibold text-foreground-900 transition-colors hover:border-primary-400 hover:text-primary-800 sm:w-auto"
              >
                {contactLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}