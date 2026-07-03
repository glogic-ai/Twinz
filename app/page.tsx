import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesAndWorkSection from "@/components/ServicesAndWorkSection";
import SocialsSection from "@/components/SocialsSection";
import ContactAndFooterSection from "@/components/ContactAndFooterSection";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <ServicesAndWorkSection />
      <SocialsSection />
      <ContactAndFooterSection />
      </main>
  );
}