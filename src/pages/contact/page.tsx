import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import Reveal from "@/components/base/Reveal";
import ContactForm from "@/components/feature/ContactForm";
import { officeMapEmbedUrl } from "@/mocks/homeMedia";

const contactChannels = [
  {
    icon: "ri-phone-line",
    title: "Call Us",
    value: "844-4-TELERAY (483-5372)",
    href: "tel:8444835372",
  },
  {
    icon: "ri-mail-line",
    title: "Email",
    value: "info@teleray.com",
    href: "mailto:info@teleray.com",
  },
  {
    icon: "ri-map-pin-line",
    title: "Address",
    value: "100 Congress Ave Suite 200, Austin, TX 78701",
    href: "https://www.google.com/maps?q=100+Congress+Ave+Suite+200,+Austin,+TX+78701",
  },
];

export default function Contact() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch With TeleRay"
        intro="To enroll or for general information, please contact us today. Whether you are a hospital, imaging group, practice or partner, our team will help you map the fastest path to a working implementation."
        primaryCta={{ label: "Call 844-4-TELERAY", href: "tel:8444835372" }}
        secondaryCta={{ label: "Email Us", href: "mailto:info@teleray.com" }}
      />

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {contactChannels.map((channel, index) => (
              <Reveal key={channel.title} delay={index * 80}>
                <a
                  href={channel.href}
                  target={channel.icon === "ri-map-pin-line" ? "_blank" : undefined}
                  rel={channel.icon === "ri-map-pin-line" ? "noopener noreferrer nofollow" : undefined}
                  className="flex h-full items-start gap-4 rounded-lg border border-background-200 bg-background-100 p-6 transition-colors hover:border-primary-300 hover:bg-background-50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <i className={`${channel.icon} text-lg`} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground-500">
                      {channel.title}
                    </h2>
                    <p className="mt-1.5 text-sm font-medium text-foreground-900">{channel.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground-600 md:text-base">
                  Tell us about your practice, hospital or imaging group and we will map the fastest
                  path to a working implementation.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="overflow-hidden rounded-lg border border-background-200 bg-background-100">
                <iframe
                  title="TeleRay office location — 100 Congress Ave Suite 200, Austin, TX 78701"
                  src={officeMapEmbedUrl}
                  className="h-[320px] w-full border-0 md:h-[440px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}