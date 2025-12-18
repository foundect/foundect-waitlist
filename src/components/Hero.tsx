import foundectLogo from "@/assets/foundect-logo-new.png";

const Hero = () => {
  return (
    <section className="gradient-hero flex flex-col items-center justify-center px-4 md:px-6 pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="container max-w-5xl text-center">
        <img 
          src={foundectLogo} 
          alt="Foundect" 
          className="h-14 md:h-20 lg:h-24 mx-auto mb-8 md:mb-10 animate-fade-in"
        />
        
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          The Future of Ethical Investing in Bangladesh
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          An AI-powered, Shari'ah-aligned investment platform using data intelligence, gamification, and modern digital infrastructure to connect ethical investors with real businesses.
        </p>
      </div>
    </section>
  );
};

export default Hero;
