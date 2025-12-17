import { Sparkles, Trophy, FileCheck, Briefcase, Layers } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI-powered opportunity discovery" },
  { icon: Trophy, title: "Gamified investor engagement system" },
  { icon: FileCheck, title: "Transparent, non-interest-based investment models" },
  { icon: Briefcase, title: "Business-focused fundraising tools" },
  { icon: Layers, title: "Scalable architecture for institutional partnerships" },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-background">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8">Platform Highlights</h2>

        <div className="grid gap-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 bg-secondary/40 rounded-lg hover:bg-secondary/60 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
