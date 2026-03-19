import { Mail } from "lucide-react";

const team = [
  {
    name: "Iftekhar Zarif",
    role: "Founder & CEO",
    email: "zarif@foundect.com",
    bio: "Zarif leads Foundect's product strategy, platform architecture, and long-term vision. His focus is building a credible, governance-driven investment infrastructure for Bangladesh's SME market.",
    details: "",
  },
  {
    name: "Rahul Sinha",
    role: "Co-Founder & COO",
    email: "rahul@foundect.com",
    bio: "Rahul oversees Foundect's operations, financial structuring, and execution strategy. He ensures operational discipline and alignment with regulatory and institutional standards.",
    details: "",
  },
];

const TeamSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 gradient-section">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8">Founding Team</h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-5 md:p-6 border border-border shadow-card"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-accent font-medium text-xs">{member.role}</p>
              </div>

              <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                {member.bio}
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                {member.details}
              </p>

              <a 
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
