import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, DollarSign, BarChart3, PiggyBank } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import siteMap from "@/assets/site-map.png";

const revenueData = [
  { year: "Year 1", revenue: "$380K", growth: "—", bar: 17 },
  { year: "Year 2", revenue: "$800K", growth: "+110%", bar: 36 },
  { year: "Year 3", revenue: "$1.2M", growth: "+50%", bar: 55 },
  { year: "Year 4", revenue: "$1.7M", growth: "+42%", bar: 77 },
  { year: "Year 5", revenue: "$2.2M", growth: "+29%", bar: 100 },
];

const breakdown = [
  { label: "Glamping Domes", value: "$900K", pct: 39 },
  { label: "Farm Production", value: "$400K", pct: 18 },
  { label: "RV Park", value: "$320K", pct: 14 },
  { label: "Farm Market", value: "$300K", pct: 13 },
  { label: "Events & Retreats", value: "$250K", pct: 11 },
  { label: "Aquaculture", value: "$110K", pct: 5 },
];

const financialCards = [
  {
    icon: <TrendingUp size={20} />,
    title: "Revenue Growth",
    stat: "$2.2M+",
    desc: "Year 5 projected revenue with 30-40% net margins and strong year-over-year growth.",
  },
  {
    icon: <DollarSign size={20} />,
    title: "Net Operating Income",
    stat: "$880K",
    desc: "Year 5 NOI with 60% expense ratio demonstrating operational efficiency at scale.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "DSCR",
    stat: "9.07x",
    desc: "Year 5 debt service coverage ratio — far exceeding the 1.25x lender minimum requirement.",
  },
  {
    icon: <PiggyBank size={20} />,
    title: "ROI",
    stat: "30-35%",
    desc: "Annual return on investment at stabilization with conservative 5-6 year payback period.",
  },
];

const FinancialsSection = () => {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <SectionWrapper id="financials" className="bg-gradient-earth">
      <div className="text-center mb-14">
        <p className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-2">
          Financial Projections
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Built for Growth
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A phased $2.2M–$2.8M investment across five phases, achieving cash-flow positivity
          in Year 1 and institutional-grade returns by Year 5.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {financialCards.map((c) => (
          <div
            key={c.title}
            className="bg-background rounded-xl p-6 shadow-card border border-border text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-green flex items-center justify-center text-primary-foreground mx-auto mb-3">
              {c.icon}
            </div>
            <p className="font-display text-2xl font-bold text-foreground">{c.stat}</p>
            <p className="font-body text-xs font-semibold text-primary mt-1 mb-1">{c.title}</p>
            <p className="font-body text-xs text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Revenue chart */}
      <div className="grid lg:grid-cols-2 gap-8 mb-14">
        <div className="bg-background rounded-xl p-6 shadow-card border border-border">
          <h3 className="font-display text-lg font-bold text-foreground mb-6">5-Year Revenue Growth</h3>
          <div className="space-y-4">
            {revenueData.map((r) => (
              <div key={r.year} className="flex items-center gap-4">
                <span className="font-body text-xs font-medium text-muted-foreground w-14">{r.year}</span>
                <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${r.bar}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="h-full bg-gradient-green rounded-full"
                  />
                </div>
                <span className="font-body text-sm font-bold text-foreground w-16 text-right">{r.revenue}</span>
                <span className="font-body text-xs text-accent w-12 text-right font-semibold">{r.growth}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-background rounded-xl p-6 shadow-card border border-border">
          <h3 className="font-display text-lg font-bold text-foreground mb-6">Revenue Breakdown (Year 5)</h3>
          <div className="space-y-3">
            {breakdown.map((b) => (
              <div key={b.label} className="flex items-center justify-between">
                <span className="font-body text-sm text-foreground">{b.label}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="h-full bg-gradient-green rounded-full"
                    />
                  </div>
                  <span className="font-body text-sm font-bold text-foreground w-16 text-right">{b.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Site Map */}
      <div className="text-center">
        <h3 className="font-display text-xl font-bold text-foreground mb-4">Site Layout</h3>
        <p className="font-body text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
          Our 36-acre property is thoughtfully designed across five zones: Farm Market &amp; Entrance,
          RV Park &amp; Glamping, Farm Production, Recreation &amp; Events, and Future Expansion.
        </p>
        <motion.img
          src={siteMap}
          alt="Beryllium Greens 36-acre agritourism site layout near Prescott, AZ"
          className="rounded-xl shadow-elevated border border-border w-full max-w-4xl mx-auto cursor-pointer hover:scale-[1.01] transition-transform"
          loading="lazy"
          width={1600}
          height={900}
          onClick={() => setMapOpen(true)}
        />
      </div>

      {/* Map modal */}
      <AnimatePresence>
        {mapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setMapOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setMapOpen(false)}
                className="absolute -top-10 right-0 text-primary-foreground hover:text-primary-foreground/80"
                aria-label="Close"
              >
                <X size={28} />
              </button>
              <img
                src={siteMap}
                alt="Beryllium Greens site map — full view"
                className="w-full rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default FinancialsSection;
