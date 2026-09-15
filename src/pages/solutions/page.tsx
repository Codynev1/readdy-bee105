import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import CtaBand from "@/components/feature/CtaBand";
import SolutionSpotlight from "@/components/feature/SolutionSpotlight";
import Reveal from "@/components/base/Reveal";

const softwareSpotlights = [
  {
    title: "TeleRay Visit",
    eyebrow: "Virtual Care & Telesitting",
    body: "TeleRay Visit is a powerful video and communication platform to view and consult multiple rooms simultaneously or separately. Whether it is telenursing, telesitting, virtual rounds, bedside visits, family members, specialists or ICU, you may address many use cases. TeleRay is partnered with Axis cameras for best-in-class Pan-Tilt-Zoom capability with AI for fall detection, patient wandering, and sound detection for aggression, cough and medical systems such as infusion pumps.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Teleray-visit.png",
    imageAlt: "TeleRay Visit multi-room virtual care dashboard",
    href: "/virtual-care",
    download: "https://teleray.com/wp-content/uploads/2025/04/TeleRay-Visit-Website.pdf",
  },
  {
    title: "TeleRay Reporting",
    eyebrow: "Diagnostic Reporting",
    body: "Robust reporting module to build custom reports with logos and contact information. Drag and drop fields, read current DICOM fields to replicate and build reports. Recommendations and impressions, finalizing reports with an uploaded signature, dynamically updating measurements, and the ability to push reports and image links into any EMR.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Teleray-Reporting-3.png",
    imageAlt: "TeleRay Reporting structured report builder",
    href: "/reporting-emr-integration",
    download: "https://teleray.com/wp-content/uploads/2024/02/TeleRay-Reporting-Flyer.pdf",
    reverse: true,
  },
  {
    title: "TeleRay Live Streaming Of Modalities",
    eyebrow: "Live Imaging",
    body: "Virtually place any qualified professional, whether it is a doctor, sonographer or specialist, in the room to view real-time imaging during the procedure. TeleRay Live allows for face-to-face communication while streaming the live feed without latency. A camera allows for the view of the room, patient position and probe positioning. Once the exam is complete, the full DICOM file may be sent through the ultra-secure network to the intended recipient.",
    image: "https://teleray.com/wp-content/uploads/2025/07/1-5.jpg",
    imageAlt: "Live modality streaming during a procedure",
    href: "/transmit-real-time-images-from-medical-devices-on-a-secured-network",
    download: "https://teleray.com/wp-content/uploads/2024/02/TeleRay-Live-Flyer.pdf",
    price: "Starting at $195 a month or $5,995 — please inquire about options",
  },
  {
    title: "Image Exchange",
    eyebrow: "Peer-to-Peer",
    body: "TeleRay provides the only true private key peer-to-peer system. There is no other system that provides a higher level of security for peace of mind. Ultra-fast and ultra secure, free for patients and receivers, with thousands of sites in multiple countries. Backed by a $2,000,000 breach policy and annual prices based on number of exchanges — no hidden fees or surprises, just great results.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Image-Exchange.jpg",
    imageAlt: "Secure peer-to-peer DICOM image exchange",
    href: "/ultra-secure-image-exchange-and-storage",
    download: "https://teleray.com/wp-content/uploads/2026/02/TeleRay-Radiology-brochure.pdf",
    reverse: true,
  },
  {
    title: "HIPAA Compliant Storage",
    eyebrow: "Secure Cloud",
    body: "Do not get fined by using outdated servers, portable drives or your modalities to store images. TeleRay's fully compliant storage with access from anywhere on any device is easy to use. We can migrate all of your studies for a seamless transfer and update, with an FDA approved viewer and advanced reporting available. Lost files and studies can be up to a $50,000 fine each — TeleRay indemnifies every customer against a breach.",
    image: "https://teleray.com/wp-content/uploads/2025/07/HIPAA.jpg",
    imageAlt: "HIPAA compliant cloud storage for medical imaging",
    href: "/ultra-secure-image-exchange-and-storage",
    download: "https://teleray.com/wp-content/uploads/2024/02/TeleRay-EPHI-Statement.pdf",
  },
];

const productSpotlights = [
  {
    title: "Low Cost Medical Grade Cart",
    eyebrow: "Hardware",
    body: "Take the power of TeleRay wherever you need it. Whether it is telenursing, telesitting, virtual rounds, a remote bedside visit, a different room in the office or other special circumstances, TeleRay is easily moved for a patient or professional consultation with our low cost medical grade carts for any use case.",
    image: "https://teleray.com/wp-content/uploads/2025/07/LOW-COST-MEDICAL-GRADE-CART.jpg",
    imageAlt: "Low cost medical grade TeleRay cart",
    href: "/low-cost-medical-grade-cart",
    download: "https://teleray.com/wp-content/uploads/2024/02/TeleRay-Cart-Flyer.pdf",
    price: "Starting at $3,995 fully equipped. Axis AI cameras available.",
    reverse: true,
  },
  {
    title: "TeleRay Remote - Secure and Portable Remote Service",
    eyebrow: "Remote Service",
    body: "TeleRay Remote allows service organizations, technologists and applications the ability to remotely access and control equipment with no 3rd party software installed on the target device. The RMS device plugs into the video out port and the USB port and can be connected by network or cellular. Have any system at your fingertips with CPU data and total control.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Teleray-Remote.jpg",
    imageAlt: "TeleRay Remote portable service device",
    href: "/teleray-remote-secure-and-portable-remote-service",
    download: "https://teleray.com/wp-content/uploads/2024/02/TeleRay-Remote-Flyer.pdf",
  },
  {
    title: "TeleRay Record",
    eyebrow: "Recording",
    body: "All-in-one HD to DICOM recorder suitable for any environment. Powerful medical video recording software controllable by touchscreen medical panel PC with a simple and intuitive user interface. Works with any existing camera or endoscopic system. Convert video to DICOM to view in any PACS or in the TeleRay platform.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Teleray-Record.jpg",
    imageAlt: "TeleRay Record HD to DICOM recorder",
    href: "/teleray-record",
    download: "https://teleray.com/wp-content/uploads/2024/02/TeleRay-Record-Flyer.pdf",
    reverse: true,
  },
];

const workstationSpotlights = [
  {
    title: "Desktop Workstation",
    eyebrow: "Workstations",
    body: "Get the most out of your TeleRay subscription with a desktop workstation with a high definition screen and plenty of memory for performing fast reads using an FDA approved viewer. Diagnostic monitors available.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Desktop-Workstation.jpg",
    imageAlt: "TeleRay desktop reading workstation",
    href: "/hardware-packages",
    price: "Only $2,995 with a TeleRay subscription included",
  },
  {
    title: "Mini Server",
    eyebrow: "Workstations",
    body: "TeleRay provides a simple worklist client to query and display patient demographics and appointment information. The client also implements procedure step protocols to relay status information back to the worklist server for a complete workflow solution. Custom HL7 workflows are available.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Mini-Server.jpg",
    imageAlt: "TeleRay mini server for DICOM modality worklist",
    href: "/hardware-packages",
    download: "https://teleray.com/wp-content/uploads/2024/02/TeleRay-Record-Flyer.pdf",
    price: "Starting at $1,500",
    reverse: true,
  },
];

const integrationSpotlights = [
  {
    title: "EMR / EHR Integration",
    eyebrow: "Integration",
    body: "TeleRay integrates with EPIC, Cerner, Athena and more than 250 other EMR vendors. Most implementations are completed within two weeks. Enable radiology reports to be posted in the patient chart, embed web-enabled image viewer links directly into the patient record, and image-enable MyChart and other portals.",
    image: "https://teleray.com/wp-content/uploads/2025/07/EMREHR-INTEGRATION.jpg",
    imageAlt: "EMR and EHR integration with TeleRay",
    href: "/emr",
    download: "https://teleray.com/wp-content/uploads/2025/06/TeleRay-Catalog.pdf",
    price: "Starting at $1,500",
  },
  {
    title: "Legacy Study Migration",
    eyebrow: "Migration",
    body: "TeleRay cloud storage is a cost-effective solution for any size 'on-premise to cloud' migration. TeleRay's bulk upload software is capable of migrating studies to cloud storage with no user intervention required. Migration may be timed to run at low network use times such as 11pm to 5am until complete, and data is normalized to ensure restoration and usability.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Legacy-Study-Migration.jpg",
    imageAlt: "Legacy study migration to TeleRay cloud storage",
    href: "/ultra-secure-image-exchange-and-storage",
    download: "https://teleray.com/wp-content/uploads/2025/06/TeleRay-Catalog.pdf",
    price: "Starting at $1,500",
    reverse: true,
  },
];

function SectionTitle({ children }: { children: string }) {
  return (
    <Reveal>
      <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground-950 md:text-3xl">
        {children}
      </h2>
    </Reveal>
  );
}

export default function Solutions() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Solutions"
        title="Healthcare Virtual Care and Medical Imaging Solutions"
        intro="Welcome to TeleRay, where we are driven by a deep-rooted passion for revolutionizing healthcare and empowering healthcare providers to deliver exceptional care to their patients. Uncover the TeleRay advantage and witness the transformative power it holds for your practice and the lives of your patients."
        primaryCta={{ label: "View All Services", href: "/solutions" }}
        secondaryCta={{ label: "Talk to Us", href: "/contact" }}
      />

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <SectionTitle>Virtual care and telesitting</SectionTitle>
          <div className="mt-12 space-y-20 md:space-y-24">
            {softwareSpotlights.map((item) => (
              <SolutionSpotlight key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <SectionTitle>Our Products</SectionTitle>
          <div className="mt-12 space-y-20 md:space-y-24">
            {productSpotlights.map((item) => (
              <SolutionSpotlight key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <SectionTitle>Our Workstations</SectionTitle>
          <div className="mt-12 space-y-20 md:space-y-24">
            {workstationSpotlights.map((item) => (
              <SolutionSpotlight key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-100 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <SectionTitle>Integration &amp; Migrations</SectionTitle>
          <div className="mt-12 space-y-20 md:space-y-24">
            {integrationSpotlights.map((item) => (
              <SolutionSpotlight key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Click for the full PDF Catalog"
        body="See every TeleRay solution, hardware package and integration in one document — or schedule a demo and we will walk you through it."
        primaryLabel="Schedule a Demo"
        primaryHref="/contact"
        contactLabel="Full Catalog"
        contactHref="https://teleray.com/wp-content/uploads/2025/11/TeleRay-Catalog.pdf"
      />
    </PageLayout>
  );
}