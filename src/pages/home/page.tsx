import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import Hero from "./components/Hero";
import ImageMarquee from "./components/ImageMarquee";
import OverviewSection from "./components/OverviewSection";
import TrustedBadges from "./components/TrustedBadges";
import WhyTeleRay from "./components/WhyTeleRay";
import SolutionsSection from "./components/SolutionsSection";
import IntegrationExperts from "./components/IntegrationExperts";
import ConvergenceStats from "./components/ConvergenceStats";
import GoodCompany from "./components/GoodCompany";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ImageMarquee />
        <OverviewSection />
        <TrustedBadges />
        <WhyTeleRay />
        <SolutionsSection />
        <IntegrationExperts />
        <ConvergenceStats />
        <GoodCompany />
      </main>
      <Footer />
    </div>
  );
}