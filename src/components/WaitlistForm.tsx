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
      <section id="waitlist-form" className="py-20 px-6 bg-background">
        <div className="container max-w-xl mx-auto text-center">
          <div className="bg-secondary/50 rounded-xl p-10 shadow-card">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
            <p className="text-muted-foreground">
              Thank you for joining Foundect's early access waitlist. We'll be in touch as we approach launch.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist-form" className="py-20 px-6 bg-background">
      <div className="container max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Request Early Access</h2>
          <p className="text-muted-foreground">Be among the first to experience ethical investing, reimagined.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-card border border-border">
          <div className="space-y-5">
            <div>
              <Label htmlFor="fullName" className="text-sm font-medium mb-2 block">Full Name *</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="h-12"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium mb-2 block">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+880 1XXX-XXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12"
              />
            </div>

            <div>
              <Label htmlFor="userType" className="text-sm font-medium mb-2 block">User Type *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, userType: value })}>
                <SelectTrigger className="h-12 bg-background">
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
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg text-base transition-all duration-300 mt-4"
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
