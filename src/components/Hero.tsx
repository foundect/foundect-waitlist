import foundectLogo from "@/assets/foundect-logo.png";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gradient-hero min-h-[70vh] flex flex-col items-center justify-center px-6 py-20">
      <div className="container max-w-4xl text-center">
        <img 
          src={foundectLogo} 
          alt="Foundect" 
          className="h-12 md:h-16 mx-auto mb-12 animate-fade-in"
        />
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          The Future of Ethical Investing in Bangladesh
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          An AI-powered, Shari'ah-aligned investment platform using data intelligence, gamification, and modern digital infrastructure to connect ethical investors with real businesses.
        </p>
        
        <button 
          onClick={scrollToForm}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-soft animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Join the Early Access Waitlist
        </button>
      </div>
    </section>
  );
};

export default Hero;
