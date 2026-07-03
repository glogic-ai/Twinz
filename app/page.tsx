import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesAndWorkSection from "@/components/ServicesAndWorkSection";
import SocialsSection from "@/components/SocialsSection";
import ContactAndFooterSection from "@/components/ContactAndFooterSection";
import BenefitsStrip from "@/components/BenefitsStrip";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <ServicesAndWorkSection />
      <SocialsSection />
      <ContactAndFooterSection />
      <BenefitsStrip />
      <ChatbotWidget />
    </main>
  );
}