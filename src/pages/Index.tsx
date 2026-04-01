import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FinancialsSection from "@/components/FinancialsSection";
import InvestorSection from "@/components/InvestorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <FinancialsSection />
    <InvestorSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
