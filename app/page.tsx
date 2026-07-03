import HeroSection from "@/components/HeroSection";
import ServicesAndWorkSection from "@/components/ServicesAndWorkSection";
import SocialsSection from "@/components/SocialsSection";
import ContactAndFooterSection from "@/components/ContactAndFooterSection";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <HeroSection />
      <ServicesAndWorkSection />
      <SocialsSection />
      <ContactAndFooterSection />
    </main>
  );
}