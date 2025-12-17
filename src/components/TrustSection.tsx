import { ShieldCheck } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-10 md:py-12 px-4 md:px-6 bg-background">
      <div className="container max-w-5xl mx-auto">
        <div className="bg-primary/5 rounded-xl p-5 md:p-6 border border-primary/10">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Governance & Trust</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Foundect is designed with a strict separation between platform operations and financial custody. All regulated financial activities are intended to be executed through licensed institutions and strategic partners, ensuring transparency, compliance alignment, and long-term trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
