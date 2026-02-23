import { Hero } from "@/components/hero";
import { FeaturesSection } from "@/components/features-section";
import { WhyDifferentSection } from "@/components/why-different-section";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch w-full">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <WhyDifferentSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
