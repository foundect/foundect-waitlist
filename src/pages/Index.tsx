import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import WaitlistForm from "@/components/WaitlistForm";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustSection />
      <WaitlistForm />
      <AboutSection />
      <FeaturesSection />
      <TeamSection />
      <Footer />
    </main>
  );
};

export default Index;
