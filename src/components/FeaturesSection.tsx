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
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Platform Highlights</h2>

        <div className="grid gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-5 p-6 bg-secondary/40 rounded-lg hover:bg-secondary/60 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-base font-medium text-foreground">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
