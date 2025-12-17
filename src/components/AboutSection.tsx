import { Brain, Gamepad2, Shield, Building2, Lock } from "lucide-react";

const pillars = [
  { icon: Brain, label: "AI-assisted discovery and insights" },
  { icon: Gamepad2, label: "Gamified investing experience" },
  { icon: Shield, label: "Shari'ah-aligned investment structures" },
  { icon: Building2, label: "Institutional-ready platform architecture" },
  { icon: Lock, label: "Trust-first design with compliance readiness" },
];

const AboutSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 gradient-section">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">What is Foundect?</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Foundect is Bangladesh's first next-generation ethical investment platform designed to bridge Shari'ah-compliant investors with real, growth-oriented businesses. The platform leverages AI-driven insights, gamified participation models, and structured onboarding systems to make ethical investing more transparent, accessible, and engaging.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center">
                <pillar.icon className="w-4 h-4 text-accent" />
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground">{pillar.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
