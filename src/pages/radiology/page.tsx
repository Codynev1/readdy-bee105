import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import CtaBand from "@/components/feature/CtaBand";
import Reveal from "@/components/base/Reveal";
import CheckList from "@/components/base/CheckList";
import { Link } from "react-router-dom";

const observationBullets = [
  "Healthcare practitioners can easily and efficiently monitor multiple patients or rooms and assist and interact if needed",
  "Review procedure, patient position, contrast management, breathing and speak to the patient",
  "Axis network camera mounted with an Axis network speaker and microphone",
  "May be used in any environment and is MRI approved up to 300 gauss",
  "Includes all TeleRay features for virtual visits and consultations",
];

const services = [
  {
    title: "Image Exchange",
    body: "TeleRay provides the only true private key peer-to-peer system. There is no other system that provides a higher level of security for peace of mind. Ultra-fast and ultra secure, free for patients and receivers, with thousands of sites in multiple countries and a $2,000,000 breach policy.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Image-Exchange.jpg",
    imageAlt: "Secure DICOM image exchange",
    href: "/ultra-secure-image-exchange-and-storage",
  },
  {
    title: "Cloud PACS - HIPAA Compliant Storage",
    body: "Robust reporting module to build custom reports with logos and contact information. Drag and drop fields, read current DICOM fields to replicate and build reports with recommendations and impressions, finalize with an uploaded signature and dynamically update measurements.",
    image: "https://teleray.com/wp-content/uploads/2025/07/HIPAA.jpg",
    imageAlt: "HIPAA compliant cloud PACS storage",
    href: "/ultra-secure-image-exchange-and-storage",
  },
  {
    title: "TeleRay Reporting",
    body: "Do not get fined by using outdated servers, portable drives or your modalities to store images. TeleRay's fully compliant storage with access from anywhere on any device is easy to use, with an FDA approved viewer and advanced reporting available. Lost files and studies can be up to a $50,000 fine each.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Teleray-Reporting-Final.png",
    imageAlt: "TeleRay Reporting radiology report workflow",
    href: "/reporting-emr-integration",
  },
];

export default function Radiology() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Radiology"
        title="Radiology Solutions"
        intro="From radiology observation in the imaging room to image exchange, HIPAA compliant cloud PACS and structured reporting, TeleRay connects the imaging department from front to back."
        primaryCta={{ label: "Schedule a Demo", href: "/contact" }}
        secondaryCta={{ label: "Full Catalog", href: "https://teleray.com/wp-content/uploads/2025/11/TeleRay-Catalog.pdf" }}
      />

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
                  Radiology Observation
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                  Healthcare practitioners can easily and efficiently monitor multiple patients or
                  rooms and ably assist and interact if needed, reviewing the procedure, patient
                  position and contrast management in real time.
                </p>
                <div className="mt-6">
                  <CheckList items={observationBullets} />
                </div>
                <Link
                  to="/radiology-observation-mri-approved"
                  className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600"
                >
                  Learn More
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-lg border border-background-200 bg-background-100">
                <img
                  src="https://teleray.com/wp-content/uploads/2025/08/Radiology-1.jpg"
                  alt="Radiology observation with an MRI approved network camera"
                  title="Radiology Observation"
                  className="h-[320px] w-full object-cover object-top md:h-[460px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
              TeleRay Radiology Services
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-background-200 bg-background-50">
                  <div className="h-48 w-full bg-background-100">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      title={service.title}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-base font-semibold text-foreground-950 md:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-600">
                      {service.body}
                    </p>
                    <Link
                      to={service.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-600"
                    >
                      Know More
                      <i className="ri-arrow-right-line" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to modernise your imaging workflow?"
        body="Talk to a TeleRay radiology specialist about observation, cloud PACS, image exchange and structured reporting."
        primaryLabel="Schedule a Demo"
        primaryHref="/contact"
        contactLabel="Full Catalog"
        contactHref="https://teleray.com/wp-content/uploads/2025/11/TeleRay-Catalog.pdf"
      />
    </PageLayout>
  );
}