import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { brandLogoImage } from "@/mocks/homeMedia";
import { navSolutionsLeft, navSolutionsRight } from "@/mocks/solutions";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Virtual Care", href: "/virtual-care" },
  { label: "Radiology", href: "/radiology" },
  { label: "About Us", href: "/about-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="hidden bg-primary-800 text-background-50 md:block">
        <div className="mx-auto flex h-10 max-w-[1280px] items-center justify-end gap-6 px-4 text-xs md:px-6">
          <a href="tel:8444835372" className="flex items-center gap-2 transition-colors hover:text-accent-300">
            <i className="ri-phone-line text-sm" aria-hidden="true" />
            844-4-TELERAY (483-5372)
          </a>
          <Link to="/contact" className="flex items-center gap-1.5 transition-colors hover:text-accent-300">
            <i className="ri-mail-send-line text-sm" aria-hidden="true" />
            Contact
          </Link>
          <Link to="/support" className="flex items-center gap-1.5 transition-colors hover:text-accent-300">
            <i className="ri-customer-service-2-line text-sm" aria-hidden="true" />
            Support
          </Link>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-background-200/70 bg-background-50/90 backdrop-blur-md"
            : "border-transparent bg-background-50"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 md:h-[72px] md:px-6">
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={brandLogoImage}
              alt="TeleRay"
              title="TeleRay virtual care platform"
              className="h-10 w-auto object-contain md:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            <Link
              to="/"
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary-800 ${
                isActive("/") ? "text-primary-800" : "text-foreground-700"
              }`}
            >
              Home
            </Link>

            <div className="group relative">
              <Link
                to="/solutions"
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary-800 ${
                  isActive("/solutions") ? "text-primary-800" : "text-foreground-700"
                }`}
              >
                Solutions
                <i
                  className="ri-arrow-down-s-line text-base transition-transform duration-200 group-hover:rotate-180"
                  aria-hidden="true"
                />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-lg border border-background-200 bg-background-50 p-6 shadow-sm">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-1">
                      <h3 className="font-heading text-sm font-semibold text-foreground-950">
                        Our Solutions
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-foreground-600">
                        Welcome to TeleRay, where we are driven by a deep-rooted passion for
                        revolutionizing healthcare and empowering providers to deliver exceptional
                        care to their patients.
                      </p>
                      <Link
                        to="/solutions"
                        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary-700 transition-colors hover:text-primary-600"
                      >
                        View All Services
                        <i className="ri-arrow-right-line" aria-hidden="true" />
                      </Link>
                    </div>
                    <ul className="col-span-1 space-y-2.5">
                      {navSolutionsLeft.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.href}
                            className="flex items-start gap-2 text-xs text-foreground-700 transition-colors hover:text-primary-700"
                          >
                            <i className="ri-arrow-right-s-line mt-0.5 text-sm text-primary-500" aria-hidden="true" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className="col-span-1 space-y-2.5">
                      {navSolutionsRight.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.href}
                            className="flex items-start gap-2 text-xs text-foreground-700 transition-colors hover:text-primary-700"
                          >
                            <i className="ri-arrow-right-s-line mt-0.5 text-sm text-primary-500" aria-hidden="true" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {mainLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary-800 ${
                  isActive(link.href) ? "text-primary-800" : "text-foreground-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://teleray.io/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hidden whitespace-nowrap rounded-md bg-primary-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-background-50 transition-colors hover:bg-primary-600 md:inline-flex"
            >
              Sign In
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-background-200 text-foreground-800 transition-colors hover:bg-primary-50 lg:hidden"
            >
              <i className={mobileOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"} aria-hidden="true" />
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-background-200 bg-background-50 px-4 pb-6 pt-4 lg:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {[{ label: "Home", href: "/" }, ...mainLinks.slice(1)].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-primary-50 ${
                    isActive(link.href) ? "bg-primary-50 text-primary-800" : "text-foreground-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 border-t border-background-200 pt-4">
              <h3 className="px-3 font-heading text-xs font-semibold uppercase tracking-wider text-foreground-500">
                Our Solutions
              </h3>
              <ul className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
                {[...navSolutionsLeft, ...navSolutionsRight].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="flex items-start gap-2 rounded-md px-3 py-2 text-xs text-foreground-700 transition-colors hover:bg-primary-50"
                    >
                      <i className="ri-arrow-right-s-line mt-0.5 text-sm text-primary-500" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-col gap-2 border-t border-background-200 pt-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-foreground-800 transition-colors hover:bg-primary-50"
              >
                <i className="ri-mail-send-line" aria-hidden="true" />
                Contact
              </Link>
              <Link
                to="/support"
                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-foreground-800 transition-colors hover:bg-primary-50"
              >
                <i className="ri-customer-service-2-line" aria-hidden="true" />
                Support
              </Link>
            </div>
            <a
              href="https://teleray.io/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primary-500 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-background-50 transition-colors hover:bg-primary-600"
            >
              Sign In
            </a>
          </div>
        ) : null}
      </header>
    </>
  );
}