import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // localStorage-based counter (will be replaced with DB when Cloud is enabled)
    const key = "bg_visitor_count";
    const sessionKey = "bg_visited";
    const count = parseInt(localStorage.getItem(key) || "0", 10);
    if (!sessionStorage.getItem(sessionKey)) {
      const newCount = count + 1;
      localStorage.setItem(key, String(newCount));
      sessionStorage.setItem(sessionKey, "1");
      setVisitors(newCount);
    } else {
      setVisitors(count);
    }
  }, []);

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Beryllium Greens" className="h-14 w-auto rounded-full bg-primary-foreground/90 p-1" />
            <div>
              <p className="font-display text-lg font-bold">Beryllium Greens</p>
              <p className="font-body text-xs text-primary-foreground/60">
                Agritourism · Prescott, AZ
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-body text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              Quick Links
            </p>
            {["About", "Financials", "Invest", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="text-right md:text-right">
            <p className="font-body text-xs text-primary-foreground/50 mb-1">Site Visitors</p>
            <p className="font-display text-3xl font-bold text-accent">
              {visitors.toLocaleString()}
            </p>
            <p className="font-body text-xs text-primary-foreground/40 mt-4">
              © {new Date().getFullYear()} Beryllium Greens. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
