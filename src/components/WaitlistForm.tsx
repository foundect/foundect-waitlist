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
import { supabase } from "@/integrations/supabase/client";

const WaitlistForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    userType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.userType) {
      toast.error("Please fill in all fields");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('early_access_waitlist')
        .insert({
          full_name: formData.fullName.trim(),
          email: formData.email.toLowerCase().trim(),
          phone_number: formData.phone.trim(),
          user_type: formData.userType as 'investor' | 'business',
          user_agent: navigator.userAgent,
          referrer_url: document.referrer || null,
        });

      if (error) {
        // Check for duplicate email error
        if (error.code === '23505' || error.message.includes('duplicate')) {
          setIsDuplicate(true);
          setIsSubmitted(true);
          return;
        }
        throw error;
      }

      setIsSubmitted(true);
      toast.success("Successfully joined the waitlist!");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
            {isDuplicate ? (
              <>
                <h3 className="text-xl font-semibold mb-3">You're Already on the List!</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You're already on the Foundect early access list. We'll notify you as we approach launch.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-3">You're on the List</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We'll notify you as Foundect prepares for launch.
                </p>
              </>
            )}
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
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="userType" className="text-sm font-medium mb-1.5 block">User Type *</Label>
              <Select 
                onValueChange={(value) => setFormData({ ...formData, userType: value })}
                disabled={isLoading}
              >
                <SelectTrigger className="h-12 md:h-11 bg-background w-full">
                  <SelectValue placeholder="Select your user type" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border max-w-[calc(100vw-3rem)]">
                  <SelectItem value="investor">Individual Investor</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
              {formData.userType && (
                <p className="text-xs text-muted-foreground mt-1.5">
                  {formData.userType === "investor" 
                    ? "Invest in curated, Shari'ah-aligned opportunities."
                    : "Raise ethical capital and invest in others."}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 active:bg-primary/80 text-primary-foreground font-semibold py-3.5 rounded-xl text-sm transition-all duration-200 mt-4 shadow-md hover:shadow-lg active:shadow-sm active:translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
            >
              {isLoading ? "Submitting..." : "Request Early Access"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;