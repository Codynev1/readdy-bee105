import { Navigate, useLocation } from "react-router-dom";
import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import CtaBand from "@/components/feature/CtaBand";
import Reveal from "@/components/base/Reveal";
import CheckList from "@/components/base/CheckList";
import { Link } from "react-router-dom";
import { solutionDetails } from "@/mocks/solutions";

export default function SolutionDetail() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/\/+$/, "") || pathname;
  const solution = solutionDetails.find((item) => item.path === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <PageLayout>
      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.title}
        intro={solution.intro}
        primaryCta={{ label: "Schedule a Demo", href: "/contact" }}
        secondaryCta={{ label: "All Solutions", href: "/solutions" }}
      />

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-background-200 bg-background-100">
                <img
                  src={solution.image}
                  alt={solution.imageAlt}
                  title={solution.title}
                  className="h-[300px] w-full object-cover object-top md:h-[460px]"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground-950 md:text-2xl">
                  What's included
                </h2>
                <div className="mt-6">
                  <CheckList items={solution.bullets} />
                </div>

                {solution.price ? (
                  <p className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent-100 px-4 py-2 text-sm font-semibold text-accent-800">
                    <i className="ri-price-tag-3-line" aria-hidden="true" />
                    {solution.price}
                  </p>
                ) : null}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600"
                  >
                    Talk to Us
                  </Link>
                  <a
                    href="https://teleray.com/wp-content/uploads/2025/11/TeleRay-Catalog.pdf"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-foreground-300 bg-background-50 px-6 py-3 text-sm font-semibold text-foreground-900 transition-colors hover:border-primary-400 hover:text-primary-800"
                  >
                    <i className="ri-file-pdf-2-line" aria-hidden="true" />
                    Download PDF
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 border-t border-background-200 pt-10">
            <h2 className="font-heading text-lg font-semibold text-foreground-950 md:text-xl">
              Related solutions
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {solution.related.map((item) => (
                <Link
                  key={`${item.label}-${item.href}`}
                  to={item.href}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-background-200 bg-background-100 px-5 py-4 transition-colors hover:border-primary-300 hover:bg-background-50"
                >
                  <span className="text-sm font-medium text-foreground-800 group-hover:text-primary-800">
                    {item.label}
                  </span>
                  <i className="ri-arrow-right-line text-primary-600" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Questions about this solution?"
        body="Our team can map this solution to your exact site, workflow and EMR."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        contactLabel="Browse All Solutions"
        contactHref="/solutions"
      />
    </PageLayout>
  );
}