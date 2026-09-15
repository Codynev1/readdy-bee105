import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ContactForm from "@/components/feature/ContactForm";
import Reveal from "@/components/base/Reveal";
import {
  brandLogoImage,
  googleReviewsImage,
  sourceForgeImage,
  officeMapEmbedUrl,
} from "@/mocks/homeMedia";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Virtual Care", href: "/virtual-care" },
  { label: "Radiology", href: "/radiology" },
  { label: "About Us", href: "/about-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "/support" },
];

const socialLinks = [
  { label: "Facebook", icon: "fab fa-facebook-f", href: "https://www.facebook.com/" },
  { label: "X", icon: "fab fa-x-twitter", href: "https://twitter.com/" },
  { label: "YouTube", icon: "fab fa-youtube", href: "https://www.youtube.com/" },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      id="contact"
      className="scroll-mt-24 bg-gradient-to-b from-primary-900 to-primary-950 text-background-50"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-6 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <img
                src={brandLogoImage}
                alt="TeleRay"
                title="TeleRay virtual care platform"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <h2 className="mt-6 font-heading text-2xl font-semibold leading-tight text-background-50 md:text-4xl">
                {t("footer.title")}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-background-100/80">
                {t("footer.intro")}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x4ac2a9444a27a843:0xd66ed9783ff335b8!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex h-16 items-center rounded-lg bg-background-50 px-5"
                >
                  <img
                    src={googleReviewsImage}
                    alt="Google Reviews"
                    title="TeleRay Google Reviews"
                    className="max-h-10 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://sourceforge.net/software/product/TeleRay/?pk_campaign=badge&pk_source=vendor"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex h-16 items-center rounded-lg bg-background-50 px-5"
                >
                  <img
                    src={sourceForgeImage}
                    alt="SourceForge"
                    title="TeleRay on SourceForge"
                    className="max-h-12 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-background-50/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-300">
              {t("footer.addressTitle")}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-background-100/85">
              {t("footer.addressLine1")}
              <br />
              {t("footer.addressLine2")}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-300">
              {t("footer.socialTitle")}
            </h3>
            <ul className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-background-50/20 text-background-50 transition-colors hover:border-accent-400 hover:text-accent-300"
                  >
                    <i className={social.icon} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-300">
              {t("footer.callTitle")}
            </h3>
            <a
              href="tel:8444835372"
              className="mt-4 flex items-start gap-2 text-sm text-background-100/85 transition-colors hover:text-accent-300"
            >
              <i className="ri-phone-line mt-0.5 text-base text-accent-400" aria-hidden="true" />
              {t("footer.callValue")}
            </a>
            <h3 className="mt-6 font-heading text-sm font-semibold uppercase tracking-wider text-accent-300">
              {t("footer.emailTitle")}
            </h3>
            <a
              href="mailto:info@teleray.com"
              className="mt-4 flex items-start gap-2 text-sm text-background-100/85 transition-colors hover:text-accent-300"
            >
              <i className="ri-mail-line mt-0.5 text-base text-accent-400" aria-hidden="true" />
              {t("footer.emailValue")}
            </a>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-300">
              {t("footer.quickLinksTitle")}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background-100/85 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-background-50/15">
          <iframe
            title={t("footer.locationTitle")}
            src={officeMapEmbedUrl}
            className="h-[280px] w-full border-0 md:h-[340px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-background-50/15 pt-8 sm:flex-row">
          <p className="text-center text-xs text-background-100/70 sm:text-left">
            {t("footer.copyright")}
          </p>
          <a
            href="https://teleray.com/security-compliance/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-xs text-background-100/70 transition-colors hover:text-accent-300"
          >
            {t("footer.security")}
          </a>
        </div>
      </div>
    </footer>
  );
}