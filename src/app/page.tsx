import HeroCarousel from "@/components/homepage/HeroCarousel";
import Hero from "@/components/homepage/Hero";
import TrustStrip from "@/components/TrustStrip";
import SupportCards from "@/components/homepage/SupportCards";
import CustomSizeBuilder from "@/components/homepage/CustomSizeBuilder";
import ProductRange from "@/components/homepage/ProductRange";
import ConsultationBanner from "@/components/homepage/ConsultationBanner";
import Reviews from "@/components/homepage/Reviews";
import BulkBanner from "@/components/homepage/BulkBanner";
import WhatsIncluded from "@/components/homepage/WhatsIncluded";
import VisitUs from "@/components/homepage/VisitUs";

export default function Home() {
  return (
    <main className="w-full bg-surface-white min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        <HeroCarousel />
        <TrustStrip />
        <Hero />
        <CustomSizeBuilder />
        <SupportCards />
        <ProductRange />
        <ConsultationBanner />
        <Reviews />
        <BulkBanner />
        <WhatsIncluded />
        <VisitUs />
      </div>
    </main>
  );
}
