import { ShieldCheck } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-primary/5 rounded-xl p-8 md:p-10 border border-primary/10">
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Governance & Trust</h3>
              <p className="text-muted-foreground leading-relaxed">
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
