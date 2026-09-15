import { useState } from "react";
import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import CtaBand from "@/components/feature/CtaBand";
import Reveal from "@/components/base/Reveal";

const supportChannels = [
  {
    icon: "ri-customer-service-2-line",
    title: "On-Demand Technical Support",
    body: "USA based support for both providers and patients. We work with your locations, providers and family members to make sure everyone has the best experience possible.",
    value: "844-4-TELERAY (483-5372)",
    href: "tel:8444835372",
    cta: "Call Support",
  },
  {
    icon: "ri-mail-send-line",
    title: "Email Support",
    body: "Send us a description of the issue along with the site, user and study details and our team will respond promptly.",
    value: "info@teleray.com",
    href: "mailto:info@teleray.com",
    cta: "Email Support",
  },
  {
    icon: "ri-user-add-line",
    title: "Onboarding & Training",
    body: "Free consulting on implementing a telehealth program, plus training and onboarding for providers and staff.",
    value: "Schedule a session",
    href: "/contact",
    cta: "Request Training",
  },
];

const faqs = [
  {
    q: "How long does implementation normally take?",
    a: "Most implementations are completed within two weeks. EMR integrations with Epic, Cerner, Athena and others follow well-travelled paths, and every plan includes on-demand technical support for providers and patients.",
  },
  {
    q: "Do patients need to download an app?",
    a: "No. TeleRay runs in any modern web browser — Chrome, Edge, Firefox and more — so patients can join from a phone, tablet, laptop or desktop with no download required.",
  },
  {
    q: "How is TeleRay secured?",
    a: "Sessions use TLS with SRTP and DTLS-SRTP, AES 256-bit ciphers and HMAC-SHA1 integrity checks. Accounts are stored in Microsoft Azure's self-healing network located only in the USA, and no PHI is stored on endpoints. TeleRay indemnifies customers against breaches up to $2,000,000.",
  },
  {
    q: "Can TeleRay connect to our existing PACS and EMR?",
    a: "Yes. TeleRay integrates with any PACS and more than 250 EMR vendors, supports DICOM modality worklist, and can interface with HL7v2 and FHIR for message routing, report creation and custom workflows.",
  },
  {
    q: "What bandwidth do we need?",
    a: "TeleRay has low bandwidth requirements and includes a built-in, easy-to-run test that users can run to validate capability before go-live. High speed internet 1G+ is recommended for live modality streaming.",
  },
  {
    q: "Do you offer a free account?",
    a: "Yes. Register for free to send and receive images with patients and professionals. Paid plans add virtual care, storage, reporting and integrations.",
  },
];

export default function Support() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Support"
        title="Our Support Is Just Better"
        intro="Unlike other solutions, TeleRay has real IT support for providers and patients. We are your partner, not a software company — and that is the TeleRay promise."
        primaryCta={{ label: "Call Support", href: "tel:8444835372" }}
        secondaryCta={{ label: "Email Support", href: "mailto:info@teleray.com" }}
      />

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {supportChannels.map((channel, index) => (
              <Reveal key={channel.title} delay={index * 80}>
                <article className="flex h-full flex-col rounded-lg border border-background-200 bg-background-100 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <i className={`${channel.icon} text-lg`} aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 font-heading text-base font-semibold text-foreground-950 md:text-lg">
                    {channel.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-600">
                    {channel.body}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-primary-800">{channel.value}</p>
                  <a
                    href={channel.href}
                    className="mt-4 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary-500 px-5 py-2.5 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600"
                  >
                    {channel.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={faq.q} delay={index * 50}>
                  <div className="overflow-hidden rounded-lg border border-background-200 bg-background-50">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-heading text-sm font-semibold text-foreground-900 md:text-base">
                        {faq.q}
                      </span>
                      <i
                        className={isOpen ? "ri-subtract-line text-primary-600" : "ri-add-line text-primary-600"}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen ? (
                      <div className="border-t border-background-200 px-5 py-4">
                        <p className="text-sm leading-relaxed text-foreground-600">{faq.a}</p>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Still need a hand?"
        body="Our USA based team is ready to help with implementation, integration and day-to-day troubleshooting."
        primaryLabel="Contact Support"
        primaryHref="/contact"
        contactLabel="Explore Solutions"
        contactHref="/solutions"
      />
    </PageLayout>
  );
}