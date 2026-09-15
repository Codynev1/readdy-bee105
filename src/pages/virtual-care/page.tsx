import { useState } from "react";
import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import CtaBand from "@/components/feature/CtaBand";
import Reveal from "@/components/base/Reveal";
import CheckList from "@/components/base/CheckList";
import StatCounter from "@/pages/home/components/StatCounter";
import ProgressBar from "@/pages/home/components/ProgressBar";

const keyFeatures = [
  "Integrates with all EMRs including EPIC, Cerner, Meditech and hundreds more",
  "Works on desktop, tablet, laptop or mobile",
  "No download required — use TeleRay on any web browser (Chrome, Edge, Firefox, etc.)",
  "HIPAA compliant and FDA registered with advanced encryption architecture",
  "On-demand USA based technical support for both patients and providers",
  "Customization of software to the organization's branding",
  "Utilize existing footwall TV and nurse call system",
];

const implementationPoints = [
  "Free consulting on implementation of a telehealth program",
  "Radiological integration",
  "DICOM file transfer and study share capability for provider and patient review",
  "Add multiple callers and transfer calls",
  "Can be implemented quickly",
];

const standardFlow = [
  "Typically 1 way communication",
  "Standard camera",
  "One caller per session",
  "No outside access",
  "High cost per minute — cost of ownership",
  "Lack of portability",
];

const telerayFlow = [
  "Ultra secure P2P framework",
  "High res Axis/Hanwha PTZ camera",
  "2 way communication",
  "Add images, results, labs to any consultation",
  "AI/ML monitoring of patient movement, falls and sounds",
  "Outside access to providers, family and friends",
  "Move data seamlessly to providers and patients",
  "Fully integrated cart options",
  "Low cost of ownership and service",
];

const cameraStats = [
  { title: "Industry leader in IP video", text: "Best-in-class network cameras engineered for healthcare." },
  { title: "Video surveillance, access control, intercom & audio", text: "A complete network solution portfolio." },
  { title: "4,210 employees in 50+ countries", text: "Global scale and support behind every deployment." },
];

const cameraStatsTwo = [
  { title: "Fully NDAA & TAA Compliant", text: "Not made in China — procurement friendly." },
  { title: "1.6 B USD economy", text: "A stable, long-term technology partner." },
  { title: "Committed to UN Global Compact", text: "Responsible, sustainable business practices." },
];

const aiTools = [
  {
    title: "All sounds monitored",
    text: "Devices such as infusion pumps are monitored, alerting staff to changes before they escalate.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Infusion-Pumps.jpg",
    imageAlt: "Infusion pump monitoring with TeleRay AI",
  },
  {
    title: "Aggression, cough & device detection",
    text: "AI alerts for aggression, cough and medical device sounds to prepare staff before entering the room.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Beside-Cough.jpg",
    imageAlt: "Bedside cough and sound detection",
  },
  {
    title: "Privacy shield",
    text: "Axis Live Privacy Shield protects patient privacy and gives comfort to patients requiring constant monitoring.",
    image: "https://teleray.com/wp-content/uploads/2024/04/axis-live-privacy-shield.jpg",
    imageAlt: "Axis live privacy shield for patient privacy",
  },
];

const roomFeatures = [
  "Full duplex audio and video communication",
  "Sharing of images, labs, results and reports",
  "Exchange of data in seconds",
  "Add up to 10 callers inside and outside facility walls",
  "Images viewed in an FDA approved diagnostic viewer",
  "Fully integrated with EPIC and 200+ EMR systems",
];

const featuredUseCases = [
  { title: "Ad-hoc Patient Communication", text: "Nurses instantly connect with patients using in-room network cameras or intercoms, all from the patient's chart." },
  { title: "Remote Nursing Admission & Discharge", text: "Integrates video, audio and EMR for efficient admissions and discharges from one interface." },
  { title: "Efficient Collaboration", text: "Secure remote collaboration for complex cases, combining network audio/video with TeleRay conferencing and EMR tools." },
  { title: "Patient Distress Detection", text: "Detect audible distress, aggression and falls in real time with acoustic analytics and AI camera monitoring." },
  { title: "Virtual Rounding", text: "Staff check in on patients from a central location, optimising physical rounds based on immediate needs." },
  { title: "Consultations with TeleRay LIVE", text: "High-quality remote consultations through network video and audio, giving clinicians consistent and secure care options." },
];

const advancedUseCases = [
  { title: "Document Patient-Staff Interaction", text: "Wearable safety cameras and audio-equipped room devices document interactions and alert de-escalation teams." },
  { title: "Virtual Visitors", text: "Securely connect patients with family and friends via in-room video and audio — a safe alternative to in-person visits." },
  { title: "ICU Support", text: "Oversee multiple ICU patients from a central location using PTZ cameras for high quality, interactive monitoring." },
  { title: "Training", text: "Instructors guide multiple learners through visual aids and wearable cameras, capturing processes for ongoing training." },
  { title: "Medication Validation", text: "Remote pharmacists or nurses validate medications, reducing workflow strain and preventing drug diversion." },
];

const useCaseAccordion = [
  {
    title: "PACS",
    body: "Image enablement, image exchange with report, send studies to patients, referring and specialist physicians, access to images anywhere on any device, tele-stroke — the platform connects PACS and virtual nursing at the same time for ED collaboration, plus live streaming of any modality. Admissions, scripts and discharge rounds will be virtual; with TeleRay your infrastructure will be prepared for this evolution.",
  },
  {
    title: "Tele-sitting (Epic Monitor + Cameras)",
    body: "Epic Deep Linking: one-time set up fee with no recurring fees, two-way audio, one-way video for fixed or mobile workflows, two-way video (fixed in room only), PTZ controls and preferred language push. Epic ECAL: channel MSRP plus base installation package. Artificial intelligence support includes ARTPEC8 camera chips with models for patients out of bed, falls, aggression and cough detection, camera event integration into SPOK, and multi-tenant support for tele-sitting and virtual nursing.",
  },
  {
    title: "Tele-Nursing (Epic or any EMR)",
    body: "Two-way video and audio for ad hoc clinical communications with remote nurses, virtual care consultations, remote nursing admissions and discharges, patient consent, specialist collaboration, virtual rounding, dual medication validation, TeleICU and virtual visitations — supported for both fixed in-room and mobile workflows with Epic Context Aware Linking.",
  },
];

const nurseBars = [
  { label: "Tired all the time", value: 50 },
  { label: "Sleepless nights", value: 35 },
  { label: "Weight gain", value: 33 },
  { label: "High anxiety", value: 32 },
  { label: "Aches and pains", value: 32 },
  { label: "Depression", value: 19 },
];

const vacancyBars = [
  { label: "Nursing", value: 44 },
  { label: "Operational", value: 43 },
  { label: "Behavioral health professional", value: 42 },
  { label: "Administrative", value: 34 },
  { label: "Clinical assistants", value: 28 },
  { label: "Pharmacists", value: 26 },
  { label: "Technicians", value: 25 },
  { label: "All others", value: 24 },
  { label: "Physical / Occupational therapy", value: 13 },
];

export default function VirtualCare() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Virtual Care"
        title="TeleRay Virtual Care"
        intro="TeleRay virtual care solutions are an easy to implement platform for all types of use cases including telenursing, telesitting, tele-ICU, security, patient monitoring and more. Our software seamlessly integrates with your existing EMR (EPIC, Cerner, Meditech, Athena and 200 more) for notifications, statistics, data, AI alerts, scheduling, viewing of images and exchange of patient data. Whether you need to monitor one or a thousand patients, TeleRay will meet your needs."
        primaryCta={{ label: "Schedule a Demo", href: "/contact" }}
        secondaryCta={{ label: "Request a Free Account", href: "https://teleray.io/sign-up-exchange-user" }}
      />

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
              Key Features
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <CheckList items={keyFeatures} />
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-lg border border-background-200 bg-background-100">
                <img
                  src="https://teleray.com/wp-content/uploads/2024/02/virtual-nursing-sitting-1024x397.png"
                  alt="Virtual nursing and telesitting rooms monitored with TeleRay"
                  title="TeleRay Virtual Care"
                  className="h-[240px] w-full object-contain p-4 md:h-[300px]"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 rounded-lg border border-background-200 bg-background-100 p-6 md:p-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <blockquote className="font-heading text-lg font-semibold leading-relaxed text-foreground-900 md:text-xl">
                &ldquo;TeleRay has been exceptional in handling the implementation and support. I made
                a good choice!&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-foreground-600">Dr. Manning — Carmel, IN</p>
            </Reveal>
            <Reveal delay={100}>
              <CheckList items={implementationPoints} tone="accent" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
              We Understand the Convergence of Issues
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCounter value={51} suffix="%" label="of physicians reported being burned out in 2017, up from 40% in 2013" />
            <StatCounter value={59} suffix="%" label="physician burnout rate in emergency medicine, highest among all specialties" />
            <StatCounter value={42} suffix="%" label="physician burnout rate in psychiatry and mental health, lowest among all specialties" />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="rounded-lg border border-background-200 bg-background-50 p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground-950">
                  Nurse feeling the pressure
                </h3>
                <div className="mt-6 space-y-4">
                  {nurseBars.map((bar) => (
                    <ProgressBar key={bar.label} label={bar.label} value={bar.value} tone="accent" />
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <ProgressBar label="7 out of 10" value={70} showValue={false} tone="primary" />
                    <p className="mt-2 text-xs text-foreground-600">
                      Nurses feel burned out in their current job
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-foreground-600">
                    Residents surveyed in 2014 indicated they would choose another profession if they
                    were starting school over again.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-lg border border-background-200 bg-background-50 p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground-950">
                  Percentage decline in hospital workforce vacancies by job category, year over year
                </h3>
                <div className="mt-6 space-y-4">
                  {vacancyBars.map((bar) => (
                    <ProgressBar key={bar.label} label={bar.label} value={bar.value} tone="accent" />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 py-16 md:py-20">
        <div className="relative mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-background-50 md:text-3xl">
                Telecapabilities That Go Beyond
              </h2>
              <p className="mt-3 font-heading text-lg font-medium text-accent-300">
                Expand your use cases and access while lowering cost.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-background-100/85 md:text-base">
                TeleRay.Visit is a platform which allows for two-way communication for any virtual
                use case including telenursing, telesitting, virtual visits including rounds,
                discharge and consultation. TeleRay.Visit offers the most advanced security and
                additional capabilities not found with other vendors.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-lg border border-background-200 bg-background-100 p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground-950">
                  Standard Video Flow
                </h3>
                <div className="mt-4 overflow-hidden rounded-md border border-background-200 bg-background-50">
                  <img
                    src="https://teleray.com/wp-content/uploads/2024/04/standard-video-flow.jpg"
                    alt="Standard one-way video flow diagram"
                    title="Standard Video Flow"
                    className="h-[200px] w-full object-contain p-4"
                  />
                </div>
                <div className="mt-5">
                  <CheckList items={standardFlow} tone="secondary" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-lg border border-primary-200 bg-primary-50 p-6">
                <h3 className="font-heading text-lg font-semibold text-primary-900">
                  TeleRay Video &amp; Data Flow
                </h3>
                <div className="mt-4 overflow-hidden rounded-md border border-background-200 bg-background-50">
                  <img
                    src="https://teleray.com/wp-content/uploads/2024/04/teleray-video-and-data-flow.jpg"
                    alt="TeleRay two-way video and data flow diagram"
                    title="TeleRay Video & Data Flow"
                    className="h-[200px] w-full object-contain p-4"
                  />
                </div>
                <div className="mt-5">
                  <CheckList items={telerayFlow} tone="primary" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
                TeleRay Cameras
              </h2>
              <p className="mt-3 font-heading text-lg font-medium text-primary-700">
                Compliant Two-Way Communication
              </p>
              <p className="mt-5 text-sm leading-relaxed text-foreground-600 md:text-base">
                TeleRay has partnered with best-in-class camera companies Axis Communications and
                Hanwha to offer state of the art Pan, Tilt, Zoom (PTZ) options with built-in AI
                applications for fall risks, out of bed alerts, security, and sound intelligence for
                monitoring devices, coughing and aggression detection.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
            <Reveal>
              <div className="space-y-6">
                {cameraStats.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                      <i className="ri-camera-lens-line" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground-900">{item.title}</h3>
                      <p className="mt-1 text-xs text-foreground-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="overflow-hidden rounded-lg border border-background-200 bg-background-50">
                <img
                  src="https://teleray.com/wp-content/uploads/2024/04/axis-camera.jpg"
                  alt="Axis network PTZ camera used with TeleRay"
                  title="TeleRay Cameras"
                  className="h-[360px] w-full object-cover object-top"
                />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-6">
                {cameraStatsTwo.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                      <i className="ri-shield-check-line" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground-900">{item.title}</h3>
                      <p className="mt-1 text-xs text-foreground-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
              TeleRay AI Tools
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-foreground-600 md:text-base">
              Staff will know issues and be prepared before entering the room with specialised AI
              alerts including sound detection and fall risks.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {aiTools.map((tool, index) => (
              <Reveal key={tool.title} delay={index * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-background-200 bg-background-100">
                  <div className="h-48 w-full bg-background-200">
                    <img
                      src={tool.image}
                      alt={tool.imageAlt}
                      title={tool.title}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-heading text-base font-semibold text-foreground-950">
                      {tool.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-600">
                      {tool.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
                  TeleRay room of the future
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                  A patient room where communication, imaging and data all come together in one
                  secure workspace — the way care was always meant to work.
                </p>
                <div className="mt-6">
                  <CheckList items={roomFeatures} />
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-lg border border-background-200 bg-background-50">
                <img
                  src="https://teleray.com/wp-content/uploads/2025/09/Teleray-Future.jpg"
                  alt="Illustration of the TeleRay connected room of the future"
                  title="TeleRay room of the future"
                  className="h-[300px] w-full object-cover object-top md:h-[400px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
                TeleRay Use Cases
              </h2>
              <p className="mt-3 text-sm text-foreground-600 md:text-base">
                Solve numerous use cases with a single platform.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 max-w-4xl space-y-3">
            {useCaseAccordion.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={item.title} delay={index * 60}>
                  <div className="overflow-hidden rounded-lg border border-background-200 bg-background-100">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-heading text-sm font-semibold text-foreground-900 md:text-base">
                        {item.title}
                      </span>
                      <i
                        className={isOpen ? "ri-subtract-line text-primary-600" : "ri-add-line text-primary-600"}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen ? (
                      <div className="border-t border-background-200 px-5 py-4">
                        <p className="text-sm leading-relaxed text-foreground-600">{item.body}</p>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-800">
                Featured Use Cases
              </span>
              <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
                TeleRay: Revolutionizing Patient Communication &amp; Care
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredUseCases.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <i className="ri-magic-line" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-sm font-semibold text-foreground-950 md:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-600">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="mt-16 text-center font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
              TeleRay: Enhancing Patient Care with Advanced Solutions
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advancedUseCases.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
                    <i className="ri-heart-pulse-line" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-sm font-semibold text-foreground-950 md:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-600">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to expand virtual care?"
        body="Talk to TeleRay about telenursing, telesitting, tele-ICU and virtual rounding on one platform."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        contactLabel="Full Catalog"
        contactHref="https://teleray.com/wp-content/uploads/2025/11/TeleRay-Catalog.pdf"
      />
    </PageLayout>
  );
}