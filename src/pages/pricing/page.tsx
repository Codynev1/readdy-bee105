import { useState } from "react";
import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import CtaBand from "@/components/feature/CtaBand";
import PricingForm from "@/components/feature/PricingForm";
import Reveal from "@/components/base/Reveal";
import CheckList from "@/components/base/CheckList";
import { Link } from "react-router-dom";

const pricingTabs = [
  {
    id: "emr",
    label: "EMR Integration",
    title: "EMR Integration",
    body: "TeleRay integrates with EPIC, Cerner and many other popular EMR vendors. Most projects can be completed in less than 2 weeks.",
    points: [
      "Enable radiology reports to be posted into patient charts",
      "Embed web viewer links directly in patient records (image enablement)",
    ],
  },
  {
    id: "migration",
    label: "Legacy Study Migration",
    title: "Legacy Study Migration",
    body: "TeleRay cloud storage is a cost-effective solution for any size 'on-premise to cloud' migration. TeleRay's bulk-upload software is capable of migrating studies to cloud storage with no user intervention required.",
    points: [
      "Migration may be timed to run at low network use times such as 11pm to 5am",
      "Data is normalized to ensure restoration and usability",
      "Works with all legacy PACS, file systems and modalities",
    ],
  },
  {
    id: "hardware",
    label: "TurnKey Hardware",
    title: "Turnkey Hardware",
    body: "Hardware is delivered preconfigured and customized to your site: enjoy plug-and-play convenience. In addition, support software is built-in for easy access to TeleRay technicians.",
    points: [
      "Workstations, mini-servers and medical grade carts",
      "Diagnostic monitors available",
      "Delivered ready to deploy",
    ],
    cta: { label: "Hardware Packages", href: "/hardware-packages" },
  },
  {
    id: "developers",
    label: "For Developers",
    title: "For Developers",
    body: "Use the TeleRay development API to extend functionality and create custom workflows specific to your project requirements.",
    points: [
      "Current API features include cloud storage upload and anonymization",
      "Custom API functionality is available upon request",
    ],
  },
  {
    id: "hl7",
    label: "Custom HL7 Interface",
    title: "Custom HL7 Interface",
    body: "TeleRay can interface with HL7v2 and FHIR to enable:",
    points: ["Message routing", "Radiology report creation", "Custom EMR integrations"],
  },
  {
    id: "worklist",
    label: "DICOM Modality Worklist",
    title: "DICOM Modality Worklist",
    body: "TeleRay provides a simple worklist client to query and display patient demographics and appointment information. The client also implements procedure step protocols to relay status information back to the worklist server for a complete workflow solution.",
    points: [
      "Query and display patient demographics",
      "Appointment and procedure step protocols",
      "Complete workflow integration",
    ],
  },
];

const includedOne = [
  "$2 Million Insurance Policy",
  "Superior Service",
  "Signed BAA (Business Associate Agreement)",
  "Free Patient Onboarding",
  "Access to Telehealth Experts",
  "Self Credentialing (No Password Admin)",
  "Alerts & Notifications",
  "Burn Encrypted Discs or Flash Drives",
  "Anonymization Protocols",
  "Auto-Image Transfer",
  "HIPAA Compliant",
  "Mobile Image Viewing",
  "Workflow Integration",
  "Split-Screen Viewing (Telehealth & Images)",
  "On-Demand Tech Support",
  "PET/CT Viewer",
];

const includedTwo = [
  "Fast Installation & Easy Setup",
  "Integration with Any PACS",
  "EHR Integration",
  "Blazing Speed with P2P (Fastest in the Industry)",
  "One-Click Anonymization",
  "Rule-Based Automation",
  "Access & Approval Controls",
  "Full Audit Logging",
  "Cardiology Viewer Option",
  "iOS Viewer",
  "Import Any File Type & Convert to DICOM",
  "Import CDs from Anywhere",
  "Medical Report Sharing",
  "Send Non-DICOM Data",
  "LDAP Integration",
  "Best-in-Class Private Key Security (Exceeds AES 256)",
];

const includedThree = [
  "Provider Portal Integration",
  "3rd Party Reporting Integration",
  "Automated CD/DVD Burners",
  "Built-In Rules-Based Routing",
  "Auto-Fix OEM Integration Issues",
  "Document Scanning — Print to DICOM",
  "Scan & Digitize Film",
  "FDA Registered Device",
  "Import-Based Rules",
  "Convert DICOM Images to JPEGs or WMV Videos",
  "Patient Image Sharing",
  "Access & Approval Controls",
  "Convert Non-DICOM Images",
  "30-Day Guarantee or Money Back",
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(pricingTabs[0].id);
  const current = pricingTabs.find((tab) => tab.id === activeTab) ?? pricingTabs[0];

  return (
    <PageLayout>
      <PageHero
        eyebrow="Pricing"
        title="Please inquire to receive information, schedule a brief demo, or a time to chat."
        intro="Every site is different. Tell us about your modalities, locations and EMR and we will put together a quote that fits your workflow and budget."
        primaryCta={{ label: "Request a Quote", href: "#pricing-quote-form" }}
        secondaryCta={{ label: "Call 844-4-TELERAY", href: "tel:8444835372" }}
      />

      <section className="bg-background-50 py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-background-200 bg-background-100 p-6 md:flex-row md:items-center md:p-8">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
                  Register for free to receive images
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-foreground-600">
                  Create a free account to send and receive studies with patients and professionals.
                </p>
              </div>
              <a
                href="https://teleray.io/sign-up?type=professional"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-accent-600 md:w-auto"
              >
                Register Now
              </a>
            </div>
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <PricingForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-1">
              {pricingTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  aria-selected={activeTab === tab.id}
                  className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold transition-colors md:text-sm ${
                    activeTab === tab.id
                      ? "bg-primary-500 text-background-50"
                      : "bg-background-50 text-foreground-700 hover:text-primary-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal key={current.id}>
            <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-background-200 bg-background-50 p-6 md:p-8">
              <h3 className="font-heading text-lg font-semibold text-foreground-950 md:text-xl">
                {current.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-600 md:text-base">
                {current.body}
              </p>
              <div className="mt-5">
                <CheckList items={current.points} />
              </div>
              {current.cta ? (
                <Link
                  to={current.cta.href}
                  className="mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600"
                >
                  {current.cta.label}
                </Link>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
              All Plans Include
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-lg border border-background-200 bg-background-100 p-6">
                <CheckList items={includedOne} tone="primary" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-lg border border-background-200 bg-background-100 p-6">
                <CheckList items={includedTwo} tone="accent" />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-full rounded-lg border border-background-200 bg-background-100 p-6">
                <CheckList items={includedThree} tone="secondary" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Larger institutions and multi-site locations"
        body="Please call 844-4-TELERAY (483-5372) for a custom quote tailored to your network."
        primaryLabel="Get Started Today"
        primaryHref="/contact"
        contactLabel="Contact Us"
        contactHref="/contact"
      />
    </PageLayout>
  );
}