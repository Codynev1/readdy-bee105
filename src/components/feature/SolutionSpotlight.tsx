import Reveal from "@/components/base/Reveal";
import CheckList from "@/components/base/CheckList";
import { Link } from "react-router-dom";

type SolutionSpotlightProps = {
  eyebrow?: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  bullets?: string[];
  price?: string;
  reverse?: boolean;
  learnMoreHref?: string;
  downloadHref?: string;
  downloadLabel?: string;
};

export default function SolutionSpotlight({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  bullets,
  price,
  reverse = false,
  learnMoreHref,
  downloadHref,
  downloadLabel = "Download PDF",
}: SolutionSpotlightProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <Reveal className={reverse ? "lg:order-2" : ""}>
        <div className="overflow-hidden rounded-lg border border-background-200 bg-background-100">
          <img
            src={image}
            alt={imageAlt}
            title={title}
            className="h-[260px] w-full object-cover object-top md:h-[380px]"
          />
        </div>
      </Reveal>

      <Reveal delay={100} className={reverse ? "lg:order-1" : ""}>
        <div>
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-800">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mt-4 font-heading text-xl font-semibold leading-tight text-foreground-950 md:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">{body}</p>

          {bullets && bullets.length > 0 ? (
            <div className="mt-6">
              <CheckList items={bullets} />
            </div>
          ) : null}

          {price ? (
            <p className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent-100 px-4 py-2 text-sm font-semibold text-accent-800">
              <i className="ri-price-tag-3-line" aria-hidden="true" />
              {price}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {learnMoreHref ? (
              <Link
                to={learnMoreHref}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600"
              >
                Learn More
              </Link>
            ) : null}
            {downloadHref ? (
              <a
                href={downloadHref}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-foreground-300 bg-background-50 px-6 py-3 text-sm font-semibold text-foreground-900 transition-colors hover:border-primary-400 hover:text-primary-800"
              >
                <i className="ri-file-pdf-2-line" aria-hidden="true" />
                {downloadLabel}
              </a>
            ) : null}
          </div>
        </div>
      </Reveal>
    </div>
  );
}