import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Zap, TrendingUp, Leaf, Users, Target } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface InvestModel {
  title: string;
  subtitle: string;
  points: string[];
}

const models: InvestModel[] = [
  {
    title: "Option A: Equity Stake",
    subtitle: "15%–30% ownership (negotiable)",
    points: [
      "Annual profit distributions starting Year 2–3",
      "$500K investment → 20% equity",
      "Year 5 investor share: ~$160K annually",
    ],
  },
  {
    title: "Option B: Preferred Return + Profit Share",
    subtitle: "8%–10% preferred annual return",
    points: [
      "Additional 10%–20% profit participation",
      "Priority distributions before equity holders",
      "Predictable returns with upside potential",
    ],
  },
  {
    title: "Option C: Debt + Revenue Share",
    subtitle: "Fixed interest (6–10%)",
    points: [
      "2%–5% of gross revenue participation",
      "Secured by property and infrastructure assets",
      "Lower risk profile with steady cash flow",
    ],
  },
];

const advantages = [
  { icon: <Zap size={18} />, label: "Multiple Revenue Streams", desc: "Not dependent on one income source — agriculture, lodging, retail, and events." },
  { icon: <TrendingUp size={18} />, label: "Year-Round Production", desc: "Hydroponics eliminates seasonal limitations for consistent revenue." },
  { icon: <Target size={18} />, label: "High-Margin Tourism", desc: "Glamping + events drive premium pricing and strong margins." },
  { icon: <Leaf size={18} />, label: "Land Utilization", desc: "36 acres generating urban-level revenue through efficient multi-use design." },
  { icon: <Users size={18} />, label: "Community Impact", desc: "Creates rural jobs, supports local farmers, and provides healthy food access." },
  { icon: <Shield size={18} />, label: "Risk Mitigation", desc: "Phased development, diversification, and solar energy reduce exposure." },
];

const InvestorSection = () => {
  const [openModel, setOpenModel] = useState<number | null>(null);

  return (
    <SectionWrapper id="invest">
      <div className="text-center mb-14">
        <p className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-2">
          Investor Opportunity
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Invest in the Future of Agriculture
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We're seeking $300,000–$750,000 in private capital for Phase 1 buildout.
          Total project investment of $2.2M–$2.8M, phased across five stages with
          a projected Year 5 valuation of $3.5M–$5.2M.
        </p>
      </div>

      {/* Investment models */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {models.map((m, i) => (
          <motion.div
            key={m.title}
            whileHover={{ y: -4 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border cursor-pointer hover:shadow-elevated transition-shadow"
            onClick={() => setOpenModel(i)}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-green flex items-center justify-center text-primary-foreground font-bold text-sm mb-4">
              {String.fromCharCode(65 + i)}
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-1">{m.title}</h3>
            <p className="font-body text-sm text-primary font-medium mb-3">{m.subtitle}</p>
            <ul className="space-y-2">
              {m.points.map((p) => (
                <li key={p} className="font-body text-xs text-muted-foreground flex gap-2">
                  <span className="text-accent mt-0.5">•</span> {p}
                </li>
              ))}
            </ul>
            <span className="inline-block mt-4 text-xs font-semibold text-primary">View details →</span>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openModel !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpenModel(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-2xl shadow-elevated max-w-lg w-full p-8 relative border border-border"
            >
              <button
                onClick={() => setOpenModel(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {models[openModel].title}
              </h3>
              <p className="font-body text-sm text-primary font-medium mb-4">
                {models[openModel].subtitle}
              </p>
              <ul className="space-y-3 mb-6">
                {models[openModel].points.map((p) => (
                  <li key={p} className="font-body text-sm text-muted-foreground flex gap-2">
                    <span className="text-accent mt-0.5">✓</span> {p}
                  </li>
                ))}
              </ul>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-body text-xs text-muted-foreground">
                  All investment terms are negotiable. Early investors benefit from lower entry
                  valuation and highest equity upside. Contact us to discuss the structure that
                  works best for your portfolio.
                </p>
              </div>
              <a
                href="#contact"
                onClick={() => setOpenModel(null)}
                className="inline-block mt-4 bg-gradient-green text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Start a Conversation
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Competitive advantages */}
      <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
        Competitive Advantages
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {advantages.map((a) => (
          <div key={a.label} className="flex gap-4 items-start bg-card rounded-xl p-5 border border-border shadow-card">
            <div className="w-9 h-9 rounded-lg bg-gradient-green flex items-center justify-center text-primary-foreground flex-shrink-0">
              {a.icon}
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-foreground">{a.label}</p>
              <p className="font-body text-xs text-muted-foreground mt-1">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default InvestorSection;
