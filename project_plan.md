# TeleRay Website Rebuild

## 1. Project Description
A corporate marketing website for **TeleRay**, a healthcare technology company offering a unified virtual care, image management, and image exchange platform.

- **Positioning**: Enterprise-grade, HIPAA-compliant virtual care + DICOM imaging platform.
- **Target users**: Hospitals, radiology practices, physicians (providers) and patients.
- **Core value**: One secure platform to connect, consult, store, exchange, report, and stream medical data — integrated with any EMR/PACS.

The site is a content/marketing site. It does not require user accounts or payments at this stage.

## 2. Page Structure
- `/` - Home (long-form landing page with all core sections)
- `/solutions` - Solutions overview (software, products, workstations, integration & migrations)
- `/virtual-care` - TeleRay Virtual Care
- `/radiology` - Radiology Solutions
- `/about-us` - About Us (team, differentiators, vision, security)
- `/pricing` - Pricing (quote request form, capability tabs, all-plans-include)
- `/partners` - Partners (technology, EMR/PACS, channel program)
- `/blog` - Blog (filterable article listing)
- `/contact` - Contact (channels, contact form, office map)
- `/support` - Support (support channels, FAQ)
- Solution detail pages (data-driven): `/reporting-emr-integration`, `/radiology-observation-mri-approved`, `/transmit-real-time-images-from-medical-devices-on-a-secured-network`, `/ultra-secure-image-exchange-and-storage`, `/low-cost-medical-grade-cart`, `/teleray-remote-secure-and-portable-remote-service`, `/teleray-record`, `/hardware-packages`, `/emr`, `/no-costexchange-service`
- `*` - Not Found

## 3. Core Features
- [x] Sticky top utility bar + main navigation with Solutions mega-dropdown (route-based)
- [x] Mobile hamburger navigation panel
- [x] Hero with dual audience CTA (Patients / Providers)
- [x] Dual-row auto-scrolling product image marquee
- [x] Platform overview section with embedded demo video
- [x] Trusted-company badge row
- [x] "Why TeleRay?" tabbed content (For Doctors / For Patients)
- [x] DICOM / HL7 / FHIR integration expertise section
- [x] Industry statistics section with animated counters and progress bars
- [x] Social-proof section (reviews, patents, coverage map)
- [x] Contact footer with a real contact form, address, social links, phone and email
- [x] Shared inner-page architecture: PageLayout, PageHero, SolutionSpotlight, CheckList, CtaBand, ScrollToTop
- [x] Reusable solution detail page driven by data
- [x] Pricing quote request form, support FAQ, blog category filtering

## 4. Data Model Design
No database required. This is a static marketing website. Forms submit to the built-in Form service (hosted form endpoints), so no Supabase tables are needed.

## 5. Backend / Third-party Integration Plan
- Database: Not required (static marketing content).
- Form: Built-in Form endpoints used for the contact/inquiry form and the pricing quote request form.
- Shopify: Not needed.
- Stripe / Payments: Not needed.
- Others: Google Maps embed for the office location.

## 6. Development Phase Plan

### Phase 1: Design System + Navigation + Hero + Marquee ✅ Completed
### Phase 2: Core Content Sections ✅ Completed
### Phase 3: Footer + Contact Form + SEO + Polish ✅ Completed
### Phase 4: Inner Pages ✅ Completed
- Goal: Expand the site beyond the homepage into a full multi-page site.
- Deliverable: Route-based navigation, shared page architecture, and all main navigation pages plus data-driven solution detail pages.