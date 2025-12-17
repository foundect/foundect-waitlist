import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitlistForm";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WaitlistForm />
      <AboutSection />
      <FeaturesSection />
      <TeamSection />
      <TrustSection />
      <Footer />
    </main>
  );
};

export default Index;
