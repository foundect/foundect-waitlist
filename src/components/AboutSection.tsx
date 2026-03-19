import { ShieldCheck, FileText, Scale, Lock } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, label: "Governance-first platform architecture" },
  { icon: FileText, label: "Structured SME disclosure process" },
  { icon: Scale, label: "Shari'ah-aligned investment structures" },
  { icon: Lock, label: "Admin-reviewed campaigns only" },
];

const AboutSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 gradient-section">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">What is Foundect?</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Foundect is a Shari'ah-compliant investment infrastructure platform. It does not hold funds, promise returns, or act as a financial intermediary. Instead, it provides the governance layer — verification, structured disclosure, and accountability — that allows investors and businesses to interact with clarity and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
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
