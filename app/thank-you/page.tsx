import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThankYouContent } from "./content";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-stretch w-full">
      <Navbar />
      <ThankYouContent />
      <Footer />
    </main>
  );
}
