import { Hero } from "@/components/hero";
import { FeaturesSection } from "@/components/features-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { SpeedComparisonSection } from "@/components/speed-comparison-section";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch w-full">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <IntegrationsSection />
      <SpeedComparisonSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
