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
    <section className="py-20 px-6 gradient-section">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What is Foundect?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Foundect is Bangladesh's first next-generation ethical investment platform designed to bridge Shari'ah-compliant investors with real, growth-oriented businesses. The platform leverages AI-driven insights, gamified participation models, and structured onboarding systems to make ethical investing more transparent, accessible, and engaging.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <pillar.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">{pillar.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
