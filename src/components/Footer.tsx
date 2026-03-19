import { Mail, Phone, Handshake } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-secondary/30 border-t border-border">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-foreground mb-1">Foundect</p>
            <p className="text-xs text-muted-foreground">Investment infrastructure. Built for trust.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <a href="mailto:support@foundect.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              support@foundect.com
            </a>
            <a href="mailto:partnerships@foundect.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Handshake className="w-4 h-4" />
              partnerships@foundect.com
            </a>
            <a href="tel:+8801805076298" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              +880 1805-076298
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Foundect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
