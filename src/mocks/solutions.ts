export const navSolutionsLeft = [
  { label: "TeleRay Visit - Virtual Care & Telesitting", href: "/virtual-care" },
  { label: "TeleRay Reporting", href: "/reporting-emr-integration" },
  { label: "Radiology Observation", href: "/radiology-observation-mri-approved" },
  {
    label: "TeleRay Live Streaming Of Modalities",
    href: "/transmit-real-time-images-from-medical-devices-on-a-secured-network",
  },
  { label: "DICOM Image Exchange", href: "/ultra-secure-image-exchange-and-storage" },
  { label: "Secure Cloud PACS - HIPAA Compliant", href: "/ultra-secure-image-exchange-and-storage" },
  { label: "Low Cost Medical Grade Carts", href: "/low-cost-medical-grade-cart" },
  {
    label: "TeleRay Remote - Control Modalities",
    href: "/teleray-remote-secure-and-portable-remote-service",
  },
];

export const navSolutionsRight = [
  { label: "TeleRay Record - Surgery / Endoscopic", href: "/teleray-record" },
  { label: "Desktop Workstation", href: "/hardware-packages" },
  { label: "Laptop Workstation", href: "/hardware-packages" },
  { label: "Mini-Server", href: "/hardware-packages" },
  { label: "EMR / EHR Integration", href: "/emr" },
  { label: "Legacy Study Migration", href: "/ultra-secure-image-exchange-and-storage" },
  { label: "No Cost Image Exchange Service", href: "/no-costexchange-service" },
];

export type SolutionDetail = {
  path: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  price?: string;
  bullets: string[];
  related: { label: string; href: string }[];
};

export const solutionDetails: SolutionDetail[] = [
  {
    path: "/reporting-emr-integration",
    eyebrow: "Diagnostic Reporting",
    title: "TeleRay Reporting",
    intro:
      "Robust reporting module to build custom reports with logos and contact information. Drag and drop fields, read current DICOM fields to replicate and build reports. Recommendations and impressions, finalizing reports with an uploaded signature and dynamically updating measurements.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Teleray-Reporting-3.png",
    imageAlt: "TeleRay Reporting radiology report builder interface",
    bullets: [
      "Drag and drop report builder with your logo and contact information",
      "Read current DICOM fields to replicate and build structured reports",
      "Recommendations, impressions and finalisation with uploaded signature",
      "Dynamically update measurements inside the report",
      "Push reports and image links into any EMR",
      "Includes the FDA approved diagnostic viewer",
    ],
    related: [
      { label: "EMR / EHR Integration", href: "/emr" },
      { label: "Cloud PACS - HIPAA Compliant", href: "/ultra-secure-image-exchange-and-storage" },
      { label: "DICOM Image Exchange", href: "/ultra-secure-image-exchange-and-storage" },
    ],
  },
  {
    path: "/radiology-observation-mri-approved",
    eyebrow: "Radiology",
    title: "Radiology Observation",
    intro:
      "Healthcare practitioners can easily and efficiently monitor multiple patients or rooms and assist and interact if needed. Review the procedure, patient position, contrast management, breathing and speak to the patient — all in real time.",
    image: "https://teleray.com/wp-content/uploads/2025/08/Radiology-1.jpg",
    imageAlt: "Radiology observation with a network camera in the imaging room",
    bullets: [
      "Monitor multiple patients or rooms and interact if needed",
      "Review procedure, patient position and contrast management",
      "Coach breathing and speak to the patient during the exam",
      "Axis network camera mounted with an Axis network speaker and microphone",
      "May be used in any environment and is MRI approved up to 300 gauss",
      "Includes all TeleRay features for virtual visits and consultations",
    ],
    related: [
      { label: "TeleRay Live Streaming Of Modalities", href: "/transmit-real-time-images-from-medical-devices-on-a-secured-network" },
      { label: "Radiology Solutions", href: "/radiology" },
      { label: "Cloud PACS - HIPAA Compliant", href: "/ultra-secure-image-exchange-and-storage" },
    ],
  },
  {
    path: "/transmit-real-time-images-from-medical-devices-on-a-secured-network",
    eyebrow: "Live Imaging",
    title: "TeleRay Live Streaming Of Modalities",
    intro:
      "Virtually place any qualified professional — a doctor, sonographer or specialist — in the room to view real-time imaging during the procedure. TeleRay Live allows for face-to-face communication while streaming the live feed without latency.",
    image: "https://teleray.com/wp-content/uploads/2025/07/1-5.jpg",
    imageAlt: "Clinician streaming live modality imaging through TeleRay",
    price: "Starting at $195 a month or $5,995 — please inquire about options",
    bullets: [
      "Face-to-face communication while streaming the live feed without latency",
      "A camera allows for the view of the room, patient position and probe positioning",
      "Once the exam is complete, the full DICOM file may be sent through the ultra-secure network",
      "Any modality can be streamed to any qualified professional, anywhere",
      "We have High speed internet 1G+ ready deployment",
      "Supports sonographer, specialist and technologist collaboration",
    ],
    related: [
      { label: "Radiology Observation", href: "/radiology-observation-mri-approved" },
      { label: "DICOM Image Exchange", href: "/ultra-secure-image-exchange-and-storage" },
      { label: "TeleRay Remote", href: "/teleray-remote-secure-and-portable-remote-service" },
    ],
  },
  {
    path: "/ultra-secure-image-exchange-and-storage",
    eyebrow: "Image Exchange & Storage",
    title: "Image Exchange & HIPAA Compliant Storage",
    intro:
      "TeleRay provides the only true private key peer-to-peer system. There is no other system that provides a higher level of security for peace of mind. Ultra-fast and ultra secure, free for patients and receivers, with thousands of sites in multiple countries.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Image-Exchange.jpg",
    imageAlt: "Secure DICOM image exchange between hospitals and specialists",
    bullets: [
      "Only true private key peer-to-peer image exchange system",
      "Free for patients and receivers, thousands of sites in multiple countries",
      "Backed by a $2,000,000 breach policy and a signed BAA",
      "Set annual prices based on number of exchanges — no hidden fees",
      "HIPAA compliant cloud storage with access from anywhere on any device",
      "Legacy study migration from any PACS, file system or modality",
      "Lost files and studies can be up to a $50,000 fine each — TeleRay indemnifies every customer",
      "FDA approved viewer and advanced reporting available",
    ],
    related: [
      { label: "Legacy Study Migration", href: "/ultra-secure-image-exchange-and-storage" },
      { label: "No Cost Image Exchange Service", href: "/no-costexchange-service" },
      { label: "TeleRay Reporting", href: "/reporting-emr-integration" },
    ],
  },
  {
    path: "/low-cost-medical-grade-cart",
    eyebrow: "Hardware",
    title: "Low Cost Medical Grade Cart",
    intro:
      "Take the power of TeleRay wherever you need it. Whether it is telenursing, telesitting, virtual rounds, a remote bedside visit, a different room in the office or other special circumstances, TeleRay is easily moved for a patient or professional consultation.",
    image: "https://teleray.com/wp-content/uploads/2025/07/LOW-COST-MEDICAL-GRADE-CART.png",
    imageAlt: "Low cost medical grade TeleRay cart with camera and screen",
    price: "Starting at $3,995 fully equipped. Axis AI cameras available.",
    bullets: [
      "Fully equipped and delivered ready for telenursing and telesitting",
      "Supports virtual rounds and remote bedside visits",
      "Easily moved between rooms and departments",
      "Axis AI cameras available for fall risk and sound detection",
      "Includes all TeleRay virtual visit and consultation features",
      "Low cost of ownership and service",
    ],
    related: [
      { label: "TeleRay Visit - Virtual Care", href: "/virtual-care" },
      { label: "Hardware Packages", href: "/hardware-packages" },
      { label: "TeleRay Live Streaming Of Modalities", href: "/transmit-real-time-images-from-medical-devices-on-a-secured-network" },
    ],
  },
  {
    path: "/teleray-remote-secure-and-portable-remote-service",
    eyebrow: "Service & Support",
    title: "TeleRay Remote - Secure and Portable Remote Service",
    intro:
      "TeleRay Remote allows service organizations, technologists and applications the ability to remotely access and control equipment with no 3rd party software installed on the target device. The RMS device plugs into the video out port and the USB port and can be connected by network or cellular.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Teleray-Remote.jpg",
    imageAlt: "TeleRay Remote portable remote service device",
    bullets: [
      "No 3rd party software installed on the target device",
      "Plugs into the video out port and the USB port",
      "Connected by network or cellular",
      "Have any system at your fingertips with CPU data and total control",
      "Great for service, training and troubleshooting",
      "Secure and portable for field engineers and applications teams",
    ],
    related: [
      { label: "TeleRay Live Streaming Of Modalities", href: "/transmit-real-time-images-from-medical-devices-on-a-secured-network" },
      { label: "TeleRay Record", href: "/teleray-record" },
      { label: "Hardware Packages", href: "/hardware-packages" },
    ],
  },
  {
    path: "/teleray-record",
    eyebrow: "Recording",
    title: "TeleRay Record",
    intro:
      "All-in-one HD to DICOM recorder suitable for any environment. Powerful medical video recording software controllable by a touchscreen medical panel PC with a simple and intuitive user interface. Works with any existing camera or endoscopic system.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Teleray-Record.png",
    imageAlt: "TeleRay Record surgery and endoscopic HD to DICOM recorder",
    bullets: [
      "All-in-one HD to DICOM recorder for any environment",
      "Controllable by touchscreen medical panel PC",
      "Simple and intuitive user interface",
      "Works with any existing camera or endoscopic system",
      "Convert video to DICOM to view in any PACS or in the TeleRay platform",
      "Contact us for options and discounted pricing based on volume and hardware",
    ],
    related: [
      { label: "TeleRay Live Streaming Of Modalities", href: "/transmit-real-time-images-from-medical-devices-on-a-secured-network" },
      { label: "Cloud PACS - HIPAA Compliant", href: "/ultra-secure-image-exchange-and-storage" },
      { label: "Hardware Packages", href: "/hardware-packages" },
    ],
  },
  {
    path: "/hardware-packages",
    eyebrow: "Workstations",
    title: "Hardware Packages & Workstations",
    intro:
      "Get the most out of your TeleRay subscription with turnkey hardware that arrives preconfigured and customised to your site. Enjoy plug-and-play convenience with support software built in for easy access to TeleRay technicians.",
    image: "https://teleray.com/wp-content/uploads/2025/07/Desktop-Workstation.jpg",
    imageAlt: "TeleRay desktop workstation for diagnostic reading",
    price: "Desktop workstation only $2,995 with a TeleRay subscription included. Mini server starting at $1,500.",
    bullets: [
      "Desktop Workstation — HD screen, generous memory, FDA approved viewer, diagnostic monitors available",
      "Laptop Workstation — mobile reading and consultation wherever you are",
      "Mini Server — DICOM modality worklist client with procedure step protocols",
      "Hardware is delivered preconfigured and customised to your site",
      "Support software is built-in for easy access to TeleRay technicians",
      "Custom HL7 workflows are available",
    ],
    related: [
      { label: "EMR / EHR Integration", href: "/emr" },
      { label: "Low Cost Medical Grade Cart", href: "/low-cost-medical-grade-cart" },
      { label: "Cloud PACS - HIPAA Compliant", href: "/ultra-secure-image-exchange-and-storage" },
    ],
  },
  {
    path: "/emr",
    eyebrow: "Interoperability",
    title: "EMR / EHR Integration",
    intro:
      "TeleRay integrates with EPIC, Cerner, Athena and more than 250 other EMR vendors. Most implementations are completed within two weeks, with image enablement that puts the viewer right inside the chart.",
    image: "https://teleray.com/wp-content/uploads/2025/07/EMREHR-INTEGRATION.jpg",
    imageAlt: "TeleRay EMR and EHR integration with hospital systems",
    price: "Starting at $1,500",
    bullets: [
      "Enable radiology reports to be posted in the patient chart",
      "Embed web-enabled image viewer links directly into the patient record (image enablement)",
      "Image enablement in MyChart and other patient portals",
      "Integrations can be simple or complex depending on needs and workflow",
      "Integrates with EPIC, Cerner, Athena and 250+ vendors",
      "Most implementations complete in less than two weeks",
    ],
    related: [
      { label: "TeleRay Reporting", href: "/reporting-emr-integration" },
      { label: "Hardware Packages", href: "/hardware-packages" },
      { label: "Legacy Study Migration", href: "/ultra-secure-image-exchange-and-storage" },
    ],
  },
  {
    path: "/no-costexchange-service",
    eyebrow: "Image Exchange",
    title: "No Cost Image Exchange Service",
    intro:
      "TeleRay's true private key peer-to-peer exchange is free for patients and receivers. Thousands of sites across multiple countries exchange studies with no hidden fees or surprises — just great results.",
    image: "https://teleray.com/wp-content/uploads/2025/07/HIPAA.jpg",
    imageAlt: "No cost HIPAA compliant image exchange with TeleRay",
    bullets: [
      "Free for patients and receivers",
      "Only true private key peer-to-peer system on the market",
      "Ultra-fast and ultra-secure exchange of studies",
      "Backed by a $2,000,000 breach policy",
      "No hidden fees or surprises — set annual prices based on number of exchanges",
      "Thousands of sites in multiple countries already connected",
    ],
    related: [
      { label: "DICOM Image Exchange", href: "/ultra-secure-image-exchange-and-storage" },
      { label: "Cloud PACS - HIPAA Compliant", href: "/ultra-secure-image-exchange-and-storage" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export const solutionDetailPaths = solutionDetails.map((item) => item.path);