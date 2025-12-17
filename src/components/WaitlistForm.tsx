import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const WaitlistForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    userType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.userType) {
      toast.error("Please fill in all fields");
      return;
    }

    // Here you would typically send to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    toast.success("Successfully joined the waitlist!");
  };

  if (isSubmitted) {
    return (
      <section id="waitlist-form" className="pt-6 pb-12 md:pt-8 md:pb-16 px-4 md:px-6 bg-background">
        <div className="container max-w-lg mx-auto text-center">
          <div className="bg-secondary/50 rounded-xl p-8 shadow-soft">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Thank You!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Thank you for joining Foundect's early access waitlist. We'll be in touch as we approach launch.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist-form" className="pt-6 pb-12 md:pt-8 md:pb-16 px-4 md:px-6 bg-background">
      <div className="container max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Request Early Access</h2>
          <p className="text-muted-foreground text-sm">Be among the first to experience ethical investing, reimagined.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-soft border border-border/50">
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-sm font-medium mb-1.5 block">Full Name *</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="h-12 md:h-11"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium mb-1.5 block">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 md:h-11"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium mb-1.5 block">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+880 1XXX-XXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 md:h-11"
              />
            </div>

            <div>
              <Label htmlFor="userType" className="text-sm font-medium mb-1.5 block">User Type *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, userType: value })}>
                <SelectTrigger className="h-12 md:h-11 bg-background">
                  <SelectValue placeholder="Select your user type" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  <SelectItem value="individual">Individual Investor — Invest in various promising opportunities</SelectItem>
                  <SelectItem value="business">Business — Raise funds for your business alongside investing in other prospects</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 rounded-lg text-sm transition-all duration-300 mt-2"
            >
              Request Early Access
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
