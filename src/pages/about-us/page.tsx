import { useState } from "react";
import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import CtaBand from "@/components/feature/CtaBand";
import Reveal from "@/components/base/Reveal";
import CheckList from "@/components/base/CheckList";
import StatCounter from "@/pages/home/components/StatCounter";

const team = [
  { name: "Saumay Kumar | CEO", role: "Board Member, driver of innovation and results", image: "https://teleray.com/wp-content/uploads/2026/06/saumay.jpg", linkedin: "https://www.linkedin.com/in/timothychou/" },
  { name: "Timothy Kelley | CSO", role: "CSO / Founder | Helping Hospitals, Clinics and Practices", image: "https://teleray.com/wp-content/uploads/2025/11/018-SoLqll8nvDA.jpeg", linkedin: "https://www.linkedin.com/in/timothykelley2/" },
  { name: "Kevin Thompson | CDO", role: "CDO | Subject Matter Expert for implementation and strategy", image: "https://teleray.com/wp-content/uploads/2025/11/Kevin-Picture.jpg", linkedin: "https://www.linkedin.com/in/kevin-thompson-1222037/" },
  { name: "Timothy Chou", role: "Board Member, senior cloud lecturer and cloud subject matter expert", image: "https://teleray.com/wp-content/uploads/2025/11/tim-chou.jpeg", linkedin: "https://www.linkedin.com/in/timothychou/" },
  { name: "Boris Zavalkovskiy", role: "Director Enterprise Architecture at AIdoc — PACS Director Mayo, Johns Hopkins, Stanford and CTCA", image: "https://teleray.com/wp-content/uploads/2025/11/boris.png", linkedin: "https://www.linkedin.com/in/boriszavalkovskiy/" },
  { name: "Cody Neville | CTO", role: "Builder of mission critical applications in radiology and virtual care", image: "https://teleray.com/wp-content/uploads/2025/10/Cody.jpg", linkedin: "https://www.linkedin.com/in/cody-neville-44238519a/" },
  { name: "Richard Rost | VP Radiology Solutions", role: "Provider of mission critical Radiology and Virtual Care solutions", image: "https://teleray.com/wp-content/uploads/2025/10/Richard.jpg", linkedin: "https://www.linkedin.com/in/richard-rost-24b470b/" },
  { name: "Nick Murillo | VP Channel Partners", role: "Subject Matter Expert of Radiology and imaging workflow solutions", image: "https://teleray.com/wp-content/uploads/2026/01/Nick.jpg", linkedin: "https://www.linkedin.com/in/nickemurillo/" },
  { name: "Tanvir Ajmeri", role: "IT Support Engineer at TeleRay Technologies", image: "https://teleray.com/wp-content/uploads/2025/10/Tanvir-Ajmeri.jpg", linkedin: "https://www.linkedin.com/in/tanvirajmeri24/" },
];

const differentiators = [
  "We provide virtual care solutions oriented around radiology with integrations including AI for fall risks, sound detection, aggression detection and device sound detection",
  "Deeply integrated with Epic, Cerner, Athena and over 200 EMRs",
  "From May 2020, validates reimbursement allowing additional revenue to be generated",
  "HIPAA, NIST, CORL, MDS2, SOC2, SOC3, ISO17001 and ISO 9001 compliant, working across all tech platforms unlike unsecure methods such as FaceTime, Skype, Zoom or Teams",
  "Low bandwidth requirements with a built-in, easy to run test by the user to validate capability",
  "Partnered with best-in-class companies such as Axis, Hanwha, Convergint and Altus",
];

const vision = [
  "Deliver cutting edge technologies to significantly improve positive patient outcomes",
  "Since 2020, TeleRay has intentionally designed technology solutions to create direct cost savings and immediate efficiencies in the delivery of healthcare",
  "The company continually innovates because the Founders are passionate about software that drives down costs while increasing quality and bandwidth of care",
  "The company relentlessly seeks to bridge gaps in the continuum of care with user-friendly, 100% compliant solutions",
];

const awards = [
  "Top 10 Most Advanced Medical Imaging Solution Provider",
  "Top 10 Fastest Growing Healthcare Companies",
  "Top 10 Best Healthcare Companies",
];

const tabs = [
  {
    id: "why",
    label: "Why TeleRay",
    title: "Why TeleRay",
    body: "TeleRay was built with security and workflow in mind to make sure both providers and less technical patients are able to join a highly secure, HD quality telehealth/video conference with ease — standalone or through EMRs such as Epic for telenursing and telesitting. TeleRay allows for one-click invites to be sent via text message or email from bedside PDI stations to providers and family members, enabling quick and effortless secure conferences with no downloads and cross-platform performance.",
    image: "https://teleray.com/wp-content/uploads/2023/01/shutterstock_1671776209.jpg",
    imageAlt: "Clinician using TeleRay for a secure telehealth conference",
  },
  {
    id: "support",
    label: "TeleRay IT Support",
    title: "Our Support Is Just Better",
    body: "Unlike all other solutions, TeleRay has real IT support for providers and patients. We work with the locations, providers and patients/family members to make sure everyone has the best experience possible. Good support is critical when implementing a video solution, especially when integrating into an EMR and PACS systems such as Epic. TeleRay's platform is designed and architected to avoid common issues and we actively help guide the user experience. We are your partner, not a software company — and that's the TeleRay promise!",
    image: "https://teleray.com/wp-content/uploads/2023/01/shutterstock_1179559909.jpg",
    imageAlt: "TeleRay IT support working with providers and patients",
  },
  {
    id: "security",
    label: "Security",
    title: "Security",
    body: "No stored Patient Health Information (PHI). All accounts are stored in Microsoft Azure's self-healing network with advanced security protocols enabled, located only in the USA. Sessions are secure with tokens that are regenerated, random AES keys are generated by clients at the beginning of the media connection, and additional keys are generated periodically throughout the session. TeleRay employs TLS to encrypt both voice and video data using SRTP and DTLS-SRTP, with AES 256-bit ciphers and HMAC-SHA1 integrity verification.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Teleray-Security-1024x700.jpg",
    imageAlt: "TeleRay security architecture diagram",
  },
];

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("why");
  const current = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <PageLayout>
      <PageHero
        eyebrow="About Us"
        title="150+ Years of Healthcare Technology Experience"
        intro="TeleRay professionals represent more than 150 years of experience in the field to bring next generation communication platforms to the market. We strive to meet our customers' needs through a needs based approach while keeping security, speed and ease of access as top priorities."
        primaryCta={{ label: "Learn More", href: "/solutions" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      >
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4">
          <div className="rounded-lg bg-background-50/10 p-5 text-center">
            <p className="font-heading text-3xl font-bold text-background-50 md:text-4xl">150+</p>
            <p className="mt-1 text-xs text-background-100/80">Years of experience</p>
          </div>
          <div className="rounded-lg bg-background-50/10 p-5 text-center">
            <p className="font-heading text-3xl font-bold text-background-50 md:text-4xl">3,500+</p>
            <p className="mt-1 text-xs text-background-100/80">Sites installed</p>
          </div>
        </div>
      </PageHero>

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-background-200 bg-background-100">
                <iframe
                  title="TeleRay platform overview video"
                  src="https://www.youtube.com/embed/9MPyCNL8mHs"
                  className="h-[280px] w-full md:h-[380px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
                  TeleRay Technologies and Innovation
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                  TeleRay has integrated best-in-class medical image and patient information
                  distribution software with the most innovative virtual care technology available to
                  deliver the world's most scalable, accessible and user-friendly healthcare
                  communications platform. Virtual care built around the primary diagnostic tool —
                  radiology — to expand the use cases and efficiencies.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCounter value={37} suffix="+" label="of the top 50 medical centers (Cedars Sinai, Shriners, Cleveland Clinic, Northwestern, Harvard, Columbia, Cornell, New York Presbyterian, Duke, Baylor and more)" />
            <StatCounter value={3500} suffix="+" label="Sites installed — well-known brand and approved vendor in all major health networks" />
            <StatCounter value={10} label="Pending patents on multiple healthcare technologies" />
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
              TeleRay Differentiators
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 max-w-4xl">
              <CheckList items={differentiators} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
                  Company Vision
                </h2>
                <div className="mt-6">
                  <CheckList items={vision} tone="accent" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-lg bg-gradient-to-br from-primary-700 to-primary-900 p-8">
                <h3 className="font-heading text-lg font-semibold leading-snug text-background-50 md:text-xl">
                  Leading the Next Generation with Technology that Matters
                </h3>
                <div className="mt-8 space-y-4">
                  {awards.map((award, index) => (
                    <div key={award} className="flex items-start gap-3 rounded-md bg-background-50/10 p-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500 text-background-50">
                        <i className="ri-award-line" aria-hidden="true" />
                      </span>
                      <p className="text-sm font-medium text-background-50">
                        {award}
                        {index === 0 ? <span className="ml-1 text-background-100/70">— 2025</span> : null}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
              Meet the Team
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 60}>
                <article className="flex h-full flex-col items-center rounded-lg border border-background-200 bg-background-50 p-6 text-center">
                  <div className="h-28 w-28 overflow-hidden rounded-full border border-background-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      title={member.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground-950">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-foreground-600">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={`${member.name} on LinkedIn`}
                    className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-background-200 text-primary-700 transition-colors hover:border-primary-300 hover:bg-primary-50"
                  >
                    <i className="ri-linkedin-fill" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 rounded-lg border border-background-200 bg-background-50 p-8 text-center">
              <h3 className="font-heading text-lg font-semibold text-foreground-950 md:text-xl">
                Ask about becoming an advisor
              </h3>
              <p className="mt-2 text-sm text-foreground-600">
                TeleRay is always seeking great advisors to help our mission. Please inquire.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <div className="flex justify-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-background-200 bg-background-100 p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    aria-selected={activeTab === tab.id}
                    className={`cursor-pointer whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                      activeTab === tab.id
                        ? "bg-primary-500 text-background-50"
                        : "text-foreground-700 hover:text-primary-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal key={`${current.id}-text`}>
              <div>
                <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground-950 md:text-2xl">
                  {current.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                  {current.body}
                </p>
              </div>
            </Reveal>
            <Reveal delay={100} key={`${current.id}-image`}>
              <div className="overflow-hidden rounded-lg border border-background-200 bg-background-100">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  title={current.title}
                  className="h-[280px] w-full object-cover object-top md:h-[380px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <div className="rounded-lg bg-gradient-to-br from-primary-700 to-primary-900 px-6 py-12 text-center md:px-12">
              <h2 className="font-heading text-2xl font-semibold text-background-50 md:text-3xl">
                Liability — You're Covered
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-background-100/85 md:text-base">
                There is no liability with telehealth that is different from an in-office visit. If
                your carrier does not cover telehealth as a standard of care, you need a new carrier.
                We are the only company that insures its customers for up to $2,000,000 per breach
                instance.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-accent-600"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want to know more about TeleRay?"
        body="Download the full catalog or talk to our team about your site and workflow."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        contactLabel="Full Catalog"
        contactHref="https://teleray.com/wp-content/uploads/2025/11/TeleRay-Catalog.pdf"
      />
    </PageLayout>
  );
}