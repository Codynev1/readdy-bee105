import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import CtaBand from "@/components/feature/CtaBand";
import Reveal from "@/components/base/Reveal";
import CheckList from "@/components/base/CheckList";

const partnerGroups = [
  {
    title: "Technology Partners",
    body: "Best-in-class hardware and infrastructure partners power every TeleRay deployment.",
    partners: [
      { name: "Axis Communications", detail: "Network PTZ cameras and AI analytics" },
      { name: "Hanwha Vision", detail: "Compliant two-way communication hardware" },
      { name: "Microsoft Azure", detail: "HIPAA compliant, self-healing cloud storage" },
      { name: "Convergint", detail: "Integration and deployment services" },
      { name: "Altus", detail: "Clinical technology implementation" },
    ],
  },
  {
    title: "EMR & PACS Partners",
    body: "Deep integrations that put imaging and virtual care inside the chart.",
    partners: [
      { name: "Epic", detail: "Deep linking, ECAL and Hyperspace workflows" },
      { name: "Cerner", detail: "Report and image enablement" },
      { name: "Athena", detail: "Ambulatory and specialty workflows" },
      { name: "Meditech", detail: "Hospital information system integration" },
      { name: "250+ other vendors", detail: "Custom HL7 and FHIR interfaces" },
    ],
  },
];

const channelBenefits = [
  "Reseller margins on subscriptions, hardware and integrations",
  "Dedicated channel partner manager and technical enablement",
  "Co-branded marketing assets and demo environment access",
  "Deal registration and joint solution design support",
  "Recurring revenue on renewals and managed service add-ons",
];

const idealPartners = [
  "Imaging centers and radiology groups",
  "Managed service providers and IT integrators",
  "Clinical engineering and biomedical teams",
  "Security, camera and low-voltage installers",
  "Healthcare consultants and telehealth advisors",
];

export default function Partners() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Partners"
        title="Partner with TeleRay"
        intro="TeleRay grows through a network of technology, imaging and channel partners who bring virtual care, image exchange and cloud PACS to their customers. Approved vendor status in all major health networks means you can move fast."
        primaryCta={{ label: "Become a Partner", href: "/contact" }}
        secondaryCta={{ label: "Talk to Channel Team", href: "/contact" }}
      />

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="space-y-16 md:space-y-20">
            {partnerGroups.map((group, groupIndex) => (
              <div key={group.title}>
                <Reveal>
                  <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
                      {group.title}
                    </h2>
                    <p className="mt-3 text-sm text-foreground-600 md:text-base">{group.body}</p>
                  </div>
                </Reveal>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.partners.map((partner, index) => (
                    <Reveal key={partner.name} delay={index * 70}>
                      <div
                        className={`flex h-full flex-col rounded-lg border p-6 ${
                          groupIndex % 2 === 0
                            ? "border-background-200 bg-background-100"
                            : "border-background-200 bg-background-50"
                        }`}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                          <i className="ri-links-line" aria-hidden="true" />
                        </span>
                        <h3 className="mt-4 font-heading text-base font-semibold text-foreground-950">
                          {partner.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                          {partner.detail}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
                  Why partner with TeleRay
                </h2>
                <div className="mt-6">
                  <CheckList items={channelBenefits} />
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-lg border border-background-200 bg-background-50 p-6 md:p-8">
                <h2 className="font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
                  Who we work with
                </h2>
                <div className="mt-6">
                  <CheckList items={idealPartners} tone="accent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to add TeleRay to your portfolio?"
        body="Tell us about your customers and territory and our channel team will map the fastest path to a first deployment."
        primaryLabel="Become a Partner"
        primaryHref="/contact"
        contactLabel="Contact Us"
        contactHref="/contact"
      />
    </PageLayout>
  );
}